import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { resetCart } from "@/store/nextSlice";

const SuccessPage = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-2 items-center justify-center py-20">
      <h1 className="text-2xl text-hoverBg font-semibold">
        Thank you for dhoping next_store_amazon
      </h1>
      <Link
        className="text-lg text-gray-500 hover:underline underline-offset-4 decoration-[1px] hover:text-blue-600 duration-300"
        href={"/"}
        onClick={() => dispatch(resetCart())}>
        <p>Continue Shoping</p>
      </Link>
    </div>
  );
};

export default SuccessPage;
