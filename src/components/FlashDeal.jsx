import { Link } from 'react-router'
import SmartImage from './SmartImage.jsx'
import Countdown from './Countdown.jsx'
import { useCart } from '../context/cart.js'
import { flashExtra, imageFor, products } from '../data/products.js'
import { formatPrice } from '../utils/format.js'
import useNow from '../hooks/useNow.js'

// A different product every hour, with an extra discount on top of the Cyber Monday price.
export default function FlashDeal() {
  const { addItem } = useCart()
  const now = useNow()
  const rotation = products.filter((p) => p.id !== 'pack-setup')
  const product = rotation[now.getHours() % rotation.length]
  const flashPrice = Math.round((product.price * (1 - flashExtra)) / 100) * 100
  const nextHour = new Date(now)
  nextHour.setHours(now.getHours() + 1, 0, 0, 0)

  return (
    <section className="container" aria-labelledby="flash-title">
      <div className="flash">
        <div className="flash__head">
          <p className="flash__label">
            <span className="flash__dot" aria-hidden="true" /> Deal de l’heure
          </p>
          <div className="flash__timer">
            <span>Change dans</span>
            <Countdown endsAt={nextHour} hideDays />
          </div>
        </div>

        <div className="flash__body">
          <Link to={`/product/${product.id}`}>
            <SmartImage src={imageFor(product.id)} alt={product.name} ratio="1 / 1" className="flash__img" />
          </Link>
          <div>
            <p className="flash__extra">-{Math.round(flashExtra * 100)} % en plus, cette heure seulement</p>
            <h2 id="flash-title">{product.name}</h2>
            <p className="flash__desc">{product.description}</p>
            <p className="flash__price">
              <span>{formatPrice(flashPrice)}</span>
              <s>{formatPrice(product.oldPrice)}</s>
            </p>
            <button type="button" className="btn btn--large btn--light" onClick={() => addItem({ ...product, price: flashPrice })}>
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
