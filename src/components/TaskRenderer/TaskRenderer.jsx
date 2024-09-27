import "./TaskRenderer.css";
import React from "react";
import { FaRegTrashCan, FaPenToSquare } from "react-icons/fa6";
import { useSelector } from "react-redux";

function TaskRenderer() {
  const todos = useSelector((state) => state.todos);
  return (
    <>
      {todos ? (
        todos.map((todos , index) => {
          <div key={index} className="flex items-center justify-between p-2">
            <h3>
              <span>Task {todos}</span>
            </h3>
            <div>
              <button className="text-black text-2xl font-bold">
                <FaPenToSquare />
              </button>
              <button className="text-red text-2xl font-bold">
                <FaRegTrashCan />
              </button>
            </div>
          </div>;
        })
      ) : (
        <h1>No Task</h1>
      )}
    </>
  );
}

export default TaskRenderer;
