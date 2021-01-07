import React, { useState } from "react";

export default function UseStateDemo() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [age, setAge] = useState("");

  return (
    <div style={{ padding: "2rem" }}>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <hr style={{ margin: "1rem 0rem" }} />
      <div>
        <label htmlFor="age">
          Provide your age
          <input
            id="age"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
        </label>
        <p>Your age: {age}</p>
      </div>
    </div>
  );
}
