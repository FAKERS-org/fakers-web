import { useTranslation } from "react-i18next"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MotionWrapper } from "@/components/common/MotionWrapper"
import { Icon } from "@/components/common/Icon"
import { solutionsData } from "@/data/solutions"

export function SolutionsGrid() {
  const { t } = useTranslation()

  return (
    <Section className="border-b border-border/50 bg-background">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <MotionWrapper>
              <Badge variant="outline" className="mb-4">
                {t("solutions.badge")}
              </Badge>
            </MotionWrapper>
            <MotionWrapper delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                {t("solutions.title")}
              </h2>
            </MotionWrapper>
            <MotionWrapper delay={0.2}>
              <p className="text-lg text-muted-foreground">
                {t("solutions.subtitle")}
              </p>
            </MotionWrapper>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutionsData.map((solution, index) => (
            <MotionWrapper key={solution.id} delay={0.1 * (index + 1)}>
              <Card className="h-full transition-all duration-300 hover:border-foreground/20 hover:shadow-sm">
                <CardHeader className="pb-4">
                  <Icon name={solution.icon} className="w-8 h-8 stroke-[1.5] text-foreground mb-2" />
                  <CardTitle className="text-lg">{t(solution.titleKey)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(solution.descriptionKey)}
                  </p>
                </CardContent>
              </Card>
            </MotionWrapper>
          ))}
        </div>
      </Container>
    </Section>
  )
}
