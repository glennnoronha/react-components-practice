import React from "react";
import Link from "next/link";

const FacebookCard = () => {
  return (
    <div>
      <div className="flex-col bg-[#333335] rounded-2xl w-[400px] mb-3 mx-auto">
        <img className="rounded-t-2xl" src="/profile-1.png" />
        <div className="py-2 px-3">
          <h3 className="text-white font-medium">Name</h3>
          <p className="text-[#b3b2b6]">Software Developer</p>
          <div className="flex pt-1">
            <img className="!w-7 h-7 rounded-full" src="/profile-3.png" />
            <span className="text-[#b3b2b6] ps-1">1 mutal friend</span>
          </div>
          <div className="grid grid-cols-3 gap-2 pt-2 mb-2">
            <button className="col-span-2 bg-[#1778F2] rounded-lg text-sm h-9 flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <circle cx="9" cy="8" r="3" />
                <path d="M4 19c0-3.2 3.2-5.5 7-5.5s7 2.3 7 5.5v1H4v-1z" />
                <path d="M18 6v2h2v2h-2v2h-2v-2h-2V8h2V6h2z" />
              </svg>
              <span className="text-white">Add Friend</span>
            </button>

            <button className="col-span-1 bg-[#424242] rounded-lg text-sm h-9">
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end">
        <Link
          className="bg-gray-800 px-4 py-2 rounded text-white hover:opacity-80"
          href="/practice/facebook"
        >
          View component on new page
        </Link>
      </div>
    </div>
  );
};

export default FacebookCard;
