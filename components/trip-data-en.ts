/**
 * Visit Bolivia 4-Day Package - English Content Data
 * =================================================
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
 * English language content data for the 4-day Bolivia travel package.
 * Includes travel information, pricing, activities, and descriptions.
 */

// @/components/trip-data-en.ts

// API Configuration
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://backend-visitbolivia.onrender.com' // Production backend on Render
  : 'http://localhost:8000';

// Types for API responses
export interface ReviewFromAPI {
  id: number;
  name: string;
  date: string;
  rating: number;
  body: string;
}

export interface ReviewsResponse {
  reviews: ReviewFromAPI[];
  total_reviews: number;
  average_rating: number;
  star_distribution: Record<string, number>;
}

export interface ImageFromAPI {
  id: number;
  url: string;
  category: string;
  alt_text: string;
  alt_text_en: string;
}

export interface ImagesResponse {
  package_id: string;
  images: ImageFromAPI[];
  total_images: number;
}

export interface ItineraryDayFromAPI {
  day: number;
  title: string;
  description: string;
  accommodation: string;
  included_activities: string;
  meals: string;
  optional_activities: string[];
  special_info: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  accommodation: string;
  includedActivities: string;
  meals: string;
  optionalActivities: string[];
  specialInfo: string;
}

export interface ItineraryResponse {
  package_id: string;
  itinerary: ItineraryDay[];
  total_days: number;
}

