/**
 * J/A Abogados y Consultores — Trust & Stats Section
 */

const stats = [
  { number: '20+',  label: 'Años de\nExperiencia' },
  { number: '300+', label: 'Clientes\nAtendidos' },
  { number: '500+', label: 'Casos\nResueltos' },
  { number: 'ISO',  label: '9001 · 14001\n45001' },
]

export const LawTrustSection = () => {
  return (
    <section className="py-20 relative overflow-hidden" aria-label="Estadísticas de la firma">
      {/* Gold gradient lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="font-playfair text-4xl sm:text-5xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="font-inter text-xs text-muted-foreground tracking-[0.2em] uppercase leading-relaxed whitespace-pre-line">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}