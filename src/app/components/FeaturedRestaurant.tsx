import { BadgePercent, Clock } from "lucide-react";

const restaurants = [
  {
    name: "Foodworld",
    discount: "20% off",
    status: "Opens tomorrow",
    fast: true,
    rating: 46,
    image: "/restaurants/1.png",
    brand: "Ekimothy",
    brandColor: "bg-blue-500"
  },
  {
    name: "Pizzahub",
    discount: "15% off",
    status: "Opens tomorrow",
    fast: true,
    rating: 40,
    image: "/restaurants/2.png",
    brand: "Pizza Pino",
    brandColor: "bg-yellow-300 text-black"
  },
  {
    name: "Donuts hut",
    discount: "10% off",
    status: "Open Now",
    fast: true,
    rating: 20,
    image: "/restaurants/3.png",
    brand: "Dunkin' Donuts",
    brandColor: "bg-blue-300"
  },
  {
    name: "Donuts hut",
    discount: "15% off",
    status: "Open Now",
    fast: true,
    rating: 50,
    image: "/restaurants/4.png",
    brand: "Subway",
    brandColor: "bg-green-300"
  },
  {
    name: "Ruby Tuesday",
    discount: "10% off",
    status: "Open Now",
    fast: true,
    rating: 26,
    image: "/restaurants/5.png",
    brand: "Ruby Tuesday",
    brandColor: "bg-orange-400"
  },
  {
    name: "Kuakata Fried Chicken",
    discount: "25% off",
    status: "Open Now",
    fast: true,
    rating: 53,
    image: "/restaurants/6.png",
    brand: "KFC",
    brandColor: "bg-green-400"
  },
  {
    name: "Red Square",
    discount: "10% off",
    status: "Open Now",
    fast: true,
    rating: 45,
    image: "/restaurants/7.png",
    brand: "Red Square",
    brandColor: "bg-red-400"
  },
  {
    name: "Taco Bell",
    discount: "10% off",
    status: "Open Now",
    fast: true,
    rating: 35,
    image: "/restaurants/8.png",
    brand: "Taco Bell",
    brandColor: "bg-orange-500"
  }
];

export default function FeaturedRestaurants() {
  return (
    <div className=" bg-white p-4">
      <h1 className="text-3xl text-black font-bold mb-6 text-center">Featured Restaurants</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {restaurants.map((restaurant, index) => (
          <div
            key={index}
            className="rounded-xl shadow-lg overflow-hidden border hover:shadow-xl transition-shadow"
          >
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <div className="flex gap-2 mb-2">
                <span className="flex items-center gap-1 text-white text-xs px-2 py-1 bg-red-500 rounded-full">
                  <BadgePercent className="w-3 h-3" /> {restaurant.discount}
                </span>
                {restaurant.fast && (
                  <span className="flex items-center gap-1 text-white text-xs px-2 py-1 bg-yellow-500 rounded-full">
                    <Clock className="w-3 h-3" /> Fast
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 text-sm mb-2">
                <span className={`${restaurant.brandColor} text-white px-2 py-1 rounded-md font-medium`}>
                  {restaurant.brand}
                </span>
                <span className="text-yellow-500 font-semibold">★ {restaurant.rating}</span>
              </div>
              <div className="text-sm font-medium text-gray-700">
                {restaurant.name}
              </div>
              <div
                className={`mt-2 text-xs px-2 py-1 rounded-full inline-block font-medium ${
                  restaurant.status === "Open Now"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {restaurant.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
