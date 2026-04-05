import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/evolve-funding-logo.png" 
              alt="Evolve Funding" 
              width={160} 
              height={42}
              className="h-9 w-auto"
            />
          </Link>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground">Terms of Service</Link>
            <Link href="#" className="hover:text-foreground">Contact Us</Link>
          </nav>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Evolve Funding. All rights reserved.
          </p>
          <p className="mt-2 text-xs">
            Credit repair services are performed in accordance with the Credit Repair Organizations Act (CROA). 
            Individual results may vary.
          </p>
        </div>
      </div>
    </footer>
  )
}
