"use client";

import { useCart, useRemoveFromCart, useUpdateQuantity } from "../hooks/use-cart";

export default function CartPage() {

  const { data: items = [], isLoading } = useCart();
  const { mutate: removeFromCart } = useRemoveFromCart();
  const { mutate: updateQuantity } = useUpdateQuantity();

  const total = items.reduce((sum, item) => sum + item.product?.price * item.quantity, 0);


  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="py-40 px-7">
      <h1 className="text-6xl">My Cart</h1>

      {items.length === 0 && <p>No items in cart</p>}

      {items.map((item) => (
        <div key={item.id} className="border p-4 my-2">
          <h2>{item.product?.title}</h2>
          <p>{item.product?.price}</p>

          <div className="flex items-center gap-2">
            <button onClick={() => updateQuantity({ id: item.id, quantity: item.quantity - 1 })}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => updateQuantity({ id: item.id, quantity: item.quantity + 1 })}>+</button>
          </div>

          <p className="text-2xl font-bold">Total: ${total.toFixed(2)}</p>

          <p className="text-2xl font-bold">Total: ${(total + 79).toFixed(2)}</p>

          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}