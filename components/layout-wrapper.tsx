"use client"

import { ReactNode } from "react"

interface LayoutWrapperProps {
    children: ReactNode
    layout?: "default" | "auth" | "admin"
}

export function LayoutWrapper({ children, layout = "default" }: LayoutWrapperProps) {
    // You can add different layout logic here based on the layout prop
    // For now, we'll just return the children with a wrapper

    return (
        <div className={`min-h-screen ${layout === "auth" ? "bg-gray-50" : "bg-background"}`}>
            {children}
        </div>
    )
}

// Layout configuration for different page types
export const layoutConfig = {
    auth: {
        className: "min-h-screen bg-gray-50 flex items-center justify-center",
    },
    admin: {
        className: "min-h-screen bg-background",
    },
    default: {
        className: "min-h-screen bg-background",
    },
}
