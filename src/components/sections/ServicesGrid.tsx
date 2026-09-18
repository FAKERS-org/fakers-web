import { useTranslation } from "react-i18next"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MotionWrapper } from "@/components/common/MotionWrapper"
import { Icon } from "@/components/common/Icon"
import { servicesData } from "@/data/services"

export function ServicesGrid() {
  const { t } = useTranslation()

  return (
    <Section className="bg-muted/30 border-b border-border/50">
      <Container>
        <div className="flex flex-col items-center text-center mb-16">
          <MotionWrapper>
            <Badge variant="outline" className="mb-4">
              {t("services.badge")}
            </Badge>
          </MotionWrapper>
          <MotionWrapper delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              {t("services.title")}
            </h2>
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {t("services.subtitle")}
            </p>
          </MotionWrapper>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {servicesData.map((service, index) => (
            <MotionWrapper key={service.id} delay={0.1 * (index + 1)}>
              <Card className="h-full transition-all duration-300 hover:border-foreground/30 hover:shadow-md hover:-translate-y-1 bg-background relative overflow-hidden">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg border border-border bg-muted/30 flex items-center justify-center mb-4 text-foreground">
                    <Icon name={service.icon} className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <CardTitle className="text-xl">{t(service.titleKey)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t(service.descriptionKey)}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((featureKey, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2 text-sm text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="opacity-90">{t(featureKey)}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </MotionWrapper>
          ))}
        </div>
      </Container>
    </Section>
  )
}
