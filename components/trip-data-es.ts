/**
 * Visit Bolivia 4-Day Package - Spanish Content Data
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
 * Spanish language content data for the 4-day Bolivia travel package.
 * Includes travel information, pricing, activities, and descriptions.
 */

// @/components/trip-data.ts

// API Configuration
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://backend-visitbolivia-k0o6.onrender.com' // Production backend on Render
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
  title: "4 DÍAS UNBOLIVIABLE",
  meta: {
    days: 4,
    // rating and reviews count will be calculated dynamically from API
  },
  price: {
    from: 591,
    currency: "USD",
  },
  tags: ["Naturaleza", "Cultural"],
  navLinks: [
    "Resumen",
    "¿Por qué te encantará este tour?",
    "Itinerario",
    "Incluídos",
    "¿Es este tour para ti?",
    "Empieza tu aventura",
    "Notas importantes",
    "Reseñas",
  ],
  overview: {
    description: [
      "Embárcate en un viaje inolvidable con nuestro tour por el Lago Titicaca, diseñado para que explores los lugares turísticos de Bolivia más cautivadores en tan solo unos días. Este paquete unBoliviable te lleva desde la vibrante Ciudad Maravilla hasta el místico lago Titicaca.",
      "Tu aventura comienza en Copacabana Bolivia, un encantador pueblo a orillas del lago. Desde allí, navegarás hacia la sagrada Isla del Sol y la enigmática Isla de la Luna. Sumérgete en la rica cultura andina, la espiritualidad que emana de sus paisajes y los deliciosos sabores locales que te esperan.",
      "La Isla del Sol en Bolivia, donde la historia del lago Titicaca cobra vida, te permite explorar senderos arqueológicos y miradores ancestrales que te transportarán al corazón de la civilización inca. Relájate en la serena Isla de la Luna y siente una conexión milenaria con la Pachamama.",
      "Nuestro equipo de guías expertos te acompañará en cada paso, garantizando tu comodidad y auténticas experiencias culturales. ¡No esperes más para descubrir todos los detalles de este fascinante itinerario y vivir la magia que Copacabana en Bolivia tiene para ti!",
      
    ],
    image: "/isla_sol_4.webp?height=400&width=600",
    facts: [
      { label: "Inicio", value: "Copacabana, La Paz" },
      { label: "Fin", value: "Isla de la Luna, La Paz" },
      { label: "Destinos", value: "Copacabana, Bolivia" },
      { label: "Comidas", value: "3 Desayunos / 4 Almuerzos / 3 Cenas" },
      { label: "Transporte", value: "Bus, Bote comunitario, Transporte local" },
      { label: "Alojamiento", value: "Hotel (2 Noches), Albergue (1 Noche)" },
      { label: "Días", value: "4" },
      { label: "Tamaño del grupo", value: "Min 1 – Max 16" },
      { label: "Edades", value: "Min 15" },
      { label: "Tema", value: "Naturaleza; Cultural" },
      { label: "Estilo", value: "Original" },
      // { label: "Puntuación física", value: 2 },
    ],
  },
  whyYoullLoveThis: [
    "Atraviesa el lago navegable más alto del mundo. Fluye con las aguas azules y la rica fauna y flora del Lago Titicaca. ¡Observa algunas de las especies endémicas de peces del Lago Titicaca!",
    "Conecta con la mística Isla del Sol, el lugar de nacimiento de la civilización Inca, donde la historia de Bolivia se entrelaza con mitos y leyendas ancestrales.",
    "Sumérgete en la auténtica cultura de Bolivia, aprecia la arquitectura de Copacabana, interactúa con sus artesanos locales y déjate seducir por los sabores de la gastronomía andina.",
    "Libérate del estrés y relájate en la Isla de la Luna, el santuario de la tranquilidad. Descubre el Templo de las Vírgenes del Sol y siente la conexión ancestral en un entorno de belleza inigualable, ideal para la introspección.",
  ],
  
  inclusions: {
    meals: 
      "3 desayunos, 4 almuerzos (incluyendo un auténtico almuerzo Tipo Apthapi), 2 cenas.",
    transport: "Bus turístico (La Paz - Copacabana - La Paz), Bote comunitario (Copacabana - Isla del Sol - Isla de la Luna - Copacabana), Transporte local (Yampupata - Copacabana).",
    accommodation: "Hotel (1 noche en Copacabana), Hotel (1 noche en Isla del Sol), Albergue (1 noche en Isla de la Luna).",
    includedActivities: [
      "Recojo desde tu hotel en La Paz.",
      "Servicio de guiaje en español o inglés.",
      "Viaje en bus turístico de La Paz a Copacabana.",
      "Visita cultural por Copacabana: Iglesia de la Virgen de Copacabana, mercado local y El Calvario.",
      "Viaje en bote comunitario a la Isla del Sol.",
      "Visita a los restos arqueológicos de Pilkokaina (Templo del Inca).",
      "Caminata a Yumani.",
      "Visita a la Escalinata del Inca.",
      "Visita a la Fuente de la Juventud.",
      "Visita al Templo del Sol.",
      "Viaje en bote comunitario a la Isla de la Luna.",
      "Visita al Templo de las Vírgenes.",
      "Caminata al albergue en Isla de la Luna.",
      "Viaje en bote comunitario de Isla de la Luna a Yampupata.",
      "Transporte de Yampupata a Copacabana.",
      "Viaje en bus de Copacabana a La Paz o Puno (según tu elección).",
    ],
    optionalActivities: [
      "Visita a un museo local",
    ]
  },
  
  isThisTripRightForYou: [
    "Los destinos visitados se encuentran en altitudes elevadas, el Lago Titicaca a 3.812 metros sobre el nivel del mar. Es importante considerar que, algunas personas pueden experimentar mal de altura, independientemente de la edad o condición física. Te recomendamos consultar a tu médico y prepararte adecuadamente antes de tu visita.",
    "Las condiciones climáticas en la región varían. El clima en Copacabana Bolivia, puede ser frío, especialmente por las noches, por lo que es esencial empacar ropa abrigadora en todas las estaciones.",
    "Se realizarán caminatas moderadas en las islas, con senderos irregulares y pendientes. Se recomienda utilizar un calzado adecuado para disfrutar plenamente de las exploraciones.",
    "Si planeas viajar a Bolivia desde Perú, asegúrate de tener la documentación necesaria. El itinerario ofrece una opción de retorno hacia Puno, dada la facilidad de desplazamiento entre regiones.",
  ],
 
  importantNotes: [
    "Como requisitos de viaje a Bolivia es crucial que tu pasaporte esté vigente. Asegúrate de verificar cualquier necesidad de visado según tu nacionalidad.",
    "La moneda de Bolivia es el Boliviano (BOB). Se recomienda llevar algo de efectivo (BOB o USD), ya que en zonas rurales y en las islas el acceso a cajeros automáticos es limitado.",
    "El idioma de Bolivia principal es el español, junto con lenguas indígenas como el aymara y el quechua. Aunque tu guía hablará español e inglés, aprender algunas frases básicas es recomendable para elevar tu experiencia.",
  ],
  adventureSection: {
    title: "Aventura 4 Días en Bolivia",
    description: "Explora Copacabana, la Isla del Sol y la Isla de la Luna",
    content: "Emprende un viaje inolvidable por las místicas aguas del Lago Titicaca. Este paquete de 4 días te ofrece una inmersión profunda en el corazón de la cultura andina, con visitas a las sagradas islas del Sol y la Luna.",
    highlights: [
      { text: "Tours guiados", color: "destructive" },
      { text: "Paseos en bote escénicos por el Lago Titicaca", color: "secondary" },
      { text: "Experiencias gastronómicas locales auténticas", color: "accent" },
      { text: "Alojamientos cómodos con vistas al lago", color: "primary" }
    ],
    buttons: [
      { text: "Agendar Videollamada", type: "video", color: "accent" },
      { text: "Chatear por WhatsApp", type: "whatsapp", color: "primary" }
    ],
    whatsapp: {
      number: "+59163084332", // Replace with your actual WhatsApp number
      message: "¡Hola! Me interesa el tour de 4 días a Bolivia (Copacabana, Isla del Sol e Isla de la Luna). ¿Podrían darme más información sobre disponibilidad y precios? ¡Gracias!"
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
    
    const response = await fetchWithRetry(`${API_BASE_URL}/api/itinerary/${packageId}?lang=es`, {
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

// Fallback static reviews (used if API fails)
export const fallbackReviews = {
  reviews: [
    {
      id: 1,
      name: "Sarah Mitchell",
      date: "December 2024",
      rating: 5,
      body: "Absolutely incredible journey! The guides were knowledgeable and passionate. Machu Picchu at sunrise was breathtaking. Every moment was perfectly organized. Highly recommend!"
    },
    {
      id: 2,
      name: "Carlos Rodriguez",
      date: "November 2024", 
      rating: 4,
      body: "Great trip overall. The Inca Trail was challenging but rewarding. Food was good and accommodations were decent. Only wish we had more time in Cusco."
    },
    {
      id: 3,
      name: "Emma Thompson",
      date: "November 2024",
      rating: 5,
      body: "Life-changing experience! The local families we stayed with were so welcoming. The salt flats in Bolivia were otherworldly. Worth every penny!"
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
      body: "Perfect blend of adventure and culture. Our guide Maria was fantastic. The homestay experience was authentic and meaningful. Couldn't ask for more!"
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

// Fallback static itinerary (used if API fails) - matching current hardcoded data
export const fallbackItinerary = {
  package_id: "4days",
  itinerary: [
    {
      day: 1,
      title: "Copacabana, Puerta del Titicaca",
      description: "Tu aventura comienza con un pintoresco viaje desde La Paz hacia Copacabana, corazón andino del Lago Titicaca. Una vez que llegues, te acomodarás y pasarás la tarde explorando los encantos de este pueblo, desde su icónica iglesia hasta su vibrante mercado local, disfrutando de las vistas desde El Calvario. La jornada concluirá con cena y pernocte.",
      accommodation: "Hotel (1 noche)",
      includedActivities: "Viaje en bus turístico de La Paz a Copacabana, Visita a la Iglesia de la Virgen de Copacabana, Exploración del mercado local de Copacabana, Ascenso a El Calvario",
      meals: "Almuerzo, Cena",
      optionalActivities: [
        "Visita a un museo local"
      ],
      specialInfo: ""
    },
    {
      day: 2,
      title: "Isla del Sol, Cuna del Imperio Inca",
      description: "Embárcate en un inolvidable viaje en bote a la Isla del Sol, lugar sagrado donde la historia Inca cobra vida. Explora antiguos templos y ruinas, como Pilkokaina, caminarás por senderos ancestrales hasta Yumani. Déjate sorprender con las vistas espectaculares del lago. Visita la Escalinata del Inca, la Fuente de la Juventud y el Templo del Sol. La cena y pernocte serán en la isla.",
      accommodation: "Hotel en el Lago Titicaca (1 noche)",
      includedActivities: "Viaje en bote comunitario a la Isla del Sol, Visita a los restos arqueológicos de Pilkokaina 'Templo del Inca', Caminata a Yumani, Visita a la Escalinata del Inca, Visita a la Fuente de la Juventud, Visita al Templo del Sol",
      meals: "Desayuno, Almuerzo, Cena",
      optionalActivities: [],
      specialInfo: ""
    },
    {
      day: 3,
      title: "Isla de la Luna, Santuario de Paz",
      description: "Descubre los misterios de la Isla de la Luna. Tras un relajante viaje en bote, explorarás el templo ancestral de las Vírgenes, donde disfrutarás de un auténtico almuerzo tipo Apthapi. La tarde te invita a una caminata tranquila para llegar a tu albergue. Espacio donde el silencio y la brisa del lago marcarán el inicio de una noche reparadora, acompañada de una cena reconfortante y descanso.",
      accommodation: "Albergue (1 noche)",
      includedActivities: "Viaje en bote comunitario a la Isla de la Luna, Visita al Templo de las Vírgenes, Almuerzo tipo Apthapi, Caminata al albergue",
      meals: "Desayuno, Almuerzo (Tipo Apthapi), Cena",
      optionalActivities: [],
      specialInfo: ""
    },
    {
      day: 4,
      title: "Regreso y Despedida del Titicaca",
      description: "Tu último día en el Titicaca comienza con un viaje en bote de regreso, disfrutando una vez más de las vistas panorámicas del lago. Desde Yampupata, un transporte te llevará de vuelta a Copacabana para un almuerzo final antes de emprender tu viaje de regreso en un bus Copacabana-La Paz o, si lo prefieres, continuar tu aventura hacia Puno en Perú.",
      accommodation: "No incluido",
      includedActivities: "Viaje en bote comunitario de Isla de la Luna a Yampupata, Transporte de Yampupata a Copacabana, Viaje en bus de Copacabana a La Paz o Puno",
      meals: "Desayuno, Almuerzo",
      optionalActivities: [],
      specialInfo: ""
    }
  ],
  total_days: 4
};

export type TripData = typeof tripData
