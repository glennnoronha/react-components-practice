"use client";
import React, { useState } from "react";

export default function Counter({ className }) {
  const [counter, setCounter] = useState(0);
  return (
    <div className={`text-center flex flex-col gap-6 ${className || ""}`}>
      <h3 className="text-4xl font-bold">Counter</h3>
      <p className="text-6xl font-bold">{counter}</p>
      <div className="flex flex-col md:flex-row justify-center gap-6 text-2xl font-bold">
        <button onClick={() => setCounter((n) => n - 1)} className="count_btn bg-red-600 w-full md:w-auto">-</button>
        <button onClick={() => setCounter((n) => n + 1)} className="count_btn bg-green-600 w-full md:w-auto">+</button>
        <button onClick={() => setCounter(0)} className="count_btn bg-blue-600 w-full md:w-auto">RESET</button>
      </div>
    </div>
  );
}
