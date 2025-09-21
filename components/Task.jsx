// Task.jsx
import React from "react";
import Link from "next/link";

function Task({
  title,
  description,
  children,
  viewHref,
  viewLabel = "View component on new page",
}) {
  return (
    <div className="bg-gray-800/50 rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 border border-gray-700/50 hover:border-gray-600/50">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
          <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold" />
          {title}
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
      </div>

      {children && (
        <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/30">
          <div className="text-sm text-gray-400 mb-3 font-medium">
            Component Preview:
          </div>
          <div className="mx-auto">{children}</div>
        </div>
      )}

      {viewHref && (
        <div className="flex justify-end mt-3">
          <Link
            href={viewHref}
            className="bg-gray-700 px-4 py-2 rounded text-white hover:opacity-80"
          >
            {viewLabel}
          </Link>
        </div>
      )}
    </div>
  );
}

export default Task;
