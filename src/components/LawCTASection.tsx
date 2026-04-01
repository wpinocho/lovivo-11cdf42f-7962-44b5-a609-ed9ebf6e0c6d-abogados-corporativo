import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Eye, Target } from 'lucide-react'

/**
 * J/A Abogados y Consultores — CTA + Contact + Vision/Mission Section
 */

const contactItems = [
  { icon: Phone,  label: 'Teléfono', value: '+51 (01) 000-0000' },
  { icon: Mail,   label: 'Email',    value: 'contacto@jaabogadosyconsultores.com' },
  { icon: MapPin, label: 'Oficina',  value: 'San Borja, Lima, Perú' },
]

export const LawCTASection = () => {
  return (
    <section id="contacto" className="py-24 bg-secondary/20" aria-labelledby="cta-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Contact Info Column */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-primary/60" />
              <span className="font-inter text-primary text-xs font-medium tracking-[0.4em] uppercase">
                Contáctenos
              </span>
            </div>

            <h2
              id="cta-heading"
              className="font-playfair text-3xl sm:text-4xl font-bold text-foreground mb-4 law-divider"
            >
              ¿Necesita Asesoría Legal Especializada?
            </h2>

            <p className="font-inter text-muted-foreground leading-relaxed mb-10 mt-6 text-sm sm:text-base">
              Nuestro equipo está disponible para brindarle la asesoría que su empresa
              necesita. Contáctenos hoy y proteja su organización con soluciones legales
              integrales de la más alta calidad.
            </p>

            {/* Contact details */}
            <address className="not-italic space-y-5 mb-10">
              {contactItems.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="h-11 w-11 border border-primary/40 flex items-center justify-center shrink-0 hover:bg-primary/10 transition-colors duration-200">
                    <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-inter text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                      {label}
                    </div>
                    <div className="font-inter text-foreground text-sm">{value}</div>
                  </div>
                </div>
              ))}
            </address>

            <Button
              size="lg"
              asChild
              className="font-inter text-xs font-semibold tracking-[0.25em] uppercase px-10"
            >
              <a
                href="https://jaabogadosyconsultores.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar Consulta Ahora
              </a>
            </Button>
          </div>

          {/* Vision, Mission & Quote Column */}
          <div className="flex flex-col gap-6">

            {/* Vision */}
            <div className="border border-border p-8 hover:border-primary/50 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
                <h3 className="font-playfair text-xl font-semibold text-foreground">
                  Nuestra Visión
                </h3>
              </div>
              <p className="font-inter text-muted-foreground leading-relaxed text-sm">
                Ser reconocida como una Firma de Abogados que brinda soluciones legales
                integrales, siendo referentes en el mercado legal por nuestros valores,
                compromiso y profesionalismo óptimo.
              </p>
            </div>

            {/* Mission */}
            <div className="border border-primary/40 p-8 bg-primary/5 hover:bg-primary/10 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
                <h3 className="font-playfair text-xl font-semibold text-foreground">
                  Nuestra Misión
                </h3>
              </div>
              <p className="font-inter text-muted-foreground leading-relaxed text-sm">
                Brindamos servicios legales especializados con altos estándares de calidad,
                diseñando sistemas y procedimientos que compatibilizan criterios técnico-legales
                y económicos en la prestación de nuestros servicios profesionales.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="border-l-2 border-primary pl-6 py-2">
              <p className="font-playfair text-lg italic text-foreground/80 leading-relaxed">
                "Brindando la excelencia que su organización merece."
              </p>
              <footer className="font-inter text-xs text-muted-foreground uppercase tracking-[0.2em] mt-3">
                — J/A Abogados y Consultores
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}