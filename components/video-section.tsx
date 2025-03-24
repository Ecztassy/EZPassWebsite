"use client"

import { useRef, useEffect } from "react"

export function VideoSection() {
  const borderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!borderRef.current) return

    let hue = 0
    let direction = 1

    const animateBorder = () => {
      if (!borderRef.current) return

      hue += 0.5 * direction

      if (hue >= 360) {
        direction = -1
      } else if (hue <= 0) {
        direction = 1
      }

      borderRef.current.style.background = `
        linear-gradient(
          45deg,
          hsl(${hue}, 100%, 60%),
          hsl(${(hue + 60) % 360}, 100%, 60%),
          hsl(${(hue + 120) % 360}, 100%, 60%),
          hsl(${(hue + 180) % 360}, 100%, 60%),
          hsl(${(hue + 240) % 360}, 100%, 60%),
          hsl(${(hue + 300) % 360}, 100%, 60%)
        )
      `

      requestAnimationFrame(animateBorder)
    }

    const animationId = requestAnimationFrame(animateBorder)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="relative max-w-4xl mx-auto my-12">
      {/* Animated gradient border */}
      <div ref={borderRef} className="absolute -inset-1 rounded-2xl opacity-75 blur-sm"></div>

      {/* Video container */}
      <div className="relative bg-black rounded-xl overflow-hidden border border-purple-500/30 backdrop-blur-sm">
        <div className="aspect-video w-full">
          <video
            controls
            className="w-full h-full object-contain"
            src="presentvideo.mp4" // Adjust the path based on your file location
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}
