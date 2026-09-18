import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "@/pages/Home"
import { Services } from "@/pages/Services"
import { Solutions } from "@/pages/Solutions"
import { About } from "@/pages/About"
import { Contact } from "@/pages/Contact"
import { Suspense } from "react"
import { useTranslation } from "react-i18next"

export function App() {
  const { t } = useTranslation()

  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-medium text-muted-foreground">{t("common.loading") || "Loading..."}</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </Suspense>
  )
}
