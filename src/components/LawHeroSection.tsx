import { Button } from '@/components/ui/button'
import { ChevronDown, Scale } from 'lucide-react'

/**
 * J/A Abogados y Consultores — Hero Section
 * Full-screen dramatic law library background with cinematic overlay
 */
export const LawHeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="J/A Abogados y Consultores — Firma Legal Corporativa, Lima, Perú"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: 'url(/hero-law.jpg)' }}
        role="img"
        aria-label="Biblioteca jurídica de J/A Abogados y Consultores"
      />

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/55 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/30" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-36">

        {/* Pre-heading */}
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
          <div className="h-px w-16 bg-primary/70" />
          <div className="flex items-center gap-2">
            <Scale className="h-3.5 w-3.5 text-primary" />
            <span className="font-inter text-primary text-xs font-medium tracking-[0.4em] uppercase">
              Justice by Attorneys
            </span>
            <Scale className="h-3.5 w-3.5 text-primary" />
          </div>
          <div className="h-px w-16 bg-primary/70" />
        </div>

        {/* Main Heading */}
        <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.15] mb-8 animate-fade-in-up">
          Soluciones Legales{' '}
          <br className="hidden sm:block" />
          <em className="not-italic text-primary">Integrales</em>{' '}
          para su
          <br className="hidden sm:block" /> Organización
        </h1>

        {/* Subtitle */}
        <p className="font-inter text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up">
          Asesoría especializada en derecho ambiental, minero, laboral y
          cumplimiento normativo — con los más altos estándares de calidad.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
          <Button
            size="lg"
            className="font-inter text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase px-10 py-6 min-w-52"
            asChild
          >
            <a href="#contacto">Agendar Consulta</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="font-inter text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase px-10 py-6 min-w-52"
            asChild
          >
            <a href="#servicios">Áreas de Práctica</a>
          </Button>
        </div>

        {/* Trust pills */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 animate-fade-in">
          {['Derecho Ambiental', 'Derecho Minero', 'SSO & Laboral', 'Auditoría Legal'].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-muted-foreground/60">
              <div className="h-1 w-1 rounded-full bg-primary" />
              <span className="font-inter text-xs tracking-wide">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground/40 animate-bounce">
        <ChevronDown className="h-5 w-5" />
      </div>
    </section>
  )
}