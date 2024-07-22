"use client";

import React, { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";

interface FormProps {
  createTask: (task: string) => void;
}

const Form: React.FC<FormProps> = ({ createTask }) => {
  const [value, setValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    {
      value.trim() !== "" && createTask(value);
    }
    setValue("");
  };
  return (
    <div>
      <form className="mx-auto flex max-w-sm" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Add a new task..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <Button className="ml-2 transform bg-gradient-to-t from-fuchsia-700 to-pink-500 transition-transform duration-200 hover:scale-95">
          Add
        </Button>
      </form>
    </div>
  );
};

export default Form;
