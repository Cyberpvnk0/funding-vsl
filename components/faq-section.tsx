import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Will this affect my credit?",
    answer: "Our initial qualification process uses soft credit checks only, which have zero impact on your credit score. When you move forward with actual applications, those will be hard inquiries — but we strategically time and structure them to minimize any negative effect while maximizing your approvals."
  },
  {
    question: "How fast can I get funded?",
    answer: "Most clients begin receiving funding within 2-4 weeks of starting the process. Some funding sources provide instant approvals, while others like business lines of credit may take a few weeks. We'll give you a realistic timeline based on your specific situation during your strategy call."
  },
  {
    question: "What if I don't qualify?",
    answer: "If your current credit profile doesn't meet the minimum requirements (typically 680+ score), we'll provide guidance on what you can do to improve your situation. We also offer credit repair services to help you build up to funding eligibility."
  },
  {
    question: "Do I need a business to get funding?",
    answer: "No! We offer both personal and business funding options. Personal funding is available to individuals with good credit who want access to capital for any purpose — investments, major purchases, debt consolidation, or even starting a business. Business funding is available if you have an established or newer business."
  },
  {
    question: "What's the minimum credit score needed?",
    answer: "For our funding program, we typically work with clients who have a 680+ credit score. This ensures you'll have access to the best rates and highest approval chances. If your score is below this, we recommend starting with our credit improvement services first."
  },
  {
    question: "Is there an upfront fee?",
    answer: "We operate on a results-based model. There are no upfront fees to get started or to go through the qualification process. Our team will explain all costs and how they work during your strategy call — no surprises."
  }
]

export function FAQSection() {
  return (
    <section className="bg-background py-12 sm:py-20 lg:py-28">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="text-center">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-pretty text-base text-muted-foreground sm:mt-4 sm:text-lg">
            Get answers to common questions about our funding services.
          </p>
        </div>

        <div className="mt-8 sm:mt-12">
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="rounded-lg border border-border bg-card px-4 data-[state=open]:border-primary/30 sm:rounded-xl sm:px-6"
              >
                <AccordionTrigger className="text-left text-sm font-semibold hover:no-underline sm:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
