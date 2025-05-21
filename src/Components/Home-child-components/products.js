"use client";

import Link from "next/link";
import { useState } from "react";
import Layout from "../../Components/Layout/Layout";

const products = [
  {
    primarySrc: "https://carnivalcore.com/assets/images/slideshow-banner/1.jpg",
    hoverSrc: "https://carnivalcore.com/assets/images/slideshow-banner/2.jpg",
    lbl: "Sale",
    productName: "Equipment Manufacturing",
  },
  {
    primarySrc: "https://carnivalcore.com/assets/images/product2.jpg",
    hoverSrc: "https://carnivalcore.com/assets/images/product2-1.jpg",
    lbl: "",
    productName: "Mens Garments",
  },
  {
    primarySrc: "https://carnivalcore.com/assets/images/product4.jpg",
    hoverSrc: "https://carnivalcore.com/assets/images/product5.jpg",
    lbl: "",
    productName: '80cm (32") HD LED TV (LED-3243)',
  },
  {
    primarySrc: "https://carnivalcore.com/assets/images/product3.jpg",
    hoverSrc: "https://carnivalcore.com/assets/images/product3-1.jpg",
    lbl: "New",
    productName: "Women's Garments",
  },
  {
    primarySrc: "https://carnivalcore.com/assets/images/product6.jpg",
    hoverSrc: "https://carnivalcore.com/assets/images/product7.jpg",
    lbl: "",
    productName: "Essential Home Appliances",
  },
  {
    primarySrc: "https://carnivalcore.com/assets/images/product8.jpg",
    hoverSrc: "https://carnivalcore.com/assets/images/product9.jpg",
    lbl: "New",
    productName: "Tools and Equipment for Electronics",
  },
  {
    primarySrc: "https://carnivalcore.com/assets/images/product10.jpg",
    hoverSrc: "https://carnivalcore.com/assets/images/product11.jpg",
    lbl: "New",
    productName: "Fabricated Metal Products",
  },
  {
    primarySrc: "https://carnivalcore.com/assets/images/product12.jpg",
    hoverSrc: "https://carnivalcore.com/assets/images/product13.jpg",
    lbl: "New",
    productName: "Manufacture of Fabricated Metal Products",
  },
];

const Product = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const slug = product.productName.toLowerCase().replace(/\s+/g, "-");

  return (
      <Link href={`/products/${slug}`}>
        <div
          className="relative cursor-pointer border border-gray-300 rounded shadow-sm overflow-hidden group"
            style={{ width: '100%', maxWidth: '300px', height: '340px' }}  // Fixed size container
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Label badge */}
          {product.lbl && (
            <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded z-10">
              {product.lbl}
            </div>
          )}

          {/* Image */}
          <img
            src={hovered ? product.hoverSrc : product.primarySrc}
            alt={product.productName}
            className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />

          {/* Product Name */}
          <div className="p-3 bg-white">
            <h3 className="text-center text-gray-800 font-semibold text-lg">
              {product.productName}
            </h3>
          </div>
        </div>
      </Link>
  );
};

const Products = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5 md:px-20">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
        CarnivalCore Products
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((prod, idx) => (
          <Product key={idx} product={prod} />
        ))}
      </div>
    </div>
  );
};

export default Products;
