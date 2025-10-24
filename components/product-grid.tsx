import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type Product = {
  id: string
  name: string
  description: string | null
  price: number
  image_url: string | null
  stock: number
  category: string | null
}

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <Card key={product.id} className="flex flex-col">
          <CardHeader className="p-0">
            <div className="aspect-square relative overflow-hidden rounded-t-lg bg-muted">
              <img
                src={product.image_url || "/placeholder.svg?height=400&width=400"}
                alt={product.name}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
          </CardHeader>
          <CardContent className="flex-1 p-6">
            <div className="mb-2">
              {product.category && (
                <Badge variant="secondary" className="mb-2">
                  {product.category}
                </Badge>
              )}
            </div>
            <CardTitle className="text-xl mb-2 text-balance">{product.name}</CardTitle>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{product.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
              <Badge variant={product.stock > 10 ? "default" : "secondary"}>
                {product.stock > 10 ? "In Stock" : `Only ${product.stock} left`}
              </Badge>
            </div>
          </CardContent>
          <CardFooter className="p-6 pt-0">
            <Link href={`/products/${product.id}`} className="w-full">
              <Button className="w-full">View Details</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
