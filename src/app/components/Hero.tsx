export default function Hero() {
    return(

              <main className="min-h-1/2 bg-gradient-to-b from-yellow-400 to-yellow-500 flex flex-1 items-center justify-center px-8 py-20 ">
        <div className="max-w-xl space-y-6">
          <h1 className="text-5xl font-bold text-white leading-tight">Are you starving?</h1>
          <p className="text-white text-lg">Within a few clicks, find meals that are accessible near you</p>

          <div className="bg-white p-4 rounded-md shadow-md space-y-4">
            <div className="flex space-x-6">
              <button className="flex items-center space-x-2 text-white bg-orange-500 px-4 py-2 rounded-md">
                <span>🚴‍♂️</span>
                <span>Delivery</span>
              </button>
              <button className="text-gray-700 font-medium">Pickup</button>
            </div>
            <div className="flex items-center border rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="Enter Your Address"
                className="flex-1 px-4 py-2 outline-none"
              />
              <button className="bg-orange-500 text-white px-1 md:px-6 py-2">Find Food</button>
            </div>
          </div>
        </div>

      
      
      </main>
    )
}