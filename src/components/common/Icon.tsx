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

export function Icon({ name, className, ...props }: IconProps) {
  // Check if it's an image file (e.g., from assets)
  if (name.endsWith(".png") || name.endsWith(".svg")) {
    return (
      <img
        src={`/src/assets/icons/${name}`}
        alt={name}
        className={`${className || ''} dark:invert`}
        style={{ objectFit: 'contain' }}
      />
    )
  }

  const LucideIcon = iconMap[name as IconName]

  if (!LucideIcon) {
    return null
  }

  return <LucideIcon className={className} {...props} />
}
