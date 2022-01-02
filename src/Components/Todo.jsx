import React, { useState } from "react";
import ReactDom from "react-dom";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function Todo() {
  const [list, setList] = useState([]);

  const handleSubmit = ({ title, description }) => {
    const payload = {
      id: list.length + 1,
      title,
      description,
      status: list.length % 2 === 0 ? true : false
    };
    setList([...list, payload]);
    console.log(list);
  };

  return (
    <div>
      <TodoInput onSubmit={handleSubmit} />
      <TodoItem data={list} />
    </div>
  );
}
