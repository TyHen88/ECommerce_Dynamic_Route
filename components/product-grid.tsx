"use client"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Toggle } from "@/components/ui/toggle"
import { BookmarkIcon, ShoppingCartIcon } from "lucide-react"
import * as React from "react"
import { toast } from "sonner"
import { useCartStore } from "@/stores/cart.store"

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
  const { addItem, removeItem, items } = useCartStore()
  const handleToggleCart = (product: Product, checked: boolean) => {
    if (checked) {
      // Add to cart
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image_url || "",
        category: product.category || ""
      })
      toast.success(`${product.name} has been added to your cart`)
    } else {
      // Remove from cart
      removeItem(product.id)
      toast.success(`${product.name} has been removed from your cart`)
    }
  }

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
          <CardFooter className="p-6 pt-0 gap-2">
            <Link href={`/products/${product.id}`} className="w-full">
              <Button className="w-full cursor-pointer">View Details</Button>
            </Link>
            <Toggle
              aria-label="Add to cart"
              size="default"
              variant="outline" onClick={() => handleToggleCart(product, !items.some(p => p.id === product.id))}
              className="h-10 cursor-pointer data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500 w-full"
            >
              <ShoppingCartIcon />
              {items.some(p => p.id === product.id) ? "In Cart" : "Add to Cart"}
            </Toggle>

          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
