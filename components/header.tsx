import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag, LayoutDashboard } from "lucide-react"
import { createClient } from "@/lib/supabase/server"

export async function Header() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  let isAdmin = false
  if (user) {
    const { data: userData } = await supabase.from("users").select("role").eq("id", user.id).single()
    isAdmin = userData?.role === "admin"
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <ShoppingBag className="h-6 w-6" />
          <span className="font-bold text-xl">E-Shop</span>
        </Link>

        <nav className="flex items-center gap-4">
          <Link href="/products">
            <Button variant="ghost">Products</Button>
          </Link>

          {user ? (
            <>
              {isAdmin && (
                <Link href="/admin">
                  <Button variant="ghost">
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    Admin
                  </Button>
                </Link>
              )}
              <form action="/auth/logout" method="post">
                <Button variant="outline" type="submit">
                  Logout
                </Button>
              </form>
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
