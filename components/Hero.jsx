"use client";

import { useState } from "react";

const navigation = [
  { name: "Home", href: "./" },
  { name: "Practice", href: "/practice" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 bg-gray-800">
      <h1 className="text-6xl font-bold text-center">Practice React Components</h1>
      <p className="text-lg font-medium text-center text-gray-500 sm:text-xl/8 dark:text-gray-400">
        This is a website created to practice React Components.
      </p>
      <a
        href="/practice"
        className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
      >
        Get started 
      </a>
    </div>
  );
}
