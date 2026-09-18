export interface SolutionItem {
  id: string
  icon: string
  titleKey: string
  descriptionKey: string
}

export const solutionsData: SolutionItem[] = [
  {
    id: "finance",
    icon: "Landmark",
    titleKey: "solutions.finance.title",
    descriptionKey: "solutions.finance.description",
  },
  {
    id: "healthcare",
    icon: "Activity",
    titleKey: "solutions.healthcare.title",
    descriptionKey: "solutions.healthcare.description",
  },
  {
    id: "retail",
    icon: "ShoppingCart",
    titleKey: "solutions.retail.title",
    descriptionKey: "solutions.retail.description",
  },
  {
    id: "logistics",
    icon: "Truck",
    titleKey: "solutions.logistics.title",
    descriptionKey: "solutions.logistics.description",
  },
]
