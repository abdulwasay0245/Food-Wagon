import Image from 'next/image';
import { Percent, MapPin, Clock, Apple, PlayCircle } from 'lucide-react';

export default function InstallAppSection() {
  return (
    <div className="bg-orange-50/50 py-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Features Section */}
        <div className="bg-white shadow-2xl shadow-orange-200/50 rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-around gap-12 border border-orange-100/50 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="flex items-center space-x-6 relative z-10 transition-transform hover:scale-105">
            <div className="bg-orange-500 p-5 rounded-3xl shadow-xl shadow-orange-200">
              <Percent className="text-white w-8 h-8" />
            </div>
            <div>
              <p className="text-2xl font-black text-gray-900">Daily Discounts</p>
              <p className="text-gray-500 font-medium">Best deals every day</p>
            </div>
          </div>

          <div className="h-20 w-px bg-gray-100 hidden md:block"></div>

          <div className="flex items-center space-x-6 relative z-10 transition-transform hover:scale-105">
            <div className="bg-orange-500 p-5 rounded-3xl shadow-xl shadow-orange-200">
              <MapPin className="text-white w-8 h-8" />
            </div>
            <div>
              <p className="text-2xl font-black text-gray-900">Live Tracing</p>
              <p className="text-gray-500 font-medium">Real-time tracking</p>
            </div>
          </div>

          <div className="h-20 w-px bg-gray-100 hidden md:block"></div>

          <div className="flex items-center space-x-6 relative z-10 transition-transform hover:scale-105">
            <div className="bg-orange-500 p-5 rounded-3xl shadow-xl shadow-orange-200">
              <Clock className="text-white w-8 h-8" />
            </div>
            <div>
              <p className="text-2xl font-black text-gray-900">Quick Delivery</p>
              <p className="text-gray-500 font-medium">Fast & reliable</p>
            </div>
          </div>
        </div>

        {/* App Mockup and CTA */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
          <div className="flex items-end gap-6 relative">
             <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-yellow-400/20 rounded-full blur-[100px] -z-10"></div>
            <div className="relative group perspective-1000">
              <Image
                src="/mobile.png"
                alt="App Screenshot"
                width={380}
                height={760}
                className="rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] group-hover:rotate-1 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="max-w-2xl text-center lg:text-left space-y-10">
            <div className="space-y-6">
               <span className="text-orange-500 font-black tracking-[0.2em] text-sm uppercase bg-orange-100 px-6 py-2 rounded-full">Coming Soon</span>
              <h2 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
                Install the <span className="text-orange-500">foodwagon</span> app
              </h2>
              <p className="text-xl text-gray-600 font-medium leading-relaxed">
                It’s never been easier to order food. Looking for the finest discounts and you’ll be lost in a world of delectable food from your favorite restaurants.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <button className="flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition-all shadow-xl hover:-translate-y-1 active:scale-95">
                <PlayCircle className="w-8 h-8" />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold opacity-60">Get it on</p>
                  <p className="text-lg font-black leading-none">Google Play</p>
                </div>
              </button>
              <button className="flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition-all shadow-xl hover:-translate-y-1 active:scale-95">
                <Apple className="w-8 h-8" />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold opacity-60">Download on the</p>
                  <p className="text-lg font-black leading-none">App Store</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

