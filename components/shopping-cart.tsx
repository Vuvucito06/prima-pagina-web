"use client"

import { type FormEvent, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  type Cart,
  addProduct,
  calculateTotal,
  removeProduct,
  updateQuantity,
} from "@/lib/cart"

const initialCart: Cart = [
  { id: 1, name: "Laptop", price: 3500, quantity: 1 },
  { id: 2, name: "Mouse", price: 120, quantity: 2 },
  { id: 3, name: "Tastatură", price: 250, quantity: 1 },
]

const formatPrice = (value: number) => `${value.toFixed(2)} lei`

export function ShoppingCart() {
  const [cart, setCart] = useState<Cart>(initialCart)
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [removeId, setRemoveId] = useState("")
  const [error, setError] = useState<string | null>(null)

  const handleAdd = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(null)

    const nextId = cart.length ? Math.max(...cart.map(({ id }) => id)) + 1 : 1
    setCart((current) =>
      addProduct(current, { id: nextId, name: name.trim(), price: Number(price) })
    )
    setName("")
    setPrice("")
  }

  const handleRemove = (id: number) => {
    try {
      setCart(removeProduct(cart, id))
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err))
    }
  }

  const handleRemoveById = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    handleRemove(Number(removeId))
    setRemoveId("")
  }

  const handleQuantity = (id: number, quantity: number) => {
    setCart((current) => updateQuantity(current, id, quantity))
  }

  return (
    <section className="space-y-4 rounded-lg border bg-card p-4">
      <h2 className="text-xl font-semibold">Coș de cumpărături</h2>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Produs</TableHead>
              <TableHead className="text-right">Preț</TableHead>
              <TableHead className="text-center">Cantitate</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            {cart.map(({ id, name, price, quantity }) => (
              <TableRow key={id}>
                <TableCell>{id}</TableCell>
                <TableCell className="font-medium">{name}</TableCell>
                <TableCell className="text-right">{formatPrice(price)}</TableCell>
                <TableCell>
                  <div className="flex items-center justify-center gap-1">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon-xs"
                      onClick={() => handleQuantity(id, quantity - 1)}
                      disabled={quantity <= 1}
                    >
                      −
                    </Button>
                    <span className="w-6 text-center">{quantity}</span>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon-xs"
                      onClick={() => handleQuantity(id, quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  {formatPrice(price * quantity)}
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    type="button"
                    variant="destructive"
                    size="xs"
                    onClick={() => handleRemove(id)}
                  >
                    Șterge
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            {cart.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} className="text-center text-muted-foreground">
                  Coșul este gol.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <p className="text-right text-lg font-semibold">
        Total: {formatPrice(calculateTotal(cart))}
      </p>

      <form onSubmit={handleAdd} className="flex flex-wrap items-end gap-2">
        <div className="min-w-40 flex-1 space-y-1">
          <label htmlFor="product-name" className="text-sm font-medium">
            Produs nou
          </label>
          <Input
            id="product-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Nume produs"
            required
          />
        </div>
        <div className="w-32 space-y-1">
          <label htmlFor="product-price" className="text-sm font-medium">
            Preț
          </label>
          <Input
            id="product-price"
            type="number"
            min="0"
            step="0.01"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            placeholder="0.00"
            required
          />
        </div>
        <Button type="submit">Adaugă</Button>
      </form>

      <form onSubmit={handleRemoveById} className="flex items-end gap-2">
        <div className="w-40 space-y-1">
          <label htmlFor="remove-id" className="text-sm font-medium">
            Șterge după ID
          </label>
          <Input
            id="remove-id"
            type="number"
            value={removeId}
            onChange={(event) => setRemoveId(event.target.value)}
            placeholder="ex: 99"
            required
          />
        </div>
        <Button type="submit" variant="outline">
          Șterge
        </Button>
      </form>

      {error && (
        <p role="alert" className="text-sm text-destructive">
          {error}
        </p>
      )}
    </section>
  )
}
