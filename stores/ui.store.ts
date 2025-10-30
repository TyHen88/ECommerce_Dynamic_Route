import { create } from 'zustand'

interface UIState {
    // Modal states
    isLoginModalOpen: boolean
    isCartModalOpen: boolean
    isProductModalOpen: boolean

    // Theme state
    theme: 'light' | 'dark' | 'system'

    // Loading states
    isPageLoading: boolean

    // Mobile menu
    isMobileMenuOpen: boolean

    // Actions
    setLoginModalOpen: (open: boolean) => void
    setCartModalOpen: (open: boolean) => void
    setProductModalOpen: (open: boolean) => void
    setTheme: (theme: 'light' | 'dark' | 'system') => void
    setPageLoading: (loading: boolean) => void
    setMobileMenuOpen: (open: boolean) => void

    // Utility actions
    closeAllModals: () => void
    toggleMobileMenu: () => void
}

export const useUIStore = create<UIState>((set, get) => ({
    // Initial state
    isLoginModalOpen: false,
    isCartModalOpen: false,
    isProductModalOpen: false,
    theme: 'system',
    isPageLoading: false,
    isMobileMenuOpen: false,

    // Actions
    setLoginModalOpen: (open: boolean) => {
        set({ isLoginModalOpen: open })
    },

    setCartModalOpen: (open: boolean) => {
        set({ isCartModalOpen: open })
    },

    setProductModalOpen: (open: boolean) => {
        set({ isProductModalOpen: open })
    },

    setTheme: (theme: 'light' | 'dark' | 'system') => {
        set({ theme })
        // Apply theme to document
        if (typeof window !== 'undefined') {
            const root = window.document.documentElement
            root.classList.remove('light', 'dark')

            if (theme === 'system') {
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
                root.classList.add(systemTheme)
            } else {
                root.classList.add(theme)
            }
        }
    },

    setPageLoading: (loading: boolean) => {
        set({ isPageLoading: loading })
    },

    setMobileMenuOpen: (open: boolean) => {
        set({ isMobileMenuOpen: open })
    },

    // Utility actions
    closeAllModals: () => {
        set({
            isLoginModalOpen: false,
            isCartModalOpen: false,
            isProductModalOpen: false,
        })
    },

    toggleMobileMenu: () => {
        set({ isMobileMenuOpen: !get().isMobileMenuOpen })
    },
}))
