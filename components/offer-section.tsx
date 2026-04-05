import { Button } from "@/components/ui/button"
import { Check, Zap, ArrowRight, Shield, DollarSign, Briefcase } from "lucide-react"

const personalFundingFeatures = [
  "Access to 0% intro APR cards",
  "Balance transfer opportunities",
  "Personal line of credit options",
  "Strategic lender matching",
  "Inquiry-minimizing strategy",
  "Ongoing support & guidance"
]

const businessFundingFeatures = [
  "Everything in Personal Funding",
  "Business credit building",
  "SBA loan preparation",
  "Business line of credit access"
]

export function OfferSection() {
  return (
    <section id="pricing" className="bg-background py-12 sm:py-20 lg:py-28">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            See How Much You Qualify For
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-pretty text-base text-muted-foreground sm:mt-4 sm:text-lg">
            Whether you need personal capital or business funding, we&apos;ll help you access the money you deserve.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-14 sm:gap-8 md:grid-cols-2">
          {/* Personal Funding */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm sm:rounded-2xl sm:p-8">
            <div className="mb-4 flex items-center gap-3 sm:mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 sm:h-12 sm:w-12 sm:rounded-xl">
                <DollarSign className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground sm:text-xl">Personal Funding</h3>
                <p className="text-sm text-muted-foreground">For individuals with 680+ credit</p>
              </div>
            </div>

            <div className="mb-4 sm:mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-foreground sm:text-5xl">$50K</span>
                <span className="text-muted-foreground">average</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Many clients access $30K–$75K+ in funding.
              </p>
            </div>

            <Button className="mb-6 h-11 w-full text-base font-semibold sm:mb-8 sm:h-12" variant="outline">
              Check Your Approval Amount
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <ul className="space-y-3 sm:space-y-4">
              {personalFundingFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 sm:h-6 sm:w-6">
                    <Check className="h-3 w-3 text-primary sm:h-4 sm:w-4" />
                  </div>
                  <span className="text-sm text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Funding */}
          <div className="relative order-first rounded-xl border-2 border-primary bg-card p-6 shadow-xl sm:rounded-2xl sm:p-8 md:order-last">
            {/* Popular badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-lg sm:-top-4 sm:px-4 sm:text-sm">
              <Zap className="mr-1 inline-block h-3 w-3 sm:h-4 sm:w-4" />
              Maximum Potential
            </div>

            <div className="mb-4 mt-2 flex items-center gap-3 sm:mb-6 sm:mt-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 sm:h-12 sm:w-12 sm:rounded-xl">
                <Briefcase className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground sm:text-xl">Business Funding</h3>
                <p className="text-sm text-muted-foreground">For entrepreneurs & business owners</p>
              </div>
            </div>

            <div className="mb-4 sm:mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-foreground sm:text-5xl">$100K+</span>
                <span className="text-sm text-muted-foreground sm:text-base">potential</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Unlock capital for growth, inventory, or expansion.
              </p>
            </div>

            <Button className="mb-6 h-11 w-full text-base font-semibold shadow-lg shadow-primary/25 sm:mb-8 sm:h-12">
              See Your Business Potential
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <ul className="space-y-3 sm:space-y-4">
              {businessFundingFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 sm:h-6 sm:w-6">
                    <Check className="h-3 w-3 text-primary sm:h-4 sm:w-4" />
                  </div>
                  <span className="text-sm text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 text-muted-foreground sm:mt-12 sm:flex-row sm:flex-wrap sm:gap-6 md:gap-8">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
            <span className="text-sm">Soft Credit Check Only</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
            <span className="text-sm">No Upfront Fees</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
            <span className="text-sm">Results-Based Service</span>
          </div>
        </div>
      </div>
    </section>
  )
}
