import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { AdminProductList } from "@/components/admin-product-list"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"

export default async function AdminPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const { data: userData } = await supabase.from("users").select("role").eq("id", user.id).single()

  if (userData?.role !== "admin") {
    redirect("/products")
  }

  const { data: products } = await supabase.from("products").select("*").order("created_at", { ascending: false })

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <Link href="/products">
              <Button variant="outline">View Store</Button>
            </Link>
            <Link href="/admin/products/new">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Product
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container py-8 px-4 md:px-6">
        <div className="mb-6">
          <h2 className="text-3xl font-bold tracking-tight">Product Management</h2>
          <p className="text-muted-foreground">Manage your product catalog</p>
        </div>

        <AdminProductList products={products || []} />
      </main>
    </div>
  )
}
