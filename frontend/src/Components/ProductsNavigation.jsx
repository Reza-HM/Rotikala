import React from "react";
import { HiOutlineBarsArrowDown } from "react-icons/hi2";

const ProductsNavigation = () => {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg dark:text-slate-300 p-6 hidden md:flex flex-wrap items-center gap-8">
      <div className="flex items-center gap-4">
        <HiOutlineBarsArrowDown className="text-4xl" />
        <h2 className="text-2xl font-bold"> مرتب‌سازی بر اساس: </h2>
      </div>
      <ul className="flex flex-wrap items-center justify-center gap-8">
        <li className="text-2xl font-bold cursor-pointer hover:bg-slate-200 hover:dark:text-slate-600 rounded-lg px-4 py-2 transition-all duration-300 ease-linear">
          جدیدترین
        </li>
        <li className="text-2xl font-bold cursor-pointer hover:bg-slate-200 hover:dark:text-slate-600 rounded-lg px-4 py-2 transition-all duration-300 ease-linear">
          پرفروش‌ترین
        </li>
        <li className="text-2xl font-bold cursor-pointer hover:bg-slate-200 hover:dark:text-slate-600 rounded-lg px-4 py-2 transition-all duration-300 ease-linear">
          گران‌ترین
        </li>
        <li className="text-2xl font-bold cursor-pointer hover:bg-slate-200 hover:dark:text-slate-600 rounded-lg px-4 py-2 transition-all duration-300 ease-linear">
          ارزان‌ترین
        </li>
      </ul>
    </div>
  );
};

export default ProductsNavigation;
