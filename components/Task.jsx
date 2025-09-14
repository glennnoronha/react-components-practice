import React from "react";

function Task({ title, description, component: Component }) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 border border-gray-700/50 hover:border-gray-600/50">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
          <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold"></span>
          {title}
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
      </div>

      {/* Component Preview */}
      {Component && (
        <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/30">
          <div className="text-sm text-gray-400 mb-3 font-medium">
            Component Preview:
          </div>
          <Component className="mx-auto"/>
        </div>
      )}
    </div>
  );
}

export default Task;
