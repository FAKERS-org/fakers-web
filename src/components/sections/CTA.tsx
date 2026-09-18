import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
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
          <div className="relative bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-16 text-center max-w-4xl mx-auto flex flex-col items-center overflow-hidden">
            {/* Subtle highlight ring behind the content */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
            
            <h2 className="relative z-10 text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              {t("cta.title")}
            </h2>
            <p className="relative z-10 text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              {t("cta.subtitle")}
            </p>
            <Button size="lg" className="group text-base h-12 px-8 relative z-10" asChild>
              <Link to="/contact">
                {t("cta.button")}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </MotionWrapper>
      </Container>
    </Section>
  )
}
