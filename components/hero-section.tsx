"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Volume2, VolumeX, Loader2 } from "lucide-react"
import Link from "next/link"
import { LeadCaptureForm } from "@/components/lead-capture-form"
import { useState, useRef, useEffect } from "react"

export function HeroSection() {
  const [isMuted, setIsMuted] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [videoUrl, setVideoUrl] = useState<string | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Fetch the signed URL for the video
    fetch('/api/video', { redirect: 'follow' })
      .then(res => {
        if (res.redirected) {
          setVideoUrl(res.url)
        }
      })
      .catch(err => console.error('Error fetching video URL:', err))
  }, [])

  const handleToggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !isMuted
      videoRef.current.muted = newMutedState
      setIsMuted(newMutedState)
    }
  }

  const handleVideoLoaded = () => {
    setIsLoading(false)
  }

  return (
    <section className="relative overflow-hidden bg-background py-12 sm:py-20 lg:py-32">
      {/* Subtle background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container relative mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            $10M+ in funding secured for 200+ clients
          </div>

          {/* Headline */}
          <h1 className="max-w-4xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Access $50K–$100K+ in Personal or Business Funding
          </h1>

          {/* Subheadline */}
          <p className="mt-4 max-w-2xl text-pretty text-base text-muted-foreground sm:mt-6 sm:text-lg md:text-xl">
            Our guided funding system matches you with the right lenders, structures your 
            applications strategically, and helps you secure the capital you deserve.
          </p>

          {/* VSL Video */}
          <div className="mt-8 w-full max-w-3xl sm:mt-10">
            <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-card shadow-xl sm:rounded-2xl">
              {/* Loading state */}
              {isLoading && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-muted">
                  <Loader2 className="h-12 w-12 animate-spin text-primary" />
                </div>
              )}
              
              {videoUrl && (
                <video
                  ref={videoRef}
                  src={videoUrl}
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  onLoadedData={handleVideoLoaded}
                  onCanPlay={handleVideoLoaded}
                />
              )}
              
              {/* Mute/Unmute button - always visible in corner */}
              {!isLoading && (
                <button 
                  className="absolute bottom-4 right-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black/70 text-white shadow-lg transition-transform hover:scale-105 sm:h-14 sm:w-14"
                  onClick={handleToggleMute}
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? (
                    <VolumeX className="h-5 w-5 sm:h-6 sm:w-6" />
                  ) : (
                    <Volume2 className="h-5 w-5 sm:h-6 sm:w-6" />
                  )}
                </button>
              )}
              
              {/* Large center unmute prompt - only shown when muted */}
              {!isLoading && isMuted && (
                <div 
                  className="absolute inset-0 flex cursor-pointer items-center justify-center"
                  onClick={handleToggleMute}
                >
                  <div className="group flex h-20 w-20 items-center justify-center rounded-full bg-primary shadow-lg transition-transform hover:scale-105 sm:h-28 sm:w-28">
                    <Volume2 className="h-8 w-8 text-primary-foreground transition-transform group-hover:scale-110 sm:h-12 sm:w-12" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex w-full flex-col items-center gap-4 px-4 sm:mt-10 sm:w-auto sm:flex-row sm:px-0">
            <LeadCaptureForm>
              <Button size="lg" className="h-12 w-full px-6 text-base font-semibold shadow-lg shadow-primary/25 sm:h-14 sm:w-auto sm:px-8 sm:text-lg">
                See How Much You Qualify For
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </LeadCaptureForm>
          </div>

          {/* Micro text */}
          <p className="mt-4 text-sm text-muted-foreground">
            Soft checks only. No impact to your credit.
          </p>

          {/* Secondary link */}
          <Link 
            href="/credit-repair"
            className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            Need to improve your credit first? Start here
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
