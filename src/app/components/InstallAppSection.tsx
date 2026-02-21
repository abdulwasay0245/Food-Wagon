import Image from 'next/image';
import { Percent, MapPin, Clock, Apple, PlayCircle } from 'lucide-react';

export default function InstallAppSection() {
  return (
    <div className="bg-orange-50/50 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Features Section */}
        <div className="bg-white shadow-xl shadow-orange-100/50 rounded-[32px] p-6 md:p-10 flex flex-col md:flex-row items-center justify-around gap-8 border border-orange-100/30 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="flex items-center space-x-4 relative z-10 transition-transform hover:scale-105">
            <div className="bg-orange-500 p-4 rounded-2xl shadow-lg shadow-orange-100">
              <Percent className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="text-xl font-black text-gray-900">Daily Discounts</p>
              <p className="text-gray-500 text-sm font-medium">Best deals every day</p>
            </div>
          </div>

          <div className="h-16 w-px bg-gray-100 hidden md:block"></div>

          <div className="flex items-center space-x-4 relative z-10 transition-transform hover:scale-105">
            <div className="bg-orange-500 p-4 rounded-2xl shadow-lg shadow-orange-100">
              <MapPin className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="text-xl font-black text-gray-900">Live Tracing</p>
              <p className="text-gray-500 text-sm font-medium">Real-time tracking</p>
            </div>
          </div>

          <div className="h-16 w-px bg-gray-100 hidden md:block"></div>

          <div className="flex items-center space-x-4 relative z-10 transition-transform hover:scale-105">
            <div className="bg-orange-500 p-4 rounded-2xl shadow-lg shadow-orange-100">
              <Clock className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="text-xl font-black text-gray-900">Quick Delivery</p>
              <p className="text-gray-500 text-sm font-medium">Fast & reliable</p>
            </div>
          </div>
        </div>

        {/* App Mockup and CTA */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          <div className="flex items-end gap-6 relative">
             <div className="absolute -bottom-8 -left-8 w-56 h-56 bg-yellow-400/10 rounded-full blur-[80px] -z-10"></div>
            <div className="relative group perspective-1000 max-w-[320px] lg:max-w-none">
              <Image
                src="/mobile.png"
                alt="App Screenshot"
                width={320}
                height={640}
                className="rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.25)] group-hover:rotate-1 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="max-w-xl text-center lg:text-left space-y-8">
            <div className="space-y-4">
               <span className="text-orange-500 font-black tracking-[0.15em] text-[10px] uppercase bg-orange-100 px-4 py-1.5 rounded-full border border-orange-200/50">Coming Soon</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                Install the <span className="text-orange-500">foodwagon</span> app
              </h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                It’s never been easier to order food. Looking for the finest discounts and you’ll be lost in a world of delectable food from your favorite restaurants.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="flex items-center gap-3 bg-gray-900 text-white px-6 py-3.5 rounded-xl hover:bg-gray-800 transition-all shadow-lg hover:-translate-y-0.5 active:scale-95">
                <PlayCircle className="w-7 h-7" />
                <div className="text-left">
                  <p className="text-[9px] uppercase font-bold opacity-60 leading-none mb-1">Get it on</p>
                  <p className="text-base font-black leading-none">Google Play</p>
                </div>
              </button>
              <button className="flex items-center gap-3 bg-gray-900 text-white px-6 py-3.5 rounded-xl hover:bg-gray-800 transition-all shadow-lg hover:-translate-y-0.5 active:scale-95">
                <Apple className="w-7 h-7" />
                <div className="text-left">
                  <p className="text-[9px] uppercase font-bold opacity-60 leading-none mb-1">Download on the</p>
                  <p className="text-base font-black leading-none">App Store</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

