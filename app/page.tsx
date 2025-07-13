"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to Spanish version by default
    router.push('/pe_es')
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-page-bg">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting...</h1>
        <p className="text-gray-600">Taking you to the Spanish version of our site</p>
      </div>
    </div>
  )
}
