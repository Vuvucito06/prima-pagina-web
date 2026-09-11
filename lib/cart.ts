export type Product = {
  id: number
  name: string
  price: number
  quantity: number
}

export type Cart = Product[]

// Adaugă un produs; dacă există deja (același id), crește cantitatea.
export function addProduct(
  cart: Cart,
  { id, name, price, quantity = 1 }: Omit<Product, "quantity"> & { quantity?: number }
): Cart {
  const existing = cart.find((product) => product.id === id)

  if (existing) {
    return cart.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity + quantity }
        : product
    )
  }

  return [...cart, { id, name, price, quantity }]
}

// Șterge un produs; aruncă eroare dacă produsul nu există.
export function removeProduct(cart: Cart, id: number): Cart {
  const exists = cart.find((product) => product.id === id)
  if (!exists) {
    throw new Error(`Produsul cu id ${id} nu există în coș`)
  }

  return cart.filter((product) => product.id !== id)
}

// Modifică cantitatea unui produs (minim 1).
export function updateQuantity(cart: Cart, id: number, quantity: number): Cart {
  const exists = cart.find((product) => product.id === id)
  if (!exists) {
    throw new Error(`Produsul cu id ${id} nu există în coș`)
  }

  return cart.map((product) =>
    product.id === id ? { ...product, quantity: Math.max(1, quantity) } : product
  )
}

// Totalul comenzii.
export function calculateTotal(cart: Cart): number {
  return cart.reduce(
    (total, { price, quantity }) => total + price * quantity,
    0
  )
}
