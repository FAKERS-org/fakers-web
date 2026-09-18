import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { SolutionsGrid } from "@/components/sections/SolutionsGrid"
import { CTA } from "@/components/sections/CTA"
import { SEO } from "@/components/common/SEO"
import { useTranslation } from "react-i18next"

export function Solutions() {
  const { t } = useTranslation()
  return (
    <div className="flex min-h-screen flex-col">
      <SEO title={t("nav.solutions")} />
      <Header />
      <main className="flex-1 pt-24">
        <SolutionsGrid />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
