import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

/**
 * J/A Abogados y Consultores — About Founder Section
 */

const credentials = [
  'Graduado por la Universidad San Martín de Porres, Lima, Perú',
  'Postgrado en la Universidad Técnica de Berlín (TU-Berlín), Alemania',
  'Auditor de Sistemas de Gestión SST autorizado por el MINTRA',
  'Experto en ISO 9001, ISO 14001 e ISO 45001 — Trinorma',
  'Docente y ponente en posgrados, diplomados y cursos in company',
]

export const LawAboutSection = () => {
  return (
    <section id="nosotros" className="py-24" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image Column */}
          <div className="relative">
            {/* Decorative offset frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-primary/20 pointer-events-none" />
            <img
              src="/about-law.jpg"
              alt="Escritorio de J/A Abogados y Consultores con balanza de la justicia y libros legales"
              className="relative w-full h-auto object-cover"
              loading="lazy"
              decoding="async"
            />
            {/* Experience badge */}
            <div className="absolute bottom-0 right-0 bg-primary px-7 py-5">
              <div className="font-playfair text-3xl font-bold text-primary-foreground leading-none">20+</div>
              <div className="font-inter text-primary-foreground/80 text-xs uppercase tracking-widest mt-1.5 leading-tight">
                Años de<br />Experiencia
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-primary/60" />
              <span className="font-inter text-primary text-xs font-medium tracking-[0.4em] uppercase">
                Nuestro Fundador
              </span>
            </div>

            <h2 id="about-heading" className="font-playfair text-3xl sm:text-4xl font-bold text-foreground law-divider">
              Javier Araujo U.
            </h2>
            <p className="font-inter text-primary text-xs font-semibold tracking-[0.3em] uppercase mt-6 mb-6">
              Socio Principal &amp; Fundador
            </p>

            <p className="font-inter text-muted-foreground leading-relaxed mb-8 text-sm sm:text-base">
              Abogado especialista en derecho ambiental, minero, laboral y regulatorio
              con más de 20 años de experiencia en asesoría corporativa. Ha liderado
              proyectos de cumplimiento normativo en los sectores más exigentes del Perú,
              combinando rigor técnico-legal con visión estratégica empresarial.
            </p>

            {/* Credentials */}
            <ul className="space-y-3 mb-10" aria-label="Credenciales profesionales de Javier Araujo">
              {credentials.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="font-inter text-foreground/75 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              className="font-inter text-xs font-semibold tracking-[0.25em] uppercase px-10"
            >
              <a href="#contacto">Agendar una Consulta</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}