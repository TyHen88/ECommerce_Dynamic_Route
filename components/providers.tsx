"use client"

import { useEffect } from "react"
import { SessionProvider } from "next-auth/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster, toast } from "sonner"

// Create a client instance
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 1000, // 1 minute
            retry: 1,
        },
    },
})

interface ProvidersProps {
    children: React.ReactNode
    session?: any
}

export function Providers({ children, session }: ProvidersProps) {
    return (
        <SessionProvider session={session}>
            <QueryClientProvider client={queryClient}>
                {children}
                <Toaster
                    position="top-right"
                    toastOptions={{
                        style: {
                            pointerEvents: 'auto'
                        },
                        duration: 4000,
                    }}
                />
            </QueryClientProvider>
        </SessionProvider>
    )
}