// Static trip data (non-dynamic content)
export const tripData = {
  title: "4 DAYS UNBOLIVIABLE",
  meta: {
    days: 4,
    // rating and reviews count will be calculated dynamically from API
  },
  price: {
    from: 591,
    currency: "USD",
  },
  tags: ["Nature", "Cultural"],
  navLinks: [
    "Overview",
    "Why you'll love this tour",
    "Itinerary",
    "Included",
    "Is this tour for you?",
    "Start your adventure",
    "Important notes",
    "Reviews",
  ],
  overview: {
    description: [
      "Embark on an unforgettable journey with our Lake Titicaca Tour, designed to help you explore the most captivating Bolivian tourist attractions in just a few days. This unBoliviable package takes you from the vibrant Wonder City to the mystical Lake Titicaca.",
      "Your adventure begins in Copacabana Bolivia, a charming village on the lakeshore. From there, you will set sail to the sacred Isla del Sol (Island of the Sun) and the enigmatic Isla de la Luna (Island of the Moon). Immerse yourself in the rich Andean culture, the spirituality embedded in its landscapes, and the delicious local flavors that await you.",
      "On Isla del Sol in Bolivia, where the history of Lake Titicaca comes alive, you can explore ancient archaeological trails and ancestral viewpoints that will transport you to the heart of the Inca civilization. Then relax on the serene Isla de la Luna and feel a timeless connection with Pachamama.",
      "Our team of expert guides will accompany you every step of the way, ensuring your comfort and offering truly authentic cultural experiences. Do not wait any longer to discover all the details of this fascinating itinerary and experience the magic that Copacabana in Bolivia has in store.",
    ],
    image: "/isla_sol_4.webp?height=400&width=600",
    facts: [
      { label: "Start", value: "Copacabana, La Paz" },
      { label: "End", value: "Island of the Moon, La Paz" },
      { label: "Destinations", value: "Copacabana, Bolivia" },
      { label: "Meals", value: "3 Breakfasts / 4 Lunches / 3 Dinners" },
      { label: "Transport", value: "Bus, Community boat, Local transport" },
      { label: "Accommodation", value: "Hotel (2 Nights), Hostel (1 Night)" },
      { label: "Days", value: "4" },
      { label: "Group size", value: "Min 1 – Max 16" },
      { label: "Ages", value: "Min 15" },
      { label: "Theme", value: "Nature; Cultural" },
      { label: "Style", value: "Original" },
      // { label: "Physical score", value: 2 },
    ],
  },
  whyYoullLoveThis: [
    "Experience the world's highest navigable lake. Flow with vibrant blue waters and abundant flora and fauna of Lake Titicaca. Keep an eye out for the endemic fish species that call Lake Titicaca home!",
    "Journey to the mystical Isla del Sol (Island of the Sun), the legendary birthplace of the Inca civilization. Here, Bolivia's history intertwines with ancestral myths and legends, offering a profound sense of connection to the past.",
    "Dive into the authentic culture of Bolivia. Admire the unique architecture of Copacabana, engage with local artisans, and let yourself be captivated by the exquisite flavors of Andean cuisine.",
    "Unwind and de-stress on the Isla de la Luna (Island of the Moon), a true sanctuary of tranquility. Explore the Temple of the Virgins of the Sun and feel an ancestral connection in a setting of unparalleled beauty, perfect for introspection.",
  ],
  
  inclusions: {
    meals: 
      "3 breakfasts, 4 lunches (including an authentic Apthapi-style lunch), 2 dinners.",
    transport: "Tourist bus (La Paz - Copacabana - La Paz), Community boat (Copacabana - Isla del Sol - Isla de la Luna - Copacabana), Local transport (Yampupata - Copacabana).",
    accommodation: "Hotel (1 night in Copacabana), Hotel (1 night on Isla del Sol), Hostel (1 night on Isla de la Luna).",
    includedActivities: [
      "Hotel pickup from your hotel in La Paz.",
      "Guide service in Spanish or English.",
      "Tourist bus journey from La Paz to Copacabana.",
      "Cultural visit of Copacabana: Explore the Church of the Virgin of Copacabana, the local market, and El Calvario.",
      "Community boat trip to Isla del Sol.",
      "Visit to the archaeological site of Pilkokaina (Temple of the Inca).",
      "Hike to Yumani.",
      "Visit to the Escalinata del Inca (Inca Stairway).",
      "Visit to the Fuente de la Juventud (Fountain of Youth).",
      "Visit to the Temple of the Sun (Templo del Sol)",
      "Community boat trip to Isla de la Luna.",
      "Visit to the Templo de las Vírgenes (Temple of the Virgins).",
      "Hike to the lodge on Isla de la Luna.",
      "Community boat trip from Isla de la Luna to Yampupata.",
      "Transport from Yampupata to Copacabana.",
      "Bus journey from Copacabana to La Paz or Puno (your choice).",
    ],
    optionalActivities: [
      "Visit to a local museum",
    ]
  },
  
  isThisTripRightForYou: [
    "Keep in mind that the destinations you will visit are at high altitudes, with Lake Titicaca situated at 3,812 meters (12,507 feet) above sea level. Some individuals may experience altitude sickness, regardless of age or physical condition. We highly recommend consulting your doctor and preparing adequately before your visit.",
    "Weather conditions in the region can change. The climate in Copacabana Bolivia, can be chilly, particularly at night, so it is essential to pack warm clothing for all seasons.",
    "You will be undertaking moderate walks on the islands, which feature uneven paths and inclines. We advise wearing appropriate footwear to fully enjoy your explorations.",
    "If you are planning to travel to Bolivia from Peru, please ensure you have all the necessary documentation. This itinerary offers a return option to Puno, given the ease of travel between the two regions.",
  ],
 
  importantNotes: [
    "When traveling to Bolivia, it is crucial to ensure your passport is valid for your entire trip. Also, be sure to check if you need a visa based on your nationality before you depart.",
    "The currency in Bolivia is the Boliviano (BOB). We recommend carrying some cash (BOB or USD), as access to ATMs can be limited, especially in rural areas and on the islands.",
    "Bolivia's main language is Spanish, alongside indigenous languages like Aymara and Quechua. While your guide will be fluent in both Spanish and English, learning a few basic phrases in Spanish is a great way to enhance your experience and connect with the local culture.",
  ],
  adventureSection: {
    title: "4-Day Adventure in Bolivia",
    description: "Explore Copacabana, Isla del Sol and Isla de la Luna",
    content: "Embark on an unforgettable journey through the mystical waters of Lake Titicaca. This 4-day package offers you a deep immersion into the heart of Andean culture, with visits to the sacred islands of the Sun and Moon.",
    highlights: [
      { text: "Guided tours", color: "destructive" },
      { text: "Scenic boat rides on Lake Titicaca", color: "secondary" },
      { text: "Authentic local gastronomic experiences", color: "accent" },
      { text: "Comfortable accommodations with lake views", color: "primary" }
    ],
    buttons: [
      { text: "Schedule Video Call", type: "video", color: "accent" },
      { text: "Chat on WhatsApp", type: "whatsapp", color: "primary" }
    ],
    whatsapp: {
      number: "+59163084332", // Replace with your actual WhatsApp number
      message: "Hello! I'm interested in the 4-day tour to Bolivia (Copacabana, Isla del Sol and Isla de la Luna). Could you give me more information about availability and prices? Thank you!"
    }
  }
};

