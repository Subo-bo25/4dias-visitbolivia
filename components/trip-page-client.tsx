/**
 * Visit Bolivia 4-Day Package - Main Trip Component
 * ================================================
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
 * Main client-side component for the 4-day Bolivia travel package showcase.
 * Features multi-language support, interactive UI elements, review system,
 * image galleries, and WhatsApp integration. 875 lines of complex React logic.
 */

"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import type { TripData } from "./trip-data-es"
import { StarIcon, BatteryIcon } from "./icons"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Heart, Info, ChevronLeft, ChevronRight, MessageSquare, X, Phone, Video } from "lucide-react"
import { cn } from "@/lib/utils"
import { FloatingLanguageSelector } from "./floating-language-selector"

// Helper component for lists that can be collapsed
const CollapsibleList = ({ items, title, minVisible = 5, isEnglish = false }: { items: string[]; title: string; minVisible?: number; isEnglish?: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  if (!items || items.length === 0) return null

  const visibleItems = isExpanded ? items : items.slice(0, minVisible)

  return (
    <div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <ul className="space-y-2 list-disc pl-5">
        {visibleItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {items.length > minVisible && (
        <Button variant="link" onClick={() => setIsExpanded(!isExpanded)} className="px-0 mt-2">
          {isExpanded 
            ? (isEnglish ? "View less" : "Ver menos") 
            : (isEnglish ? `View all (${items.length})` : `Ver todo (${items.length})`)
          }
        </Button>
      )}
    </div>
  )
}

interface TripPageClientProps {
  tripData: TripData;
  reviewsData: {
    reviews: Array<{id: number; name: string; date: string; rating: number; body: string}>;
    total_reviews: number;
    average_rating: number;
    star_distribution: Record<string, number>;
  };
  imagesData: {
    package_id: string;
    images: Array<{id: number; url: string; category: string; alt_text: string}>;
    total_images: number;
    // Optional loading and error states
    isLoading?: boolean;
    loadingMessage?: string;
    isError?: boolean;
    errorMessage?: string;
  };
  itineraryData: {
    package_id: string;
    itinerary: Array<{day: number; title: string; description: string; accommodation: string; includedActivities: string; meals: string; optionalActivities: string[]; specialInfo: string}>;
    total_days: number;
  };
}

export function TripPageClient({ 
  tripData, 
  reviewsData, 
  imagesData, 
  itineraryData 
}: TripPageClientProps) {
  // --- LANGUAGE DETECTION ---
  const isEnglish = tripData.navLinks.includes("Overview") // Simple language detection
  
  // Section mapping for both languages
  const sectionMap = {
    overview: isEnglish ? "Overview" : "Resumen",
    whyLove: isEnglish ? "Why you'll love this tour" : "¿Por qué te encantará este tour?",
    itinerary: isEnglish ? "Itinerary" : "Itinerario", 
    included: isEnglish ? "Included" : "Incluídos",
    rightForYou: isEnglish ? "Is this tour for you?" : "¿Es este tour para ti?",
    adventure: isEnglish ? "Start your adventure" : "Empieza tu aventura",
    notes: isEnglish ? "Important notes" : "Notas importantes",
    reviews: isEnglish ? "Reviews" : "Reseñas"
  }

  // --- STATE MANAGEMENT ---
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [activeTab, setActiveTab] = useState(tripData.navLinks[0])
  const [openAccordionItems, setOpenAccordionItems] = useState<string[]>([])
  const [selectedRatings, setSelectedRatings] = useState<number[]>([])
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  
  // --- Reviews State ---
  const [filteredReviews, setFilteredReviews] = useState<Array<{id: number; name: string; date: string; rating: number; body: string}>>([])
  const [reviewsLoading, setReviewsLoading] = useState(false)
  const [itineraryLoading, setItineraryLoading] = useState(false)
  
  // Get loading states from props
  const imagesLoading = imagesData.isLoading || false
  const imagesError = imagesData.isError || false

  // --- REFS ---
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})
  const tabContainerRef = useRef<HTMLDivElement>(null)

  // --- DERIVED STATE & MEMOS ---
  // Calculate dynamic review statistics from API data
  const reviewStats = useMemo(() => {
    return {
      average: reviewsData.average_rating,
      total: reviewsData.total_reviews,
      ratings: [5, 4, 3, 2, 1].map(stars => ({
        stars,
        count: reviewsData.star_distribution[stars.toString()] || 0
      }))
    }
  }, [reviewsData])

  // Add consistent number formatting
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num)
  }

  // Color mapping function to convert Tailwind color names to hex values
  const getColorValue = (colorName: string) => {
    const colorMap: Record<string, string> = {
      primary: "#634c98",
      secondary: "#fbce3e", 
      accent: "#00ab4f",
      destructive: "#d82934"
    }
    return colorMap[colorName] || colorName
  }

  // Get darker version of a color for hover effects
  const getDarkerColor = (colorName: string) => {
    const darkerColorMap: Record<string, string> = {
      primary: "#4f3b7a",
      secondary: "#e6b935", 
      accent: "#008a3f",
      destructive: "#b71c2a"
    }
    return darkerColorMap[colorName] || colorName
  }

  // --- EFFECTS ---
  // Initialize filtered reviews from props
  useEffect(() => {
    setFilteredReviews(reviewsData.reviews || [])
  }, [reviewsData])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id.replace(/-/g, " ")
            setActiveTab(id)
          }
        })
      },
      { rootMargin: "-20% 0px -70% 0px" },
    )

    const currentRefs = sectionRefs.current
    Object.values(currentRefs).forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      Object.values(currentRefs).forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }
  }, [tripData.navLinks])

  // --- HANDLERS ---
  const handleTabClick = (tab: string) => {
    const id = tab.replace(/ /g, "-")
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const handleNavScroll = (direction: "left" | "right") => {
    tabContainerRef.current?.scrollBy({ left: direction === "right" ? 200 : -200, behavior: "smooth" })
  }

  const toggleAllItinerary = () => {
    if (openAccordionItems.length === itineraryData.itinerary.length) {
      setOpenAccordionItems([])
    } else {
      setOpenAccordionItems(itineraryData.itinerary.map((item) => `day-${item.day}`))
    }
  }

  const handleRatingFilterChange = (rating: number) => {
    const newSelectedRatings = selectedRatings.includes(rating)
      ? selectedRatings.filter((r) => r !== rating)
      : [...selectedRatings, rating]
    setSelectedRatings(newSelectedRatings)

    if (newSelectedRatings.length === 0) {
      setFilteredReviews(reviewsData.reviews)
    } else {
      setFilteredReviews(reviewsData.reviews.filter((review) => newSelectedRatings.includes(review.rating)))
    }
  }



  // WhatsApp functionality
  const openWhatsApp = () => {
    const phoneNumber = tripData.adventureSection.whatsapp.number.replace('+', '')
    const message = encodeURIComponent(tripData.adventureSection.whatsapp.message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  // Helper function to get correct alt text based on language
  const getAltText = (image: {alt_text: string; alt_text_en?: string}) => {
    return isEnglish ? (image.alt_text_en || image.alt_text) : image.alt_text
  }

  // --- IMAGE HELPERS ---
  const getImagesByCategory = (category: string) => {
    return imagesData.images.filter(img => img.category.toLowerCase() === category.toLowerCase())
  }

  const getOverviewImage = () => {
    const overviewImages = getImagesByCategory('overview')
    if (overviewImages.length > 0) {
      return overviewImages[0]
    }
    // Fallback to first hero image if no overview image
    const heroImages = getImagesByCategory('hero')
    return heroImages.length > 0 ? heroImages[0] : imagesData.images[0]
  }

  const getItineraryImage = () => {
    const itineraryImages = getImagesByCategory('itinerary')
    if (itineraryImages.length > 0) {
      return itineraryImages[0]
    }
    // Fallback to hero images
    const heroImages = getImagesByCategory('hero')
    return heroImages.length > 0 ? heroImages[0] : imagesData.images[0]
  }

  const getAdventureImage = () => {
    const adventureImages = getImagesByCategory('adventure')
    if (adventureImages.length > 0) {
      return adventureImages[0]
    }
    // Fallback to overview, then hero images
    const overviewImages = getImagesByCategory('overview')
    if (overviewImages.length > 0) {
      return overviewImages[0]
    }
    const heroImages = getImagesByCategory('hero')
    return heroImages.length > 0 ? heroImages[0] : imagesData.images[0]
  }

  const getAllImages = () => {
    return imagesData.images
  }

  // --- RENDER ---
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
      {" "}
      {/* Added pb-32 for CTA bar */}
      {/* 1. Hero Header */}
      <section aria-labelledby="trip-title" className="space-y-4">
        <h1 id="trip-title" className="text-4xl md:text-5xl font-bold text-center text-primary py-3.5">
          {tripData.title}
        </h1>

        <div className="flex items-center justify-center flex-wrap gap-x-4 text-gray-600 font-bold py-6 bg-[#f5f5f5]">
          <span>{tripData.meta.days} {isEnglish ? "days" : "días"}</span>
          <span className="text-gray-600">•</span>
          {reviewsLoading ? (
            <div className="flex items-center gap-1 text-gray-400">
              <div className="w-20 h-5 bg-gray-200 animate-pulse rounded"></div>
              <span>•</span>
              <div className="w-16 h-4 bg-gray-200 animate-pulse rounded"></div>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-1 text-secondary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon
                    key={i}
                    fillPercentage={Math.max(0, Math.min(100, (reviewStats.average - i) * 100))}
                    className="w-5 h-5"
                  />
                ))}
              </div>
              <span>{reviewStats.average.toFixed(1)}</span>
              <span className="text-gray-600">•</span>
              <a
                href={`#${sectionMap.reviews}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleTabClick(sectionMap.reviews)
                }}
                className="underline"
              >
                {reviewStats.total} {isEnglish ? "reviews" : "reseñas"}
              </a>
            </>
          )}
        </div>

        <div className="text-right text-2xl font-bold">
          {isEnglish ? "From" : "Desde"} {tripData.price.currency} {formatNumber(tripData.price.from)}
        </div>

        <div className="flex flex-wrap gap-4 justify-between items-center">
          <div className="flex gap-2">
            {tripData.tags.map((tag) => (
              <span key={tag} className="border-accent border-2 text-accent font-semibold px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <Button onClick={() => handleTabClick(sectionMap.adventure)}>{sectionMap.adventure}</Button>
          </div>
        </div>
      </section>
      {/* 2. Image Mosaic */}
      <section aria-label="Fotos del viaje" className="mt-12 mb-1">
        {imagesLoading ? (
          // Loading placeholder
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 h-[400px] md:h-[500px] mb-1">
            <div className="col-span-2 row-span-2 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-lg">
                {imagesData.loadingMessage || (isEnglish ? "Loading images..." : "Cargando imágenes...")}
              </span>
            </div>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-gray-200 animate-pulse rounded-lg"></div>
            ))}
          </div>
        ) : imagesError ? (
          // Error placeholder
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 h-[400px] md:h-[500px] mb-1">
            <div className="col-span-2 row-span-2 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-lg text-center px-4">
                {imagesData.errorMessage || (isEnglish ? "Unable to load images at this time" : "No se pudieron cargar las imágenes en este momento")}
              </span>
            </div>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg"></div>
            ))}
          </div>
        ) : (
          <>
            <Dialog>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 h-[400px] md:h-[500px] mb-1 overflow-hidden">
                <div className="col-span-2 row-span-2 overflow-hidden">
                  <img
                    src={getAllImages()[0]?.url || "/placeholder.svg?height=600&width=800&query=peru+landscape"}
                    alt={getAllImages()[0] ? getAltText(getAllImages()[0]) : (isEnglish ? "Main trip image" : "Imagen principal del viaje")}
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>
                {getAllImages().slice(1, 5).map((img, i) => (
                  <div key={img.id || i} className="w-full h-full overflow-hidden">
                    <img
                      src={img.url || `/placeholder.svg?height=400&width=400&query=inca+ruins+${i}`}
                      alt={img ? getAltText(img) : (isEnglish ? `Trip scene ${i + 1}` : `Escena del viaje ${i + 1}`)}
                      className="w-full h-full object-cover rounded-lg"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-end px-4">
                <DialogTrigger asChild>
                  <Button variant="secondary" className="text-lg text-white" disabled={imagesLoading || imagesError}>
                    {imagesLoading ? (isEnglish ? "Loading images..." : "Cargando imágenes...") :
                     imagesError ? (isEnglish ? "Images unavailable" : "Imágenes no disponibles") :
                     (isEnglish ? `View all images (${getAllImages().length})` : `Ver todas las imágenes (${getAllImages().length})`)}
                  </Button>
                </DialogTrigger>
              </div>
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle>{isEnglish ? "Trip Photos" : "Fotos del Viaje"}</DialogTitle>
                </DialogHeader>
                <div className="max-h-[80vh] overflow-y-auto p-2">
                  <div className="columns-2 md:columns-3 gap-2">
                    {getAllImages().map((img, i) => (
                      <div key={img.id || i} className="break-inside-avoid mb-2">
                        <img
                          src={img.url || `/placeholder.svg?height=400&width=400&query=bolivia+scenery+${i}`}
                          alt={img ? getAltText(img) : (isEnglish ? `Full view ${i + 1}` : `Vista completa ${i + 1}`)}
                          className="w-full h-auto object-cover rounded cursor-pointer hover:opacity-90 transition-opacity"
                          loading="lazy"
                          onClick={() => setSelectedImage(img.url)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            
            {/* Full Image Viewer Modal */}
            <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
              <DialogContent className="max-w-7xl w-full h-[90vh] p-0 overflow-hidden">
                <DialogHeader className="sr-only">
                  <DialogTitle>Visor de imagen a tamaño completo</DialogTitle>
                </DialogHeader>
                <div className="relative w-full h-full flex items-center justify-center bg-black">
                  {selectedImage && (
                    <img
                      src={selectedImage}
                      alt={isEnglish ? "Full size view" : "Vista de tamaño completo"}
                      className="max-w-full max-h-full object-contain"
                    />
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 text-white hover:bg-white/20"
                    onClick={() => setSelectedImage(null)}
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </>
        )}
      </section>
      {/* 3. Sticky Scrollable Nav-tabs */}
      <nav className="mt-8 md:mt-10 lg:mt-12 sticky top-0 z-10 bg-page-bg/80 backdrop-blur-sm py-2 -mx-4 px-4 border-b border-accent">
        <div className="relative max-w-7xl mx-auto">
          <div ref={tabContainerRef} className="flex items-center gap-4 overflow-x-auto scrollbar-hide md:px-10">
            {tripData.navLinks.map((link) => (
              <Button
                key={link}
                variant="ghost"
                onClick={() => handleTabClick(link)}
                aria-current={activeTab === link ? "page" : undefined}
                className={cn(
                  "whitespace-nowrap capitalize",
                  activeTab === link && "font-bold border-b-2 border-primary",
                )}
              >
                {link}
              </Button>
            ))}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-page-bg/80 hover:bg-white hidden md:flex"
            onClick={() => handleNavScroll("left")}
            aria-label="Navegar hacia la izquierda"
          >
            <ChevronLeft />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-page-bg/80 hover:bg-white hidden md:flex"
            onClick={() => handleNavScroll("right")}
            aria-label="Navegar hacia la derecha"
          >
            <ChevronRight />
          </Button>
        </div>
      </nav>
      {/* Page Sections */}
      <div className="space-y-16 mt-12">
        {tripData.navLinks.map((link) => {
          const id = link.replace(/ /g, "-")
          return (
            <section
              key={id}
              id={id}
              ref={(el) => {
                if (el) sectionRefs.current[id] = el
              }}
              className="scroll-mt-20"
            >
              {/* 4. Overview/Resumen */}
              {link === sectionMap.overview && (
                <div className="space-y-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <div>
                      <h2 className="text-3xl font-bold mb-4 capitalize">{link}</h2>
                      <div className="space-y-4">
                        {tripData.overview.description.map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                      </div>
                    </div>
                    <img
                      src={getOverviewImage()?.url || "/copa_overview.webp?height=400&width=600&query=llama+in+mountains"}
                      alt={getOverviewImage() ? getAltText(getOverviewImage()) : (isEnglish ? "Overview illustration" : "Ilustración de resumen")}
                      className="rounded-lg w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {tripData.overview.facts.map((fact) => (
                      <Card key={fact.label} className="bg-transparent border-none shadow-none">
                        <CardContent className="p-4 text-black">
                          <p className="font-bold">{fact.label}</p>
                          {/* {fact.label === "Puntuación física" ? (
                            <BatteryIcon level={fact.value as number} />
                          ) : (
                            <p className="text-gray-600">{fact.value}</p>
                          )} */}
                          <p className="text-gray-600">{fact.value}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* 5. Why you'll love this tour */}
              {link === sectionMap.whyLove && (
                <div className="py-8 px-2.5 bg-[#f5f5f5]">
                  <div className="grid lg:grid-cols-3 gap-x-8 items-start">
                    <div className="lg:col-span-1">
                      <h2 className="text-3xl font-bold mb-4 capitalize lg:mb-0">{link}</h2>
                    </div>
                    <ul className="lg:col-span-2 grid md:grid-cols-2 gap-x-8 gap-y-2 list-disc pl-5">
                      {tripData.whyYoullLoveThis.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* 6. Itinerary */}
              {link === sectionMap.itinerary && (
                <div className="grid lg:grid-cols-4 gap-8">
                  <div className="lg:col-span-1 lg:sticky top-24 self-start">
                    <h2 className="text-3xl font-bold mb-4 capitalize">{link}</h2>
                    <img
                      src={getItineraryImage()?.url || "/placeholder.svg?height=600&width=400&query=inca+trail"}
                      alt={getItineraryImage() ? getAltText(getItineraryImage()) : (isEnglish ? "Itinerary theme" : "Tema del itinerario")}
                      className="rounded-lg w-full h-auto object-cover cursor-pointer hover:opacity-90 transition-opacity"
                      loading="lazy"
                      onClick={() => setSelectedImage(getItineraryImage()?.url || "")}
                    />
                  </div>
                  <div className="lg:col-span-3">
                    <div className="flex justify-end mb-4">
                      <Button variant="secondary" onClick={toggleAllItinerary}>
                        {openAccordionItems.length === itineraryData.itinerary.length 
                          ? (isEnglish ? "View less" : "Ver menos") 
                          : (isEnglish ? "View all" : "Ver todo")
                        }
                      </Button>
                    </div>
                    {itineraryLoading ? (
                      <div className="text-center py-8">{isEnglish ? "Loading itinerary..." : "Cargando itinerario..."}</div>
                    ) : (
                      <Accordion type="multiple" value={openAccordionItems} onValueChange={setOpenAccordionItems}>
                        {itineraryData.itinerary.map((day) => (
                        <AccordionItem key={day.day} value={`day-${day.day}`}>
                          <AccordionTrigger className="text-lg font-bold text-left">
                            {isEnglish ? `Day ${day.day}` : `Día ${day.day}`}: {day.title}
                          </AccordionTrigger>
                          <AccordionContent className="space-y-4">
                            <p>{day.description}</p>
                            <div className="grid sm:grid-cols-2 gap-4">
                              <div>
                                <p className="font-bold">{isEnglish ? "Accommodation:" : "Alojamiento:"}</p>
                                <p className="text-gray-600">{day.accommodation}</p>
                              </div>
                              <div>
                                <CollapsibleList 
                                  items={day.includedActivities.split(',').map(item => item.trim())} 
                                  title={isEnglish ? "Included activities" : "Actividades incluidas"}
                                  isEnglish={isEnglish}
                                />
                              </div>
                              <div>
                                <p className="font-bold">{isEnglish ? "Meals:" : "Comidas:"}</p>
                                <p className="text-gray-600">{day.meals}</p>
                              </div>
                            </div>
                            <CollapsibleList items={day.optionalActivities} title={isEnglish ? "Optional activities" : "Actividades opcionales"} isEnglish={isEnglish} />
                                                          {day.specialInfo && day.specialInfo.trim() !== "" && (
                                <div>
                                  <h4 className="font-bold">{isEnglish ? "Special information" : "Información especial"}</h4>
                                  <p>{day.specialInfo}</p>
                                </div>
                              )}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                    )}
                  </div>
                </div>
              )}

              {/* 7. Included */}
              {link === sectionMap.included && (
                                  <div>
                    <h2 className="text-3xl font-bold mb-4">{isEnglish ? "Included" : "Incluídos"}</h2>
                  <div className="grid lg:grid-cols-2 gap-8 px-2.5 py-2.5 bg-[#f5f5f5]">
                    <div className="space-y-6">
                                              <div>
                          <h3 className="text-lg font-bold mb-2">{isEnglish ? "Meals" : "Comidas"}</h3>
                          <p>{tripData.inclusions.meals}</p>
                        </div>
                      <div>
                                                  <CollapsibleList 
                            items={tripData.inclusions.transport.split(',').map(item => item.trim())} 
                            title={isEnglish ? "Transport" : "Transporte"}
                            isEnglish={isEnglish}
                          />
                      </div>
                      <div>
                                                  <CollapsibleList 
                            items={tripData.inclusions.accommodation.split(',').map(item => item.trim())} 
                            title={isEnglish ? "Accommodation" : "Alojamiento"}
                            isEnglish={isEnglish}
                          />
                      </div>
                    </div>
                    <div className="space-y-6">
                                              <CollapsibleList items={tripData.inclusions.includedActivities} title={isEnglish ? "Included activities" : "Actividades incluidas"} isEnglish={isEnglish} />
                        <CollapsibleList items={tripData.inclusions.optionalActivities} title={isEnglish ? "Optional activities" : "Actividades opcionales"} isEnglish={isEnglish} />
                    </div>
                  </div>
                </div>
              )}

              {/* 8. Is this tour for you? */}
              {link === sectionMap.rightForYou && (
                <div className="grid lg:grid-cols-3 gap-8">
                  <h2 className="text-3xl font-bold capitalize lg:col-span-1">{link}</h2>
                  <div className="lg:col-span-2">
                    <ul className="space-y-4 list-disc pl-5">
                      {tripData.isThisTripRightForYou.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* 9. Start your adventure */}
              {link === sectionMap.adventure && (
                <div>
                  <h2 className="text-3xl font-bold mb-4 capitalize">{link}</h2>
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <div>
                      <img
                        src={getAdventureImage()?.url || "/placeholder.svg?height=600&width=600"}
                        alt={getAdventureImage() ? getAltText(getAdventureImage()) : (isEnglish ? "Scenic view of Lake Titicaca, Bolivia" : "Vista panorámica del Lago Titicaca, Bolivia")}
                        className="rounded-lg w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-col h-full">
                      <div>
                        <h3 className="text-3xl font-bold mb-2" style={{ color: getColorValue("primary") }}>
                          {tripData.adventureSection.title}
                        </h3>
                        <p className="text-lg text-gray-600 mb-6">
                          {tripData.adventureSection.description}
                        </p>
                        <p className="text-gray-700 mb-8">
                          {tripData.adventureSection.content}
                        </p>
                        <ul className="space-y-3 text-gray-700 mb-8">
                          {tripData.adventureSection.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-center">
                              <span 
                                className="w-2 h-2 rounded-full mr-3" 
                                style={{ backgroundColor: getColorValue(highlight.color) }}
                              ></span>
                              {highlight.text}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-4">
                        {tripData.adventureSection.buttons.map((button, i) => (
                          <Button
                            key={i}
                            onClick={() => {
                              if (button.type === "whatsapp") {
                                openWhatsApp()
                              }
                              // Add video call functionality here later if needed
                            }}
                            className={`w-full py-6 text-lg font-semibold transition-all transform hover:scale-105 ${
                              button.type === "video" 
                                ? "text-white" 
                                : "bg-transparent hover:bg-gray-200 hover:border-opacity-80"
                            }`}
                            variant={button.type === "video" ? "default" : "outline"}
                            style={
                              button.type === "video" 
                                ? { backgroundColor: getColorValue(button.color) }
                                : { borderColor: getColorValue(button.color), color: getColorValue(button.color) }
                            }
                            onMouseEnter={(e) => {
                              if (button.type !== "video") {
                                e.currentTarget.style.borderColor = getDarkerColor(button.color)
                                e.currentTarget.style.color = getDarkerColor(button.color)
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (button.type !== "video") {
                                e.currentTarget.style.borderColor = getColorValue(button.color)
                                e.currentTarget.style.color = getColorValue(button.color)
                              }
                            }}
                          >
                            {button.type === "video" ? (
                              <Video className="mr-3 h-6 w-6" />
                            ) : (
                              <Phone className="mr-3 h-6 w-6" />
                            )}
                            {button.text}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 10. Important notes */}
              {link === sectionMap.notes && (
                <div className="bg-[#f5f5f5] p-5">
                  <h2 className="text-3xl font-bold mb-4 capitalize">{link}</h2>
                  <ol className="space-y-4 list-decimal pl-5">
                    {tripData.importantNotes.map((note, i) => (
                      <li key={i}>{note}</li>
                    ))}
                  </ol>
                </div>
              )}

              {/* 11. Reviews */}
              {link === sectionMap.reviews && (
                <div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
                    <h2 className="text-3xl font-bold capitalize">{link}</h2>
                    <div className="flex items-center gap-2 text-primary">
                      <StarIcon className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-xl">{reviewStats.average}</span>
                    <span className="text-gray-400">•</span>
                    <span>{reviewStats.total} reseñas</span>
                  </div>
                  <div className="grid lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-1">
                                              <h3 className="font-bold mb-4">{isEnglish ? "Filter by rating" : "Filtrar por calificación"}</h3>
                      <div className="space-y-2">
                        {reviewStats.ratings.map((r) => (
                          <div key={r.stars} className="flex items-center justify-between">
                            <label htmlFor={`rating-${r.stars}`} className="flex items-center gap-2 cursor-pointer">
                              <Checkbox
                                id={`rating-${r.stars}`}
                                onCheckedChange={() => handleRatingFilterChange(r.stars)}
                              />
                              <span>
                                {r.stars} {isEnglish ? (r.stars > 1 ? "stars" : "star") : (r.stars > 1 ? "estrellas" : "estrella")}
                              </span>
                            </label>
                            <span className="text-sm text-gray-500">{r.count}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="lg:col-span-3 space-y-4">
                      {filteredReviews.sort((a, b) => b.rating - a.rating).slice(0, 8).map((review, reviewIndex) => (
                        <Card key={`main-review-${review.id}-${reviewIndex}`}>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="font-bold">{review.name}</p>
                                <p className="text-sm text-gray-500">{review.date}</p>
                              </div>
                              <div className="flex text-primary">
                                {Array.from({ length: review.rating }).map((_, i) => (
                                  <StarIcon key={`main-star-${review.id}-${reviewIndex}-${i}`} className="w-4 h-4" />
                                ))}
                              </div>
                            </div>
                            <p className="mt-2">{review.body}</p>
                          </CardContent>
                        </Card>
                      ))}
                      <Dialog>
                        <DialogTrigger asChild>
                                                  <Button variant="outline" className="w-full">
                          {isEnglish ? "Read all reviews" : "Leer todas las reseñas"}
                        </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl">
                          <DialogHeader>
                            <DialogTitle>{isEnglish ? "All Reviews" : "Todas las Reseñas"}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-4">
                            {reviewsData.reviews.sort((a, b) => b.rating - a.rating).map((review, reviewIndex) => (
                              <Card key={`modal-review-${review.id}-${reviewIndex}`}>
                                <CardContent className="p-4">
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <p className="font-bold">{review.name}</p>
                                      <p className="text-sm text-gray-500">{review.date}</p>
                                    </div>
                                    <div className="flex text-primary">
                                      {Array.from({ length: review.rating }).map((_, i) => (
                                        <StarIcon key={`modal-star-${review.id}-${reviewIndex}-${i}`} className="w-4 h-4" />
                                      ))}
                                    </div>
                                  </div>
                                  <p className="mt-2">{review.body}</p>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>
              )}
            </section>
          )
        })}
      </div>

      
      {/* Floating Language Selector */}
      <FloatingLanguageSelector />
      
      {/* Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg p-6 md:p-8 border-t border-gray-200 md:px-16 leading-7">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
          {/* Column 1: Trip Info & Price */}
          <div className="flex flex-col sm:flex-row sm:items-center text-center sm:text-left">
            <span className="font-semibold text-md md:text-2xl text-primary truncate max-w-xs sm:max-w-none">
              {tripData.title}
            </span>
            <span className="hidden sm:inline mx-2 text-gray-400">•</span>
            <span className="text-sm md:text-2xl font-semibold text-gray-700">{isEnglish ? "From USD 591" : "Desde USD 591"}</span>
          </div>

          {/* Column 2: Button */}
          <div className="flex-shrink-0">
            <Button size="sm" onClick={() => handleTabClick(sectionMap.adventure)}>
              <MessageSquare className="w-4 h-4 mr-2 md:hidden" /> {/* Icon for mobile */}
              <span className="hidden md:inline">{sectionMap.adventure}</span>
              <span className="md:hidden">{sectionMap.adventure}</span>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
