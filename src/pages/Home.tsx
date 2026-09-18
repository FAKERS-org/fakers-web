import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { ServicesGrid } from "@/components/sections/ServicesGrid"
import { SolutionsGrid } from "@/components/sections/SolutionsGrid"
import { Process } from "@/components/sections/Process"
import { CTA } from "@/components/sections/CTA"
import { SEO } from "@/components/common/SEO"

export function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SEO />
      <Header />
      <main className="flex-1">
        <Hero />
        <ServicesGrid />
        <SolutionsGrid />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
