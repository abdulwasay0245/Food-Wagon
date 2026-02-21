import Image from "next/image"

export default function ProductSectionOne() {
  const products = [
    {
      id: 1,
      name: "Grey Vaggie",
      price: 100,
      image: "/productsec1/food1.png",
      days: 3,
    },
    {
      id: 2,
      name: "Chicken Burger",
      price: 200,
      image: "/productsec1/food2.png",
      days: 3,
    },
    {
      id: 3,
      name: "Mushroom Soup",
      price: 300,
      image: "/productsec1/food3.png",
      days: 5,
    },
    {
      id: 4,
      name: "Veggie Pasta",
      price: 400,
      image: "/productsec1/food4.png",
      days: 2,
    },
  ]
  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {products.map((product) => (
          <div className="flex flex-col group cursor-pointer" key={product.id}>
            <div className="relative aspect-square rounded-[24px] overflow-hidden mb-6 shadow-lg shadow-gray-50 border border-gray-50">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-black text-gray-900 group-hover:text-orange-500 transition-colors">
                {product.name}
              </h2>
              <div className="inline-flex items-center gap-1.5 bg-orange-50 px-3 py-1.5 rounded-xl border border-orange-100/50">
                <span className="text-orange-600 text-xs font-black flex items-center gap-1">
                  <span className="text-sm">🔥</span>
                  {product.days} Days Remaining
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

