"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#F8F5EF]">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 md:px-8 py-4">
        <Image
          src="/images/logo.png"
          alt="Aurabands Logo"
          width={120}
          height={70}
        />
       <div className="hidden md:flex gap-6 text-[#6B4C57] font-medium items-center">
          <a href="#">Home</a>

          <a href="#shop">Shop</a>

          <a href="#contact">Contact</a>

          <Link
            href="/cart"
            className="bg-[#D9B24C] px-5 py-2 rounded-full font-semibold"
          >
            🛒 Cart
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="grid md:grid-cols-2 gap-10 px-8 py-12 items-center">
        <div>
          <p className="text-[#C08ACD] uppercase tracking-[4px] text-sm">
            Handmade Jewellery
          </p>

          <h1 className="text-5xl font-bold text-[#6B4C90] mt-3">
            Wear Your Aura
          </h1>

          <p className="mt-5 text-gray-600">
            Premium handcrafted glass bead bracelets for every style.
          </p>

          <a
            href="#shop"
            className="inline-block mt-8 bg-[#D9B24C] px-7 py-3 rounded-full font-semibold"
          >
            Shop Now
          </a>
        </div>

        <Image
          src="/images/pinkcombo.jpg"
          alt="Pink Combo Bracelet"
          width={600}
          height={600}
          className="rounded-3xl shadow-lg"
        />
      </section>

      {/* Featured Collection */}
      <section id="shop" className="px-8 pb-16">
        <h2 className="text-3xl font-bold text-center text-[#6B4C90] mb-8">
          Featured Collection
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          {/* Black */}
          <Link href="/product/black">
            <Image
              src="/images/black.jpg"
              alt="Black Bracelet"
              width={300}
              height={300}
              className="w-full h-72 object-cover rounded-2xl cursor-pointer hover:scale-105 transition"
            />
          </Link>

          {/* Black Rosary */}
          <Link href="/product/blackrosary">
            <Image
              src="/images/blackrosary.jpg"
              alt="Black Rosary"
              width={300}
              height={300}
              className="w-full h-72 object-cover rounded-2xl cursor-pointer hover:scale-105 transition"
            />
          </Link>

          {/* Blue Chain */}
          <Link href="/product/bluechain">
            <Image
              src="/images/bluechain.jpg"
              alt="Blue Chain"
              width={300}
              height={300}
              className="w-full h-72 object-cover rounded-2xl cursor-pointer hover:scale-105 transition"
            />
          </Link>

          {/* Coffee */}
          <Link href="/product/coffee">
            <Image
              src="/images/coffee.jpg"
              alt="Coffee Bracelet"
              width={300}
              height={300}
              className="w-full h-72 object-cover rounded-2xl cursor-pointer hover:scale-105 transition"
            />
          </Link>

          {/* Collection */}
          <Link href="/product/collection">
            <Image
              src="/images/collection.jpg"
              alt="Jewellery Collection"
              width={300}
              height={300}
              className="w-full h-72 object-cover rounded-2xl cursor-pointer hover:scale-105 transition"
            />
          </Link>

          {/* Couple */}
          <Link href="/product/couple">
            <Image
              src="/images/couple.jpg"
              alt="Couple Bracelet"
              width={300}
              height={300}
              className="w-full h-72 object-cover rounded-2xl cursor-pointer hover:scale-105 transition"
            />
          </Link>

          {/* Crystal */}
          <Link href="/product/crystal">
            <Image
              src="/images/crystal.jpg"
              alt="Crystal Bracelet"
              width={300}
              height={300}
              className="w-full h-72 object-cover rounded-2xl cursor-pointer hover:scale-105 transition"
            />
          </Link>

          {/* Cuff */}
          <Link href="/product/cuff">
            <Image
              src="/images/cuff.jpg"
              alt="Designer Cuff"
              width={300}
              height={300}
              className="w-full h-72 object-cover rounded-2xl cursor-pointer hover:scale-105 transition"
            />
          </Link>

          {/* Gold Spacer */}
          <Link href="/product/gold">
            <Image
              src="/images/goldspacer.jpg"
              alt="Gold Spacer Bracelet"
              width={300}
              height={300}
              className="w-full h-72 object-cover rounded-2xl cursor-pointer hover:scale-105 transition"
            />
          </Link>

          {/* Green Gold */}
          <Link href="/product/greengold">
            <Image
              src="/images/greengold.jpg"
              alt="Green Gold Bracelet"
              width={300}
              height={300}
              className="w-full h-72 object-cover rounded-2xl cursor-pointer hover:scale-105 transition"
            />
          </Link>

          {/* Green Pearl */}
          <Link href="/product/greenpearl">
            <Image
              src="/images/greenpearl.jpg"
              alt="Green Pearl Bracelet"
              width={300}
              height={300}
              className="w-full h-72 object-cover rounded-2xl cursor-pointer hover:scale-105 transition"
            />
          </Link>

          {/* Onam Pearl */}
          <Link href="/product/onampearl">
            <Image
              src="/images/onampearl.jpg"
              alt="Onam Pearl Bracelet"
              width={300}
              height={300}
              className="w-full h-72 object-cover rounded-2xl cursor-pointer hover:scale-105 transition"
            />
          </Link>

          {/* Pearl */}
          <Link href="/product/pearl">
            <Image
              src="/images/pearl.jpg"
              alt="Pearl Bracelet"
              width={300}
              height={300}
              className="w-full h-72 object-cover rounded-2xl cursor-pointer hover:scale-105 transition"
            />
          </Link>

          {/* Red Gold */}
          <Link href="/product/redgold">
            <Image
              src="/images/redgold.jpg"
              alt="Red Gold Bracelet"
              width={300}
              height={300}
              className="w-full h-72 object-cover rounded-2xl cursor-pointer hover:scale-105 transition"
            />
          </Link>

          {/* Rosary Set */}
          <Link href="/product/rosaryset">
            <Image
              src="/images/rosaryset.jpg"
              alt="Rosary Set"
              width={300}
              height={300}
              className="w-full h-72 object-cover rounded-2xl cursor-pointer hover:scale-105 transition"
            />
          </Link>

          {/* Set 1 */}
          <Link href="/product/set1">
            <Image
              src="/images/set1.jpg"
              alt="Jewellery Set"
              width={300}
              height={300}
              className="w-full h-72 object-cover rounded-2xl cursor-pointer hover:scale-105 transition"
            />
          </Link>

          {/* Sunflower */}
          <Link href="/product/sunflower">
            <Image
              src="/images/sunflower.jpg"
              alt="Sunflower Bracelet"
              width={300}
              height={300}
              className="w-full h-72 object-cover rounded-2xl cursor-pointer hover:scale-105 transition"
            />
          </Link>

        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-[#6B4C90] text-white px-8 py-12 text-center"
      >
        <h2 className="text-3xl font-bold">
          Contact Aura Bands
        </h2>

        <p className="mt-4">
          Have a question or want to place an order?
        </p>

        <a
          href="https://wa.me/917736237008"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-[#D9B24C] text-black px-8 py-3 rounded-full font-semibold"
        >
          Chat on WhatsApp
        </a>
      </section>

    </main>
  );
}