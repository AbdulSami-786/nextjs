"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Home() {
  const router = useRouter();

  const [load, setLoad] = useState(true);
  const [err, setErr] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch(() => {
        setErr(true);
      })
      .finally(() => {
        setLoad(false);
      });
  }, []);

  const formHandler = (item) => {
    router.push(`/product/${item.id}`);
  };

  if (load)
    return <h1 className="text-2xl font-semibold text-center mt-10">Loading...</h1>;

  if (err)
    return (
      <h1 className="text-2xl font-semibold text-center text-red-600 mt-10">
        Error fetching data
      </h1>
    );

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Product List</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.products?.map((item) => (
          <div
            key={item.id}
            tabIndex={0}
            role="button"
            onClick={() => formHandler(item)}
            onKeyDown={(e) => e.key === "Enter" && formHandler(item)}
            className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={item.thumbnail}
              alt={item.title}
              width={400}
              height={300}
              className="object-cover w-full h-48 rounded-t-xl"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
              <p className="text-lg font-bold text-blue-600">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
