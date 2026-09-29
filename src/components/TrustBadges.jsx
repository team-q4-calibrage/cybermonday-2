import { freeShippingFrom } from '../data/products.js'
import { formatPrice } from '../utils/format.js'

const badges = [
  { title: 'Livraison 24–48 h', text: `Offerte dès ${formatPrice(freeShippingFrom)}` },
  { title: 'Retour 30 jours', text: 'Satisfait ou remboursé' },
  { title: 'Paiement sécurisé', text: 'MoMo, carte ou à la livraison' },
  { title: 'Garantie 1 an', text: 'Échange immédiat en cas de panne' },
]

export default function TrustBadges({ compact = false }) {
  return (
    <ul className={`trust ${compact ? 'trust--compact' : ''}`} aria-label="Nos garanties">
      {badges.map((b) => (
        <li key={b.title}>
          <strong>{b.title}</strong>
          <span>{b.text}</span>
        </li>
      ))}
    </ul>
  )
}
