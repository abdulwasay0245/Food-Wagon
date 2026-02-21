'use client';

import { BadgePercent, Clock, Star, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useCart } from "./CartContext";

const restaurants = [
  {
    id: "r1",
    name: "Foodworld",
    discount: "20% off",
    status: "Opens tomorrow",
    fast: true,
    rating: 4.6,
    image: "/restaurants/1.png",
    brand: "Ekimothy",
    brandColor: "bg-blue-500"
  },
  {
    id: "r2",
    name: "Pizzahub",
    discount: "15% off",
    status: "Opens tomorrow",
    fast: true,
    rating: 4.0,
    image: "/restaurants/2.png",
    brand: "Pizza Pino",
    brandColor: "bg-yellow-300 text-black"
  },
  {
    id: "r3",
    name: "Donuts hut",
    discount: "10% off",
    status: "Open Now",
    fast: true,
    rating: 2.0,
    image: "/restaurants/3.png",
    brand: "Dunkin' Donuts",
    brandColor: "bg-blue-300"
  },
  {
    id: "r4",
    name: "Donuts hut",
    discount: "15% off",
    status: "Open Now",
    fast: true,
    rating: 5.0,
    image: "/restaurants/4.png",
    brand: "Subway",
    brandColor: "bg-green-300"
  },
  {
    id: "r5",
    name: "Ruby Tuesday",
    discount: "10% off",
    status: "Open Now",
    fast: true,
    rating: 2.6,
    image: "/restaurants/5.png",
    brand: "Ruby Tuesday",
    brandColor: "bg-orange-400"
  },
  {
    id: "r6",
    name: "Kuakata Fried Chicken",
    discount: "25% off",
    status: "Open Now",
    fast: true,
    rating: 5.3,
    image: "/restaurants/6.png",
    brand: "KFC",
    brandColor: "bg-green-400"
  },
  {
    id: "r7",
    name: "Red Square",
    discount: "10% off",
    status: "Open Now",
    fast: true,
    rating: 4.5,
    image: "/restaurants/7.png",
    brand: "Red Square",
    brandColor: "bg-red-400"
  },
  {
    id: "r8",
    name: "Taco Bell",
    discount: "10% off",
    status: "Open Now",
    fast: true,
    rating: 3.5,
    image: "/restaurants/8.png",
    brand: "Taco Bell",
    brandColor: "bg-orange-500"
  }
];

export default function FeaturedRestaurants() {
  const { addToCart } = useCart();

  return (
    <div className="bg-white px-6 lg:px-20 py-20">
      <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-4">
        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 text-center md:text-left">
          Featured Restaurants
        </h2>
        <button className="text-orange-500 font-bold hover:underline flex items-center gap-2 text-lg">
          View All <ArrowRight size={20} />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="group rounded-3xl overflow-hidden border border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 bg-white flex flex-col h-full"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={restaurant.image}
                alt={restaurant.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-5 left-5 flex flex-col gap-2">
                <span className="flex items-center gap-1.5 text-white text-xs font-black px-4 py-2 bg-orange-600 rounded-2xl shadow-xl backdrop-blur-sm">
                  <BadgePercent className="w-4 h-4" /> {restaurant.discount}
                </span>
                {restaurant.fast && (
                  <span className="flex items-center gap-1.5 text-white text-xs font-black px-4 py-2 bg-yellow-400 rounded-2xl shadow-xl backdrop-blur-sm">
                    <Clock className="w-4 h-4" /> FAST
                  </span>
                )}
              </div>
            </div>
            
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <span className={`${restaurant.brandColor} text-white px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-sm`}>
                  {restaurant.brand}
                </span>
                <span className="text-yellow-500 font-black flex items-center gap-1.5 text-lg">
                  <Star className="w-5 h-5 fill-yellow-500" />
                  <span className="text-gray-900">{restaurant.rating.toFixed(1)}</span>
                </span>
              </div>
              
              <h3 className="text-2xl font-black text-gray-900 mb-4 truncate group-hover:text-orange-500 transition-colors">
                {restaurant.name}
              </h3>
              
              <div className="mt-auto flex items-center justify-between gap-4">
                <div
                  className={`text-xs px-4 py-2 rounded-2xl font-black tracking-tight ${
                    restaurant.status === "Open Now"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {restaurant.status.toUpperCase()}
                </div>
                <button 
                  onClick={() => addToCart({ id: restaurant.id, name: restaurant.name, price: "$0.00", image: restaurant.image })}
                  className="bg-orange-500 text-white p-3 rounded-2xl hover:bg-orange-600 transition-all active:scale-90 shadow-lg shadow-orange-100"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


