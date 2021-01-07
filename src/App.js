import React, { useEffect, useState } from "react";
import { Hello } from "./components/Hello";

// 1.
// const App = () => {
//   useEffect(() => {
//     console.log("%c render", "color: tomato");
//   });
//   return <div>Hello</div>;
// };

// 2.
// const App = () => {
//   useEffect(() => {
//     console.log("%c render", "color: tomato");
//   });
//   useEffect(() => {
//     console.log("%c render2", "color: tomato");
//   });
//   useEffect(() => {
//     console.log("%c render3", "color: tomato");
//   });

//   return <div>Hello</div>;
// };

// 3.
// const App = () => {
//   const [count, setCount] = useState(0);
//   const [firstName, setFirstName] = useState(0);

//   useEffect(() => {
//     console.log("%c render-1", "color: tomato");
//   });

//   useEffect(() => {
//     console.log("%c render-2", "color: green");
//   }, []);

//   useEffect(() => {
//     console.log("%c render-3", "color: blue");
//   }, [firstName]);

//   return (
//     <div style={{ padding: "2rem" }}>
//       <button
//         type="button"
//         onClick={() => setCount((prevCount) => prevCount + 1)}
//       >
//         Counter - {count}
//       </button>
//       <div style={{ marginTop: "1rem" }}>
//         <label htmlFor="firstName">First Name: </label>
//         <input
//           id="firstName"
//           onChange={(event) => setFirstName(event.target.value)}
//         />
//       </div>
//     </div>
//   );
// };

// 4.
// const App = () => {
//   const [showHello, setShowHello] = useState(false);

//   return (
//     <div style={{ padding: "2rem" }}>
//       <button type="button" onClick={() => setShowHello(!showHello)}>
//         Toggle Hello
//       </button>

//       {showHello && <Hello />}
//     </div>
//   );
// };

// 5.
// const App = () => {
//   useEffect(() => {
//     const onMouseMove = (e) => console.log(e);

//     window.addEventListener("mousemove", onMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", onMouseMove);
//     };
//   }, []);

//   return <div style={{ padding: "2rem" }}>Nothing</div>;
// };

// 6.
// const App = () => {
//   const [apiNum, setApiNum] = useState("0");
//   const [fetchResult, setFetchResult] = useState(null);

//   useEffect(() => {
//     const getData = async () => {
//       const res1 = await fetch(`http://numbersapi.com/${apiNum}/trivia`);
//       const res2 = await res1.text();
//       setFetchResult(res2);
//     };

//     getData();
//   }, [apiNum]);

//   return (
//     <div style={{ padding: "2rem" }}>
//       <input onBlur={(e) => setApiNum(e.target.value)} />
//       <div>{fetchResult}</div>
//     </div>
//   );
// };

// 7
const App = () => {
  const [apiNum, setApiNum] = useState(() => localStorage.getItem("apiNum"));
  const [fetchResult, setFetchResult] = useState(null);

  useEffect(() => {
    localStorage.setItem("apiNum", apiNum);
  }, [apiNum]);

  useEffect(() => {
    const getData = async () => {
      const res1 = await fetch(`http://numbersapi.com/${apiNum}/trivia`);
      const res2 = await res1.text();
      setFetchResult(res2);
    };

    getData();
  }, [apiNum]);

  return (
    <div style={{ padding: "2rem" }}>
      <input
        value={apiNum}
        onBlur={(e) => setApiNum(e.target.value)}
        onChange={(e) => setApiNum(e.target.value)}
      />
      <div>{fetchResult}</div>
    </div>
  );
};

export default App;
