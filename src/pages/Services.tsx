import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ServicesGrid } from "@/components/sections/ServicesGrid"
import { CTA } from "@/components/sections/CTA"
import { SEO } from "@/components/common/SEO"
import { useTranslation } from "react-i18next"

export function Services() {
  const { t } = useTranslation()
  return (
    <div className="flex min-h-screen flex-col">
      <SEO title={t("nav.services")} />
      <Header />
      <main className="flex-1 pt-24">
        <ServicesGrid />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
