export default function Header(){
    return(

        <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="flex items-center space-x-2">
          <span className="text-orange-600 text-xl font-bold">🍔 foodwagon</span>
        </div>
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <span>Deliver to:</span>
          <span className=" items-center hidden sm:flex">
            📍 <span className="ml-1 font-medium">Current Location <strong>Mohammadpur Bus Stand, Dhaka</strong></span>
          </span>
          <button className="text-sm text-orange-600 hover:underline">Search Food</button>
          <button className="bg-orange-500 text-white px-4 py-1 rounded-md shadow">Login</button>
        </div>
      </header>

    )
}