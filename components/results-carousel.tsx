"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const results = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6a497488-4a9a-4f31-ab8a-2b8696beb4e3-nQg1ZcIJvBcNO8TKWVV50JLILH6dzm.jpg",
    alt: "Credit score improvement: Equifax 642 (+72), Experian 571 (+3), TransUnion 640 (+88)",
    highlight: "+72 to +88 points"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8e2fcad9-e0ba-4da3-8ff1-18928650a823-mhjzCp8PA2ly8SQp4U5fhjlwdoo4XY.jpg",
    alt: "Credit score improvement: Equifax 806 (+138), Experian 769 (+63), TransUnion 770 (+64)",
    highlight: "+63 to +138 points"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0b7f00ec-be81-477c-b1a8-3634bd769ba6-ZwPho7xnAgAylBM2bWv8hGJzb8l2ex.jpg",
    alt: "Credit score improvement: Equifax 704 (+159), Experian 657 (+82), TransUnion 653 (+76)",
    highlight: "+76 to +159 points"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9dbdd882-065a-4ded-838c-73ee2b3c9a52-pvBtrNnd9bZwChej9ZC39CluQb1k96.jpg",
    alt: "Credit score improvement: Equifax 747 (+104), Experian 693 (+39), TransUnion 730 (+70)",
    highlight: "+39 to +104 points"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4b7f99a0-6a03-492d-8fb4-f619e9b835d9-LQ3wDxBH21S5PhuQC6dyeZrnE25luS.jpg",
    alt: "Credit score improvement: Equifax 581 (+40), Experian 578 (+41), TransUnion 571 (+40)",
    highlight: "+40 to +41 points"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6ff622c1-17cf-49cb-b2f6-106c16209dec-CRbYxUH2eNVi41dg5yfWINPke4vWk8.jpg",
    alt: "Credit score improvement: Equifax 738 (+37), Experian 736 (+36), TransUnion 745 (+42)",
    highlight: "+36 to +42 points"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2d6c84bf-144f-46ab-99fb-30dc9439cc1a-wu3seTN1jElfSi58OqieSzmRFcM8Gc.jpg",
    alt: "Credit score improvement: Equifax 643 (+44), Experian 639 (+47), TransUnion 634 (+44)",
    highlight: "+44 to +47 points"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/33bdb0ba-d4f0-4524-bc1f-b8c83013d6a9-u2H1jIy0JomFwzzt07q89Y4iWG6ZWw.jpg",
    alt: "Credit score improvement: Equifax 662 (+18), Experian 681 (+66), TransUnion 707 (+25)",
    highlight: "+18 to +66 points"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9e466a03-966c-45ad-8e34-f8353657d9c4-M23qT2ieiPMBDKyTt4VJFP3aAUwQFr.jpg",
    alt: "Credit score improvement: Equifax 575 (+135), Experian 569 (+131), TransUnion 575 (+134)",
    highlight: "+131 to +135 points"
  },
  // New images added
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/263fb224-b52f-4117-88f0-f8ba4adb055d-MS09cBtiYB9KkuOgSGpjJrX9pXlQ56.jpg",
    alt: "Credit score improvement: Equifax 636 (+61), Experian 623 (+74), TransUnion 620 (+53)",
    highlight: "+53 to +74 points"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/89b15b2f-1e6f-4156-8e77-35b91316f4a6-cPvrvJCm0Fqp1yy3ZLStKG68jpDOYh.jpg",
    alt: "Credit score improvement: Equifax 639 (+36), Experian 636 (+41), TransUnion 724 (+77)",
    highlight: "+36 to +77 points"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/41d7a961-c171-405a-8491-8fe7ba1de49c-PxiUVHYQk9PybUvb9uFjIu0Y2dT504.jpg",
    alt: "Credit score improvement: Equifax 688 (+69), Experian 678 (+45), TransUnion 662 (+33)",
    highlight: "+33 to +69 points"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/66f0b381-5c8b-4173-96fe-7e19c92e8e4f-fAjGjRTy0z8qGkPBaMrVdm0xK2jJhh.jpg",
    alt: "Credit score improvement: Equifax 746 (+185), Experian 740 (+164), TransUnion 765 (+198)",
    highlight: "+164 to +198 points"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/50d1600f-6e7e-4cf7-a981-5b6d9f18fa45-ue0Ox0KmNs8DpI2FNrZWquEO03srls.jpg",
    alt: "Credit score improvement: Equifax 689 (+82), Experian 695 (+51), TransUnion 649 (+47)",
    highlight: "+47 to +82 points"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/40d3a411-f66a-40a3-9886-eb9ceb1d1230-eSkfmHt4oAgjDL0K6ap2IZ8e6tGHiZ.jpg",
    alt: "Credit score improvement: Equifax 620 (+28), Experian 665 (+95), TransUnion 729 (+109)",
    highlight: "+28 to +109 points"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/088da151-bda4-45c6-bc52-6bc537142f04-IbMFOjady22dDhQfZyowF0hJY3a9D7.jpg",
    alt: "Credit score improvement: Equifax 714 (+64), Experian 711 (+110), TransUnion 724 (+56)",
    highlight: "+56 to +110 points"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/049fe8c8-29be-49ed-93e5-4f43322386ec-gCWeeJeMMPUttnTLj9fsQuIFsOG8oJ.jpg",
    alt: "Credit score improvement: Equifax 686 (+12), Experian 692 (+109), TransUnion 771 (+188)",
    highlight: "+12 to +188 points"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3327e13f-8416-4528-ae66-43858fba2a75-VIufXlbR1LZ7608NDXWkelvskjBWbh.jpg",
    alt: "Credit score improvement: Equifax 633 (+65), Experian 594 (+70), TransUnion 614 (+98)",
    highlight: "+65 to +98 points"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/58e74962-38f8-4ca0-ab95-36f2f84633b0-PPo7eEXrinq1bfEx1i3WGODjlu9FtQ.jpg",
    alt: "Credit score improvement: Equifax 655 (+116), Experian 623 (+88), TransUnion 655 (+116)",
    highlight: "+88 to +116 points"
  }
]

