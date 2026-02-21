'use client'
import { ChevronLeft, ChevronRight, MapPin, ShoppingCart } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";
import { useCart } from "./CartContext";

const items = [
  {
    id: "p1",
    name: "Cheese Burger",
    vendor: "Burger Arena",
    price: "$3.88",
    image: "/popularitems/CheeseBurger.png",
  },
  {
    id: "p2",
    name: "Toffe's Cake",
    vendor: "Top Sticks",
    price: "$4.00",
    image: "/popularitems/ToffeCake.png",
  },
  {
    id: "p3",
    name: "Dancake",
    vendor: "Cake World",
    price: "$1.99",
    image: "/popularitems/DanCake.png",
  },
  {
    id: "p4",
    name: "Crispy Sandwitch",
    vendor: "Fastfood Dine",
    price: "$3.00",
    image: "/popularitems/CrispySandwitch.png",
  },
  {
    id: "p5",
    name: "Thai Soup",
    vendor: "Foody man",
    price: "$2.79",
    image: "/popularitems/ThaiSoup.png",
  },
];

export default function PopularItems() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { addToCart } = useCart();

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -350 : 350,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 text-center relative bg-white px-6 lg:px-20 overflow-hidden">
      <h2 className="text-4xl font-bold mb-12 text-gray-900">Popular items</h2>
      <div className="relative group">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-yellow-400 p-4 rounded-full shadow-2xl hover:bg-yellow-500 transition-all opacity-0 group-hover:opacity-100 -translate-x-1/2"
        >
          <ChevronLeft className="text-white w-6 h-6" />
        </button>

        <div
          ref={scrollRef}
          className="flex space-x-8 overflow-x-auto pb-10 no-scrollbar snap-x"
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-5 flex-shrink-0 w-72 snap-start border border-gray-50 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">{item.name}</h3>
              <p className="text-sm text-orange-500 flex items-center justify-center gap-1.5 font-medium mb-3">
                <MapPin className="w-4 h-4" />
                {item.vendor}
              </p>
              <p className="font-extrabold text-2xl text-gray-900 mb-6">{item.price}</p>
              <button 
                onClick={() => addToCart(item)}
                className="bg-orange-500 text-white w-full py-4 rounded-xl font-bold shadow-orange-200 shadow-xl hover:bg-orange-600 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Order Now
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-yellow-400 p-4 rounded-full shadow-2xl hover:bg-yellow-500 transition-all opacity-0 group-hover:opacity-100 translate-x-1/2"
        >
          <ChevronRight className="text-white w-6 h-6" />
        </button>
      </div>
    </section>
  );
}


