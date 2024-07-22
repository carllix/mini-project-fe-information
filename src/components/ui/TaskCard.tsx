import React from "react";
import { Button } from "./button";
interface TaskCardProps {
  task: {
    id: number;
    title: string;
    created: string;
    status: "To Do" | "Done";
  };
  deleteTask: (id: number) => void;
  toggleStatus: (id: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({
  task,
  deleteTask,
  toggleStatus,
}) => {
  return (
    <div className="flex items-center selection:bg-fuchsia-600 selection:text-white">
      <div className="my-3 w-5/6 rounded-md bg-neutral-50 p-3 font-sans text-sm">
        <h1 className="font-bold text-black">{task.title}</h1>
        <p className="mt-1 font-mono text-slate-500">
          Created on : {task.created}
        </p>
        <p className="mt-1">
          Status :
          <span
            className={`ml-1 rounded-md px-2 py-1 text-xs font-semibold text-white ${task.status === "Done" ? "bg-green-600" : "bg-red-600"}`}
          >
            {task.status}
          </span>
        </p>
      </div>
      <div className="flex w-1/6 flex-col items-center">
        <input
          className="mb-3 h-6 w-6"
          type="checkbox"
          checked={task.status === "Done"}
          onChange={() => toggleStatus(task.id)}
        />
        <Button
          className="h-8 w-8 transform rounded-full bg-gradient-to-t from-fuchsia-700 to-pink-500 px-1 transition-transform duration-200 hover:scale-95"
          onClick={() => deleteTask(task.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="white"
          >
            <path d="M3 6h18v2H3V6zm1 3h16v14H4V9zm2 2v10h12V11H6zm3-6h6v2H9V5z" />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default TaskCard;
