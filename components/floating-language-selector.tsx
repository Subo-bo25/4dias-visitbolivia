/**
 * Visit Bolivia 4-Day Package - Language Selector Component
 * ========================================================
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
 * Floating language selector component for switching between Spanish and English.
 * Provides route-based language management with smooth transitions.
 */

"use client"

import * as React from "react"
import { Globe, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useRouter, usePathname } from "next/navigation"

const languages = [
  { code: "es", name: "Español", flag: "🇪🇸", shortCode: "ES", route: "/pe_es" },
  { code: "en", name: "English", flag: "🇺🇸", shortCode: "EN", route: "/pe_en" },
]

interface FloatingLanguageSelectorProps {
  currentLanguage?: string
}

export function FloatingLanguageSelector({ currentLanguage }: FloatingLanguageSelectorProps) {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // Determine current language from pathname
  const getCurrentLanguage = () => {
    if (pathname.includes('/pe_en')) return 'en'
    if (pathname.includes('/pe_es')) return 'es'
    return currentLanguage || 'es' // Default to Spanish
  }

  const selectedLanguage = getCurrentLanguage()

  const handleLanguageSelect = (languageCode: string) => {
    const selectedLang = languages.find((lang) => lang.code === languageCode)
    if (selectedLang) {
      router.push(selectedLang.route)
    }
    setOpen(false)
  }

  const currentLang = languages.find((lang) => lang.code === selectedLanguage)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          className="fixed bottom-28 right-6 z-[60] h-12 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 bg-white text-primary hover:bg-gray-100 border-0"
          aria-label={`Current language: ${currentLang?.name}. Click to change language`}
        >
          <span className="text-sm font-semibold">{currentLang?.shortCode}</span>
          <Globe className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-2 bg-white text-primary" align="end" side="top">
        <div className="grid gap-1">
          <div className="p-2">
            <h4 className="font-medium leading-none">Select Language</h4>
            <p className="text-sm text-muted-foreground">Choose your preferred language</p>
          </div>
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageSelect(language.code)}
              className="w-full flex items-center justify-between p-2 rounded-md hover:bg-muted transition-colors text-left text-sm"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{language.flag}</span>
                <span>{language.name}</span>
              </div>
              {selectedLanguage === language.code && <Check className="h-4 w-4 text-primary" />}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
