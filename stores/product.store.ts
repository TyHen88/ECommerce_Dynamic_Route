import { create } from 'zustand'

export interface Product {
    id: string
    name: string
    price: number
    image_url: string
    category: string
    description?: string
    inStock?: boolean
}

interface ProductState {
    // Product data
    products: Product[]
    selectedProduct: Product | null

    // Filters and search
    searchQuery: string
    selectedCategory: string
    sortBy: 'name' | 'price' | 'category'
    sortOrder: 'asc' | 'desc'

    // Pagination
    currentPage: number
    itemsPerPage: number

    // Loading states
    isLoading: boolean
    isSearching: boolean

    // Actions
    setProducts: (products: Product[]) => void
    setSelectedProduct: (product: Product | null) => void
    setSearchQuery: (query: string) => void
    setSelectedCategory: (category: string) => void
    setSortBy: (sortBy: 'name' | 'price' | 'category') => void
    setSortOrder: (order: 'asc' | 'desc') => void
    setCurrentPage: (page: number) => void
    setItemsPerPage: (items: number) => void
    setLoading: (loading: boolean) => void
    setSearching: (searching: boolean) => void

    // Computed values
    getFilteredProducts: () => Product[]
    getPaginatedProducts: () => Product[]

    // Utility actions
    clearFilters: () => void
    resetPagination: () => void
}

export const useProductStore = create<ProductState>((set, get) => ({
    // Initial state
    products: [],
    selectedProduct: null,
    searchQuery: '',
    selectedCategory: '',
    sortBy: 'name',
    sortOrder: 'asc',
    currentPage: 1,
    itemsPerPage: 12,
    isLoading: false,
    isSearching: false,

    // Actions
    setProducts: (products: Product[]) => {
        set({ products })
    },

    setSelectedProduct: (product: Product | null) => {
        set({ selectedProduct: product })
    },

    setSearchQuery: (query: string) => {
        set({ searchQuery: query })
    },

    setSelectedCategory: (category: string) => {
        set({ selectedCategory: category })
    },

    setSortBy: (sortBy: 'name' | 'price' | 'category') => {
        set({ sortBy })
    },

    setSortOrder: (order: 'asc' | 'desc') => {
        set({ sortOrder: order })
    },

    setCurrentPage: (page: number) => {
        set({ currentPage: page })
    },

    setItemsPerPage: (items: number) => {
        set({ itemsPerPage: items })
    },

    setLoading: (loading: boolean) => {
        set({ isLoading: loading })
    },

    setSearching: (searching: boolean) => {
        set({ isSearching: searching })
    },

    // Computed values
    getFilteredProducts: () => {
        const { products, searchQuery, selectedCategory, sortBy, sortOrder } = get()

        let filtered = products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.description?.toLowerCase().includes(searchQuery.toLowerCase())
            const matchesCategory = !selectedCategory || product.category === selectedCategory
            return matchesSearch && matchesCategory
        })

        // Sort products
        filtered.sort((a, b) => {
            let aValue: string | number
            let bValue: string | number

            switch (sortBy) {
                case 'name':
                    aValue = a.name.toLowerCase()
                    bValue = b.name.toLowerCase()
                    break
                case 'price':
                    aValue = a.price
                    bValue = b.price
                    break
                case 'category':
                    aValue = a.category.toLowerCase()
                    bValue = b.category.toLowerCase()
                    break
                default:
                    aValue = a.name.toLowerCase()
                    bValue = b.name.toLowerCase()
            }

            if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1
            if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1
            return 0
        })

        return filtered
    },

    getPaginatedProducts: () => {
        const filtered = get().getFilteredProducts()
        const { currentPage, itemsPerPage } = get()

        const startIndex = (currentPage - 1) * itemsPerPage
        const endIndex = startIndex + itemsPerPage

        return filtered.slice(startIndex, endIndex)
    },

    // Utility actions
    clearFilters: () => {
        set({
            searchQuery: '',
            selectedCategory: '',
            sortBy: 'name',
            sortOrder: 'asc',
        })
    },

    resetPagination: () => {
        set({ currentPage: 1 })
    },
}))
