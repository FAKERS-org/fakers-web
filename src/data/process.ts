export interface ProcessStep {
  id: string
  stepNumber: string
  titleKey: string
  descriptionKey: string
}

export const processData: ProcessStep[] = [
  {
    id: "discovery",
    stepNumber: "01",
    titleKey: "process.discovery.title",
    descriptionKey: "process.discovery.description",
  },
  {
    id: "architecture",
    stepNumber: "02",
    titleKey: "process.architecture.title",
    descriptionKey: "process.architecture.description",
  },
  {
    id: "implementation",
    stepNumber: "03",
    titleKey: "process.implementation.title",
    descriptionKey: "process.implementation.description",
  },
  {
    id: "optimization",
    stepNumber: "04",
    titleKey: "process.optimization.title",
    descriptionKey: "process.optimization.description",
  },
]
