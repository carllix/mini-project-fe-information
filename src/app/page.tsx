"use client";

import React, { useState } from "react";
import Form from "~/components/ui/Form";
import TaskCard from "~/components/ui/TaskCard";

interface Task {
  id: number;
  title: string;
  created: string;
  status: "To Do" | "Done";
}

function Page() {
  const [taskValue, setTaskValue] = useState<Task[]>([]);

  const currentTimestamp = new Date().toLocaleDateString();

  const createTask = (task: string) => {
    setTaskValue([
      ...taskValue,
      {
        id: taskValue.length + 1,
        title: task.toUpperCase(),
        created: currentTimestamp,
        status: "To Do",
      },
    ]);
  };

  const deleteTask = (id: number) => {
    setTaskValue(taskValue.filter((task) => task.id !== id));
  };

  const toggleStatus = (id: number) => {
    setTaskValue((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, status: task.status === "To Do" ? "Done" : "To Do" }
          : task,
      ),
    );
  };

  return (
    <div className="container my-10">
      <h1 className="my-10 bg-gradient-to-t from-yellow-500 to-amber-200 bg-clip-text text-center font-sans text-4xl font-extrabold text-transparent">
        To Do List
      </h1>
      <Form createTask={createTask} />
      <div className="mx-auto mt-5 max-w-sm">
        {taskValue.length === 0 ? (
          <p className="text-md mt-8 text-center font-mono font-thin text-white sm:text-lg">
            No task available at the moment...
          </p>
        ) : (
          taskValue.map((task, index) => (
            <TaskCard
              key={index}
              task={task}
              deleteTask={deleteTask}
              toggleStatus={toggleStatus}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Page;
