// Export all stores from a single entry point
export { useAuthStore } from './auth.store'
export { useCartStore } from './cart.store'
export { useUIStore } from './ui.store'
export { useProductStore } from './product.store'

// Export types
export type { CartItem } from './cart.store'
export type { Product } from './product.store'
