import Countdown from './Countdown.jsx'
import { freeShippingFrom, offer } from '../data/products.js'
import { formatPrice } from '../utils/format.js'

export default function AnnouncementBar() {
  return (
    <div className="announcement">
      <p>
        {offer.label} : <strong>jusqu’à {offer.discount}</strong> · Livraison offerte dès {formatPrice(freeShippingFrom)}
      </p>
      <Countdown endsAt={offer.endsAt} />
    </div>
  )
}
