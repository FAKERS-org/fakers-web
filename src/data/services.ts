export interface ServiceItem {
  id: string
  icon: string
  titleKey: string
  descriptionKey: string
  features: string[]
}

export const servicesData: ServiceItem[] = [
  {
    id: "applied-ai",
    icon: "BrainCircuit",
    titleKey: "services.ai.title",
    descriptionKey: "services.ai.description",
    features: [
      "services.ai.features.0",
      "services.ai.features.1",
      "services.ai.features.2",
    ],
  },
  {
    id: "cloud-infra",
    icon: "Cloud",
    titleKey: "services.cloud.title",
    descriptionKey: "services.cloud.description",
    features: [
      "services.cloud.features.0",
      "services.cloud.features.1",
      "services.cloud.features.2",
    ],
  },
  {
    id: "cybersecurity",
    icon: "ShieldCheck",
    titleKey: "services.security.title",
    descriptionKey: "services.security.description",
    features: [
      "services.security.features.0",
      "services.security.features.1",
      "services.security.features.2",
    ],
  },
  {
    id: "managed-it",
    icon: "ServerCog",
    titleKey: "services.managed.title",
    descriptionKey: "services.managed.description",
    features: [
      "services.managed.features.0",
      "services.managed.features.1",
      "services.managed.features.2",
    ],
  },
]
