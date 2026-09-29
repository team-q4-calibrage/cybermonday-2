const number = new Intl.NumberFormat('fr-FR')

export const formatPrice = (value) => `${number.format(value)} FCFA`

export const discountPct = (oldPrice, price) => Math.round((1 - price / oldPrice) * 100)
