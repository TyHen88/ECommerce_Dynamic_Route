"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

// Force dynamic rendering
export const dynamic = 'force-dynamic'

export default function LogoutPage() {
  const router = useRouter()

  useEffect(() => {
    // Simulate logout - in a real app, you'd clear session/cookies
    setTimeout(() => {
      router.push("/")
    }, 1000)
  }, [router])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Signing out...</h1>
        <p className="text-gray-600">Please wait while we sign you out.</p>
      </div>
    </div>
  )
}
