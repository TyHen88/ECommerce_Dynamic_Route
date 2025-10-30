"use client"

import { SettingsDialog } from "@/components/profile/SettingDialog"
import { Button } from "@/components/ui/button"
import useFetchProfile from "@/hooks/useFetchProfile"
import { UserInfo } from "@/lib/types"
import { Label } from "@radix-ui/react-label"
import { LayoutDashboard, Settings, ShoppingBag, User } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import Image from "next/image"

export function Header() {
  const [user, setUser] = useState<UserInfo | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isOpenProfileMenu, setIsOpenProfileMenu] = useState(false)
  const [isOpenSettings, setIsOpenSettings] = useState(false)
  const { data: userInfoData, isError, error, refetch, isFetching } = useFetchProfile()

  useEffect(() => {
    // Check for authentication token and user info from localStorage
    const token = typeof window !== "undefined" ? localStorage.getItem('authToken') : null
    const userInfoStr = typeof window !== "undefined" ? localStorage.getItem('userInfo') : null

    if (token && userInfoStr) {
      try {
        const userInfo = JSON.parse(userInfoStr)
        setUser(userInfo)
      } catch (error) {
        console.error('Error parsing user info:', error)
      }
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    // Only fetch profile if we have a token and no user, and only fetch once
    const token = typeof window !== "undefined" ? localStorage.getItem('authToken') : null
    if (token && !user) {
      refetch()
    }
  }, [refetch])

  useEffect(() => {
    // When data is fetched from fetchProfile, sync it to state and localStorage
    if (userInfoData && !user) {
      setUser(userInfoData as UserInfo)
      if (typeof window !== "undefined") {
        localStorage.setItem('userInfo', JSON.stringify(userInfoData))
      }
    }
  }, [userInfoData, user])

  const handleLogout = () => {
    // Clear authentication data
    if (typeof window !== "undefined") {
      localStorage.removeItem('authToken')
      localStorage.removeItem('tokenType')
      localStorage.removeItem('userInfo')
    }
    setUser(null)
    // Redirect to home page
    window.location.href = '/'
  }

  const isAdmin = userInfoData?.data?.role === "admin"

  return (
    <header className="sticky top-0 flex justify-center z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container  w-full flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <ShoppingBag className="h-6 w-6" />
          <span className="font-bold text-xl">Easy-Cart</span>
        </Link>

        <nav className="flex items-center gap-4">
          <Link href="/products">
            <Button variant="ghost">Products</Button>
          </Link>

          {user ? (
            <>
              <span className="text-sm text-muted-foreground flex items-center gap-2">
                Welcome, {userInfoData?.data?.username}

                <Popover open={isOpenProfileMenu} onOpenChange={setIsOpenProfileMenu}>
                  <PopoverTrigger asChild>
                    <div className="relative">
                      <Button variant="ghost" className="p-0 cursor-pointer">
                        <Image
                          src={userInfoData?.data?.profileImageUrl as string || "/profile.jpg"}
                          alt="Profile"
                          width={20}
                          height={20}
                          className="rounded-full object-cover w-10 h-10"
                        />
                      </Button>
                      {userInfoData?.data?.active && (
                        <span
                          className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white bg-blue-500"
                          title="Active"
                        />
                      )}
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <h4 className="leading-none font-medium">Profile</h4>
                        <p className="text-muted-foreground text-sm">
                          Manage your profile information.
                        </p>
                      </div>
                      <div className="grid gap-2">
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="width">Name</Label>
                          <span> {userInfoData?.data?.username} </span>
                        </div>
                        {/* <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="username">Username</Label>
                            <span> {user?.username} </span>
                          </div> */}
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="email">Email</Label>
                          <span> {userInfoData?.data?.email as string || "N/A"} </span>
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                          <button
                            type="button"
                            className="flex items-center gap-2"
                            onClick={() => setIsOpenSettings(true)}
                          >
                            <Settings className="h-4 w-4" />
                            Settings
                          </button>
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </span>
              {isAdmin && (
                <Link href="/admin">
                  <Button variant="ghost">
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    Admin
                  </Button>
                </Link>
              )}
              <Button variant="outline" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/auth/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link href="/auth/sign-up">
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
        </nav>
      </div>
      <SettingsDialog isOpen={isOpenSettings} setIsOpen={setIsOpenSettings} userInfo={userInfoData} />
    </header>
  )
}
