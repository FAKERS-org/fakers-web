import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { CTA } from "@/components/sections/CTA"
import { SEO } from "@/components/common/SEO"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"

export function Contact() {
  const { t } = useTranslation()
  return (
    <div className="flex min-h-screen flex-col">
      <SEO title={t("nav.contact")} />
      <Header />
      <main className="flex-1 pt-24">
        <Section>
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight mb-4 text-foreground">{t("nav.contact")}</h1>
              <p className="text-lg text-muted-foreground mb-8">
                {t("cta.subtitle")}
              </p>
              
              <form className="flex flex-col gap-4 text-left max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input id="name" type="text" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input id="email" type="email" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="john@example.com" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea id="message" className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="How can we help?" />
                </div>
                <Button type="submit" className="mt-2 w-full">Send Message</Button>
              </form>
            </div>
          </Container>
        </Section>
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
