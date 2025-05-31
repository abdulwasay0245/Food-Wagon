import Image from 'next/image';
import { Percent, MapPin, Clock } from 'lucide-react';

export default function InstallAppSection() {
  return (
    <div className="bg-gradient-to-b from-orange-50 to-orange-100 min-h-screen flex flex-col items-center justify-between py-10 px-4">
      {/* Features Section */}
      <div className="bg-white shadow-lg rounded-3xl px-10 py-6 flex flex-col md:flex-row items-center justify-around gap-6 max-w-4xl w-full">
        <div className="flex items-center space-x-4">
          <div className="bg-orange-100 p-3 rounded-full">
            <Percent className="text-orange-500" />
          </div>
          <div>
            <p className="font-semibold text-orange-600">Daily Discounts</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-orange-100 p-3 rounded-full">
            <MapPin className="text-orange-500" />
          </div>
          <div>
            <p className="font-semibold text-orange-600">Live Tracing</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-orange-100 p-3 rounded-full">
            <Clock className="text-orange-500" />
          </div>
          <div>
            <p className="font-semibold text-orange-600">Quick Delivery</p>
          </div>
        </div>
      </div>

      {/* App Mockup and CTA */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full mt-16 gap-10">
        <div className="flex gap-4">
          <Image
            src="/images/app-screenshot-1.png"
            alt="App Screenshot 1"
            width={200}
            height={400}
            className="rounded-xl shadow-lg"
          />
          <Image
            src="/images/app-screenshot-2.png"
            alt="App Screenshot 2"
            width={200}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="max-w-md text-center md:text-left">
          <h2 className="text-3xl font-bold text-orange-500 mb-4">Install the app</h2>
          <p className="text-gray-600 mb-6">
            It’s never been easier to order food. Look for the finest discounts and you’ll be lost in a world of delectable food.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Image
              src="/images/google-play.png"
              alt="Google Play"
              width={130}
              height={40}
              className="cursor-pointer"
            />
            <Image
              src="/images/app-store.png"
              alt="App Store"
              width={130}
              height={40}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
