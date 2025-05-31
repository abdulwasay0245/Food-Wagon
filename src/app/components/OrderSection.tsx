export default function OrderCTASection() {
    return (
      <div
        className="w-full h-[300px] bg-cover bg-center flex flex-col justify-center items-center text-center text-white px-4"
        style={{
          backgroundImage: `url('/orderbackground.png')`,
        }}
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          Are you ready to order with the best deals?
        </h2>
        <button className="bg-orange-500 hover:bg-orange-600 transition-colors text-white font-semibold py-3 px-6 rounded-md shadow-md">
          PROCEED TO ORDER →
        </button>
      </div>
    );
  }
  