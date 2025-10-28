"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag, LayoutDashboard } from "lucide-react"
import { useEffect, useState } from "react"

interface UserInfo {
  id: number
  username: string
  role?: string
}

export function Header() {
  const [user, setUser] = useState<UserInfo | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for authentication token and user info
    const token = localStorage.getItem('authToken')
    const userInfoStr = localStorage.getItem('userInfo')

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

  const isAdmin = user?.role === "admin" || true // Keep admin access for demo

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
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
              <span className="text-sm text-muted-foreground">
                Welcome, {user.username}
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
    </header>
  )
}
