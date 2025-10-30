import { Header } from "@/components/header"
import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"
import { getProducts, getCategories } from "@/lib/data"
import { BookmarkIcon, ShoppingBag, ShoppingBasket, ShoppingCart } from "lucide-react"
import { OrderDraftSheet } from "@/components/products/OrderDraftSheet"
import { Toggle } from "@/components/ui/toggle"

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; search?: string }>
}) {
  const params = await searchParams

  const products = getProducts({
    category: params.category,
    search: params.search,
    inStock: true
  })

  const categories = getCategories()

  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <main className="min-h-screen bg-background w-full flex justify-center">
        <div className="container py-8 px-4 md:px-6 w-full">
          <div className="flex items-center mb-6">
            <div className="flex-1">
              <h1 className="text-4xl font-bold tracking-tight mb-2">Our Products</h1>
              <p className="text-muted-foreground text-lg">Discover our amazing collection</p>
            </div>
            <div className="flex-shrink-0 ml-4">

              <OrderDraftSheet />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-64 flex-shrink-0">
              <ProductFilters categories={categories} currentCategory={params.category} currentSearch={params.search} />
            </aside>

            <div className="flex-1 overflow-auto" style={{ maxHeight: "calc(100vh - 180px)" }}>
              {products.length > 0 ? (
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
    </div>
  )
}
