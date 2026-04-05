"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react"

const questions = [
  {
    id: "score",
    question: "What is your current credit score range?",
    options: [
      { value: "below-650", label: "Below 650" },
      { value: "650-680", label: "650 - 680" },
      { value: "680-720", label: "680 - 720" },
      { value: "720-750", label: "720 - 750" },
      { value: "750-800", label: "750 - 800" },
      { value: "above-800", label: "Above 800" }
    ]
  },
  {
    id: "income",
    question: "What is your annual income?",
    options: [
      { value: "under-40k", label: "Under $40,000" },
      { value: "40k-60k", label: "$40,000 - $60,000" },
      { value: "60k-80k", label: "$60,000 - $80,000" },
      { value: "80k-100k", label: "$80,000 - $100,000" },
      { value: "100k-150k", label: "$100,000 - $150,000" },
      { value: "above-150k", label: "Above $150,000" }
    ]
  },
  {
    id: "business",
    question: "Do you own a business or plan to start one?",
    options: [
      { value: "established", label: "Yes, established business (2+ years)" },
      { value: "new", label: "Yes, newer business (under 2 years)" },
      { value: "planning", label: "Planning to start a business" },
      { value: "personal-only", label: "No, personal funding only" }
    ]
  },
  {
    id: "goal",
    question: "How much funding are you looking to secure?",
    options: [
      { value: "under-25k", label: "Under $25,000" },
      { value: "25k-50k", label: "$25,000 - $50,000" },
      { value: "50k-75k", label: "$50,000 - $75,000" },
      { value: "75k-100k", label: "$75,000 - $100,000" },
      { value: "above-100k", label: "Above $100,000" }
    ]
  }
]

export function QualificationForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [isComplete, setIsComplete] = useState(false)

  const handleSelect = (value: string) => {
    const newAnswers = { ...answers, [questions[currentStep].id]: value }
    setAnswers(newAnswers)
    
    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300)
    } else {
      setIsComplete(true)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const progress = ((currentStep + 1) / questions.length) * 100

  if (isComplete) {
    return (
      <section id="qualify" className="bg-card py-12 sm:py-20 lg:py-28">
        <div className="container mx-auto max-w-2xl px-4">
          <div className="rounded-xl border border-primary/20 bg-background p-6 text-center shadow-xl sm:rounded-2xl sm:p-8">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary sm:mb-6 sm:h-16 sm:w-16">
              <CheckCircle className="h-7 w-7 text-primary-foreground sm:h-8 sm:w-8" />
            </div>
            <h2 className="mb-2 text-xl font-bold text-foreground sm:text-2xl">
              You May Qualify for Funding!
            </h2>
            <p className="mb-6 text-sm text-muted-foreground sm:mb-8 sm:text-base">
              Based on your answers, you could be eligible for $50K–$100K+ in funding. 
              Book a call with our team to review your personalized funding strategy.
            </p>
            <Button size="lg" className="h-12 w-full px-6 text-base font-semibold shadow-lg shadow-primary/25 sm:h-14 sm:w-auto sm:px-8 sm:text-lg">
              Book Your Strategy Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="mt-4 text-xs text-muted-foreground">
              No obligation. We&apos;ll review your profile and discuss your options.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="qualify" className="bg-card py-12 sm:py-20 lg:py-28">
      <div className="container mx-auto max-w-2xl px-4">
        <div className="rounded-xl border border-border bg-background p-5 shadow-xl sm:rounded-2xl sm:p-8">
          {/* Progress bar */}
          <div className="mb-6 sm:mb-8">
            <div className="mb-2 flex items-center justify-between text-xs sm:text-sm">
              <span className="text-muted-foreground">Question {currentStep + 1} of {questions.length}</span>
              <span className="font-medium text-primary">{Math.round(progress)}% Complete</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-secondary">
              <div 
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <h2 className="mb-5 text-center text-lg font-bold text-foreground sm:mb-6 sm:text-2xl">
            {questions[currentStep].question}
          </h2>

          {/* Options */}
          <div className="grid gap-2 sm:grid-cols-2 sm:gap-3">
            {questions[currentStep].options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className={`rounded-lg border-2 px-4 py-3 text-left transition-all hover:border-primary hover:bg-primary/5 sm:rounded-xl sm:py-4 ${
                  answers[questions[currentStep].id] === option.value
                    ? "border-primary bg-primary/5"
                    : "border-border"
                }`}
              >
                <span className="text-sm font-medium text-foreground sm:text-base">{option.label}</span>
              </button>
            ))}
          </div>

          {/* Navigation */}
          {currentStep > 0 && (
            <div className="mt-5 flex justify-center sm:mt-6">
              <Button variant="ghost" onClick={handleBack} className="text-sm sm:text-base">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