export function ResultsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % results.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + results.length) % results.length)
  }, [])

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
    setIsPaused(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setIsPaused(false)
  }

  const lightboxNext = () => {
    setLightboxIndex((prev) => (prev + 1) % results.length)
  }

  const lightboxPrev = () => {
    setLightboxIndex((prev) => (prev - 1 + results.length) % results.length)
  }

  // Auto-rotate every 2 seconds
  useEffect(() => {
    if (isPaused || lightboxOpen) return
    
    const interval = setInterval(nextSlide, 2000)
    return () => clearInterval(interval)
  }, [isPaused, lightboxOpen, nextSlide])

  // Handle keyboard navigation in lightbox
  useEffect(() => {
    if (!lightboxOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowRight") lightboxNext()
      if (e.key === "ArrowLeft") lightboxPrev()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxOpen])

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [lightboxOpen])

  // Calculate visible slides based on screen size
  const getVisibleCount = () => {
    if (typeof window === "undefined") return 3
    if (window.innerWidth < 640) return 1
    if (window.innerWidth < 1024) return 2
    return 3
  }

  const [visibleCount, setVisibleCount] = useState(3)

  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(getVisibleCount())
    }
    updateVisibleCount()
    window.addEventListener("resize", updateVisibleCount)
    return () => window.removeEventListener("resize", updateVisibleCount)
  }, [])

  const getVisibleSlides = () => {
    const slides = []
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % results.length
      slides.push({ ...results[index], index })
    }
    return slides
  }

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel */}
      <div className="relative overflow-hidden">
        <div className="flex gap-4 transition-transform duration-500 ease-in-out">
          {getVisibleSlides().map((result, i) => (
            <div 
              key={`${result.index}-${i}`}
              className="w-full shrink-0 cursor-pointer sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]"
              onClick={() => openLightbox(result.index)}
            >
              <div className="group relative overflow-hidden rounded-xl border border-border bg-background shadow-sm transition-all hover:shadow-lg">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={result.src}
                    alt={result.alt}
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-colors group-hover:bg-foreground/10">
                    <span className="rounded-full bg-background/90 px-4 py-2 text-sm font-medium text-foreground opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                      Click to enlarge
                    </span>
                  </div>
                </div>
                {/* Highlight badge */}
                <div className="absolute bottom-3 left-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-lg sm:text-sm">
                  {result.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute -left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background shadow-lg transition-all hover:bg-secondary sm:-left-5 sm:h-12 sm:w-12"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 text-foreground sm:h-6 sm:w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute -right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background shadow-lg transition-all hover:bg-secondary sm:-right-5 sm:h-12 sm:w-12"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 text-foreground sm:h-6 sm:w-6" />
      </button>

      {/* Dots indicator */}
      <div className="mt-6 flex justify-center gap-2">
        {results.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index >= currentIndex && index < currentIndex + visibleCount
                ? "w-6 bg-primary"
                : "w-2 bg-border hover:bg-muted-foreground"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Blurred backdrop */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />
          
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-background/90 shadow-lg transition-all hover:bg-background sm:right-6 sm:top-6"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6 text-foreground" />
          </button>

          {/* Lightbox navigation */}
          <button
            onClick={(e) => { e.stopPropagation(); lightboxPrev() }}
            className="absolute left-2 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 shadow-lg transition-all hover:bg-background sm:left-6 sm:h-14 sm:w-14"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6 text-foreground sm:h-8 sm:w-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); lightboxNext() }}
            className="absolute right-2 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 shadow-lg transition-all hover:bg-background sm:right-6 sm:h-14 sm:w-14"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6 text-foreground sm:h-8 sm:w-8" />
          </button>

          {/* Image container */}
          <div 
            className="relative z-40 max-h-[85vh] max-w-[95vw] overflow-hidden rounded-xl border border-border bg-background shadow-2xl sm:max-w-4xl sm:rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={results[lightboxIndex].src}
                alt={results[lightboxIndex].alt}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 95vw, 896px"
                priority
              />
            </div>
            {/* Caption */}
            <div className="bg-background px-4 py-3 text-center sm:px-6 sm:py-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary sm:text-base">
                {results[lightboxIndex].highlight}
              </span>
              <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
                {lightboxIndex + 1} of {results.length} results
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
