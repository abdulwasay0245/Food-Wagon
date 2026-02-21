'use client';

import Link from "next/link";
import { ShoppingCart, Search, MapPin, User } from "lucide-react";
import { useCart } from "./CartContext";
import { useState } from "react";

export default function Header() {
  const { cartCount } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-6 lg:px-20 py-4 bg-white shadow-sm sticky top-0 z-50 transition-all duration-300">
      <Link href="/" className="flex items-center space-x-2">
        <span className="text-orange-500 text-2xl font-black italic flex items-center gap-1 uppercase tracking-tighter">
          <span className="text-4xl">🍔</span> foodwagon
        </span>
      </Link>

      <div className="flex items-center space-x-8">
        <div className="hidden lg:flex items-center space-x-2 text-gray-700 bg-gray-50 px-4 py-2 rounded-xl border border-gray-100">
          <span className="font-bold text-gray-400">Deliver to:</span>
          <MapPin className="text-orange-500 w-4 h-4" />
          <span className="font-medium">Mohammadpur Bus Stand, Dhaka</span>
        </div>

        <div className="flex items-center space-x-4 md:space-x-6">
          <div className="relative flex items-center">
            {isSearchOpen && (
              <input
                type="text"
                placeholder="Search food..."
                className="absolute right-10 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 w-48 md:w-64 outline-none focus:ring-2 ring-orange-400 transition-all animate-in slide-in-from-right-5 fade-in"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
            )}
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-orange-500 hover:bg-orange-50 p-2 rounded-full transition-all flex items-center gap-2 group"
            >
              <Search className="w-6 h-6 group-hover:scale-110" />
              <span className="hidden sm:inline font-bold">Search</span>
            </button>
          </div>

          <button className="relative text-gray-700 hover:text-orange-500 transition-colors p-2 bg-gray-50 rounded-full">
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-lg animate-bounce">
                {cartCount}
              </span>
            )}
          </button>

          <button className="bg-orange-500 text-white px-6 md:px-8 py-2.5 rounded-2xl font-bold shadow-orange-200 shadow-xl hover:bg-orange-600 transition-all active:scale-95 flex items-center gap-2">
            <User className="w-5 h-5" />
            <span className="hidden sm:inline">Login</span>
          </button>
        </div>
      </div>
    </header>
  );
}

