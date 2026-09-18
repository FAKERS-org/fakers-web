import {
  BrainCircuit,
  Cloud,
  ShieldCheck,
  ServerCog,
  Landmark,
  Activity,
  ShoppingCart,
  Truck,
  LucideProps,
} from "lucide-react"

const iconMap = {
  BrainCircuit,
  Cloud,
  ShieldCheck,
  ServerCog,
  Landmark,
  Activity,
  ShoppingCart,
  Truck,
}

export type IconName = keyof typeof iconMap

interface IconProps extends LucideProps {
  name: string
}

export function Icon({ name, ...props }: IconProps) {
  const LucideIcon = iconMap[name as IconName]

  if (!LucideIcon) {
    return null
  }

  return <LucideIcon {...props} />
}
