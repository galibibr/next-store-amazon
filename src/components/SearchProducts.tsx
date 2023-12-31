import React from "react";
import FormattedPrice from "./FormattedPrice";

interface Props {
  brand: string;
  category: string;
  description: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  title: string;
  _id: number;
}

type Item = {
  item: Props;
};

const SearchProducts = ({ item }: Item) => {
  return (
    <div className="flex items-center gap-1 md:gap-4">
      <img className="md:w-24 w-6" src={item.image} alt="product image" />
      <div>
        <p className="hidden md:flex text-xs -mb-1">
          {item.brand}_{item.category}
        </p>
        <p className="text-[12px] md:text-lg md:font-medium">{item.title}</p>
        <p className="hidden md:flex text-xs">{item.description.substring(0, 100)}</p>
        <p className="text-sm hidden md:flex items-center gap-1">
          price:{" "}
          <span className="font-semibold">
            <FormattedPrice amoat={item.price} />
          </span>
          <span className="text-gray-600 line-through">
            <FormattedPrice amoat={item.oldPrice} />
          </span>
        </p>
      </div>
        <div className="hidden md:flex flex-1 text-right px-4">
          <p className="text-base font-semibold animate-bounce text-amazon_blue">
            Save <FormattedPrice amoat={item.oldPrice - item.price} />
          </p>
        </div>
    </div>
  );
};

export default SearchProducts;
