import { Product } from "@/modules/discover-products/Types/products";
import ProductRating from "./product-rating";
import { IoPerson } from "react-icons/io5";

export default function ProductCustomerReviews({ product }: { product: Product }) {
  return <>
    <section className="px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>
      <div className="flex items-center sm:flex-row flex-col w-full sm:gap-6 gap-3">
        <div className="flex flex-col items-center justify-center gap-3 bg-gray-100 sm:p-3 rounded-lg sm:w-45 w-full h-40">
          <p className="text-2xl font-bold">
            {product.rating}
          </p>
          <p className="sm:text-sm text-lg text-gray-600">
            of {product.reviews.length} reviews
          </p>
          <p>
            <ProductRating rating={product.rating} />
          </p>
        </div>

        <div className="flex flex-col w-full gap-4">
          <div className="flex items-center gap-3">
            <p className="w-40 text-sm font-medium">Excellent</p>

            <div className="relative w-full h-1.25 bg-gray-300 rounded-full overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-full bg-amber-400 rounded-full"></div>
            </div>

            <span className="text-sm text-gray-600 w-5">100</span>
          </div>

          <div className="flex items-center gap-3">
            <p className="w-40 text-sm font-medium">Good</p>

            <div className="relative w-full h-1.25 bg-gray-300 rounded-full overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-1/2 bg-amber-400 rounded-full"></div>
            </div>

            <span className="text-sm text-gray-600 w-5">11</span>
          </div>

          <div className="flex items-center gap-3">
            <p className="w-40 text-sm font-medium">Average</p>

            <div className="relative w-full h-1.25 bg-gray-300 rounded-full overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-1/3 bg-amber-400 rounded-full"></div>
            </div>

            <span className="text-sm text-gray-600 w-5">3</span>
          </div>

          <div className="flex items-center gap-3">
            <p className="w-40 text-sm font-medium">Below Average</p>

            <div className="relative w-full h-1.25 bg-gray-300 rounded-full overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-[75%] bg-amber-400 rounded-full"></div>
            </div>

            <span className="text-sm text-gray-600 w-5">8</span>
          </div>

          <div className="flex items-center gap-3">
            <p className="w-40 text-sm font-medium">Poor</p>

            <div className="relative w-full h-1.25 bg-gray-300 rounded-full overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-[10%] bg-amber-400 rounded-full"></div>
            </div>

            <span className="text-sm text-gray-600 w-5">1</span>
          </div>
        </div>
      </div>
      <div>
        <input type="text" className="w-full p-3 border mt-7 mb-2 rounded" placeholder="Leave Comment" />
      </div>

      {product.reviews.map((review, index) => (
        <div key={index} className="flex items-start gap-4 mt-4 bg-muted p-4 rounded-lg">
          <div className="bg-muted-foreground flex items-center justify-center text-white w-10 h-10 rounded-full">
            <IoPerson />
          </div>
          <div className="w-full">
            <div className="flex justify-between w-full">
              <div>
                <p className="text-sm font-medium pb-2">{review.reviewerName}</p>
                <ProductRating rating={review.rating} />
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  {new Date(review.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>              </div>
            </div>

            <p className="text-sm text-gray-600 pt-2">{review.comment}
              {" "}Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum dolores quae, quod rem placeat et eaque quia aliquam saepe tempore, cumque ex quam ducimus iure similique accusamus velit vitae officiis?
            </p>
          </div>

        </div>
      ))}
    </section>
  </>

}