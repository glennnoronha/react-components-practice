"use client";

import React from "react";
import { useState } from "react";

export default function ToDo() {
  const [tasks, setTasks] = useState(["Get Groceries", "Pay Bills", "Go Gym"]);
  const [newTask, setNewTask] = useState("");

  function handleInput(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-700/50">
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-4xl font-bold ">
            To-Do List
          </h3>
          <p className="text-gray-300 mt-2">Stay organized and productive</p>
        </div>

        {/* Add Task Section */}
        <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/30 mb-6">
          <div className="flex gap-3">
            <input
              type="text"
              name="text"
              className="bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 flex-grow text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter a new task..."
              value={newTask}
              onChange={handleInput}
              onKeyDown={(e) => e.key === "Enter" && addTask()}
            />
            <button
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              onClick={addTask}
            >
              Add Task
            </button>
          </div>
        </div>

        {/* Tasks List */}
        <div className="space-y-3">
          {tasks.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📝</div>
              <p className="text-gray-400 text-lg">
                No tasks yet. Add one above to get started!
              </p>
            </div>
          ) : (
            tasks.map((task, index) => (
              <div
                key={index}
                className="bg-gray-900/30 hover:bg-gray-900/50 rounded-xl p-4 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-200 group"
              >
                <div className="flex items-center gap-4">
                  {/* Task Number */}
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
                    {index + 1}
                  </div>

                  {/* Task Text */}
                  <span className="flex-grow text-white font-medium text-lg">
                    {task}
                  </span>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {/* Move Up */}
                    <button
                      className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={() => moveUp(index)}
                      disabled={index === 0}
                      title="Move up"
                    >
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    </button>

                    {/* Move Down */}
                    <button
                      className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={() => moveDown(index)}
                      disabled={index === tasks.length - 1}
                      title="Move down"
                    >
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Delete */}
                    <button
                      className="w-8 h-8 bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 hover:border-red-500 rounded-lg flex items-center justify-center transition-all duration-200"
                      onClick={() => deleteTask(index)}
                      title="Delete task"
                    >
                      <svg
                        className="w-4 h-4 text-red-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Stats */}
        {tasks.length > 0 && (
          <div className="mt-6 pt-4 border-t border-gray-700/30">
            <p className="text-gray-400 text-center">
              {tasks.length} {tasks.length === 1 ? "task" : "tasks"} remaining
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
