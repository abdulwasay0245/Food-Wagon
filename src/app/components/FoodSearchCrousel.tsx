import { ArrowLeft, ArrowRight } from "lucide-react";

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
    <div className="bg-white px-6 py-10">
      <div className="flex justify-around items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Search by Food</h2>
        <div className="flex items-center gap-3">
          <a href="#" className="text-sm text-orange-500 font-medium hover:underline">
            View All
          </a>
          <div className="flex gap-2">
            <button className="bg-orange-400 hover:bg-orange-500 text-white p-2 rounded-full shadow-md">
              <ArrowLeft size={20} />
            </button>
            <button className="bg-orange-400 hover:bg-orange-500 text-white p-2 rounded-full shadow-md">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-12 overflow-x-auto no-scrollbar">
        {foodItems.map((item, index) => (
          <div key={index} className="flex flex-col  items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-md">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="mt-2 text-sm font-semibold text-gray-800">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
