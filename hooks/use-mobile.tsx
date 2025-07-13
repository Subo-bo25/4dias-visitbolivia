/**
 * Visit Bolivia 4-Day Package - Mobile Detection Hook
 * ==================================================
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
 * Custom React hook for mobile device detection and responsive behavior.
 */

import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
