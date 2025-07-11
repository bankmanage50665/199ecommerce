import React, { useContext, useEffect, useState } from "react";
import { Leaf, Sparkles, HeartPulse } from "lucide-react";

import { ShopContext } from "../context/ShopContext";

import Title from "./Title";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";
import Hairbenefit from "../assets/Hairbenefit.png";
import neemPowder from "../assets/neemPowder.png";
import Allpowders from "../assets/Allpowders.png";
import skinCare from "../assets/skinCare.png";
import Holistic from "../assets/Holistic.png";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className="bg-[#f5f5f3] py-20">
      {/* Collection Header */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-light text-[#1d3520]">
            Premium Herbs Formulations
          </h2>
          <p className="mt-4 text-[#3a5a40] font-light text-lg max-w-2xl mx-auto">
            Pure, potent, and precisely formulated for maximum efficacy and
            results.
          </p>
        </div>

        {/* Products Grid with original ProductItem components */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {latestProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-12">
          <Link
            to="/collection"
            className="px-8 py-3 bg-[#3a5a40] text-white rounded-full text-sm font-medium hover:bg-[#2d4930] transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>

      {/* Benefits Section - Apple Inspired */}
      <div className="container mx-auto px-4 py-16 bg-gradient-to-b from-green-50 to-white">
        <h2 className="text-4xl sm:text-5xl font-light text-center text-emerald-800 mb-16 tracking-wide">
          Nature's <span className="font-medium">Healing Power</span>
        </h2>

        <div className="container mx-auto px-4 py-16 bg-gradient-to-b from-green-50 to-white">
          <h2 className="text-3xl sm:text-5xl font-light text-center text-emerald-900 mb-16">
            Nature's Solution
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="flex flex-col md:flex-row h-full">
                <div className="w-full md:w-1/2 bg-emerald-700 flex items-center justify-center p-8">
                  <Leaf size={80} className="text-white" />
                </div>
                <div className="w-full md:w-1/2 p-6">
                  <h3 className="text-xl font-medium text-emerald-800 mb-3">
                    Skin Purification
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    With powerful antibacterial and anti-inflammatory
                    properties, our neem powder creates a natural clarifying
                    effect on skin, reducing acne and evening skin tone.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="flex flex-col md:flex-row h-full">
                <div className="w-full md:w-1/2 bg-emerald-700 flex items-center justify-center p-8">
                  <Sparkles size={80} className="text-white" />
                </div>
                <div className="w-full md:w-1/2 p-6">
                  <h3 className="text-xl font-medium text-emerald-800 mb-3">
                    Hair Restoration
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Rich in antioxidants and fatty acids, neem powder
                    strengthens hair follicles, promotes growth, and naturally
                    conditions while fighting dandruff and scalp conditions.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="flex flex-col md:flex-row h-full">
                <div className="w-full md:w-1/2 bg-emerald-700 flex items-center justify-center p-8">
                  <HeartPulse size={80} className="text-white" />
                </div>
                <div className="w-full md:w-1/2 p-6">
                  <h3 className="text-xl font-medium text-emerald-800 mb-3">
                    Holistic Wellness
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Traditionally used in Ayurveda for centuries, our premium
                    neem powder supports immune function, digestive health, and
                    helps maintain balanced blood sugar levels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Highlight - Apple Style */}
      <div className="container mx-auto px-4 mt-32">
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={Allpowders}
            // alt="Premium Neem Harvesting"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="py-6 px-4 sm:px-8 md:px-12 max-w-lg text-white">
              <h2 className="text-xl font-bold mb-6">
                Veborg Organic Product Descriptions
              </h2>

            
            
            
            
            
            
            
            
            
            
              <div className="grid md:grid-cols-2 gap-6">
                {/* Neem Powder */}
                <div className="flex flex-col items-start p-4 bg-white bg-opacity-80 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-1">Neem Powder</h3>
                  <p className="text-sm font-semibold text-green-700 mb-1">
                    Sustainably Harvested
                  </p>
                  <p className="text-sm text-gray-700">
                    Harvested from organic farms in India and processed
                    traditionally to preserve purity and potency.
                  </p>
                </div>

                {/* Moringa Powder */}
                <div className="flex flex-col items-start p-4 bg-white bg-opacity-80 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-1">Moringa Powder</h3>
                  <p className="text-sm font-semibold text-green-700 mb-1">
                    Nature's Powerhouse
                  </p>
                  <p className="text-sm text-gray-700">
                    Fresh-picked moringa leaves, gently dried to lock in
                    nutrients for maximum bioavailability.
                  </p>
                </div>

                {/* Orange Peel Powder */}
                <div className="flex flex-col items-start p-4 bg-white bg-opacity-80 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-1">Orange Peel Powder</h3>
                  <p className="text-sm font-semibold text-orange-600 mb-1">
                    Citrus Vitality
                  </p>
                  <p className="text-sm text-gray-700">
                    Sun-ripened organic oranges, dried and finely ground, rich
                    in essential oils and antioxidants.
                  </p>
                </div>

               
              </div>

















            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestCollection;
