'use client';

import Link from "next/link";
import { ShoppingCart, Search, MapPin, User } from "lucide-react";
import { useCart } from "./CartContext";
import { useState } from "react";

export default function Header() {
  const { cartCount } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-6 lg:px-20 py-3 bg-white shadow-sm sticky top-0 z-50 transition-all duration-300">
      <Link href="/" className="flex items-center space-x-2">
        <span className="text-orange-500 text-xl font-black italic flex items-center gap-1 uppercase tracking-tighter">
          <span className="text-2xl">🍔</span> foodwagon
        </span>
      </Link>

      <div className="flex items-center space-x-6">
        <div className="hidden lg:flex items-center space-x-2 text-gray-700 bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-100 text-sm">
          <span className="font-bold text-gray-400">Deliver to:</span>
          <MapPin className="text-orange-500 w-3.5 h-3.5" />
          <span className="font-medium">Mohammadpur Bus Stand, Dhaka</span>
        </div>

        <div className="flex items-center space-x-3 md:space-x-5">
          <div className="relative flex items-center">
            {isSearchOpen && (
              <input
                type="text"
                placeholder="Search food..."
                className="absolute right-10 bg-gray-50 border border-gray-200 rounded-full px-4 py-1.5 w-40 md:w-56 text-sm outline-none focus:ring-2 ring-orange-400 transition-all animate-in slide-in-from-right-5 fade-in"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
            )}
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-orange-500 hover:bg-orange-50 p-1.5 rounded-full transition-all flex items-center gap-1.5 group"
            >
              <Search className="w-5 h-5 group-hover:scale-110" />
              <span className="hidden sm:inline font-bold text-sm">Search</span>
            </button>
          </div>

          <button className="relative text-gray-700 hover:text-orange-500 transition-colors p-1.5 bg-gray-50 rounded-full">
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-2 border-white shadow-lg animate-bounce">
                {cartCount}
              </span>
            )}
          </button>

          <button className="bg-orange-500 text-white px-4 md:px-6 py-2 rounded-xl font-bold text-sm shadow-orange-100 shadow-lg hover:bg-orange-600 transition-all active:scale-95 flex items-center gap-1.5">
            <User className="w-4 h-4" />
            <span className="hidden sm:inline">Login</span>
          </button>
        </div>
      </div>
    </header>
  );
}

