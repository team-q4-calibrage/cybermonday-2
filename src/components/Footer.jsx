import { Link } from 'react-router'
import { brand, categories, whatsapp } from '../data/products.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="logo">{brand}</p>
          <p className="muted">High-tech utile, au juste prix. Cotonou, Bénin.</p>
        </div>
        <nav aria-label="Catégories">
          <p className="footer__title">Boutique</p>
          <ul>
            {categories.map((c) => (
              <li key={c}><Link to={`/shop?cat=${encodeURIComponent(c)}`}>{c}</Link></li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="footer__title">Aide</p>
          <ul>
            <li><a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a></li>
            <li>Livraison 24–48 h</li>
            <li>Retour 30 jours</li>
          </ul>
        </div>
        <div>
          <p className="footer__title">Paiement</p>
          <ul className="footer__pay">
            <li>MTN MoMo</li>
            <li>Moov Money</li>
            <li>Visa</li>
            <li>Mastercard</li>
          </ul>
        </div>
      </div>
      <p className="container footer__legal muted">© 2026 {brand}. Tous droits réservés.</p>
    </footer>
  )
}
