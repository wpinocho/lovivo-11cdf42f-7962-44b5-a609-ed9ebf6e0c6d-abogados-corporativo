/**
 * J/A Abogados y Consultores — Brand Logo
 */
export const BrandLogoLeft = () => {
  return (
    <a
      href="/"
      aria-label="J/A Abogados y Consultores — Inicio"
      className="flex items-center gap-3 group"
    >
      <img
        src="/logo.png"
        alt="J/A Abogados y Consultores"
        className="h-10 w-auto object-contain"
        onError={(e) => {
          const parent = e.currentTarget.parentElement
          if (parent) {
            e.currentTarget.style.display = 'none'
            const span = document.createElement('span')
            span.className = 'font-playfair text-2xl font-bold text-primary'
            span.textContent = 'J/A'
            parent.prepend(span)
          }
        }}
      />
      <div className="hidden lg:block leading-tight">
        <div className="font-playfair text-sm font-bold text-foreground tracking-wide">
          J/A Abogados
        </div>
        <div className="font-inter text-xs text-primary/80 tracking-[0.22em] uppercase">
          y Consultores
        </div>
      </div>
    </a>
  )
}