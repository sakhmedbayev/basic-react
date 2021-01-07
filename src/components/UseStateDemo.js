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

// Play with an InitialState

// Functional updates
// If the new state is computed using the previous state, you can pass a function to setState. The function will receive the previous value, and return an updated value. Here’s an example of a counter component that uses both forms of setState:

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </>
  );
}

// setState(prevState => {
//   // Object.assign would also work
//   return {...prevState, ...updatedValues};
// });

// Lazy initial state
// The initialState argument is the state used during the initial render. In subsequent renders, it is disregarded. If the initial state is the result of an expensive computation, you may provide a function instead, which will be executed only on the initial render:

// const [state, setState] = useState(() => {
//   const initialState = someExpensiveComputation(props);
//   return initialState;
// });
