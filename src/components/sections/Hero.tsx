import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { Button } from "@/components/ui/button"
import { MotionWrapper } from "@/components/common/MotionWrapper"

export function Hero() {
  const { t } = useTranslation()

  return (
    <Section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-border/50">
      {/* Engineering Grid Background */}
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-foreground/[0.04] dark:stroke-foreground/[0.03]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="hero-grid"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path d="M0 32V.5H32" fill="none" strokeDasharray="4 4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>
      
      <Container className="relative z-10 text-center max-w-4xl">
        <MotionWrapper delay={0}>
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-8 transition-colors hover:bg-primary/10 cursor-default">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
            {t("hero.badge")}
          </div>
        </MotionWrapper>

        <MotionWrapper delay={0.1}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
            {t("hero.title")}
          </h1>
        </MotionWrapper>

        <MotionWrapper delay={0.2}>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </p>
        </MotionWrapper>

        <MotionWrapper delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="group w-full sm:w-auto text-base h-12 px-8" asChild>
            <Link to="/solutions">
              {t("hero.primaryCTA")}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-12 px-8 bg-background/50 backdrop-blur-sm" asChild>
            <Link to="/contact">{t("hero.secondaryCTA")}</Link>
          </Button>
        </MotionWrapper>
      </Container>
    </Section>
  )
}
