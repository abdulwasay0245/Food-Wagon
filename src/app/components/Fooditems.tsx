import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const foodItems = [
  {
    title: "Best deals Crispy Sandwiches",
    description: "Enjoy the large size of sandwiches. Complete perfect slice of sandwiches.",
    highlight: "Crispy Sandwiches",
    image: "/deals/sandwitch.png",
    buttonLabel: "PROCEED TO ORDER",
  },
  {
    title: "Celebrate parties with Fried Chicken",
    description: "Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out best deals for fried chicken.",
    highlight: "Fried Chicken",
    image: "/deals/fried-chicken.png",
    buttonLabel: "PROCEED TO ORDER",
    reverse: true,
  },
  {
    title: "Wanna eat hot & spicy Pizza?",
    description: "Pair up with a friend and enjoy the hot and crispy pizza pops. Try it with the best deals.",
    highlight: "Pizza?",
    image: "/deals/pizza.png",
    buttonLabel: "PROCEED TO ORDER",
  },
];

const FoodDeals = () => {
  return (
    <div className="flex flex-col gap-16 py-24 px-6 lg:px-20 bg-white">
      {foodItems.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 rounded-[40px] overflow-hidden bg-white shadow-2xl shadow-gray-100 border border-gray-50 group ${
            item.reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div className="relative w-full lg:w-3/5 h-[400px] overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="flex flex-col justify-center gap-8 p-10 lg:p-16 lg:w-2/5">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
              {item.title.split(item.highlight).map((part, i) => (
                <span key={i}>
                  {part}
                  {i === 0 && <span className="text-orange-500">{item.highlight}</span>}
                </span>
              ))}
            </h2>
            <p className="text-xl text-gray-600 font-medium leading-relaxed">
              {item.description}
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-black py-5 px-10 rounded-2xl shadow-xl shadow-orange-100 transition-all active:scale-95 w-fit flex items-center gap-3 text-lg">
              {item.buttonLabel}
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodDeals;

