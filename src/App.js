import React from "react";
import MyButton from "./components/MyButton";

const App = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <MyButton
        color="red"
        title="Red"
        onClick={() => console.log("clicked on red")}
      />
      <MyButton
        color="green"
        title="Green"
        onClick={() => console.log("clicked on green")}
      />
      <MyButton
        color="yellow"
        title="Yellow"
        onClick={() => console.log("clicked on yellow")}
      />
    </div>
  );
};

export default App;
