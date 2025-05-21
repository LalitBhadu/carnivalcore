"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Layout from '../../../Components/Layout/Layout';


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
  {
    primarySrc: "https://carnivalcore.com/assets/images/product14.jpg",
    hoverSrc: "https://carnivalcore.com/assets/images/product15.jpg",
    lbl: "New",
    productName: "Water Storage Tanks Manufacturer",
  },
  {
    primarySrc: "https://carnivalcore.com/assets/images/product16.jpg",
    hoverSrc: "https://carnivalcore.com/assets/images/product17.jpg",
    lbl: "New",
    productName: "Shipping Containers",
  },
  {
    primarySrc: "https://carnivalcore.com/assets/images/product19.jpg",
    hoverSrc: "https://carnivalcore.com/assets/images/product18.jpg",
    lbl: "New",
    productName: "Steel Shipping Drums",
  },
  {
    primarySrc: "https://carnivalcore.com/assets/images/product20.jpg",
    hoverSrc: "https://carnivalcore.com/assets/images/product21.jpg",
    lbl: "New",
    productName: "Industrial Electrical Installation",
  },
  {
    primarySrc: "https://carnivalcore.com/assets/images/product22.jpg",
    hoverSrc: "https://carnivalcore.com/assets/images/product23.jpg",
    lbl: "New",
    productName: "Installation of Telecommunications Systems",
  },
  {
    primarySrc: "https://carnivalcore.com/assets/images/product24.jpg",
    hoverSrc: "https://carnivalcore.com/assets/images/product25.jpg",
    lbl: "New",
    productName: "Computer Network and Cable",
  },
  {
    primarySrc: "https://carnivalcore.com/assets/images/product27.jpg",
    hoverSrc: "https://carnivalcore.com/assets/images/product28.jpg",
    lbl: "New",
    productName: "Fibre Optic & Satellite Dishes",
  },
];
const ProductDetails = ({ params }) => {
  // In app router, params is passed in props (if server component)
  // But if client component, get slug from useRouter or useSearchParams.
  // Here assuming server component for simplicity:

  // Find product by slug (slugify productName same way)
  const slug = params.slug;

  const product = products.find(
    (p) => p.productName.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!product) {
    return <div className="p-10 text-center text-red-500">Product not found</div>;
  }

  return (
    <Layout>
    <div className="min-h-screen p-10 max-w-4xl mx-auto bg-white rounded shadow-md">
      <h1 className="text-3xl font-bold mb-6">{product.productName}</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.primarySrc}
          alt={product.productName}
          className="w-full md:w-1/2 object-cover rounded"
        />
        <div className="md:w-1/2">
          {product.lbl && (
            <span className="inline-block bg-red-600 text-white px-3 py-1 rounded uppercase text-xs font-bold mb-4">
              {product.lbl}
            </span>
          )}
          <p className="text-gray-700">
            {/* You can add more detailed description here if available */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            lacinia metus nec dui tempus, at vehicula lectus placerat. 
          </p>
          {/* You can add price, specs, buttons etc here */}
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default ProductDetails;
