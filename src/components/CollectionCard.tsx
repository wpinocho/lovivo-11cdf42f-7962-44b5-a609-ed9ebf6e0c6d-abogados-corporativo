import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { type Collection } from '@/lib/supabase'

/**
 * J/A Abogados y Consultores — Collection Card
 */
interface CollectionCardProps {
  collection: Collection
  onViewProducts: (collectionId: string) => void
  eager?: boolean
}

export const CollectionCard = ({ collection, onViewProducts, eager }: CollectionCardProps) => {
  return (
    <Card className="bg-card border border-border hover:border-primary/50 transition-colors duration-300 overflow-hidden">
      <CardContent className="p-0">
        <div className="bg-muted overflow-hidden" style={{ aspectRatio: '4/3' }}>
          {collection.image ? (
            <img
              src={collection.image}
              alt={collection.name}
              loading={eager ? 'eager' : 'lazy'}
              fetchPriority={eager ? 'high' : undefined}
              decoding="async"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
              Sin imagen
            </div>
          )}
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-playfair text-foreground font-semibold text-base line-clamp-1">
              {collection.name}
            </h3>
            {collection.featured && (
              <span className="bg-primary text-primary-foreground text-xs px-2 py-0.5 font-medium shrink-0 ml-2">
                Destacado
              </span>
            )}
          </div>

          {collection.description && (
            <p className="font-inter text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
              {collection.description}
            </p>
          )}

          <Button
            variant="outline"
            className="w-full font-inter text-xs font-semibold tracking-wider uppercase"
            onClick={() => onViewProducts(collection.id)}
          >
            Ver Servicios
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}