import { Bike, Search, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <main className="min-h-[70vh] bg-yellow-400 flex flex-col items-center justify-center px-6 lg:px-20 py-20 relative overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500 rounded-full blur-3xl opacity-50 -ml-20 -mb-20"></div>

      <div className="max-w-4xl w-full space-y-10 relative z-10 text-center">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md">
            Are you starving?
          </h1>
          <p className="text-white text-xl md:text-2xl font-medium opacity-90">
            Within a few clicks, find meals that are accessible near you
          </p>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-2xl space-y-6 max-w-3xl mx-auto transform hover:scale-[1.01] transition-transform duration-300">
          <div className="flex justify-center space-x-4">
            <button className="flex items-center space-x-2 text-white bg-orange-500 px-8 py-3 rounded-2xl font-bold shadow-lg shadow-orange-100 hover:bg-orange-600 transition-all">
              <Bike className="w-5 h-5" />
              <span>Delivery</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 bg-gray-50 px-8 py-3 rounded-2xl font-bold hover:bg-gray-100 transition-all">
              <MapPin className="w-5 h-5" />
              <span>Pickup</span>
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1 flex items-center bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden px-4 py-2 w-full focus-within:ring-2 ring-orange-500 transition-all">
              <MapPin className="text-orange-500 w-6 h-6 mr-2" />
              <input
                type="text"
                placeholder="Enter Your Address"
                className="flex-1 px-2 py-3 bg-transparent outline-none text-gray-700 font-medium placeholder:text-gray-400"
              />
            </div>
            <button className="bg-orange-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-orange-200 hover:bg-orange-600 transition-all active:scale-95 flex items-center gap-2 w-full md:w-auto justify-center">
              <Search className="w-6 h-6" />
              Find Food
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
