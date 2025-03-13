'use client';
import { useState, useEffect } from "react"
import { cn } from "@/app/lib/utils"

interface BlinkingCursorProps {
  color?: string
  className?: string
}

export function BlinkingCursor({ color = "border-current", className }: BlinkingCursorProps) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => !prev)
    }, 530)

    return () => clearInterval(interval)
  }, [])

  return (
    <span
      className={cn(
        "inline-block mx-0.5 h-[1.2em] w-[2px] transform-gpu transition-all duration-200 ease-in-out",
        visible ? "scale-y-100 opacity-100" : "scale-y-0 opacity-40",
        color,
        className,
      )}
      style={{ borderLeftWidth: "2px" }}
    />
  )
}

