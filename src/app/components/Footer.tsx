'use client';
import { Instagram, Facebook, Twitter, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 text-white w-full pt-24 px-6 lg:px-20 text-sm overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500"></div>
      
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
        <div className="col-span-2 lg:col-span-1 border-r border-zinc-800 pr-8">
           <span className="text-orange-500 text-3xl font-black italic flex items-center gap-2 mb-8">
            <span className="text-4xl">🍔</span> foodwagon
          </span>
          <p className="text-zinc-500 font-medium leading-relaxed">
            The best food delivery service in the city. Fast, reliable, and always delicious.
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="font-black text-xl text-white tracking-tight">Our top cities</h4>
          <ul className="space-y-3 text-zinc-400 font-medium">
            <li className="hover:text-orange-500 cursor-pointer transition-colors">San Francisco</li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">Miami</li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">San Diego</li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">East Bay</li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">Long Beach</li>
          </ul>
        </div>

        <div className="space-y-6 hidden md:block">
           <h4 className="text-transparent font-black text-xl tracking-tight select-none">.</h4>
          <ul className="space-y-3 text-zinc-400 font-medium">
            <li className="hover:text-orange-500 cursor-pointer transition-colors">Los Angeles</li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">Washington DC</li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">Seattle</li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">Portland</li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">Nashville</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-black text-xl text-white tracking-tight">Company</h4>
          <ul className="space-y-3 text-zinc-400 font-medium">
            <li className="hover:text-orange-500 cursor-pointer transition-colors">About us</li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">Team</li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">Careers</li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">Blog</li>
          </ul>
        </div>

        <div className="space-y-8 col-span-2 lg:col-span-1">
          <div>
            <h4 className="font-black text-xl text-white tracking-tight mb-6">FOLLOW US</h4>
            <div className="flex space-x-4">
              <div className="p-3 bg-zinc-900 rounded-2xl hover:bg-orange-500 transition-all cursor-pointer group">
                <Instagram className="text-white group-hover:scale-110" size={20} />
              </div>
              <div className="p-3 bg-zinc-900 rounded-2xl hover:bg-orange-500 transition-all cursor-pointer group">
                <Facebook className="text-white group-hover:scale-110" size={20} />
              </div>
              <div className="p-3 bg-zinc-900 rounded-2xl hover:bg-orange-500 transition-all cursor-pointer group">
                <Twitter className="text-white group-hover:scale-110" size={20} />
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="font-bold text-zinc-300">Receive exclusive offers</p>
            <div className="flex bg-zinc-900 p-1.5 rounded-2xl border border-zinc-800 focus-within:border-orange-500 transition-all shadow-xl">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-transparent text-white px-4 py-2 w-full focus:outline-none font-medium"
              />
              <button className="bg-orange-500 text-white font-black px-6 py-2 rounded-xl shadow-lg hover:bg-orange-600 transition-all active:scale-95">
                JOIN
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-900 py-12 flex flex-col md:flex-row justify-between items-center gap-8 relative">
        <div className="flex flex-col md:flex-row items-center gap-4 text-zinc-500 font-medium">
          <p>© {new Date().getFullYear()} <span className="text-white font-black">FOODWAGON</span></p>
          <span className="hidden md:block opacity-20">|</span>
          <p>All Rights Reserved</p>
        </div>
        
        <button 
          onClick={scrollToTop}
          className="bg-zinc-900 p-4 rounded-full border border-zinc-800 hover:border-orange-500 hover:text-orange-500 transition-all group lg:absolute lg:left-1/2 lg:-translate-x-1/2"
        >
          <ArrowUp className="group-hover:-translate-y-1 transition-transform" size={24} />
        </button>

        <div className="text-zinc-500 font-medium">
          Made with <span className="text-orange-500">❤️</span> by <span className="text-white font-black hover:text-orange-500 cursor-pointer transition-colors">Themewagon</span>
        </div>
      </div>
    </footer>
  );
}

