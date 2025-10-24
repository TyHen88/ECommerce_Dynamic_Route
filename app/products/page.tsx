import { createClient } from "@/lib/supabase/server"
import { Header } from "@/components/header"
import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; search?: string }>
}) {
  const params = await searchParams
  const supabase = await createClient()

  let query = supabase.from("products").select("*").gt("stock", 0).order("created_at", { ascending: false })

  if (params.category) {
    query = query.eq("category", params.category)
  }

  if (params.search) {
    query = query.ilike("name", `%${params.search}%`)
  }

  const { data: products } = await query

  // Get unique categories
  const { data: allProducts } = await supabase.from("products").select("category")
  const categories = [...new Set(allProducts?.map((p) => p.category).filter(Boolean))] as string[]

  console.log("allProducts", allProducts);
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container py-8 px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight mb-2">Our Products</h1>
            <p className="text-muted-foreground text-lg">Discover our amazing collection</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-64 flex-shrink-0">
              <ProductFilters categories={categories} currentCategory={params.category} currentSearch={params.search} />
            </aside>

            <div className="flex-1">
              {products && products.length > 0 ? (
                <ProductGrid products={products} />
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">No products found</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