// Retry utility function
async function fetchWithRetry(
  url: string,
  options: RequestInit = {},
  maxRetries: number = 3,
  delay: number = 1000
): Promise<Response> {
  let lastError: Error;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`[fetchWithRetry] Attempt ${attempt}/${maxRetries} for ${url}`);
      const response = await fetch(url, options);
      
      if (response.ok) {
        return response;
      }
      
      // If it's a server error (5xx), retry
      if (response.status >= 500 && attempt < maxRetries) {
        console.log(`[fetchWithRetry] Server error ${response.status}, retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
        delay *= 2; // Exponential backoff
        continue;
      }
      
      // If it's a client error (4xx), don't retry
      return response;
      
    } catch (error) {
      lastError = error as Error;
      console.error(`[fetchWithRetry] Attempt ${attempt} failed:`, error);
      
      if (attempt < maxRetries) {
        console.log(`[fetchWithRetry] Retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
        delay *= 2; // Exponential backoff
      }
    }
  }
  
  throw lastError!;
}

// API Functions
export async function fetchReviews(packageId: string = '4days'): Promise<ReviewsResponse | null> {
  try {
    console.log(`[fetchReviews] Attempting to fetch reviews for ${packageId} from ${API_BASE_URL}`);
    
    const response = await fetchWithRetry(`${API_BASE_URL}/api/reviews/${packageId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      signal: AbortSignal.timeout(15000), // Increased timeout
      cache: 'no-store'
    });

    console.log(`[fetchReviews] Response status: ${response.status}`);
    
    if (!response.ok) {
      console.error(`[fetchReviews] Failed to fetch reviews: ${response.status} ${response.statusText}`);
      return null;
    }

    const data: ReviewsResponse = await response.json();
    console.log(`[fetchReviews] Successfully fetched ${data.reviews.length} reviews`);
    return data;
  } catch (error) {
    console.error(`[fetchReviews] Error fetching reviews:`, error);
    return null;
  }
}

export async function fetchImages(packageId: string = '4days'): Promise<ImagesResponse | null> {
  try {
    console.log(`[fetchImages] Attempting to fetch images for ${packageId} from ${API_BASE_URL}`);
    
    const response = await fetchWithRetry(`${API_BASE_URL}/api/images/${packageId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      signal: AbortSignal.timeout(15000), // Increased timeout
      cache: 'no-store'
    });

    console.log(`[fetchImages] Response status: ${response.status}`);

    if (!response.ok) {
      console.error(`[fetchImages] Failed to fetch images: ${response.status} ${response.statusText}`);
      return null;
    }

    const data: ImagesResponse = await response.json();
    
    // Convert URLs to use backend proxy to avoid CORS issues
    const imagesWithProxyUrls = data.images.map(img => ({
      ...img,
      url: `${API_BASE_URL}/api/images/${packageId}/proxy/${img.id}`
    }));
    
    console.log(`[fetchImages] Successfully fetched ${data.images.length} images`);
    return {
      ...data,
      images: imagesWithProxyUrls
    };
  } catch (error) {
    console.error(`[fetchImages] Error fetching images:`, error);
    return null;
  }
}

