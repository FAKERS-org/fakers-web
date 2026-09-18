import { Link } from "react-router-dom"
import { Container } from "./Container"
import { Logo } from "@/components/common/Logo"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-border/50 bg-background text-sm">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
              <Logo />
              <p className="text-muted-foreground mt-2 max-w-xs">
                Independent IT and Applied AI Services Solution Provider.
              </p>
            </div>
            
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-foreground">Services</h3>
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Managed IT</Link>
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Applied AI</Link>
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Cloud Infrastructure</Link>
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Cybersecurity</Link>
            </div>
            
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-foreground">Company</h3>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              <Link to="/solutions" className="text-muted-foreground hover:text-primary transition-colors">Solutions</Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
              <Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link>
            </div>
            
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-foreground">Legal</h3>
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-xs">
              &copy; {currentYear} FAKERS Organization. All rights reserved.
            </p>
            <div className="flex gap-4">
              {/* Social icons could go here */}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
