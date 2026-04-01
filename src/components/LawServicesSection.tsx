import { Leaf, Mountain, ShieldCheck, Briefcase, ClipboardList, Building2 } from 'lucide-react'

/**
 * J/A Abogados y Consultores — Practice Areas Section
 */

const services = [
  {
    icon: Leaf,
    title: 'Derecho Ambiental',
    description:
      'Cumplimiento de normativas ambientales, gestión de Procedimientos Administrativos Sancionadores y asesoría en legislación ambiental.',
  },
  {
    icon: Mountain,
    title: 'Derecho Minero y Energético',
    description:
      'Asesoría integral en concesiones mineras, titulación, contratos de exploración y explotación, y regulación del sector energético.',
  },
  {
    icon: ShieldCheck,
    title: 'Seguridad y Salud Ocupacional',
    description:
      'Auditorías de SST, implementación de Sistemas de Gestión ISO 45001 y cumplimiento normativo ante el MINTRA.',
  },
  {
    icon: Briefcase,
    title: 'Derecho Laboral',
    description:
      'Relaciones laborales, contratos de trabajo, inspecciones, procedimientos administrativos y gestión contenciosa laboral.',
  },
  {
    icon: ClipboardList,
    title: 'Auditoría Legal',
    description:
      'Auditorías internas de cumplimiento legal ambiental, SST y Sistemas Integrados de Gestión Trinorma (ISO 9001 / 14001 / 45001).',
  },
  {
    icon: Building2,
    title: 'Consultoría Empresarial',
    description:
      'Asesoría estratégica en gobierno corporativo, prevención de riesgos legales y optimización de procesos para su organización.',
  },
]

export const LawServicesSection = () => {
  return (
    <section id="servicios" className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-primary/60" />
            <span className="font-inter text-primary text-xs font-medium tracking-[0.4em] uppercase">
              Especialidades
            </span>
            <div className="h-px w-10 bg-primary/60" />
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground law-divider-center">
            Áreas de Práctica
          </h2>
          <p className="font-inter text-muted-foreground mt-8 max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
            Brindamos servicios legales especializados para satisfacer la creciente
            demanda de la industria con excelencia y compromiso.
          </p>
        </div>

        {/* Grid — seamless border using bg-border gap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service, index) => (
            <article
              key={index}
              className="group bg-card p-8 lg:p-10 hover:bg-secondary/60 transition-all duration-300 cursor-default"
            >
              {/* Icon frame */}
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 border border-primary/30 group-hover:border-primary transition-colors duration-300">
                <service.icon className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>

              <h3 className="font-playfair text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>

              <p className="font-inter text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Animated gold underline */}
              <div className="mt-6 h-px w-0 group-hover:w-full bg-primary transition-all duration-500 ease-out" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}