export async function fetchItinerary(packageId: string = '4days'): Promise<ItineraryResponse | null> {
  try {
    console.log(`[fetchItinerary] Attempting to fetch itinerary for ${packageId} from ${API_BASE_URL}`);
    
    const response = await fetchWithRetry(`${API_BASE_URL}/api/itinerary/${packageId}?lang=en`, {
      headers: {
        'Content-Type': 'application/json',
      },
      signal: AbortSignal.timeout(15000), // Increased timeout
      cache: 'no-store'
    });

    console.log(`[fetchItinerary] Response status: ${response.status}`);

    if (!response.ok) {
      console.error(`[fetchItinerary] Failed to fetch itinerary: ${response.status} ${response.statusText}`);
      return null;
    }

    // Get raw data from API with snake_case fields
    const apiData: { package_id: string; itinerary: ItineraryDayFromAPI[]; total_days: number } = await response.json();
    
    // Convert API field names to match frontend expectations
    const itineraryWithConvertedFields: ItineraryDay[] = apiData.itinerary.map(day => ({
      day: day.day,
      title: day.title,
      description: day.description,
      accommodation: day.accommodation,
      includedActivities: day.included_activities, // Convert snake_case to camelCase
      meals: day.meals,
      optionalActivities: day.optional_activities, // Convert snake_case to camelCase
      specialInfo: day.special_info // Convert snake_case to camelCase
    }));
    
    console.log(`[fetchItinerary] Successfully fetched ${apiData.itinerary.length} itinerary days`);
    return {
      package_id: apiData.package_id,
      itinerary: itineraryWithConvertedFields,
      total_days: apiData.total_days
    };
  } catch (error) {
    console.error(`[fetchItinerary] Error fetching itinerary:`, error);
    return null;
  }
}

export type TripData = typeof tripData

// Fallback static reviews (used if API fails)
export const fallbackReviews = {
  reviews: [
    {
      id: 1,
      name: "Sarah Mitchell",
      date: "December 2024",
      rating: 5,
      body: "Absolutely incredible journey! The guides were knowledgeable and passionate. Lake Titicaca at sunrise was breathtaking. Every moment was perfectly organized. Highly recommend!"
    },
    {
      id: 2,
      name: "Carlos Rodriguez",
      date: "November 2024", 
      rating: 4,
      body: "Great trip overall. The boat rides were amazing and the cultural experiences were rewarding. Food was good and accommodations were decent. Only wish we had more time in Copacabana."
    },
    {
      id: 3,
      name: "Emma Thompson",
      date: "November 2024",
      rating: 5,
      body: "Life-changing experience! The local families we met were so welcoming. The Island of the Sun was otherworldly. Worth every penny!"
    },
    {
      id: 4,
      name: "Michael Chen",
      date: "October 2024",
      rating: 3,
      body: "Good trip but had some issues with transportation delays. The sites were amazing but the organization could be better. Still glad I went."
    },
    {
      id: 5,
      name: "Isabella Garcia",
      date: "October 2024",
      rating: 5,
      body: "Perfect blend of adventure and culture. Our guide Maria was fantastic. The island experience was authentic and meaningful. Couldn't ask for more!"
    },
  ],
  total_reviews: 5,
  average_rating: 4.4,
  star_distribution: {
    "1": 0,
    "2": 0,
    "3": 1,
    "4": 1,
    "5": 3
  }
};

// Fallback static images (used if API fails) - using placeholder URLs for working fallbacks
export const fallbackImages = {
  package_id: "4days",
  images: [
    { id: 1, url: "/placeholder.svg?height=600&width=800&query=copacabana+bolivia", category: "hero", alt_text: "Vista del pueblo de Copacabana", alt_text_en: "Copacabana town view" },
    { id: 2, url: "/placeholder.svg?height=400&width=600&query=copacabana+lakeside", category: "itinerary", alt_text: "Orilla del lago en Copacabana", alt_text_en: "Copacabana lakeside" },
    { id: 3, url: "/placeholder.svg?height=400&width=600&query=isla+del+sol+panoramic", category: "overview", alt_text: "Vista panorámica de la Isla del Sol", alt_text_en: "Island of the Sun panoramic view" },
    { id: 4, url: "/placeholder.svg?height=400&width=600&query=isla+de+la+luna+temple", category: "itinerary", alt_text: "Templo de la Isla de la Luna", alt_text_en: "Island of the Moon temple" },
    { id: 5, url: "/placeholder.svg?height=400&width=600&query=copacabana+street", category: "hero", alt_text: "Vista de la calle en Copacabana", alt_text_en: "Copacabana street view" },
    { id: 6, url: "/placeholder.svg?height=400&width=600&query=isla+del+sol+landscape", category: "itinerary", alt_text: "Paisaje de la Isla del Sol", alt_text_en: "Island of the Sun landscape" },
    { id: 7, url: "/placeholder.svg?height=400&width=600&query=copacabana+market", category: "hero", alt_text: "Mercado de Copacabana", alt_text_en: "Copacabana market" },
    { id: 8, url: "/placeholder.svg?height=400&width=600&query=isla+de+la+luna+ruins", category: "itinerary", alt_text: "Ruinas de la Isla de la Luna", alt_text_en: "Island of the Moon ruins" },
    { id: 9, url: "/placeholder.svg?height=400&width=600&query=isla+del+sol+terraces", category: "hero", alt_text: "Terrazas de la Isla del Sol", alt_text_en: "Island of the Sun terraces" },
    { id: 10, url: "/placeholder.svg?height=400&width=600&query=isla+del+sol+sunset", category: "hero", alt_text: "Atardecer en la Isla del Sol", alt_text_en: "Island of the Sun sunset" },
    { id: 11, url: "/placeholder.svg?height=400&width=600&query=isla+del+sol+village", category: "hero", alt_text: "Pueblo de la Isla del Sol", alt_text_en: "Island of the Sun village" },
  ],
  total_images: 11
};

