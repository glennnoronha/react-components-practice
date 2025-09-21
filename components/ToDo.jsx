"use client";

import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

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
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]
      setTasks(updatedTasks)
    }
  }

  function moveDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
      setTasks(updatedTasks)
    }
  }

  return (
    <div className=" flex flex-col gap-6 w-2xl">
      <div>
        <h3 className="text-4xl font-bold text-center">To-Do List</h3>
        <div className="flex gap-2 mt-6">
          <input
            type="text"
            name="text"
            className="bg-gray-700 rounded p-2 flex-grow"
            placeholder="Enter a task..."
            value={newTask}
            onChange={handleInput}
          />
          <button className="bg-black rounded p-2 " onClick={addTask}>
            Add Task
          </button>
        </div>
        <ol>
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex items-center gap-2 py-2 my-2 border-1 rounded"
            >
              <span className="flex-grow rounded p-2">{task}</span>
              <button
                className="bg-red-500 p-2 rounded"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
              <button
                className="text-4xl rounded"
                onClick={() => moveUp(index)}
              >
                ⬆️
              </button>
              <button
                className="text-4xl rounded"
                onClick={() => moveDown(index)}
              >
                ⬇️
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
