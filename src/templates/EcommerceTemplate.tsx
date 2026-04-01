import { ReactNode } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { ProfileMenu } from '@/components/ProfileMenu'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import { useCartUISafe } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'
import { ScrollLink } from '@/components/ScrollLink'

/**
 * EDITABLE TEMPLATE — EcommerceTemplate (J/A Abogados y Consultores)
 * Deep navy header with gold accents — Justice by Attorneys
 */

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
  hideFloatingCartOnMobile?: boolean
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default',
  hideFloatingCartOnMobile = false,
}: EcommerceTemplateProps) => {
  const cartUI = useCartUISafe()
  const openCart = cartUI?.openCart ?? (() => {})
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  const navLinkClass =
    'font-inter text-xs font-medium tracking-[0.15em] uppercase text-foreground/60 hover:text-primary transition-colors duration-200'

  const header = (
    <div className={`py-3 ${headerClassName ?? ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">

          {/* Logo */}
          <BrandLogoLeft />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
            <ScrollLink to="/#nosotros"  className={navLinkClass}>Nosotros</ScrollLink>
            <ScrollLink to="/#servicios" className={navLinkClass}>Áreas de Práctica</ScrollLink>
            <ScrollLink to="/#consultas" className={navLinkClass}>Servicios</ScrollLink>
            <Link to="/blog"             className={navLinkClass}>Blog</Link>
            <ScrollLink to="/#contacto"  className={navLinkClass}>Contacto</ScrollLink>
          </nav>

          {/* Right: CTA + Cart + Profile */}
          <div className="flex items-center gap-2">
            <Button
              asChild
              size="sm"
              className="hidden sm:inline-flex font-inter text-xs font-semibold tracking-[0.2em] uppercase px-5"
            >
              <a href="#contacto">Agendar Consulta</a>
            </Button>

            <ProfileMenu />

            {showCart && (
              <Button
                variant="ghost"
                size="icon"
                onClick={openCart}
                className="relative"
                aria-label="Ver carrito de servicios"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </Button>
            )}
          </div>
        </div>

        {/* Page Title */}
        {pageTitle && (
          <div className="mt-6">
            <h1 className="font-playfair text-3xl font-bold text-foreground">{pageTitle}</h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`bg-background py-16 ${footerClassName ?? ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <BrandLogoLeft />
            <p className="font-inter text-muted-foreground text-sm leading-relaxed mt-5 max-w-xs">
              Brindando la excelencia que su organización merece. Asesoría legal integral
              para empresas en los sectores más exigentes del Perú.
            </p>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-inter text-xs font-semibold text-primary tracking-[0.3em] uppercase mb-5">
              Áreas de Práctica
            </h3>
            <ul className="space-y-2.5">
              {['Derecho Ambiental', 'Derecho Minero', 'Seguridad y Salud', 'Derecho Laboral', 'Auditoría Legal'].map((item) => (
                <li key={item}>
                  <a
                    href="#servicios"
                    className="font-inter text-muted-foreground text-sm hover:text-primary transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-inter text-xs font-semibold text-primary tracking-[0.3em] uppercase mb-5">
              Firma
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Inicio', href: '/' },
                { label: 'Nosotros', href: '#nosotros' },
                { label: 'Servicios', href: '#consultas' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contacto', href: '#contacto' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="font-inter text-muted-foreground text-sm hover:text-primary transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-inter text-xs font-semibold text-primary tracking-[0.3em] uppercase mb-5">
              Síguenos
            </h3>
            <SocialLinks />
            <p className="font-inter text-muted-foreground text-xs mt-5 leading-relaxed">
              Lima, Perú<br />
              San Borja
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-muted-foreground text-xs tracking-wide">
            &copy; {new Date().getFullYear()} J/A Abogados y Consultores. Todos los derechos reservados.
          </p>
          <p className="font-inter text-muted-foreground/50 text-xs tracking-[0.3em] uppercase">
            Justice by Attorneys
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>

      {showCart && <FloatingCart hideOnMobile={hideFloatingCartOnMobile} />}
    </>
  )
}