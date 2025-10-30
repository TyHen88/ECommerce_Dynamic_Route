"use client"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { CartItem, useCartStore } from "@/stores/cart.store"
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react"

const demoCart = [
    {
        id: 1,
        name: "Coffee Beans",
        price: 14.5,
        quantity: 2,
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=facearea&w=128&q=80"
    },
    {
        id: 2,
        name: "Reusable Cup",
        price: 8.0,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=128&q=80"
    }
]

export function OrderDraftSheet() {
    const { items, updateQuantity, removeItem } = useCartStore()
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0)

    // Only increase quantity, don't add item again
    const handleAddItem = (item: CartItem) => {
        updateQuantity(item.id, item.quantity + 1)
    }

    // Decrease quantity or remove if zero/one
    const handleRemoveItem = (item: CartItem) => {
        updateQuantity(item.id, item.quantity - 1)
        //console.log(cartItems)
    }

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                    <ShoppingCart className="h-6 w-6" />
                    <span className="absolute -top-1 -right-1 bg-primary text-xs text-white rounded-full px-1">
                        {items.length}
                    </span>
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Your Order Draft</SheetTitle>
                    <SheetDescription>
                        Review your selected items and quantities before checkout.
                    </SheetDescription>
                </SheetHeader>
                <div className="flex flex-1 flex-col gap-6 px-2 pt-3 pb-1 overflow-auto">
                    {items.length === 0 ? (
                        <div className="text-center text-muted-foreground py-8">
                            Your order draft is empty.
                        </div>
                    ) : (
                        <ul className="flex flex-col gap-4">
                            {items.map(item => (
                                <li key={item.id} className="flex items-center justify-between bg-muted rounded-lg p-3">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-14 h-14 rounded object-cover border"
                                        />
                                        <div>
                                            <span className="block font-medium">{item.name}</span>
                                            <span className="text-muted-foreground text-sm">
                                                ${item.price.toFixed(2)} x {item.quantity}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="text-primary"
                                            title="Remove one"
                                            onClick={() => handleRemoveItem(item)}
                                            disabled={item.quantity <= 1}
                                        >
                                            <Minus className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="text-primary"
                                            title="Add one"
                                            onClick={() => handleAddItem(item)}
                                        >
                                            <Plus className="h-4 w-4" />
                                        </Button>
                                        {/* Remove all units of this item */}
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="text-destructive"
                                            title="Remove"
                                            onClick={() => removeItem(item.id)}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="flex justify-between items-center px-4 py-2 border-t mt-2">
                    <span className="font-semibold text-lg">Total</span>
                    <span className="font-bold text-lg">${total.toFixed(2)}</span>
                </div>
                <SheetFooter>
                    <Button className="w-full" disabled={items.length === 0}>
                        Proceed to Checkout
                    </Button>
                    <SheetClose asChild>
                        <Button variant="outline" className="w-full">Close</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
