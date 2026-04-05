import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { ProofSection } from "@/components/proof-section"
import { OfferSection } from "@/components/offer-section"
import { QualificationForm } from "@/components/qualification-form"
import { FAQSection } from "@/components/faq-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"

export default function CreditRepairLanding() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ProofSection />
        <OfferSection />
        <QualificationForm />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  )
}
