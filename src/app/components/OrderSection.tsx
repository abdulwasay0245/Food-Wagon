import Image from "next/image";

export default function OrderCTASection() {
  return (
    <div className="relative w-full h-[450px] flex flex-col justify-center items-center text-center text-white px-6 overflow-hidden">
      <Image
        src="/orderBackground.png"
        alt="Order Background"
        fill
        className="object-cover z-0 brightness-[0.4]"
        priority
      />
      <div className="relative z-10 max-w-2xl space-y-8">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Are you ready to order with the best deals?
        </h2>
        <button className="bg-orange-500 hover:bg-orange-600 transition-all text-white font-extrabold py-5 px-10 rounded-2xl shadow-2xl shadow-orange-900/40 active:scale-95 text-lg inline-flex items-center gap-3">
          PROCEED TO ORDER
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}

  