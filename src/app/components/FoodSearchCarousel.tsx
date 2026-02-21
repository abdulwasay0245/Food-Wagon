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
    <div className="bg-white px-6 lg:px-20 py-12">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-6">
        <h2 className="text-2xl font-bold text-gray-900 text-center sm:text-left">Search by Food</h2>
        <div className="flex items-center gap-6">
          <a href="#" className="text-orange-500 font-bold hover:underline flex items-center gap-2 text-sm">
            View All
            <ArrowRight size={16} />
          </a>
          <div className="flex gap-3">
            <button className="bg-gray-100 hover:bg-orange-500 hover:text-white text-gray-600 p-2.5 rounded-full transition-all shadow-sm">
              <ArrowLeft size={20} />
            </button>
            <button className="bg-orange-500 text-white p-2.5 rounded-full shadow-lg hover:bg-orange-600 transition-all">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-6 lg:gap-12 overflow-x-auto no-scrollbar py-4 px-2">
        {foodItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-shrink-0 group cursor-pointer">
            <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden shadow-lg border-2 border-transparent group-hover:border-orange-500 transition-all relative">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <span className="mt-3 text-base font-bold text-gray-800 group-hover:text-orange-500 transition-colors">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

