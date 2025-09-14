"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const decrease = () => {
    setCounter(counter - 1);
    console.log("decrease working");
  };

  const increase = () => {
    setCounter(counter + 1);
  };

  const reset = () => {
    setCounter(0);
  };
  return (
    <div className="text-center flex flex-col gap-6 ">
      <h3 className="text-4xl font-bold">Counter</h3>
      <p className="text-6xl font-bold">{counter}</p>
      <div className="flex flex-col md:flex-row justify-center gap-6 text-2xl font-bold">
        <button
          onClick={decrease}
          className="count_btn bg-red-600 w-full mx-auto md:w-auto md:mx-0"
        >
          -
        </button>
        <button
          onClick={increase}
          className="count_btn bg-green-600 w-full mx-auto md:w-auto md:mx-0"
        >
          +
        </button>
        <button
          onClick={reset}
          className="count_btn bg-blue-600 w-full mx-auto md:w-auto md:mx-0"
        >
          RESET
        </button>
      </div>
      <div className="flex flex-row justify-end">
        <Link
          className="bg-gray-800 px-4 py-2 rounded text-white hover:opacity-80"
          href="/practice/counter"
        >
          View component on new page
        </Link>
      </div>
    </div>
  );
}
