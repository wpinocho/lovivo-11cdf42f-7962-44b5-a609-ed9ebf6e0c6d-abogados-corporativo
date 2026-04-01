import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { HeadlessProductCard } from "@/components/headless/HeadlessProductCard"
import { PriceRuleBadge } from "@/components/ui/PriceRuleBadge"
import { usePriceRules } from "@/hooks/usePriceRules"
import type { Product } from "@/lib/supabase"

/**
 * EDITABLE UI COMPONENT — ProductCardUI
 * J/A Abogados y Consultores edition — dark navy + gold
 */

interface ProductCardUIProps {
  product: Product
}

export const ProductCardUI = ({ product }: ProductCardUIProps) => {
  const { getRulesForProduct } = usePriceRules()
  const productRules = getRulesForProduct(product.id)

  return (
    <HeadlessProductCard product={product}>
      {(logic) => (
        <Card className="bg-card border border-border hover:border-primary/50 transition-colors duration-300 overflow-hidden">
          <CardContent className="p-0">
            <Link to={`/productos/${logic.product.slug}`} className="block">
              {/* Image */}
              <div
                className="bg-muted overflow-hidden relative group"
                style={{ aspectRatio: '1/1' }}
              >
                {(logic.matchingVariant?.image ||
                  (logic.product.images && logic.product.images.length > 0)) ? (
                  <>
                    <img
                      src={
                        logic.matchingVariant?.image_urls?.[0] ||
                        (logic.matchingVariant?.image as any) ||
                        logic.product.images![0]
                      }
                      alt={logic.product.title}
                      loading="lazy"
                      decoding="async"
                      className={`w-full h-full object-contain transition-opacity duration-300 ${
                        logic.product.images &&
                        logic.product.images.length > 1 &&
                        !logic.matchingVariant?.image &&
                        !logic.matchingVariant?.image_urls?.[0]
                          ? 'group-hover:opacity-0'
                          : ''
                      }`}
                    />
                    {logic.product.images &&
                      logic.product.images.length > 1 &&
                      !logic.matchingVariant?.image &&
                      !logic.matchingVariant?.image_urls?.[0] && (
                        <img
                          src={logic.product.images[1]}
                          alt={`${logic.product.title} — alternativa`}
                          loading="lazy"
                          decoding="async"
                          className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        />
                      )}
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs">
                    Sin imagen
                  </div>
                )}

                {/* Badges */}
                {(() => {
                  const badges: React.ReactNode[] = []
                  if (logic.discountPercentage) {
                    badges.push(
                      <span
                        key="discount"
                        className="bg-destructive text-destructive-foreground text-[10px] px-1.5 py-0.5 font-medium"
                      >
                        -{logic.discountPercentage}%
                      </span>
                    )
                  }
                  if (!logic.inStock) {
                    badges.push(
                      <span
                        key="oos"
                        className="bg-muted text-muted-foreground text-[10px] px-1.5 py-0.5 font-medium"
                      >
                        Agotado
                      </span>
                    )
                  }
                  const volBogo = productRules.filter(
                    (r) => r.rule_type === 'volume' || r.rule_type === 'bogo'
                  )
                  for (const rule of volBogo) {
                    if (badges.length >= 2) break
                    badges.push(<PriceRuleBadge key={rule.id} rule={rule} />)
                  }
                  if (badges.length === 0) return null
                  return (
                    <div className="absolute top-2 left-2 flex flex-col gap-1">
                      {badges.slice(0, 2)}
                    </div>
                  )
                })()}
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-playfair font-semibold text-sm text-foreground mb-1 line-clamp-2">
                  {logic.product.title}
                </h3>
                {logic.product.description && (
                  <p className="font-inter text-muted-foreground text-xs mb-3 line-clamp-2 leading-relaxed">
                    {logic.product.description.replace(/<[^>]*>/g, '')}
                  </p>
                )}
              </div>
            </Link>

            {/* Variants */}
            {logic.hasVariants && logic.options && (
              <div className="px-4 pb-3 space-y-2">
                {logic.options.map((opt) => (
                  <div key={opt.id}>
                    <div className="font-inter text-xs font-medium text-foreground mb-1">
                      {opt.name}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {opt.values
                        .filter((val) => logic.isOptionValueAvailable(opt.name, val))
                        .map((val) => {
                          const isSelected = logic.selected[opt.name] === val
                          const swatch =
                            opt.name.toLowerCase() === 'color'
                              ? opt.swatches?.[val]
                              : undefined

                          if (swatch) {
                            return (
                              <button
                                key={val}
                                type="button"
                                onClick={() => logic.handleOptionChange(opt.name, val)}
                                title={`${opt.name}: ${val}`}
                                className={`h-6 w-6 rounded-full border border-border ${
                                  logic.selected[opt.name] && !isSelected ? 'opacity-40' : ''
                                }`}
                                style={{ backgroundColor: swatch }}
                                aria-label={`${opt.name}: ${val}`}
                              />
                            )
                          }
                          return (
                            <button
                              key={val}
                              type="button"
                              onClick={() => logic.handleOptionChange(opt.name, val)}
                              className={`border px-2 py-1 text-xs font-medium transition-colors ${
                                isSelected
                                  ? 'border-primary bg-primary text-primary-foreground'
                                  : logic.selected[opt.name] && !isSelected
                                  ? 'border-border bg-card text-foreground opacity-40'
                                  : 'border-border bg-card text-foreground hover:border-primary'
                              }`}
                              aria-pressed={isSelected}
                            >
                              {val}
                            </button>
                          )
                        })}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Price + Add */}
            <div className="px-4 pb-4 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-playfair font-semibold text-foreground">
                  {logic.formatMoney(logic.currentPrice)}
                </span>
                {logic.currentCompareAt &&
                  logic.currentCompareAt > logic.currentPrice && (
                    <span className="font-inter text-muted-foreground text-xs line-through">
                      {logic.formatMoney(logic.currentCompareAt)}
                    </span>
                  )}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  logic.onAddToCartSuccess()
                  logic.handleAddToCart()
                }}
                disabled={!logic.canAddToCart}
                className="font-inter text-xs font-semibold tracking-wider uppercase disabled:opacity-50"
              >
                {logic.inStock ? 'Agregar' : 'Agotado'}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </HeadlessProductCard>
  )
}