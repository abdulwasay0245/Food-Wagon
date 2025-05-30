import React from "react";

export default function FoodWagonLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-400 to-yellow-500 flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="flex items-center space-x-2">
          <span className="text-orange-600 text-xl font-bold">🍔 foodwagon</span>
        </div>
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <span>Deliver to:</span>
          <span className="flex items-center">
            📍 <span className="ml-1 font-medium">Current Location <strong>Mohammadpur Bus Stand, Dhaka</strong></span>
          </span>
          <button className="text-sm text-orange-600 hover:underline">Search Food</button>
          <button className="bg-orange-500 text-white px-4 py-1 rounded-md shadow">Login</button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex flex-1 items-center justify-between px-8 py-20 relative">
        <div className="max-w-xl space-y-6">
          <h1 className="text-5xl font-bold text-white leading-tight">Are you starving?</h1>
          <p className="text-white text-lg">Within a few clicks, find meals that are accessible near you</p>

          <div className="bg-white p-4 rounded-md shadow-md space-y-4">
            <div className="flex space-x-6">
              <button className="flex items-center space-x-2 text-white bg-orange-500 px-4 py-2 rounded-md">
                <span>🚴‍♂️</span>
                <span>Delivery</span>
              </button>
              <button className="text-gray-700 font-medium">Pickup</button>
            </div>
            <div className="flex items-center border rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="Enter Your Address"
                className="flex-1 px-4 py-2 outline-none"
              />
              <button className="bg-orange-500 text-white px-6 py-2">Find Food</button>
            </div>
          </div>
        </div>

        {/* Food Image */}
        <div className="hidden md:block absolute right-8 bottom-0 max-w-md">
          <img
            src="/food-bowl.png"
            alt="Food Bowl"
            className="w-full h-auto object-contain"
          />
        </div>
      </main>
    </div>
  );
}
