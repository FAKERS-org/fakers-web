import { useTranslation } from "react-i18next"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { Badge } from "@/components/ui/badge"
import { MotionWrapper } from "@/components/common/MotionWrapper"
import { processData } from "@/data/process"

export function Process() {
  const { t } = useTranslation()

  return (
    <Section className="bg-muted/30 border-b border-border/50">
      <Container>
        <div className="flex flex-col items-center text-center mb-16">
          <MotionWrapper>
            <Badge variant="outline" className="mb-4">
              {t("process.badge")}
            </Badge>
          </MotionWrapper>
          <MotionWrapper delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              {t("process.title")}
            </h2>
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {t("process.subtitle")}
            </p>
          </MotionWrapper>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-px bg-border z-0" />
          
          {processData.map((step, index) => (
            <MotionWrapper key={step.id} delay={0.1 * (index + 1)} className="relative z-10 flex flex-col items-center md:items-start lg:items-center text-center md:text-left lg:text-center">
              <div className="w-12 h-12 rounded-full bg-background border-2 border-primary text-primary flex items-center justify-center font-bold mb-6 mx-auto md:mx-0 lg:mx-auto text-lg shadow-sm">
                {step.stepNumber}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{t(step.titleKey)}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-[250px]">
                {t(step.descriptionKey)}
              </p>
            </MotionWrapper>
          ))}
        </div>
      </Container>
    </Section>
  )
}
