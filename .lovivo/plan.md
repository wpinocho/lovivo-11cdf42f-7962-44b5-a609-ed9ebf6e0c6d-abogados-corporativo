# Store Plan — J/A Abogados y Consultores
(This file is automatically updated by Lovivo AI to maintain context across sessions)

## Current State
**Type:** Law Firm Website (Firma Legal Corporativa) built on Lovivo ecommerce template  
**Brand:** J/A Abogados y Consultores — "Justice by Attorneys" — Lima, Perú  
**Instagram:** @corporativoja  
**Founder:** Javier Araujo U.

## Design System
- **Palette:** Deep Dark Navy (`216 48% 8%`) + Champagne Gold (`42 58% 52%`) + Cream foreground (`42 35% 90%`)
- **Typography:** Playfair Display (headings, h1-h6 via CSS base) + Inter (body, font-inter class)
- **Radius:** 0.125rem (sharp, legal/corporate aesthetic)
- **Hero image:** `/hero-law.jpg` (dramatic law library interior)
- **Logo:** `/logo.png` (JA gold monogram on black)
- **About image:** `/about-law.jpg` (scales of justice, desk)

## Recent Changes (Session 1 — Complete Homepage)
- ✅ `src/index.css` — Full dark navy + gold design system
- ✅ `src/components/LawHeroSection.tsx` — Full-screen cinematic hero
- ✅ `src/components/LawServicesSection.tsx` — 6 practice areas grid
- ✅ `src/components/LawTrustSection.tsx` — Stats: 20+, 300+, 500+, ISO
- ✅ `src/components/LawAboutSection.tsx` — Founder Javier Araujo profile
- ✅ `src/components/LawCTASection.tsx` — Contact + Vision/Mission + Quote
- ✅ `src/pages/ui/IndexUI.tsx` — Full homepage composition (full-width layout)
- ✅ `src/templates/EcommerceTemplate.tsx` — Law firm header/footer
- ✅ `src/templates/PageTemplate.tsx` — No py-6 for full-width layout
- ✅ `src/components/BrandLogoLeft.tsx` — JA logo with subtitle
- ✅ `src/components/ui/ProductCardUI.tsx` — Semantic color tokens
- ✅ `src/components/CollectionCard.tsx` — Semantic color tokens
- ✅ `src/components/NewsletterSection.tsx` — Law firm text (Boletín Jurídico)
- ✅ `index.html` — SEO meta tags for law firm
- ✅ 4 legal service products created in DB

## Products Created
1. Consulta Legal Inicial — S/. 300
2. Asesoría Derecho Ambiental — S/. 800
3. Auditoría Legal SSO / Trinorma — S/. 1,200
4. Consultoría Empresarial Corporativa — S/. 1,500

## User Preferences
- Language: Spanish
- Store: Professional law firm, NOT generic e-commerce
- Branding: Authoritative, elegant, dark navy + gold
- Target: Corporate clients in Peru (mining, energy, environmental sectors)

## Known Issues / Notes
- Contact phone and email in `LawCTASection.tsx` are placeholders — update with real data
- Instagram link in footer goes through SocialLinks component (admin dashboard > Settings > Social)
- Hero image `hero-law.jpg` did not generate in first try (result cleared) — may need regeneration if missing

## Active Plan: Future Sessions
- **Product Detail Pages:** Style `ProductPageUI.tsx` for law firm service detail
- **Blog:** Style `Blog.tsx` and `BlogPost.tsx` with Playfair Display for legal articles
- **Mobile Menu:** Add hamburger menu with slide-out nav for mobile
- **Testimonials Section:** Add client testimonials block on homepage
- **Real contact form:** Replace static contact info with functional contact form
- **Google Fonts preconnect:** Add to index.html for performance
- **WhatsApp CTA:** Add floating WhatsApp button for easy client contact