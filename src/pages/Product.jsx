import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setData(response.data.products);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header />

      <div className="p-6 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>

        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto gap-6 hide-scrollbar">
          {data.map((item) => {
            const discountedPrice = (
              item.price -
              (item.price * item.discountPercentage) / 100
            ).toFixed(0);

            return (
              <div
  key={item.id}
  onClick={() => navigate(`/product/${item.id}`)}
  className="min-w-[260px] bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 flex-shrink-0 cursor-pointer"
>
                {/* Image Box */}
                <div className="w-full h-48 bg-gray-100 flex items-center justify-center rounded-t-xl overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="h-full object-contain p-4 hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 truncate">
                    {item.title}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mt-2">
                    <span className="bg-green-600 text-white text-sm px-2 py-1 rounded">
                      {item.rating} ★
                    </span>
                    <span className="text-gray-500 text-sm">
                      ({Math.floor(item.stock * 2)} reviews)
                    </span>
                  </div>

                  {/* Price Section */}
                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-lg font-bold text-black">
                      ${discountedPrice}
                    </span>

                    <span className="text-gray-500 line-through text-sm">
                      ${item.price}
                    </span>

                    <span className="text-green-600 text-sm font-semibold">
                      {item.discountPercentage.toFixed(0)}% off
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
   <Footer />
    </>
  );
};

export default Product;
