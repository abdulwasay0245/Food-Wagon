import React from "react";

const foodItems = [
  {
    title: "Best deals Crispy Sandwiches",
    description: "Enjoy the large size of sandwiches. Complete perfect slice of sandwiches.",
    image: "/deals/sandwitch.png",
    buttonLabel: "PROCEED TO ORDER",
  },
  {
    title: "Celebrate parties with Fried Chicken",
    description: "Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out best deals for fried chicken.",
    image: "/deals/fried-chicken.png",
    buttonLabel: "Proceed to order",
    reverse: true,
  },
  {
    title: "Wanna eat hot & spicy Pizza?",
    description: "Pair up with a friend and enjoy the hot and crispy pizza pops. Try it with the best deals.",
    image: "/deals/pizza.png",
    buttonLabel: "PROCEED TO ORDER",
  },
];

const FoodDeals = () => {
  return (
    <div className="flex flex-col gap-10 p-4 md:p-10 bg-white">
      {foodItems.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl shadow-md overflow-hidden bg-white ${
            item.reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full md:w-1/2 h-64 object-cover"
          />
          <div className="flex flex-col justify-center gap-4 p-6 md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800">
              {item.title.split(/(Crispy Sandwiches|Fried Chicken|Pizza\?)/).map((part, i) => (
                <span
                  key={i}
                  className={
                    ["Crispy Sandwiches", "Fried Chicken", "Pizza?"].includes(part)
                      ? "text-yellow-500"
                      : ""
                  }
                >
                  {part}
                </span>
              ))}
            </h2>
            <p className="text-gray-600">{item.description}</p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white w-fit">
              {item.buttonLabel}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodDeals;
