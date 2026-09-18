import { useEffect } from "react"
import { siteConfig } from "@/data/site"

interface SEOProps {
  title?: string
  description?: string
}

export function SEO({ title, description }: SEOProps) {
  useEffect(() => {
    // Update title
    document.title = title ? `${title} | ${siteConfig.name}` : siteConfig.name

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    const desc = description || siteConfig.description
    
    if (metaDescription) {
      metaDescription.setAttribute("content", desc)
    } else {
      const meta = document.createElement("meta")
      meta.name = "description"
      meta.content = desc
      document.head.appendChild(meta)
    }

    // Update Open Graph tags if needed
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute("content", document.title)
    } else {
      const meta = document.createElement("meta")
      meta.setAttribute("property", "og:title")
      meta.content = document.title
      document.head.appendChild(meta)
    }
  }, [title, description])

  return null
}
