import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const foodItems = [
  { name: "Pizza", image: "/food-crousel/pizza.png" },
  { name: "Burger", image: "/food-crousel/burger.png" },
  { name: "Noodles", image: "/food-crousel/noodles.png" },
  { name: "Sub-sandwich", image: "/food-crousel/sandwich.png" },
  { name: "Chowmein", image: "/food-crousel/chowmein.png" },
  { name: "Steak", image: "/food-crousel/steak.png" },
];

export default function FoodSearchCarousel() {
  return (
    <div className="bg-white px-6 lg:px-20 py-16">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center sm:text-left">Search by Food</h2>
        <div className="flex items-center gap-6">
          <a href="#" className="text-orange-500 font-bold hover:underline flex items-center gap-2">
            View All
            <ArrowRight size={18} />
          </a>
          <div className="flex gap-4">
            <button className="bg-gray-100 hover:bg-orange-500 hover:text-white text-gray-600 p-3 rounded-full transition-all shadow-sm">
              <ArrowLeft size={24} />
            </button>
            <button className="bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-all">
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-8 lg:gap-16 overflow-x-auto no-scrollbar py-4 px-2">
        {foodItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-shrink-0 group cursor-pointer">
            <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-xl border-4 border-transparent group-hover:border-orange-500 transition-all relative">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <span className="mt-4 text-lg font-bold text-gray-800 group-hover:text-orange-500 transition-colors">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

