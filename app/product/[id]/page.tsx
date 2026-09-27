"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

const products: Record<
  string,
  {
    name: string;
    image: string;
    price: string;
    description: string;
  }
> = {
  blackrosary: {
    name: "Black Rosary",
    image: "/images/blackrosary.jpg",
    price: "₹399",
    description:
      "A handcrafted black bead rosary with a classic elegant finish.",
  },

  set1: {
    name: "Jewellery Set",
    image: "/images/set1.jpg",
    price: "₹999",
    description:
      "A beautiful handcrafted jewellery set from Aura Bands.",
  },

  rosaryset: {
    name: "Rosary Set",
    image: "/images/rosaryset.jpg",
    price: "₹0",
    description:
      "Choose from four beautiful rosaries. Each rosary is priced individually at ₹349.",
  },

  bluechain: {
    name: "Blue Chain",
    image: "/images/bluechain.jpg",
    price: "₹299",
    description:
      "A beautiful handcrafted blue chain bracelet.",
  },

  cuff: {
    name: "Designer Cuff",
    image: "/images/cuff.jpg",
    price: "₹249",
    description:
      "A stylish designer cuff bracelet.",
  },

  couple: {
    name: "Couple Bracelet",
    image: "/images/couple.jpg",
    price: "₹499",
    description:
      "A matching bracelet set designed for couples.",
  },

  collection: {
    name: "Aura Bands Collection",
    image: "/images/collection.jpg",
    price: "₹249",
    description:
      "A beautiful collection of handcrafted Aura Bands jewellery. Choose your's and dm us",
  },

  gold: {
    name: "Golden Beaded Bracelet",
    image: "/images/goldspacer.jpg",
    price: "₹249",
    description:
      "A beautiful handcrafted bracelet with elegant golden detailing.",
  },

  black: {
    name: "Black Bracelet",
    image: "/images/black.jpg",
    price: "₹299",
    description:
      "A stylish handcrafted black bracelet.",
  },

  coffee: {
    name: "Coffee Bracelet",
    image: "/images/coffee.jpg",
    price: "₹399",
    description:
      "A beautiful handcrafted coffee-toned bracelet.",
  },

  crystal: {
    name: "Crystal Bracelet",
    image: "/images/crystal.jpg",
    price: "₹199",
    description:
      "A beautiful bracelet with crystal detailing.",
  },

  greengold: {
    name: "Green Gold Bracelet",
    image: "/images/greengold.jpg",
    price: "₹199",
    description:
      "A stylish green and gold handcrafted bracelet.",
  },

  greenpearl: {
    name: "Green Pearl Bracelet",
    image: "/images/greenpearl.jpg",
    price: "₹299",
    description:
      "A beautiful handcrafted bracelet with green pearls.",
  },

  onampearl: {
    name: "Onam Pearl Bracelet",
    image: "/images/onampearl.jpg",
    price: "₹99",
    description:
      "An elegant pearl bracelet inspired by traditional style.",
  },

  pearl: {
    name: "Pearl Bracelet",
    image: "/images/pearl.jpg",
    price: "₹199",
    description:
      "A classic handcrafted pearl bracelet.",
  },

  redgold: {
    name: "Red Gold Bracelet",
    image: "/images/redgold.jpg",
    price: "₹199",
    description:
      "A beautiful red and gold handcrafted bracelet.",
  },

  sunflower: {
    name: "Sunflower Bracelet",
    image: "/images/sunflower.jpg",
    price: "₹399",
    description:
      "A bright and elegant sunflower-inspired bracelet.",
  },
};

