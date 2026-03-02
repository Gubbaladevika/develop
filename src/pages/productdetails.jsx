import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) return <div className="p-10">Loading...</div>;

  const discountedPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(0);

  return (
    <>
      <Header />

      <div className="max-w-6xl mx-auto p-6 bg-gray-100 min-h-screen">
        <div className="bg-white rounded-xl shadow-lg p-6 grid md:grid-cols-2 gap-8">

          {/* Left: Images */}
          <div>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-80 object-contain rounded-lg"
            />

            <div className="flex gap-4 mt-4 overflow-x-auto">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=""
                  className="w-24 h-24 object-contain border rounded-lg p-2"
                />
              ))}
            </div>
          </div>

          {/* Right: Details */}
          <div>
            <h2 className="text-3xl font-bold">{product.title}</h2>

            <p className="text-gray-600 mt-2">{product.description}</p>

            <div className="mt-4 flex items-center gap-2">
              <span className="bg-green-600 text-white px-3 py-1 rounded">
                {product.rating} ★
              </span>
              <span className="text-gray-500">
                ({Math.floor(product.stock * 2)} reviews)
              </span>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <span className="text-3xl font-bold text-black">
                ${discountedPrice}
              </span>

              <span className="text-gray-500 line-through">
                ${product.price}
              </span>

              <span className="text-green-600 font-semibold">
                {product.discountPercentage.toFixed(0)}% off
              </span>
            </div>

            <div className="mt-6">
              <p><strong>Brand:</strong> {product.brand}</p>
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Stock:</strong> {product.stock}</p>
            </div>

            <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetails;