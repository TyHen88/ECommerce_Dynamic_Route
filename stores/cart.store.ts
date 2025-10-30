import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface CartItem {
    id: string
    name: string
    price: number
    image_url: string
    quantity: number
    category: string
}

interface CartState {
    items: CartItem[]
    totalItems: number
    totalPrice: number
    addItem: (item: Omit<CartItem, 'quantity'>) => void
    removeItem: (id: string) => void
    updateQuantity: (id: string, quantity: number) => void
    clearCart: () => void
    getItemQuantity: (id: string) => number
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],
            totalItems: 0,
            totalPrice: 0,

            addItem: (item: Omit<CartItem, 'quantity'>) => {
                const items = get().items
                const existingItem = items.find(i => i.id === item.id)

                if (existingItem) {
                    set({
                        items: items.map(i =>
                            i.id === item.id
                                ? { ...i, quantity: i.quantity + 1 }
                                : i
                        )
                    })
                } else {
                    set({
                        items: [...items, { ...item, quantity: 1 }]
                    })
                }

                // Update totals
                const newItems = get().items
                set({
                    totalItems: newItems.reduce((sum, item) => sum + item.quantity, 0),
                    totalPrice: newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0),
                })
            },

            removeItem: (id: string) => {
                const items = get().items.filter(item => item.id !== id)
                set({
                    items,
                    totalItems: items.reduce((sum, item) => sum + item.quantity, 0),
                    totalPrice: items.reduce((sum, item) => sum + (item.price * item.quantity), 0),
                })
            },

            updateQuantity: (id: string, quantity: number) => {
                if (quantity <= 0) {
                    get().removeItem(id)
                    return
                }

                const items = get().items.map(item =>
                    item.id === id ? { ...item, quantity } : item
                )

                set({
                    items,
                    totalItems: items.reduce((sum, item) => sum + item.quantity, 0),
                    totalPrice: items.reduce((sum, item) => sum + (item.price * item.quantity), 0),
                })
            },

            clearCart: () => {
                set({
                    items: [],
                    totalItems: 0,
                    totalPrice: 0,
                })
            },

            getItemQuantity: (id: string) => {
                const item = get().items.find(item => item.id === id)
                return item ? item.quantity : 0
            },
        }),
        {
            name: 'cart-storage',
        }
    )
)
