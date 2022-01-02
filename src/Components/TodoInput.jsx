import React, { useState } from "react";

export default function TodoInput({ onSubmit }) {
  const [state, setstate] = useState({
    title: "",
    description: "",
    status: false
  });
  const handleChange = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };
  const handleAdd = () => {
    onSubmit(state);
  };
  return (
    <div>
      <div style={{ padding: 4 }}>
        <input
          name="title"
          value={state.title}
          placeholder="Add title"
          onChange={handleChange}
        />
      </div>
      <div style={{ padding: 4 }}>
        <input
          name="description"
          value={state.description}
          placeholder="Add description"
          onChange={handleChange}
        />
      </div>
      <div>
        <button onClick={handleAdd}>ADD</button>
      </div>
    </div>
  );
}
