import Image from "next/image";

const bestSellingProducts = [
  {
    image: "/img/smart watch and airpods.webp",
    name: "Popular Products",
    description: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    href: "/products",
    backgroundColor: "bg-white",
    color: "black",
    h: "h-50",
    w: "w-55"
  }, {
    image: "/img/Ipad Pro.webp",
    name: "Ipad Pro",
    description: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    href: "/products",
    backgroundColor: "bg-secondary-bg",
    color: "black",
    h: "h-55",
    w: "w-55"
  }, {
    image: "/img/samsung.webp",
    name: "Samsung Galaxy",
    description: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    href: "/products",
    backgroundColor: "bg-thread-bg",
    color: "black",
    h: "h-60",
    w: "w-85"

  }, {
    image: "/img/Macbook Air1 .webp",
    name: "Macbook Pro",
    description: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    href: "/products",
    backgroundColor: "bg-main-bg",
    color: "white",
    h: "h-42",
    w: "w-60"
  }
]
export default function BestSellers() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {bestSellingProducts.map((product, index) =>
          <div key={index} className={`${product.backgroundColor} text-${product.color} flex flex-col items-center justify-center gap-4 p-7`}>
            <div className={`w-65 h-50 flex items-center justify-center`}>
              <Image src={product.image} alt={product.name} width={250} height={250} className={`${product.w} ${product.h}`} />
            </div>
            <div>
              <h3 className="text-3xl font-light py-4">{product.name}</h3>
              <p>{product.description}</p>
              <button className={`mt-6 inline-block border border-${product.color} px-6 py-2 rounded-sm hover:bg-black hover:text-white transition cursor-pointer`}>Shop Now</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}