import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Shield, Zap } from "lucide-react"
import { Header } from "@/components/header"
import { InstallPrompt } from "@/app/install-prompt"

export default function HomePage() {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <main className="flex-1 w-full h-full">
        <section className="w-full h-full flex justify-center items-center py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-balance">
                  Welcome to Easy-Cart
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl text-pretty">
                  Discover amazing products at great prices. Shop with confidence and enjoy fast delivery.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/products">
                  <Button size="lg">Browse Products</Button>
                </Link>
                <Link href="/auth/sign-up">
                  <Button size="lg" variant="outline">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <ShoppingBag className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Wide Selection</h3>
                <p className="text-sm text-muted-foreground">
                  Browse through thousands of products across multiple categories
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Secure Shopping</h3>
                <p className="text-sm text-muted-foreground">Shop with confidence using our secure payment system</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Fast Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  Get your orders delivered quickly with our express shipping
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t py-6">
        <div className="container flex flex-col gap-2 sm:flex-row items-center justify-between px-4 md:px-6">
          <p className="text-xs text-muted-foreground">© 2025 Easy-Cart. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>

      <InstallPrompt />
    </div>
  )
}
