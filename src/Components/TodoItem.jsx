import React from "react";

export default function TodoItem({ data }) {
  return (
    <div>
      {data.map((item) => {
        return (
          <div>
            <h3>
              {item.title} - {item.description} -
              {item.status ? "Done" : "Pending"}
            </h3>
          </div>
        );
      })}
    </div>
  );
}