export default function ProductPage() {
  const params = useParams();
  const id = params.id as string;

  const product = products[id?.toLowerCase()];

  const [added, setAdded] = useState(false);

  const [rosaryQuantities, setRosaryQuantities] = useState({
    blue: 0,
    purple: 0,
    clear: 0,
    darkBlue: 0,
  });

  const rosaryPrice = 349;

  const rosaryTotal =
    (rosaryQuantities.blue +
      rosaryQuantities.purple +
      rosaryQuantities.clear +
      rosaryQuantities.darkBlue) *
    rosaryPrice;

  if (!product) {
    return (
      <main className="min-h-screen bg-[#F8F5EF] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#6B4C90]">
            Product Not Found
          </h1>

          <Link
            href="/"
            className="inline-block mt-6 bg-[#D9B24C] px-8 py-3 rounded-full font-semibold"
          >
            ← Back Home
          </Link>
        </div>
      </main>
    );
  }

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    if (product.name === "Rosary Set") {
      const selectedRosaries = {
        blue: rosaryQuantities.blue,
        purple: rosaryQuantities.purple,
        clear: rosaryQuantities.clear,
        darkBlue: rosaryQuantities.darkBlue,
      };

      const totalSelected =
        selectedRosaries.blue +
        selectedRosaries.purple +
        selectedRosaries.clear +
        selectedRosaries.darkBlue;

      if (totalSelected === 0) {
        alert("Please select at least one rosary.");
        return;
      }

      const existingItem = cart.find(
        (item: { id: string }) => item.id === id
      );

      if (existingItem) {
        existingItem.selections = selectedRosaries;
        existingItem.quantity = 1;
        existingItem.price = `₹${rosaryTotal}`;
      } else {
        cart.push({
          id,
          name: product.name,
          image: product.image,
          price: `₹${rosaryTotal}`,
          quantity: 1,
          selections: selectedRosaries,
        });
      }
    } else {
      const existingItem = cart.find(
        (item: { id: string }) => item.id === id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({
          id,
          name: product.name,
          image: product.image,
          price: product.price,
          quantity: 1,
        });
      }
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    setAdded(true);
  };

  return (
    <main className="min-h-screen bg-[#F8F5EF] px-8 py-10">
      <Link href="/" className="text-[#6B4C57] font-medium">
        ← Back Home
      </Link>

      <section className="max-w-5xl mx-auto mt-10 grid md:grid-cols-2 gap-12 items-center">
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={600}
          className="w-full rounded-3xl shadow-lg"
        />

        <div>
          <p className="text-[#C08ACD] uppercase tracking-[4px] text-sm">
            Aura Bands
          </p>

          <h1 className="text-4xl font-bold text-[#6B4C90] mt-3">
            {product.name}
          </h1>

          {product.name !== "Rosary Set" && (
            <p className="text-2xl font-semibold text-[#6B4C57] mt-5">
              {product.price}
            </p>
          )}

          <p className="text-gray-600 mt-5 leading-7">
            {product.description}
          </p>

          {product.name === "Rosary Set" ? (
            <div className="mt-8">
              <h2 className="text-xl font-bold text-[#6B4C90] mb-4">
                Choose Your Rosaries
              </h2>

              <p className="text-sm text-gray-600 mb-4">
                Each rosary: ₹349
              </p>

              <div className="space-y-3">
                {[
                  { key: "blue", name: "Blue Rosary" },
                  { key: "purple", name: "Purple Rosary" },
                  { key: "clear", name: "Clear Rosary" },
                  { key: "darkBlue", name: "Dark Blue Rosary" },
                ].map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center justify-between bg-white rounded-2xl px-4 py-3 shadow"
                  >
                    <span className="font-medium">{item.name}</span>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          setRosaryQuantities((prev) => ({
                            ...prev,
                            [item.key]:
                              Math.max(
                                0,
                                prev[item.key as keyof typeof prev] - 1
                              ),
                          }))
                        }
                        className="w-9 h-9 rounded-full bg-gray-200 font-bold"
                      >
                        −
                      </button>

                      <span className="w-6 text-center font-semibold">
                        {
                          rosaryQuantities[
                            item.key as keyof typeof rosaryQuantities
                          ]
                        }
                      </span>

                      <button
                        onClick={() =>
                          setRosaryQuantities((prev) => ({
                            ...prev,
                            [item.key]:
                              prev[item.key as keyof typeof prev] + 1,
                          }))
                        }
                        className="w-9 h-9 rounded-full bg-gray-200 font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xl font-bold text-[#6B4C90] mt-6">
                Total: ₹{rosaryTotal}
              </p>

              <button
                onClick={addToCart}
                className="mt-6 bg-[#D9B24C] px-8 py-3 rounded-full font-semibold"
              >
                {added
                  ? "✓ Added to Cart"
                  : "🛒 Add Selected Items to Cart"}
              </button>

              <Link
                href="/cart"
                className="inline-block ml-3 mt-6 border-2 border-[#D9B24C] px-8 py-3 rounded-full font-semibold"
              >
                View Cart
              </Link>
            </div>
          ) : (
            <>
              <button
                onClick={addToCart}
                className="mt-8 bg-[#D9B24C] px-8 py-3 rounded-full font-semibold"
              >
                {added ? "✓ Added to Cart" : "🛒 Add to Cart"}
              </button>

              <Link
                href="/cart"
                className="inline-block ml-3 mt-8 border-2 border-[#D9B24C] px-8 py-3 rounded-full font-semibold"
              >
                View Cart
              </Link>
            </>
          )}
        </div>
      </section>
    </main>
  );
}