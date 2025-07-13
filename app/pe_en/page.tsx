'use client';

import { useState, useEffect } from "react"
import { tripData, fetchReviews, fallbackReviews, fetchImages, fetchItinerary, fallbackItinerary, ReviewsResponse, ImagesResponse, ItineraryResponse } from "@/components/trip-data-en"
import { TripPageClient } from "@/components/trip-page-client"

export default function TripPageEN() {
  // Initialize with fallback data for reviews and itinerary, null for images
  const [reviewsData, setReviewsData] = useState<ReviewsResponse>(fallbackReviews)
  const [imagesData, setImagesData] = useState<ImagesResponse | null>(null)
  const [itineraryData, setItineraryData] = useState<ItineraryResponse>(fallbackItinerary)
  
  // Loading states
  const [loadingStates, setLoadingStates] = useState({
    reviews: false,    // No loading needed, starts with fallback
    images: true,      // Show loading for images
    itinerary: false   // No loading needed, starts with fallback
  })
  
  // Error states
  const [errorStates, setErrorStates] = useState({
    reviews: false,
    images: false,
    itinerary: false
  })

  useEffect(() => {
    // Enhance with API data when available
    const enhanceWithApiData = async () => {
      // Fetch all data in parallel
      const [reviewsResult, imagesResult, itineraryResult] = await Promise.allSettled([
        fetchReviews('4days'),
        fetchImages('4days'),
        fetchItinerary('4days')
      ])

      // Handle reviews
      if (reviewsResult.status === 'fulfilled' && reviewsResult.value) {
        setReviewsData(reviewsResult.value)
      } else {
        setErrorStates(prev => ({ ...prev, reviews: true }))
      }

      // Handle images
      setLoadingStates(prev => ({ ...prev, images: false }))
      if (imagesResult.status === 'fulfilled' && imagesResult.value) {
        setImagesData(imagesResult.value)
      } else {
        setErrorStates(prev => ({ ...prev, images: true }))
      }

      // Handle itinerary
      if (itineraryResult.status === 'fulfilled' && itineraryResult.value) {
        setItineraryData(itineraryResult.value)
      } else {
        setErrorStates(prev => ({ ...prev, itinerary: true }))
      }
    }

    enhanceWithApiData()
  }, [])

  // Create loading/error components for images
  const getImagesComponent = () => {
    if (loadingStates.images) {
      return {
        package_id: "4days",
        images: [],
        total_images: 0,
        isLoading: true,
        loadingMessage: "Loading images..."
      }
    }
    
    if (errorStates.images) {
      return {
        package_id: "4days", 
        images: [],
        total_images: 0,
        isError: true,
        errorMessage: "Unable to load images at this time"
      }
    }
    
    return imagesData || {
      package_id: "4days",
      images: [],
      total_images: 0
    }
  }

  return (
    <div className="bg-page-bg text-gray-800">
      <div className="min-h-screen pt-12">
        <TripPageClient 
          tripData={tripData}
          reviewsData={reviewsData}
          imagesData={getImagesComponent()}
          itineraryData={itineraryData}
        />
      </div>
      <footer className="mt-16 h-32 bg-gray-200">{/* Footer Placeholder */}</footer>
    </div>
  )
}
