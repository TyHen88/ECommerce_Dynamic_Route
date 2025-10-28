import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Package, Tag } from "lucide-react"
import Link from "next/link"
import { getProductById } from "@/lib/data"

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container py-8 px-4 md:px-6">
          <Link href="/products">
            <Button variant="ghost" size="sm" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Button>
          </Link>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="aspect-square relative overflow-hidden rounded-lg bg-muted">
              <img
                src={product.image_url || "/placeholder.svg?height=600&width=600"}
                alt={product.name}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex flex-col">
              <div className="mb-4">
                {product.category && (
                  <Badge variant="secondary" className="mb-2">
                    <Tag className="mr-1 h-3 w-3" />
                    {product.category}
                  </Badge>
                )}
                <h1 className="text-4xl font-bold tracking-tight mb-2 text-balance">{product.name}</h1>
                <p className="text-3xl font-bold text-primary">${product.price.toFixed(2)}</p>
              </div>

              <Card className="mb-6">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Package className="h-5 w-5 text-muted-foreground" />
                    <span className="font-semibold">Availability:</span>
                  </div>
                  {product.stock > 0 ? (
                    <Badge variant={product.stock > 10 ? "default" : "secondary"} className="text-sm">
                      {product.stock > 10 ? "In Stock" : `Only ${product.stock} left in stock`}
                    </Badge>
                  ) : (
                    <Badge variant="destructive" className="text-sm">
                      Out of Stock
                    </Badge>
                  )}
                </CardContent>
              </Card>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description || "No description available for this product."}
                </p>
              </div>

              <div className="mt-auto">
                <Button size="lg" className="w-full" disabled={product.stock === 0}>
                  {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-2">Free shipping on orders over $50</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
