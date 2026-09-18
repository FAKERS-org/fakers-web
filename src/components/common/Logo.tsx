import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      className={cn(
        "flex items-center gap-2 font-bold tracking-tight text-foreground transition-opacity hover:opacity-90",
        className
      )}
    >
      <div className="flex h-8 w-8 items-center">
        <img className="rounded-full" src="src/assets/logo.png" alt="Logo"></img>
      </div>
      <span className="text-xl">FAKERS</span>
    </Link>
  )
}
