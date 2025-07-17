import React, { useCallback, useState } from "react";
import newArivals from "./NewArivals.json";
import bestSellers from "./BestSellers.json";
import mostViewed from "./MostViewed.json";
import discount from "./Discounts.json";

function PurchaseOnline() {
  const newArivalsArray = Object.entries(newArivals);
  const bestSellersArray = Object.entries(bestSellers);
  const mostViewedArray = Object.entries(mostViewed);
  const discountArray = Object.entries(discount);

  const [productsArray, setProductsArray] = useState(newArivalsArray);
  const [selectedCategory, setSelectedCategory] = useState("NewA");

  const cateogryChanger = useCallback( (category) => {
    setSelectedCategory(category);
    if (category === "NewA") {
      setProductsArray(newArivalsArray);
    } 
    else if (category === "BestS") {
      setProductsArray(bestSellersArray);
    } 
    else if (category === "MostV") {
      setProductsArray(mostViewedArray);
    } 
    else if (category === "Disc") {
      setProductsArray(discountArray);
    }
  }, [productsArray, newArivalsArray, bestSellersArray, discountArray, setProductsArray] );

  return (
    <div>
      <h1 className="text-center text-4xl font-bold mt-11">
        Purchase Online on Hurst
      </h1>
      <hr className="block h-3 border-t-[2.5px] border-solid border-red-600 w-[4em] mx-auto mt-3 mb-5" />

      {/* Buttons to change category */}
      <div className="flex flex-row justify-center gap-3 transition-all delay-300 mb-10 text-sm">
        <button
          className={`border-b-2 ${
            selectedCategory === "NewA"
              ? "text-orange-700 border-orange-700"
              : "text-gray-700 border-transparent"
          }`}
          onClick={() => cateogryChanger("NewA")}
        >
          New Arrivals
        </button>
        <button
          className={`border-b-2 ${
            selectedCategory === "BestS"
              ? "text-orange-700 border-orange-700"
              : "text-gray-700 border-transparent"
          }`}
          onClick={() => cateogryChanger("BestS")}
        >
          Best Sellers
        </button>
        <button
          className={`border-b-2 ${
            selectedCategory === "MostV"
              ? "text-orange-700 border-orange-700"
              : "text-gray-700 border-transparent"
          }`}
          onClick={() => cateogryChanger("MostV")}
        >
          Most Viewed
        </button>
        <button
          className={`border-b-2 ${
            selectedCategory === "Disc"
              ? "text-orange-700 border-orange-700"
              : "text-gray-700 border-transparent"
          }`}
          onClick={() => cateogryChanger("Disc")}
        >
          Discounts
        </button>
      </div>

      <div className="mx-[1em] sm:mx-[5em] grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-10 place-items-center">
        {productsArray.map(([id, product]) => (
          <div className="max-w-[270px] p-2 rounded-lg hover:shadow-2xl cursor-pointer delay-100
          hover:scale-105 transition-all" key={id}>
            <img src={product.img} alt={product.name} />

            <div className="grid grid-cols-2 grid-rows-1 justify-between">
                <h3 className="p-1 py-3 font-semibold">{product.name}</h3>
                <h3 className="py-3 text-slate-700 place-self-end">{product.category}</h3>
                <h3 className="px-3 text-red-wood">{product.price}</h3>
                <div className="flex px-3 gap-1 place-self-end pb-4">
                    <h3 className=''>{product.rating}</h3>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        className={
                            product.rating < 2
                            ? "fill-red-700"
                            : product.rating >= 2 && product.rating < 4
                            ? "fill-yellow-500"
                            : "fill-green-800"
                        }
                    >
                        <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                    </svg>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PurchaseOnline;
