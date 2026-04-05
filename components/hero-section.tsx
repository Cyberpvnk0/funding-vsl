"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
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

          {/* VSL Video Placeholder */}
          <div className="mt-8 w-full max-w-3xl sm:mt-10">
            <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-card shadow-xl sm:rounded-2xl">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                <button 
                  className="group flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg transition-transform hover:scale-105 sm:h-20 sm:w-20"
                  aria-label="Play video"
                >
                  <Play className="h-6 w-6 fill-primary-foreground text-primary-foreground transition-transform group-hover:scale-110 sm:h-8 sm:w-8" />
                </button>
              </div>
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between rounded-lg bg-card/90 px-3 py-2 backdrop-blur-sm sm:bottom-4 sm:left-4 sm:right-4 sm:px-4 sm:py-3">
                <span className="text-xs font-medium text-foreground sm:text-sm">Watch: How to Access $50K–$100K+ in Funding</span>
                <span className="text-xs text-muted-foreground">4:12</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex w-full flex-col items-center gap-4 px-4 sm:mt-10 sm:w-auto sm:flex-row sm:px-0">
            <Button size="lg" className="h-12 w-full px-6 text-base font-semibold shadow-lg shadow-primary/25 sm:h-14 sm:w-auto sm:px-8 sm:text-lg">
              See How Much You Qualify For
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Micro text */}
          <p className="mt-4 text-sm text-muted-foreground">
            Soft checks only. No impact to your credit.
          </p>

          {/* Secondary link */}
          <Link 
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
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
