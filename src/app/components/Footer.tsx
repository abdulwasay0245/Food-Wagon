import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white w-full  pt-16 px-6 lg:px-20 text-sm">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        <div>
          <h4 className="font-semibold mb-4">Our top cities</h4>
          <ul className="space-y-2">
            <li>San Francisco</li>
            <li>Miami</li>
            <li>San Diego</li>
            <li>East Bay</li>
            <li>Long Beach</li>
          </ul>
        </div>
        <div className="mt-8 md:mt-0">
          <ul className="space-y-2">
            <li>Los Angeles</li>
            <li>Washington DC</li>
            <li>Seattle</li>
            <li>Portland</li>
            <li>Nashville</li>
          </ul>
        </div>
        <div className="mt-8 md:mt-0">
          <ul className="space-y-2">
            <li>New York City</li>
            <li>Orange County</li>
            <li>Atlanta</li>
            <li>Charlotte</li>
            <li>Denver</li>
          </ul>
        </div>
        <div className="mt-8 md:mt-0">
          <ul className="space-y-2">
            <li>Chicago</li>
            <li>Phoenix</li>
            <li>Las Vegas</li>
            <li>Sacramento</li>
            <li>Oklahoma City</li>
          </ul>
        </div>
        <div className="mt-8 md:mt-0">
          <ul className="space-y-2">
            <li>Columbus</li>
            <li>New Mexico</li>
            <li>Albuquerque</li>
            <li>Sacramento</li>
            <li>New Orleans</li>
          </ul>
        </div>
      </div>

      <hr className="my-10 border-zinc-700" />

      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li>About us</li>
            <li>Team</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2">
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li>Terms & Conditions</li>
            <li>Refund & Cancellation</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">FOLLOW US</h4>
          <div className="flex space-x-4 mb-6">
            <Instagram className="text-white hover:text-orange-400 cursor-pointer" />
            <Facebook className="text-white hover:text-orange-400 cursor-pointer" />
            <Twitter className="text-white hover:text-orange-400 cursor-pointer" />
          </div>
          <p className="mb-2 font-semibold">Receive exclusive offers in your mailbox</p>
          <div className="flex">
            <div className="flex items-center bg-zinc-800 px-3 rounded-l-md w-full">
              <Mail className="text-gray-400" size={16} />
              <input
                type="email"
                placeholder="Enter Your email"
                className="bg-transparent text-white px-2 py-2 w-full focus:outline-none"
              />
            </div>
            <button className="bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold px-4 py-2 rounded-r-md shadow-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs mt-10 pb-6">
        <p>
          All rights Reserved ©{' '}
          <span className="text-white font-semibold">Your Company, 2021</span>
        </p>
        <p className="mt-2 md:mt-0">
          Made with <span className="text-yellow-500">🤍</span> by{' '}
          <span className="font-semibold text-white">Themewagon</span>
        </p>
      </div>
    </footer>
  );
}
