export const brand = 'Circuit'

// Replace with the team WhatsApp number (country code, no + or spaces).
export const whatsapp = '22900000000'

export const offer = {
  label: 'Cyber Monday',
  discount: '-45 %',
  // End of Cyber Monday 2026, Benin time
  endsAt: '2026-12-01T00:00:00+01:00',
}

export const freeShippingFrom = 40000

// Extra discount on the product of the hour.
export const flashExtra = 0.1

export const categories = ['Audio', 'Charge', 'Montres', 'Bureau']

export const products = [
  {
    id: 'pack-setup',
    name: 'Pack Setup Pro',
    category: 'Bureau',
    oldPrice: 115000,
    price: 64900,
    stockLeft: 5,
    rating: 4.9,
    reviewCount: 88,
    bestSeller: true,
    description:
      'Le bureau complet en un pack : clavier mécanique Key65, hub USB-C 7-en-1 et station de charge Trio. 50 100 FCFA d’économie par rapport aux prix séparés.',
    details: ['Clavier mécanique Key65', 'Hub USB-C 7-en-1', 'Station de charge Trio 3-en-1', 'Garantie 1 an sur chaque produit'],
  },
  {
    id: 'ecouteurs-pulse',
    name: 'Écouteurs Pulse ANC',
    category: 'Audio',
    oldPrice: 59000,
    price: 34900,
    stockLeft: 17,
    rating: 4.8,
    reviewCount: 412,
    bestSeller: true,
    description: 'Écouteurs sans fil à réduction de bruit active, 30 h d’autonomie avec le boîtier, résistants à la sueur.',
    details: ['Réduction de bruit active', '30 h avec le boîtier de charge', 'Bluetooth 5.3', 'Résistants à l’eau IPX4'],
  },
  {
    id: 'montre-orbit',
    name: 'Montre connectée Orbit',
    category: 'Montres',
    oldPrice: 85000,
    price: 49900,
    stockLeft: 8,
    rating: 4.7,
    reviewCount: 236,
    bestSeller: true,
    description: 'Écran AMOLED, suivi du sommeil, du cœur et de 100 sports, appels depuis le poignet, 10 jours d’autonomie.',
    details: ['Écran AMOLED 1,43"', '10 jours d’autonomie', 'Appels Bluetooth', 'Étanche 5 ATM'],
  },
  {
    id: 'batterie-flux',
    name: 'Batterie externe Flux 20 000 mAh',
    category: 'Charge',
    oldPrice: 25000,
    price: 14900,
    stockLeft: 41,
    rating: 4.8,
    reviewCount: 530,
    bestSeller: true,
    description: 'Charge rapide 22,5 W, deux ports USB-C et un USB-A. Recharge un téléphone 4 à 5 fois. Idéale pour les coupures.',
    details: ['20 000 mAh', 'Charge rapide 22,5 W', '2 × USB-C, 1 × USB-A', 'Écran de niveau de charge'],
  },
  {
    id: 'enceinte-volt',
    name: 'Enceinte Volt étanche',
    category: 'Audio',
    oldPrice: 45000,
    price: 26900,
    stockLeft: 23,
    rating: 4.7,
    reviewCount: 198,
    bestSeller: true,
    description: 'Son 360°, basses profondes, 18 h d’autonomie. Elle flotte et résiste à la poussière.',
    details: ['Son 360° 20 W', '18 h d’autonomie', 'Étanche IP67', 'Appairage stéréo'],
  },
  {
    id: 'chargeur-trio',
    name: 'Station de charge Trio 3-en-1',
    category: 'Charge',
    oldPrice: 38000,
    price: 22900,
    stockLeft: 9,
    rating: 4.6,
    reviewCount: 104,
    description: 'Charge sans fil le téléphone, la montre et les écouteurs en même temps. Pliable pour le voyage.',
    details: ['Charge sans fil 15 W', 'Téléphone, montre et écouteurs', 'Pliable', 'Câble USB-C inclus'],
  },
  {
    id: 'clavier-key65',
    name: 'Clavier mécanique Key65',
    category: 'Bureau',
    oldPrice: 55000,
    price: 32900,
    stockLeft: 12,
    rating: 4.8,
    reviewCount: 167,
    description: 'Format compact 65 %, touches silencieuses remplaçables à chaud, sans fil ou câblé, rétroéclairage blanc.',
    details: ['Format 65 %, AZERTY', 'Bluetooth, 2,4 GHz ou USB-C', 'Switchs silencieux', '4 000 mAh'],
  },
  {
    id: 'hub-usbc',
    name: 'Hub USB-C 7-en-1',
    category: 'Bureau',
    oldPrice: 22000,
    price: 12900,
    stockLeft: 34,
    rating: 4.7,
    reviewCount: 289,
    description: 'HDMI 4K, 3 ports USB, lecteur de cartes SD et microSD, charge 100 W. Tout ce qui manque à votre ordinateur.',
    details: ['HDMI 4K 60 Hz', '3 × USB 3.0', 'SD et microSD', 'Charge PD 100 W'],
  },
]

export const imageFor = (id) => `/images/products/${id}.webp`

export const reviewSummary = { rating: '4,8', count: '2 024' }

export const reviews = [
  { name: 'Ulrich D.', city: 'Cotonou', rating: 5, text: 'La batterie Flux m’a sauvé pendant les coupures. Livrée le lendemain, exactement comme sur les photos.' },
  { name: 'Estelle G.', city: 'Abomey-Calavi', rating: 5, text: 'Le Pack Setup a transformé mon bureau. Le clavier est un plaisir à utiliser.' },
  { name: 'Rachidi M.', city: 'Parakou', rating: 5, text: 'Montre Orbit reçue en 3 jours à Parakou. L’autonomie annoncée est vraie.' },
]
