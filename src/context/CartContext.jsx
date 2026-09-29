import { useCallback, useEffect, useState } from 'react'
import { CartContext } from './cart.js'
import { freeShippingFrom } from '../data/products.js'

const STORAGE_KEY = 'circuit-cart'
const SHIPPING_FEE = 2000

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // Storage unavailable (private mode): the cart still works for this visit.
    }
  }, [items])

  const addItem = (product, qty = 1, { openDrawer = true } = {}) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id)
      if (existing) {
        return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + qty } : i))
      }
      return [...prev, { id: product.id, name: product.name, price: product.price, oldPrice: product.oldPrice, qty }]
    })
    if (openDrawer) setDrawerOpen(true)
  }

  const updateQty = (id, qty) =>
    setItems((prev) => (qty < 1 ? prev.filter((i) => i.id !== id) : prev.map((i) => (i.id === id ? { ...i, qty } : i))))

  const removeItem = (id) => setItems((prev) => prev.filter((i) => i.id !== id))

  const clear = () => setItems([])
  const openDrawer = useCallback(() => setDrawerOpen(true), [])
  const closeDrawer = useCallback(() => setDrawerOpen(false), [])

  const count = items.reduce((n, i) => n + i.qty, 0)
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0)
  const savings = items.reduce((sum, i) => sum + (i.oldPrice - i.price) * i.qty, 0)
  const shipping = subtotal === 0 || subtotal >= freeShippingFrom ? 0 : SHIPPING_FEE

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        updateQty,
        removeItem,
        clear,
        count,
        subtotal,
        savings,
        shipping,
        total: subtotal + shipping,
        drawerOpen,
        openDrawer,
        closeDrawer,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
