/**
 * Visit Bolivia 4-Day Package - Main Layout
 * ========================================
 * 
 * Author: Sergio Agreda (sergioagreda21@outlook.com)
 * GitHub: @AgredaLem023
 * Project: Visit Bolivia - 4-Day Travel Package Frontend
 * 
 * Copyright © 2025 Sergio Agreda. All rights reserved.
 * This code is proprietary and confidential.
 * 
 * Originally developed by Sergio Agreda for Visit Bolivia business operations.
 * 
 * Description:
 * Root layout component for the Next.js application with metadata configuration,
 * global styles, and SEO optimization for the 4-day Bolivia travel package.
 */

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '4 dias Unboliviable Visit Bolivia',
  description: 'Discover the Sacred Land of the Incas with our 4-day unforgettable Bolivia adventure. Experience Copacabana, Isla del Sol, and Isla de la Luna.',
  generator: 'v0.dev',
  icons: {
    icon: '/cierre morado.ico',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
