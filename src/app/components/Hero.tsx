import { Bike, Search, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <main className="min-h-[60vh] bg-yellow-400 flex flex-col items-center justify-center px-6 lg:px-20 py-16 relative overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-300 rounded-full blur-3xl opacity-50 -mr-16 -mt-16"></div>
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-yellow-500 rounded-full blur-3xl opacity-50 -ml-16 -mb-16"></div>

      <div className="max-w-4xl w-full space-y-8 relative z-10 text-center">
        <div className="space-y-3">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-sm">
            Are you starving?
          </h1>
          <p className="text-white text-lg md:text-xl font-medium opacity-90">
            Within a few clicks, find meals that are accessible near you
          </p>
        </div>

        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-xl space-y-5 max-w-2xl mx-auto transform hover:scale-[1.005] transition-transform duration-300">
          <div className="flex justify-center space-x-3">
            <button className="flex items-center space-x-2 text-white bg-orange-500 px-6 py-2.5 rounded-xl font-bold shadow-md shadow-orange-100 hover:bg-orange-600 transition-all text-sm">
              <Bike className="w-4 h-4" />
              <span>Delivery</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 bg-gray-50 px-6 py-2.5 rounded-xl font-bold hover:bg-gray-100 transition-all text-sm">
              <MapPin className="w-4 h-4" />
              <span>Pickup</span>
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="flex-1 flex items-center bg-gray-50 border border-gray-100 rounded-xl overflow-hidden px-4 py-1.5 w-full focus-within:ring-2 ring-orange-500 transition-all">
              <MapPin className="text-orange-500 w-5 h-5 mr-2" />
              <input
                type="text"
                placeholder="Enter Your Address"
                className="flex-1 px-1 py-2.5 bg-transparent outline-none text-gray-700 font-medium text-sm placeholder:text-gray-400"
              />
            </div>
            <button className="bg-orange-500 text-white px-8 py-4 rounded-xl font-bold text-base shadow-lg shadow-orange-100 hover:bg-orange-600 transition-all active:scale-95 flex items-center gap-2 w-full md:w-auto justify-center">
              <Search className="w-5 h-5" />
              Find Food
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
