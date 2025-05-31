'use client'
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useRef } from "react";

const items = [
  {
    name: "Cheese Burger",
    vendor: "Burger Arena",
    price: "$3.88",
    image: "/popularitems/CheeseBurger.png", // replace with actual image paths
  },
  {
    name: "Toffe's Cake",
    vendor: "Top Sticks",
    price: "$4.00",
    image: "/popularitems/ToffeCake.png",
  },
  {
    name: "Dancake",
    vendor: "Cake World",
    price: "$1.99",
    image: "/popularitems/DanCake.png",
  },
  {
    name: "Crispy Sandwitch",
    vendor: "Fastfood Dine",
    price: "$3.00",
    image: "/popularitems/CrispySandwitch.png",
  },
  {
    name: "Thai Soup",
    vendor: "Foody man",
    price: "$2.79",
    image: "/popularitems/ThaiSoup.png",
  },
];

export default function PopularItems() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 text-center relative bg-white ">
      <h2 className="text-2xl font-bold mb-8 text-black">Popular items</h2>
      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-yellow-400 p-2 rounded-full shadow-lg"
        >
          <ChevronLeft className="text-white" />
        </button>

        <div
          ref={scrollRef}
          className="flex space-x-6 justify-center overflow-x-auto px-12 pb-4 scrollbar-hide"
        >
          {items.map((item, index) => (
            <div
              key={index}
              className=" bg-white rounded-lg shadow-md p-4 flex-shrink-0"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-60 h-60 object-cover rounded-md mb-4"
              />
              <h3 className="font-semibold text-md">{item.name}</h3>
              <p className="text-sm text-orange-500 flex items-center justify-center gap-1">
                <MapPin className="w-4 h-4" />
                {item.vendor}
              </p>
              <p className="font-semibold mt-2">{item.price}</p>
              <button className="bg-orange-500 text-white w-full mt-4 py-2 rounded-md font-semibold hover:bg-orange-600 transition">
                Order Now
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-yellow-400 p-2 rounded-full shadow-lg"
        >
          <ChevronRight className="text-white" />
        </button>
      </div>
    </section>
  );
}
