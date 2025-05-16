"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

// 🧠 Mini Memory Game for error fallback
function MemoryGame() {
  const symbols = ["🍎", "🍌", "🍇", "🍉", "🍒", "🥝"];
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    resetGame();
  }, []);

  const handleFlip = (index) => {
    if (disabled || flipped.includes(index) || matched.includes(index)) return;

    if (flipped.length === 1) {
      const firstIndex = flipped[0];
      setFlipped([firstIndex, index]);
      setDisabled(true);

      if (cards[firstIndex].symbol === cards[index].symbol) {
        setMatched((prev) => [...prev, firstIndex, index]);
        setTimeout(() => {
          setFlipped([]);
          setDisabled(false);
        }, 1000);
      } else {
        setTimeout(() => {
          setFlipped([]);
          setDisabled(false);
        }, 1500);
      }
    } else {
      setFlipped([index]);
    }
  };

  const resetGame = () => {
    const deck = [...symbols, ...symbols]
      .map((symbol) => ({ symbol, id: Math.random().toString(36).slice(2) }))
      .sort(() => Math.random() - 0.5);
    setCards(deck);
    setFlipped([]);
    setMatched([]);
    setDisabled(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">⚠️ Oops! Error Occurred</h1>
      <p className="text-lg text-gray-700 mb-8">While we fix it, enjoy a quick memory game! 🧠</p>
      <div className="grid grid-cols-4 gap-3 max-w-sm mb-6">
        {cards.map((card, index) => (
          <button
            key={card.id}
            onClick={() => handleFlip(index)}
            className={`w-16 h-16 text-2xl font-bold rounded shadow-md ${
              flipped.includes(index) || matched.includes(index)
                ? "bg-white"
                : "bg-purple-400"
            } transition-transform duration-300`}
          >
            {flipped.includes(index) || matched.includes(index) ? card.symbol : "❓"}
          </button>
        ))}
      </div>
      <button
        onClick={resetGame}
        className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 shadow-md"
      >
        Restart Game
      </button>
    </div>
  );
}

export default function Home() {
  const router = useRouter();
  const [load, setLoad] = useState(true);
  const [err, setErr] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch(() => setErr(true))
      .finally(() => setLoad(false));
  }, []);

  const formHandler = (item) => {
    router.push(`/product/${item.id}`);
  };

  if (load) {
    return <h1 className="text-2xl font-semibold text-center mt-10">Loading...</h1>;
  }

  if (err) {
    return <MemoryGame />;
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-white p-4 md:p-6">
      {/* Hero Banner */}
      <section className="relative mb-10 rounded-xl overflow-hidden shadow-lg">
        <Image
          src="https://img.lazcdn.com/us/domino/4ee5566f-8d90-4a2a-9c02-4b735dec478d_PK-1976-688.jpg_2200x2200q80.jpg"
          alt="Hero Banner"
          width={1200}
          height={400}
          className="w-full h-60 md:h-80 object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-6">
          <h2 className="text-white text-3xl md:text-5xl font-extrabold text-center drop-shadow-lg">
            Big Deals. Big Brands.
          </h2>
          <p className="mt-3 text-white/90 max-w-xl text-center text-lg md:text-xl">
            Discover the latest trends and exclusive discounts.
          </p>
          <button
            onClick={() => router.push("/products")}
            className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="mb-12 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Shop by Category</h3>
        <div className="flex flex-wrap justify-center gap-5">
          {[
            { name: "Smartphones", emoji: "📱" },
            { name: "Laptops", emoji: "💻" },
            { name: "Fragrances", emoji: "🌸" },
            { name: "Skincare", emoji: "🧴" },
            { name: "Groceries", emoji: "🛒" },
            { name: "Home", emoji: "🏠" },
          ].map(({ name, emoji }) => (
            <button
              key={name}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold rounded-full shadow-lg transform transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <span className="text-xl">{emoji}</span>
              <span className="text-lg">{name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Featured Picks Carousel */}
      <section className="mb-14">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Featured Picks</h3>
        <div className="flex gap-5 overflow-x-auto no-scrollbar pb-3">
          {data?.products?.slice(0, 5).map((item) => (
            <div
              key={item.id}
              onClick={() => formHandler(item)}
              className="min-w-[220px] cursor-pointer bg-white shadow-lg rounded-xl p-4 hover:scale-105 transition-transform"
            >
              <Image
                src={item.thumbnail}
                alt={item.title}
                width={220}
                height={160}
                className="w-full h-36 object-cover rounded-lg"
                priority={false}
              />
              <p className="mt-3 font-semibold truncate">{item.title}</p>
              <p className="text-blue-600 font-bold">${item.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="mb-14">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">New Arrivals</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data?.products
            ?.slice(-8)
            .reverse()
            .map((item) => (
              <LazyCard key={item.id} item={item} onClick={() => formHandler(item)} />
            ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-14 bg-blue-50 py-12 px-6 rounded-xl shadow-inner max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-6">What Our Customers Say</h3>
        <div className="space-y-8 max-w-3xl mx-auto">
          {[
            {
              id: 1,
              name: "Alice",
              review: "Amazing products and fast delivery! Highly recommend this store.",
            },
            {
              id: 2,
              name: "John",
              review: "Great customer support and excellent quality.",
            },
            {
              id: 3,
              name: "Maria",
              review: "Love the variety and prices. Will shop again!",
            },
          ].map(({ id, name, review }) => (
            <blockquote
              key={id}
              className="bg-white p-6 rounded-lg shadow-md text-gray-700 italic text-lg"
            >
              “{review}” — <span className="font-semibold text-gray-900">{name}</span>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="mb-16 bg-white rounded-xl shadow-lg max-w-xl mx-auto p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Stay Updated</h3>
        <p className="mb-6 text-gray-600">Subscribe to our newsletter to get the latest deals and offers.</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Subscribed!");
          }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 flex-grow"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold rounded-lg shadow-md"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* Main Product Listing */}
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">🛍️ Trending Products</h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.products?.map((item) => (
          <LazyCard key={item.id} item={item} onClick={() => formHandler(item)} />
        ))}
      </div>
    </main>
  );
}

// 💤 Lazy-loaded Product Card
function LazyCard({ item, onClick }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="min-h-[280px] bg-white/70 rounded-xl shadow-md border border-gray-200">
      {isVisible ? (
        <div
          tabIndex={0}
          role="button"
          onClick={onClick}
          onKeyDown={(e) => e.key === "Enter" && onClick()}
          className="cursor-pointer rounded-2xl overflow-hidden hover:scale-[1.02] transform transition duration-300 ease-in-out"
        >
          <div className="relative">
            <Image
              src={item.thumbnail}
              alt={item.title}
              width={400}
              height={300}
              className="object-cover w-full h-48"
            />
            <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              -{item.discountPercentage}%
            </span>
          </div>
          <div className="p-4 space-y-2">
            <h2 className="text-lg font-semibold text-gray-900 truncate">{item.title}</h2>
            <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold text-blue-600">${item.price}</p>
              <p className="text-sm text-gray-400 line-through">
                ${Math.round(item.price / (1 - item.discountPercentage / 100))}
              </p>
            </div>
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
              {item.brand}
            </span>
          </div>
        </div>
      ) : (
        <div className="animate-pulse h-full w-full p-4 space-y-4">
          <div className="h-48 bg-gray-300 rounded-xl" />
          <div className="h-4 bg-gray-300 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-1/2" />
        </div>
      )}
    </div>
  );
}
