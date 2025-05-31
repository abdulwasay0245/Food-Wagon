import Image from "next/image"

export default function ProductSectionOne(){
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
            name: "Chicken Burger",
            price: 300,
            image: "/productsec1/food3.png",
            days: 3,
        },
        {
            id: 4,
            name: "Chicken Burger",
            price: 400,
            image: "/productsec1/food4.png",
            days: 3,
        },
    
    ]
    return(
        <section>
            <div className="grid grid-cols-4 gap-2 mx-auto bg-white py-16 text-black items-center">
                {products.map((product) => (
                    <div className="flex flex-col  items-center  justify-center" key={product.id}>
                        <Image src={product.image} alt={product.name} width={300} height={300} />
                        <h2 className="text-2xl font-bold justify-self-start">{product.name}</h2>
                        <div className="bg-pink-200 px-2 py-1 rounded-md">
                            <p className="text-orange-500 text-lg font-bold">${`${product.days} Days Remaining`}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
