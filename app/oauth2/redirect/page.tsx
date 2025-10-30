"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "sonner"

export default function OAuth2Redirect() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [statusState, setStatusState] = useState<"loading" | "success" | "error">("loading")
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        const handleOAuth2Redirect = async () => {
            // Get token and type from URL params
            const token = searchParams.get("token")
            const type = searchParams.get("type")

            if (!token || !type) {
                setStatusState("error")
                setErrorMessage("Missing authentication credentials")
                return
            }

            try {
                // Store the token in localStorage for the HTTP client to use
                localStorage.setItem('authToken', token)
                localStorage.setItem('tokenType', type)

                // Decode JWT to get user info (optional, for debugging)
                try {
                    const payload = JSON.parse(atob(token.split('.')[1]))
                    console.log('JWT Payload:', payload)

                    // Store user info in localStorage if needed
                    localStorage.setItem('userInfo', JSON.stringify({
                        id: payload.id,
                        username: payload.username,
                        role: payload.role || 'user'
                    }))
                } catch (decodeError) {
                    console.warn('Could not decode JWT:', decodeError)
                }

                setStatusState("success")

                // Wait a moment for storage to be set
                await new Promise(resolve => setTimeout(resolve, 200))

                toast.promise(
                    () =>
                        new Promise<{ name: string }>((resolve) =>
                            setTimeout(() => resolve({ name: "Authentication successful" }), 2000)
                        ),
                    {
                        loading: "Authenticating...",
                        success: (data: { name: string }) => `${data.name}`,
                        error: (error: { message: string }) => `${error.message} Authentication failed`,
                    }
                ).unwrap().then(() => {
                    router.push("/products")
                })
            } catch (error) {
                console.error("OAuth redirect error:", error)
                setStatusState("error")
                setErrorMessage("An unexpected error occurred")
                toast.error("Authentication failed", {
                    description: "An unexpected error occurred",
                })
            }
        }

        handleOAuth2Redirect()
    }, [searchParams, router])

    return (
        <div className="min-h-[60vh] flex items-center justify-center">
            {statusState === "loading" && (
                <div className="flex flex-col items-center justify-center gap-6 w-full h-full">
                    <div className="relative flex items-center justify-center w-full h-full">
                        {/* Outer ring */}
                        <div className="w-16 h-16 border-4 border-orange-200 rounded-full"></div>
                        {/* Spinning ring */}
                        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-orange-500 rounded-full animate-spin"></div>
                        {/* Inner pulsing dot */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                    </div>
                </div>
            )}
            {statusState === "error" && (
                <div className="text-center space-y-3 max-w-md px-4">
                    <div className="w-12 h-12 mx-auto bg-destructive/10 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-destructive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-destructive mb-1">Authentication Failed</h3>
                        <p className="text-sm text-muted-foreground">{errorMessage}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

OAuth2Redirect.getLayout = (page: React.ReactElement) => page;