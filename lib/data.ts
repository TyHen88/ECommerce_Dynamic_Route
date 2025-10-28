// Static data to replace Supabase database
export interface Product {
    id: string
    name: string
    description: string
    price: number
    image_url: string
    stock: number
    category: string
    created_at: string
}

export interface User {
    id: string
    email: string
    role: 'admin' | 'user'
    created_at: string
}

// Static products data
export const products: Product[] = [
    {
        id: '1',
        name: 'Wireless Headphones',
        description: 'Premium noise-cancelling wireless headphones with 30-hour battery life',
        price: 299.99,
        image_url: '/placeholder.svg?height=400&width=400',
        stock: 50,
        category: 'Electronics',
        created_at: '2024-01-01T00:00:00Z'
    },
    {
        id: '2',
        name: 'Smart Watch',
        description: 'Fitness tracking smartwatch with heart rate monitor and GPS',
        price: 399.99,
        image_url: '/placeholder.svg?height=400&width=400',
        stock: 30,
        category: 'Electronics',
        created_at: '2024-01-02T00:00:00Z'
    },
    {
        id: '3',
        name: 'Laptop Backpack',
        description: 'Durable water-resistant backpack with padded laptop compartment',
        price: 79.99,
        image_url: '/placeholder.svg?height=400&width=400',
        stock: 100,
        category: 'Accessories',
        created_at: '2024-01-03T00:00:00Z'
    },
    {
        id: '4',
        name: 'Mechanical Keyboard',
        description: 'RGB mechanical gaming keyboard with customizable keys',
        price: 149.99,
        image_url: '/placeholder.svg?height=400&width=400',
        stock: 45,
        category: 'Electronics',
        created_at: '2024-01-04T00:00:00Z'
    },
    {
        id: '5',
        name: 'Portable Charger',
        description: '20000mAh fast-charging portable power bank',
        price: 49.99,
        image_url: '/placeholder.svg?height=400&width=400',
        stock: 200,
        category: 'Accessories',
        created_at: '2024-01-05T00:00:00Z'
    },
    {
        id: '6',
        name: 'Wireless Mouse',
        description: 'Ergonomic wireless mouse with precision tracking',
        price: 59.99,
        image_url: '/placeholder.svg?height=400&width=400',
        stock: 75,
        category: 'Electronics',
        created_at: '2024-01-06T00:00:00Z'
    },
    {
        id: '7',
        name: 'USB-C Hub',
        description: '7-in-1 USB-C hub with HDMI, USB 3.0, and SD card reader',
        price: 89.99,
        image_url: '/placeholder.svg?height=400&width=400',
        stock: 60,
        category: 'Accessories',
        created_at: '2024-01-07T00:00:00Z'
    },
    {
        id: '8',
        name: 'Desk Lamp',
        description: 'LED desk lamp with adjustable brightness and color temperature',
        price: 69.99,
        image_url: '/placeholder.svg?height=400&width=400',
        stock: 40,
        category: 'Home',
        created_at: '2024-01-08T00:00:00Z'
    },
    {
        id: '9',
        name: 'Phone Stand',
        description: 'Adjustable aluminum phone and tablet stand',
        price: 29.99,
        image_url: '/placeholder.svg?height=400&width=400',
        stock: 150,
        category: 'Accessories',
        created_at: '2024-01-09T00:00:00Z'
    },
    {
        id: '10',
        name: 'Cable Organizer',
        description: 'Silicone cable management clips set of 10',
        price: 14.99,
        image_url: '/placeholder.svg?height=400&width=400',
        stock: 300,
        category: 'Accessories',
        created_at: '2024-01-10T00:00:00Z'
    }
]

// Static users data
export const users: User[] = [
    {
        id: 'admin-1',
        email: 'admin@example.com',
        role: 'admin',
        created_at: '2024-01-01T00:00:00Z'
    },
    {
        id: 'user-1',
        email: 'user@example.com',
        role: 'user',
        created_at: '2024-01-01T00:00:00Z'
    }
]

// Helper functions to simulate database operations
export function getProducts(filters?: {
    category?: string
    search?: string
    inStock?: boolean
}): Product[] {
    let filteredProducts = [...products]

    if (filters?.inStock) {
        filteredProducts = filteredProducts.filter(p => p.stock > 0)
    }

    if (filters?.category) {
        filteredProducts = filteredProducts.filter(p => p.category === filters.category)
    }

    if (filters?.search) {
        const searchLower = filters.search.toLowerCase()
        filteredProducts = filteredProducts.filter(p =>
            p.name.toLowerCase().includes(searchLower) ||
            p.description.toLowerCase().includes(searchLower)
        )
    }

    return filteredProducts.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
}

export function getProductById(id: string): Product | null {
    return products.find(p => p.id === id) || null
}

export function getCategories(): string[] {
    return [...new Set(products.map(p => p.category).filter(Boolean))]
}

export function getUserById(id: string): User | null {
    return users.find(u => u.id === id) || null
}

export function getUserByEmail(email: string): User | null {
    return users.find(u => u.email === email) || null
}
