'use client';
import { Instagram, Facebook, Twitter, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 text-white w-full pt-16 px-6 lg:px-20 text-[13px] overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500"></div>
      
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6 mb-16">
        <div className="col-span-2 lg:col-span-1 border-r border-zinc-800 pr-6">
           <span className="text-orange-500 text-xl font-black italic flex items-center gap-2 mb-6">
            <span className="text-2xl">🍔</span> foodwagon
          </span>
          <p className="text-zinc-500 font-medium leading-relaxed">
            The best food delivery service in the city. Fast, reliable, and always delicious.
          </p>
        </div>

        <div className="space-y-5">
          <h4 className="font-black text-lg text-white tracking-tight">Our top cities</h4>
          <ul className="space-y-2.5 text-zinc-400 font-medium">
            <li className="hover:text-orange-500 cursor-pointer transition-colors">San Francisco</li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">Miami</li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">San Diego</li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">East Bay</li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">Long Beach</li>
          </ul>
        </div>

        <div className="space-y-5 hidden md:block">
           <h4 className="text-transparent font-black text-lg tracking-tight select-none">.</h4>
          <ul className="space-y-2.5 text-zinc-400 font-medium">
            <li className="hover:text-orange-500 cursor-pointer transition-colors">Los Angeles</li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">Washington DC</li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">Seattle</li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">Portland</li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">Nashville</li>
          </ul>
        </div>

        <div className="space-y-5">
          <h4 className="font-black text-lg text-white tracking-tight">Company</h4>
          <ul className="space-y-2.5 text-zinc-400 font-medium">
            <li className="hover:text-orange-500 cursor-pointer transition-colors">About us</li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">Team</li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">Careers</li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">Blog</li>
          </ul>
        </div>

        <div className="space-y-6 col-span-2 lg:col-span-1">
          <div>
            <h4 className="font-black text-lg text-white tracking-tight mb-5">FOLLOW US</h4>
            <div className="flex space-x-3">
              <div className="p-2.5 bg-zinc-900 rounded-xl hover:bg-orange-500 transition-all cursor-pointer group">
                <Instagram className="text-white group-hover:scale-110" size={18} />
              </div>
              <div className="p-2.5 bg-zinc-900 rounded-xl hover:bg-orange-500 transition-all cursor-pointer group">
                <Facebook className="text-white group-hover:scale-110" size={18} />
              </div>
              <div className="p-2.5 bg-zinc-900 rounded-xl hover:bg-orange-500 transition-all cursor-pointer group">
                <Twitter className="text-white group-hover:scale-110" size={18} />
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <p className="font-bold text-zinc-300 text-xs">Receive exclusive offers</p>
            <div className="flex bg-zinc-900 p-1 rounded-xl border border-zinc-800 focus-within:border-orange-500 transition-all shadow-lg">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-transparent text-white px-3 py-1.5 w-full focus:outline-none font-medium text-xs"
              />
              <button className="bg-orange-500 text-white font-black px-4 py-1.5 rounded-lg shadow-md hover:bg-orange-600 transition-all active:scale-95 text-[11px]">
                JOIN
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-900 py-8 flex flex-col md:flex-row justify-between items-center gap-6 relative">
        <div className="flex flex-col md:flex-row items-center gap-3 text-zinc-500 font-medium text-xs">
          <p>© {new Date().getFullYear()} <span className="text-white font-black">FOODWAGON</span></p>
          <span className="hidden md:block opacity-20">|</span>
          <p>All Rights Reserved</p>
        </div>
        
        <button 
          onClick={scrollToTop}
          className="bg-zinc-900 p-3 rounded-full border border-zinc-800 hover:border-orange-500 hover:text-orange-500 transition-all group lg:absolute lg:left-1/2 lg:-translate-x-1/2"
        >
          <ArrowUp className="group-hover:-translate-y-1 transition-transform" size={20} />
        </button>

        <div className="text-zinc-500 font-medium text-xs">
          Made with <span className="text-orange-500">❤️</span> by <span className="text-white font-black hover:text-orange-500 cursor-pointer transition-colors">Themewagon</span>
        </div>
      </div>
    </footer>
  );
}

