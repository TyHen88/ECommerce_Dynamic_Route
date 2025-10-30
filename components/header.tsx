"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag, LayoutDashboard, User, Edit, Settings, LogOut } from "lucide-react"
import { useEffect, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SettingsDialog } from "@/components/profile/SettingDialog"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Label } from "@radix-ui/react-label"
import { Input } from "./ui/input"

interface UserInfo {
  id: number
  name: string
  username: string
  email: string
  role?: string
}

export function Header() {
  const [user, setUser] = useState<UserInfo | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isOpenProfileMenu, setIsOpenProfileMenu] = useState(false)
  const [isOpenSettings, setIsOpenSettings] = useState(false)
  useEffect(() => {
    // Check for authentication token and user info
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

  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem('authToken')
    localStorage.removeItem('tokenType')
    localStorage.removeItem('userInfo')
    setUser(null)

    // Redirect to home page
    window.location.href = '/'
  }

  const isAdmin = user?.role === "admin"

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
                Welcome, {user.username}

                <Popover open={isOpenProfileMenu} onOpenChange={setIsOpenProfileMenu}>
                  <PopoverTrigger asChild>
                    <Button variant="ghost">
                      <User className="h-4 w-4" />
                    </Button>
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
                          <span> {user?.username} </span>
                        </div>
                        {/* <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="username">Username</Label>
                          <span> {user?.username} </span>
                        </div> */}
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="email">Email</Label>
                          <span> {user?.email || "N/A"} </span>
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                          <button className="flex items-center gap-2" onClick={() => setIsOpenSettings(true)}>
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
      <SettingsDialog isOpen={isOpenSettings} setIsOpen={setIsOpenSettings} />
    </header>
  )
}
