import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import SmartImage from '../components/SmartImage.jsx'
import { useCart } from '../context/cart.js'
import { imageFor } from '../data/products.js'
import { formatPrice } from '../utils/format.js'

const cities = ['Cotonou', 'Porto-Novo', 'Abomey-Calavi', 'Parakou', 'Ouidah', 'Autre ville']
const payments = [
  { id: 'momo', label: 'Mobile Money', hint: 'MTN MoMo ou Moov Money' },
  { id: 'card', label: 'Carte bancaire', hint: 'Visa ou Mastercard' },
  { id: 'cod', label: 'Paiement à la livraison', hint: 'Espèces ou Mobile Money' },
]

export default function Checkout() {
  const { items, subtotal, savings, shipping, total, clear } = useCart()
  const [payment, setPayment] = useState('momo')
  const navigate = useNavigate()

  if (items.length === 0) {
    return (
      <main className="section container empty">
        <h1>Votre panier est vide</h1>
        <Link to="/shop" className="btn btn--large">Voir la boutique</Link>
      </main>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    const order = {
      ...data,
      number: `CI-${Math.floor(100000 + Math.random() * 900000)}`,
      items,
      total,
      payment: payments.find((p) => p.id === payment).label,
    }
    clear()
    navigate('/confirmation', { state: order, replace: true })
  }

  return (
    <main className="section container">
      <h1 className="page-title">Finaliser la commande</h1>
      <div className="cart-layout">
        <form id="checkout" onSubmit={handleSubmit} className="checkout">
          <fieldset>
            <legend>Vos coordonnées</legend>
            <label className="field">
              <span>Nom complet</span>
              <input name="name" required autoComplete="name" />
            </label>
            <label className="field">
              <span>Téléphone</span>
              <input name="phone" type="tel" required inputMode="tel" autoComplete="tel" placeholder="01 97 00 00 00" pattern="[0-9 +]{8,16}" />
            </label>
          </fieldset>

          <fieldset>
            <legend>Livraison</legend>
            <div className="field-row">
              <label className="field">
                <span>Ville</span>
                <select name="city" required defaultValue="">
                  <option value="" disabled>Choisir</option>
                  {cities.map((c) => <option key={c}>{c}</option>)}
                </select>
              </label>
              <label className="field">
                <span>Quartier / adresse</span>
                <input name="address" required autoComplete="street-address" />
              </label>
            </div>
            <label className="field">
              <span>Instructions de livraison (facultatif)</span>
              <input name="note" placeholder="Ex. appeler avant de passer" />
            </label>
          </fieldset>

          <fieldset className="payments">
            <legend>Paiement</legend>
            {payments.map((p) => (
              <label key={p.id} className={`payment ${payment === p.id ? 'is-active' : ''}`}>
                <input type="radio" name="payment" value={p.id} checked={payment === p.id} onChange={() => setPayment(p.id)} />
                <span><strong>{p.label}</strong><small>{p.hint}</small></span>
              </label>
            ))}
          </fieldset>
        </form>

        <aside className="summary-card" aria-label="Récapitulatif de la commande">
          <ul className="mini-lines">
            {items.map((i) => (
              <li key={i.id}>
                <SmartImage src={imageFor(i.id)} alt="" ratio="1 / 1" className="mini-lines__img" />
                <span className="mini-lines__name">{i.name} <span className="muted">× {i.qty}</span></span>
                <span>{formatPrice(i.price * i.qty)}</span>
              </li>
            ))}
          </ul>
          <div className="row"><span>Sous-total</span><span>{formatPrice(subtotal)}</span></div>
          <div className="row"><span>Livraison</span><span>{shipping ? formatPrice(shipping) : 'Offerte'}</span></div>
          <div className="row accent"><span>Vous économisez</span><span>{formatPrice(savings)}</span></div>
          <div className="row row--total"><span>Total</span><span>{formatPrice(total)}</span></div>
          <button type="submit" form="checkout" className="btn btn--large btn--block">
            Confirmer · {formatPrice(total)}
          </button>
          <p className="secure">Paiement sécurisé · Retour gratuit sous 30 jours</p>
        </aside>
      </div>
    </main>
  )
}
