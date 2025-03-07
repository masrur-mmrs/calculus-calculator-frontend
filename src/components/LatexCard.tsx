"use client"

import { useEffect, useRef } from "react"
import katex from "katex"

// Import KaTeX CSS in your layout or page where this component is used
// import 'katex/dist/katex.min.css'

interface LatexCardProps {
  latex: string
  title?: string
}

export function LaTeXCard({ latex, title = "Solution" }: LatexCardProps) {
  const latexRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (latexRef.current && latex) {
      katex.render(latex, latexRef.current, {
        throwOnError: false,
        displayMode: true,
      })
    }
  }, [latex])

  return (
    <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl border border-gray-200 dark:border-gray-700">
      <div className="px-6 py-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">{title}</h3>
        <div ref={latexRef} className="overflow-x-auto py-3 px-2 bg-gray-50 dark:bg-gray-900 rounded-md" />
      </div>
    </div>
  )
}

