"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type RosarySelections = {
  blue: number;
  purple: number;
  clear: number;
  darkBlue: number;
};

type CartItem = {
  id: string;
  name: string;
  image: string;
  price: string;
  quantity: number;
  selections?: RosarySelections;
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");

    const updatedCart = savedCart.map((item: CartItem) => ({
      ...item,
      quantity: item.quantity || 1,
    }));

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }, []);

  const updateQuantity = (index: number, change: number) => {
    const newCart = [...cart];

    newCart[index].quantity += change;

    if (newCart[index].quantity <= 0) {
      newCart.splice(index, 1);
    }

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const removeItem = (index: number) => {
    const newCart = cart.filter((_, i) => i !== index);

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const total = cart.reduce((sum, item) => {
    const price = Number(item.price.replace("₹", ""));
    return sum + price * item.quantity;
  }, 0);

  const rosaryNames: Record<keyof RosarySelections, string> = {
    blue: "Blue Rosary",
    purple: "Purple Rosary",
    clear: "Clear Rosary",
    darkBlue: "Dark Blue Rosary",
  };

  return (
    <main className="min-h-screen bg-[#F8F5EF] px-8 py-10">
      <Link href="/" className="text-[#6B4C57] font-medium">
        ← Continue Shopping
      </Link>

      <h1 className="text-4xl font-bold text-[#6B4C90] text-center mt-10">
        Your Cart 🛒
      </h1>

      {cart.length === 0 ? (
        <div className="max-w-3xl mx-auto mt-10 bg-white rounded-3xl p-8 shadow-lg text-center">
          <p className="text-gray-600 text-lg">
            Your cart is empty.
          </p>

          <Link
            href="/"
            className="inline-block mt-6 bg-[#D9B24C] px-8 py-3 rounded-full font-semibold"
          >
            Shop Now
          </Link>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto mt-10 space-y-5">
          {cart.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-5 shadow-lg flex items-center gap-5"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={120}
                height={120}
                className="w-28 h-28 object-cover rounded-2xl"
              />

              <div className="flex-1">
                <h2 className="text-xl font-bold text-[#6B4C90]">
                  {item.name}
                </h2>

                {/* Rosary Set selections */}
                {item.selections && (
                  <div className="mt-3 space-y-1">
                    {(
                      Object.keys(item.selections) as Array<
                        keyof RosarySelections
                      >
                    ).map((key) => {
                      const quantity = item.selections![key];

                      if (quantity === 0) return null;

                      return (
                        <p
                          key={key}
                          className="text-gray-600 text-sm"
                        >
                          {rosaryNames[key]} × {quantity}
                        </p>
                      );
                    })}
                  </div>
                )}

                <p className="text-[#6B4C57] font-semibold mt-3">
                  {item.price}
                </p>

                {/* Normal product quantity */}
                {!item.selections && (
                  <div className="flex items-center gap-3 mt-4">
                    <button
                      onClick={() => updateQuantity(index, -1)}
                      className="w-9 h-9 rounded-full bg-gray-200 font-bold"
                    >
                      −
                    </button>

                    <span className="font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => updateQuantity(index, 1)}
                      className="w-9 h-9 rounded-full bg-gray-200 font-bold"
                    >
                      +
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => removeItem(index)}
                className="text-red-500 font-medium"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="bg-white rounded-3xl p-6 shadow-lg text-right">
            <p className="text-gray-600">
              {cart.reduce(
                (sum, item) => sum + item.quantity,
                0
              )}{" "}
              item(s)
            </p>

            <p className="text-2xl font-bold text-[#6B4C90] mt-2">
              Total: ₹{total}
            </p>

            <a
              href={`https://wa.me/917736237008?text=${encodeURIComponent(
                `Hi Aura Bands, I want to order:\n\n${cart
                  .map((item) => {
                    if (item.selections) {
                      const selected = (
                        Object.keys(item.selections) as Array<
                          keyof RosarySelections
                        >
                      )
                        .filter(
                          (key) => item.selections![key] > 0
                        )
                        .map(
                          (key) =>
                            `${rosaryNames[key]} × ${item.selections![key]}`
                        )
                        .join("\n");

                      return `${item.name}:\n${selected} — ${item.price}`;
                    }

                    return `${item.name} × ${item.quantity} — ₹${
                      Number(item.price.replace("₹", "")) *
                      item.quantity
                    }`;
                  })
                  .join("\n\n")}\n\nTotal: ₹${total}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 bg-[#D9B24C] px-8 py-3 rounded-full font-semibold"
            >
              Order on WhatsApp 📱
            </a>
          </div>
        </div>
      )}
    </main>
  );
}