// Fallback static itinerary (used if API fails) - English version
export const fallbackItinerary = {
  package_id: "4days",
  itinerary: [
    {
      day: 1,
      title: "Copacabana, Gateway to Titicaca",
      description: "Your adventure begins with a scenic journey from La Paz to Copacabana, the Andean heart of Lake Titicaca. Once you arrive, you'll settle in and spend the afternoon exploring the charms of this town, from its iconic church to its vibrant local market, enjoying the views from El Calvario. The day will conclude with dinner and overnight stay.",
      accommodation: "Hotel (1 night)",
      includedActivities: "Tourist bus travel from La Paz to Copacabana, Visit to the Church of the Virgin of Copacabana, Exploration of Copacabana's local market, Ascent to El Calvario",
      meals: "Lunch, Dinner",
      optionalActivities: [
        "Visit to a local museum"
      ],
      specialInfo: ""
    },
    {
      day: 2,
      title: "Island of the Sun, Cradle of the Inca Empire",
      description: "Embark on an unforgettable boat trip to the Island of the Sun, sacred place where Inca history comes to life. Explore ancient temples and ruins, like Pilkokaina, walk through ancestral paths to Yumani. Be amazed by the spectacular views of the lake. Visit the Inca Stairway, the Fountain of Youth and the Temple of the Sun. Dinner and overnight stay will be on the island.",
      accommodation: "Hotel on Lake Titicaca (1 night)",
      includedActivities: "Community boat trip to the Island of the Sun, Visit to the archaeological remains of Pilkokaina 'Inca Temple', Hike to Yumani, Visit to the Inca Stairway, Visit to the Fountain of Youth, Visit to the Temple of the Sun",
      meals: "Breakfast, Lunch, Dinner",
      optionalActivities: [],
      specialInfo: ""
    },
    {
      day: 3,
      title: "Island of the Moon, Sanctuary of Peace",
      description: "Discover the mysteries of the Island of the Moon. After a relaxing boat trip, you'll explore the ancient temple of the Virgins, where you'll enjoy an authentic Apthapi-style lunch. The afternoon invites you to a peaceful walk to reach your hostel. A space where silence and the lake breeze will mark the beginning of a restorative night, accompanied by a comforting dinner and rest.",
      accommodation: "Hostel (1 night)",
      includedActivities: "Community boat trip to the Island of the Moon, Visit to the Temple of the Virgins, Apthapi-style lunch, Hike to the hostel",
      meals: "Breakfast, Lunch (Apthapi-style), Dinner",
      optionalActivities: [],
      specialInfo: ""
    },
    {
      day: 4,
      title: "Return and Farewell to Titicaca",
      description: "Your last day at Titicaca begins with a boat trip back, once again enjoying the panoramic views of the lake. From Yampupata, transport will take you back to Copacabana for a final lunch before embarking on your return journey on a Copacabana-La Paz bus or, if you prefer, continue your adventure to Puno in Peru.",
      accommodation: "Not included",
      includedActivities: "Community boat trip from Island of the Moon to Yampupata, Transport from Yampupata to Copacabana, Bus trip from Copacabana to La Paz or Puno",
      meals: "Breakfast, Lunch",
      optionalActivities: [],
      specialInfo: ""
    }
  ],
  total_days: 4
};
