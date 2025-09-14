"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";

export default function ToDo() {
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
    <div className=" flex flex-col gap-6">
      <div>
        <h3 className="text-4xl font-bold text-center">To-Do List</h3>
        <form htmlFor="new-todo-input" className="flex flex-col gap-4">
          <label>
            <p className="text-xl font-bold">What needs to be done?</p>
          </label>
          <input
            type="text"
            id="new-todo-input"
            name="text"
            className="bg-gray-800"
          />
        </form>
      </div>
    </div>
  );
}
