"use client"

import type React from "react"

import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, X } from "lucide-react"
import { useState } from "react"

export function ProductFilters({
  categories,
  currentCategory,
  currentSearch,
}: {
  categories: string[]
  currentCategory?: string
  currentSearch?: string
}) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchValue, setSearchValue] = useState(currentSearch || "")

  const handleCategoryChange = (category: string | null) => {
    const params = new URLSearchParams(searchParams.toString())
    if (category) {
      params.set("category", category)
    } else {
      params.delete("category")
    }
    router.push(`/products?${params.toString()}`)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams.toString())
    if (searchValue) {
      params.set("search", searchValue)
    } else {
      params.delete("search")
    }
    router.push(`/products?${params.toString()}`)
  }

  const clearFilters = () => {
    setSearchValue("")
    router.push("/products")
  }

  const hasFilters = currentCategory || currentSearch

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Search</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch} className="space-y-2">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="pr-10"
              />
              <Button type="submit" size="sm" className="absolute right-1 top-1 h-7 w-7" variant="ghost">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button
            variant={!currentCategory ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => handleCategoryChange(null)}
          >
            All Products
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={currentCategory === category ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </Button>
          ))}
        </CardContent>
      </Card>

      {hasFilters && (
        <Button variant="outline" className="w-full bg-transparent" onClick={clearFilters}>
          <X className="mr-2 h-4 w-4" />
          Clear Filters
        </Button>
      )}
    </div>
  )
}
