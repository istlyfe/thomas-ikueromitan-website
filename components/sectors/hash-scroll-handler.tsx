"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"

export function HashScrollHandler() {
  const searchParams = useSearchParams()

  useEffect(() => {
    // Check if there's a hash in the URL
    if (typeof window !== "undefined") {
      const hash = window.location.hash
      if (hash) {
        // Remove the # symbol
        const elementId = hash.substring(1)
        const element = document.getElementById(elementId)
        
        if (element) {
          // Wait a bit for the page to fully render
          setTimeout(() => {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            })
            
            // Add a highlight effect
            element.classList.add('ring-4', 'ring-primary/20', 'ring-offset-4')
            
            // Remove the highlight after a few seconds
            setTimeout(() => {
              element.classList.remove('ring-4', 'ring-primary/20', 'ring-offset-4')
            }, 3000)
          }, 500)
        }
      }
    }
  }, [searchParams])

  return null
}
