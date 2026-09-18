import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Process } from "@/components/sections/Process"
import { CTA } from "@/components/sections/CTA"
import { SEO } from "@/components/common/SEO"
import { useTranslation } from "react-i18next"

export function About() {
  const { t } = useTranslation()
  return (
    <div className="flex min-h-screen flex-col">
      <SEO title={t("nav.about")} />
      <Header />
      <main className="flex-1 pt-24">
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
