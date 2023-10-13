import Image from "next/image";
import React from "react";
import FormattedPrice from "./FormattedPrice";
import { useDispatch } from "react-redux";
import { addToCard, deleteFavorite } from "@/store/nextSlice";

interface Item {
  _id: number;
  brand: string;
  category: string;
  description: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  title: string;
  quantity: number;
}

interface cartProductsProps {
  item: Item;
}

const FavoriteProducts = ({ item }: cartProductsProps) => {
  const dispatch = useDispatch();
  return (
    <div className="bg-gray-100 rounded-lg flex flex-col md:flex-row py-2 items-center gap-4 mb-2">
      <Image src={item.image} alt="Product image" width={150} height={150} />
      <div className="flex items-center px-2 gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold text-amazon_blue">{item.title}</p>
          <p className="text-sm text-gray-500">{item.description}</p>
          <p className="text-sm text-gray-600">
            Unit price:{" "}
            <span className="font-semibold text-amazon_blue">
              <FormattedPrice amoat={item.price} />
            </span>
          </p>
          <button
            onClick={() => {
              dispatch(
                addToCard({
                  _id: item._id,
                  brand: item.brand,
                  category: item.category,
                  image: item.image,
                  description: item.description,
                  isNew: item.isNew,
                  oldPrice: item.oldPrice,
                  price: item.price,
                  title: item.title,
                  quantity: 1,
                })
              ) && dispatch(deleteFavorite(item._id))
            }}
            className="w-44 h-10 font-medium bg-amazon_blue text-white rounded-md hover:bg-amazon_yellow duration-300 hover:text-black mt-2">
            add to cart
          </button>
        </div>
        <div className="text-lg font-semibold text-amazon_blue">
            <FormattedPrice amoat={item.price * item.quantity} />
        </div>
      </div>
    </div>
  );
};

export default FavoriteProducts;
