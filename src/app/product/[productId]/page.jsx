"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProductPage({ params }) {
  const { productId } = params;
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`https://dummyjson.com/products/${productId}`);
      const data = await res.json();
      setProduct(data);
      setMainImage(data.images[0]); // default main image
    }
    fetchProduct();
  }, [productId]);

  if (!product) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      {/* Title */}
      <h1 className="text-4xl font-extrabold mb-6 text-gray-900">{product.title}</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Images gallery */}
        <div className="flex flex-col space-y-4 md:w-1/2">
          <Image
            src={mainImage}
            alt={product.title}
            width={500}
            height={500}
            className="rounded-lg object-cover shadow"
            priority
          />
          <div className="flex space-x-4 overflow-x-auto pt-2">
            {product.images.map((img, idx) => (
              <Image
                key={idx}
                src={img}
                alt={`Thumb ${idx}`}
                width={100}
                height={100}
                className={`rounded-md object-cover cursor-pointer transition ${
                  img === mainImage ? "ring-2 ring-blue-500" : "hover:ring-2 hover:ring-blue-300"
                }`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <p className="text-gray-700 mb-4 text-lg">{product.description}</p>

            <div className="space-y-2 text-sm text-gray-800">
              <p><strong>Brand:</strong> {product.brand}</p>
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Rating:</strong> {product.rating} ⭐ ({product.stock} in stock)</p>
              <p><strong>Min Order:</strong> {product.minimumOrderQuantity}</p>
              <p><strong>Return Policy:</strong> {product.returnPolicy}</p>
              <p><strong>Shipping:</strong> {product.shippingInformation}</p>
              <p><strong>SKU:</strong> {product.sku}</p>
              <p><strong>Warranty:</strong> {product.warrantyInformation}</p>
              <p><strong>Weight:</strong> {product.weight}g</p>
              <div>
                <strong>Tags:</strong>{" "}
                {product.tags.map((tag, i) => (
                  <span key={i} className="inline-block bg-blue-100 text-blue-700 rounded-full px-2 py-1 text-xs mr-2">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-2">
                <strong>Meta:</strong>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Created: {new Date(product.meta.createdAt).toLocaleDateString()}</li>
                  <li>Updated: {new Date(product.meta.updatedAt).toLocaleDateString()}</li>
                  <li>Barcode: {product.meta.barcode}</li>
                  <li>
                    QR Code:{" "}
                    <a href={product.meta.qrCode} target="_blank" rel="noreferrer" className="text-blue-600 underline">
                      View QR
                    </a>
                  </li>
                </ul>
              </div>
              <p className="mt-2"><strong>Reviews:</strong> {product.reviews.length} review(s)</p>
            </div>
          </div>

          {/* Price & CTA */}
          <div className="mt-6">
            <p className="text-4xl font-bold text-blue-600">${product.price}</p>
            <button
              className="mt-4 w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
