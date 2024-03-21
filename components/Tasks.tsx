import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import tasks from "@/info/ResponsibilityList.js";

function Tasks() {
  return (
    <div className="flex flex-col gap-4">
      {tasks.map((task, index) => (
        <div key={index} className="flex items-center gap-2">
          <FaRegCircleCheck className="text-green-500" />
          <span>{task}</span>
        </div>
      ))}
    </div>
  );
}

export default Tasks;