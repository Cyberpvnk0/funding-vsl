"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Users, DollarSign, TrendingUp, X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const stats = [
  {
    icon: DollarSign,
    value: "$10M+",
    label: "In Funding Secured"
  },
  {
    icon: Users,
    value: "200+",
    label: "Clients Funded"
  },
  {
    icon: TrendingUp,
    value: "$75K",
    label: "Avg. Funding Amount"
  }
]

const fundingResults = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-02-26_22-31-52-TBsrDAdCNcIcGU3Ghiy2CxkopAmMTP.jpg",
    alt: "Ink Unlimited $75,000 credit limit approval",
    amount: "$75K"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-02-26_22-30-14-icVGAe0nWTBEPcm4ri6RuznXdKREr4.jpg",
    alt: "Ink Unlimited $68,000 credit limit approval",
    amount: "$68K"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-02-26_22-32-11-R4Xtq2N5lQS8w5I4AWP0hTiUEe4R3i.jpg",
    alt: "Ink Unlimited $75,000 credit limit approval",
    amount: "$75K"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-02-26_22-30-11-iSQacdbExd5fWnkeiJEcd0yDoROkTH.jpg",
    alt: "Ink Unlimited $51,000 credit limit approval",
    amount: "$51K"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-02-26_22-30-28-eNn4RfLXixW5dNboMvhhtvFcDaFnSb.jpg",
    alt: "Ink Business Unlimited $51,000 credit limit approval",
    amount: "$51K"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-02-26_22-30-31-0GLlpXL0Zd8rk1ysDfBPqCnN5MakLg.jpg",
    alt: "Ink Business Cash $50,000 credit limit approval",
    amount: "$50K"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-02-26_22-30-08-nwwtTOWJiQhifXQIJKRQzEmvUxYPSe.jpg",
    alt: "Ink Business Cash $50,000 credit limit approval",
    amount: "$50K"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-02-26_22-30-39-O4FJ4CGUxRrIWPhbonOUARYfxznXBv.jpg",
    alt: "Ink Business Unlimited $51,000 credit limit approval with celebration",
    amount: "$51K"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-02-26_22-30-23-xi51TUiO1JNpltrrYgqosVOSEKTJMK.jpg",
    alt: "Ink Business Unlimited $31,500 credit limit approval",
    amount: "$31.5K"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-02-26_22-29-58-T1ttUVz924CMaAK9EEm4DXuv63NMiX.jpg",
    alt: "Ink Preferred $29,500 credit limit approval",
    amount: "$29.5K"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-02-26_22-31-49-5P8N1nh4Gm1h6dFX0AOVt2YYHu6Cof.jpg",
    alt: "Chase Ink Business Cash $21,500 approval confirmation",
    amount: "$21.5K"
  }
]

export function ProofSection() {
  const [selectedImage, setSelectedImage] = useState<typeof fundingResults[0] | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % fundingResults.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + fundingResults.length) % fundingResults.length)
  }, [])

  // Touch handlers for swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    
    const diff = touchStartX.current - touchEndX.current
    const minSwipeDistance = 50
    
    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }
    
    touchStartX.current = null
    touchEndX.current = null
  }

  // Auto-advance every 2 seconds
  useEffect(() => {
    if (isPaused || selectedImage) return
    
    const interval = setInterval(nextSlide, 2000)
    return () => clearInterval(interval)
  }, [isPaused, selectedImage, nextSlide])

  // Get visible slides (show 3 on mobile, 5 on larger screens)
  const getVisibleIndices = () => {
    const indices = []
    for (let i = -2; i <= 2; i++) {
      indices.push((currentIndex + i + fundingResults.length) % fundingResults.length)
    }
    return indices
  }

  const visibleIndices = getVisibleIndices()

  return (
    <section className="bg-card py-12 sm:py-20 lg:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Stats */}
        <div className="mb-10 grid gap-6 rounded-xl border border-border bg-background p-6 sm:mb-16 sm:gap-8 sm:rounded-2xl sm:p-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 sm:mb-3 sm:h-12 sm:w-12 sm:rounded-xl">
                <stat.icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
              </div>
              <div className="text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">{stat.value}</div>
              <div className="text-xs text-muted-foreground sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Results Header */}
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Real Funding. Real Results.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-pretty text-base text-muted-foreground sm:mt-4 sm:text-lg">
            See what our clients have achieved with our strategic funding approach.
          </p>
        </div>

        {/* Carousel */}
        <div 
          className="relative touch-pan-y"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 shadow-lg border border-border text-foreground transition-all hover:bg-primary hover:text-primary-foreground sm:-left-5 sm:h-12 sm:w-12"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 shadow-lg border border-border text-foreground transition-all hover:bg-primary hover:text-primary-foreground sm:-right-5 sm:h-12 sm:w-12"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
          </button>

          {/* Carousel Track */}
          <div className="flex items-center justify-center gap-2 overflow-hidden px-6 sm:gap-4 sm:px-12">
            {visibleIndices.map((index, position) => {
              const result = fundingResults[index]
              const isCenter = position === 2
              const isEdge = position === 0 || position === 4
              const isNearCenter = position === 1 || position === 3
              
              return (
                <button
                  key={`${index}-${position}`}
                  onClick={() => setSelectedImage(result)}
                  className={`group relative aspect-[3/4] flex-shrink-0 overflow-hidden rounded-lg border border-border bg-background shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:rounded-xl
                    ${isCenter 
                      ? 'w-40 xs:w-44 sm:w-56 lg:w-64 scale-100 opacity-100 z-10' 
                      : isEdge 
                        ? 'hidden lg:block w-32 sm:w-40 lg:w-48 scale-90 opacity-50' 
                        : isNearCenter
                          ? 'w-24 xs:w-28 sm:w-44 lg:w-52 scale-95 opacity-75'
                          : 'hidden sm:block w-36 sm:w-44 lg:w-52 scale-95 opacity-75'
                    }
                    hover:shadow-lg hover:border-primary/50
                  `}
                >
                  <Image
                    src={result.src}
                    alt={result.alt}
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 180px, (max-width: 1024px) 250px, 300px"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2 sm:p-4">
                    <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold text-primary-foreground sm:px-3 sm:py-1 sm:text-sm">
                      {result.amount}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Dot Indicators */}
          <div className="mt-6 flex justify-center gap-1.5 sm:mt-8 sm:gap-2">
            {fundingResults.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'w-6 bg-primary' 
                    : 'w-2 bg-border hover:bg-primary/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Backdrop with blur */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          
          {/* Close button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white sm:right-6 sm:top-6 sm:h-12 sm:w-12"
            aria-label="Close image"
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Image container */}
          <div 
            className="relative z-10 max-h-[90vh] max-w-3xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={600}
              height={800}
              className="h-auto max-h-[85vh] w-auto rounded-2xl object-contain"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6">
              <span className="rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground sm:px-4 sm:py-1.5 sm:text-base">
                {selectedImage.amount} Approved
              </span>
            </div>
          </div>

          {/* Click anywhere to close hint */}
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/60 sm:bottom-6">
            Click anywhere to close
          </p>
        </div>
      )}
    </section>
  )
}
