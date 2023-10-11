import React from "react";
import { StateProps, StoreProduct } from "../../type";
import { useSelector } from "react-redux";
import CartProduct from "@/components/CartProduct";

const CartPage = () => {
  const { productData } = useSelector((state: StateProps) => state.next);

  console.log(productData);

  return (
    <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-5 gap-10 py-4">
      {productData.length > 0 ? (
        <>
          <div className=" bg-white col-span-4 p-4 rounded-lg">
            <div className="flex items-center justify-between border-b-[1px] border-b-gray-400 pb-1">
              <p className="text-2xl font-semibold text-amazon_blue">
                Shoping Cart
              </p>
              <p className="text-lg font-semibold text-amazon_blue">Subtitle</p>
            </div>
            <div>
              {
                productData.map((item: StoreProduct) => (
                  <div key={item._id} className="pt-2 flex flex-col gap-2">
                    <CartProduct item={item} />
                  </div>
                ))
              }
            </div>
          </div>
        </>
      ) : (
        <div>
          <h1>Your cart is empty!</h1>
          <button>go to shoping</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
