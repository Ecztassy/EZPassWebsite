// components/scroll-button.tsx
"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { ReactNode } from "react"

interface ScrollButtonProps {
  scrollToId: string
  children: ReactNode
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
}

export function ScrollButton({ 
  scrollToId, 
  children, 
  size = "lg", 
  className = "bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white border-none shadow-[0_0_10px_rgba(168,85,247,0.5)]"
}: ScrollButtonProps) {
  const handleScroll = () => {
    const element = document.getElementById(scrollToId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Button
      size={size}
      className={className}
      onClick={handleScroll}
    >
      {children}
    </Button>
  )
}