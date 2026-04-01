import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { LawHeroSection } from '@/components/LawHeroSection';
import { LawServicesSection } from '@/components/LawServicesSection';
import { LawTrustSection } from '@/components/LawTrustSection';
import { LawAboutSection } from '@/components/LawAboutSection';
import { LawCTASection } from '@/components/LawCTASection';
import { NewsletterSection } from '@/components/NewsletterSection';
import { ProductCard } from '@/components/ProductCard';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';

/**
 * EDITABLE UI — IndexUI (Law Firm Edition)
 * J/A Abogados y Consultores — Justice by Attorneys
 */

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const { filteredProducts, loading } = logic;

  return (
    <EcommerceTemplate showCart={true} layout="full-width">

      {/* Hero — full screen, flush with header */}
      <LawHeroSection />

      {/* Practice Areas */}
      <LawServicesSection />

      {/* Trust Stats */}
      <LawTrustSection />

      {/* About Founder */}
      <LawAboutSection />

      {/* Legal Services / Consultation Products */}
      {(loading || filteredProducts.length > 0) && (
        <section id="consultas" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="h-px w-10 bg-primary/60" />
                <span className="font-inter text-primary text-xs font-medium tracking-[0.4em] uppercase">
                  Servicios
                </span>
                <div className="h-px w-10 bg-primary/60" />
              </div>
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground">
                Consultas y Servicios
              </h2>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="bg-card border border-border h-80 animate-pulse" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA + Contact + Vision / Mission */}
      <LawCTASection />

      {/* Newsletter */}
      <NewsletterSection />

    </EcommerceTemplate>
  );
};