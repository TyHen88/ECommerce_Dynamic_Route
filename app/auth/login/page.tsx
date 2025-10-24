"use client"

import type React from "react"

import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [showResendButton, setShowResendButton] = useState(false)
  const router = useRouter()

  const handleResendConfirmation = async () => {
    const supabase = createClient()
    setIsLoading(true)
    setError(null)
    setSuccess(null)
    
    try {
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: email,
      })
      
      if (error) throw error
      
      setSuccess("Confirmation email sent! Please check your inbox and spam folder.")
      setShowResendButton(false)
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "Failed to resend confirmation email")
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const supabase = createClient()
    setIsLoading(true)
    setError(null)
    setSuccess(null)
    setShowResendButton(false)

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      
      if (error) {
        // Handle specific error cases
        if (error.message.includes("Email not confirmed") || 
            error.message.includes("email_not_confirmed")) {
          setShowResendButton(true)
          throw new Error(
            "Please confirm your email address before logging in. Check your inbox (and spam folder) for the confirmation link."
          )
        }
        
        if (error.message.includes("Invalid login credentials")) {
          throw new Error("Invalid email or password. Please try again.")
        }
        
        throw error
      }

      // Successful login
      if (data.user) {
        router.push("/products")
        router.refresh()
      }
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred during login")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>Enter your email below to login to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
                
                {error && (
                  <div className="space-y-2">
                    <p className="text-sm text-destructive">{error}</p>
                    {showResendButton && (
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full"
                        onClick={handleResendConfirmation}
                        disabled={isLoading}
                      >
                        {isLoading ? "Sending..." : "Resend Confirmation Email"}
                      </Button>
                    )}
                  </div>
                )}
                
                {success && (
                  <p className="text-sm text-green-600 dark:text-green-400">{success}</p>
                )}
                
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Logging in..." : "Login"}
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href="/auth/sign-up" className="underline underline-offset-4">
                  Sign up
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}