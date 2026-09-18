import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { Button } from "@/components/ui/button"
import { MotionWrapper } from "@/components/common/MotionWrapper"

export function CTA() {
  const { t } = useTranslation()

  return (
    <Section className="bg-background">
      <Container>
        <MotionWrapper>
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-16 text-center max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              {t("cta.title")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              {t("cta.subtitle")}
            </p>
            <Button size="lg" className="text-base h-12 px-8" asChild>
              <Link to="/contact">{t("cta.button")}</Link>
            </Button>
          </div>
        </MotionWrapper>
      </Container>
    </Section>
  )
}
