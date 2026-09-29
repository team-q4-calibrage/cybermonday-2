import { Link, useLocation } from 'react-router'
import { brand, whatsapp } from '../data/products.js'
import { formatPrice } from '../utils/format.js'

export default function Confirmation() {
  const { state: order } = useLocation()

  if (!order) {
    return (
      <main className="section container empty">
        <h1>Aucune commande en cours</h1>
        <Link to="/shop" className="btn btn--large">Voir la boutique</Link>
      </main>
    )
  }

  const message = encodeURIComponent(
    `Bonjour ${brand}, je confirme ma commande ${order.number} (${formatPrice(order.total)}).`,
  )

  return (
    <main className="section container confirm">
      <p className="eyebrow">Commande confirmée</p>
      <h1>Merci, {order.name.split(' ')[0]} !</h1>
      <p className="muted">
        Votre commande <strong>{order.number}</strong> est enregistrée. Nous vous appelons au <strong>{order.phone}</strong> pour
        organiser la livraison à {order.city}.
      </p>

      <div className="summary-card">
        {order.items.map((i) => (
          <div key={i.id} className="row"><span>{i.name} × {i.qty}</span><span>{formatPrice(i.price * i.qty)}</span></div>
        ))}
        <div className="row"><span>Paiement</span><span>{order.payment}</span></div>
        <div className="row row--total"><span>Total</span><span>{formatPrice(order.total)}</span></div>
      </div>

      <div className="hero__actions">
        <a href={`https://wa.me/${whatsapp}?text=${message}`} target="_blank" rel="noreferrer" className="btn btn--large">
          Confirmer sur WhatsApp
        </a>
        <Link to="/shop" className="btn btn--large btn--ghost">Continuer mes achats</Link>
      </div>
    </main>
  )
}
