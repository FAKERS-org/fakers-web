import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu } from "lucide-react"

import { Container } from "./Container"
import { Logo } from "@/components/common/Logo"
import { ThemeToggle } from "@/components/common/ThemeToggle"
import { LanguageSwitcher } from "@/components/common/LanguageSwitcher"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  // const { t } = useTranslation()

  // Note: These will map to translation files later, using fallback text for now.
  const navigation = [
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-200",
        isScrolled
          ? "border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "border-transparent bg-background"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Logo />
            <nav className="hidden md:flex items-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    location.pathname === item.href
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2 mr-2">
              <LanguageSwitcher />
              <ThemeToggle />
              <div className="ml-2 h-4 w-px bg-border hidden sm:block" />
              <Button asChild className="hidden md:inline-flex h-9" variant="default">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>

            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="flex flex-col">
                <SheetHeader>
                  <SheetTitle className="text-left"><Logo /></SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-8 flex-1">
                  <nav className="flex flex-col gap-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className={cn(
                          "text-lg font-medium transition-colors hover:text-primary",
                          location.pathname === item.href
                            ? "text-foreground"
                            : "text-muted-foreground"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                  
                  <div className="mt-auto flex flex-col gap-4 pb-8">
                    <div className="flex items-center gap-4">
                      <LanguageSwitcher />
                      <ThemeToggle />
                    </div>
                    <Button asChild className="w-full">
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  )
}
