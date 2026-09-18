import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MotionWrapper } from "@/components/common/MotionWrapper"

export function Hero() {
  const { t } = useTranslation()

  return (
    <Section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-border/50">
      <div className="absolute inset-0 bg-background pointer-events-none" />
      <Container className="relative z-10 text-center max-w-4xl">
        <MotionWrapper delay={0}>
          <Badge variant="secondary" className="mb-6 px-4 py-1 text-sm font-medium">
            {t("hero.badge")}
          </Badge>
        </MotionWrapper>

        <MotionWrapper delay={0.1}>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            {t("hero.title")}
          </h1>
        </MotionWrapper>

        <MotionWrapper delay={0.2}>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </p>
        </MotionWrapper>

        <MotionWrapper delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="w-full sm:w-auto text-base h-12 px-8" asChild>
            <Link to="/solutions">{t("hero.primaryCTA")}</Link>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-12 px-8" asChild>
            <Link to="/contact">{t("hero.secondaryCTA")}</Link>
          </Button>
        </MotionWrapper>
      </Container>
    </Section>
  )
}
