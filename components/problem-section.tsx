import { XCircle, TrendingDown, AlertTriangle, HelpCircle } from "lucide-react"

const painPoints = [
  {
    icon: XCircle,
    title: "Not Getting Approved",
    description: "You apply for loans and credit lines, but keep getting rejected — even with decent credit."
  },
  {
    icon: TrendingDown,
    title: "Low Credit Limits",
    description: "Banks offer you $5K when you need $50K. Your credit potential is being wasted."
  },
  {
    icon: AlertTriangle,
    title: "Wrong Lenders, Wrong Timing",
    description: "Applying to the wrong places tanks your score with hard inquiries and gets you nowhere."
  },
  {
    icon: HelpCircle,
    title: "No Clear Strategy",
    description: "You have good credit but no roadmap to leverage it for real funding opportunities."
  }
]

export function ProblemSection() {
  return (
    <section className="bg-card py-12 sm:py-20 lg:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Sound Familiar?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-pretty text-base text-muted-foreground sm:mt-4 sm:text-lg">
            Great credit is only half the battle. Without the right strategy, you&apos;re leaving money on the table.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="group rounded-xl border border-border bg-background p-5 transition-all hover:border-primary/30 hover:shadow-lg sm:rounded-2xl sm:p-6"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10 sm:mb-4 sm:h-12 sm:w-12 sm:rounded-xl">
                <point.icon className="h-5 w-5 text-destructive sm:h-6 sm:w-6" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground sm:text-lg">
                {point.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
