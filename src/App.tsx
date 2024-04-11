import { useState } from "react";
import reactLogo from "./assets/react.svg";
import PlusIcon from "./assets/plus.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>

      <h1>Accessibility Web</h1>

      {/* keyboard compatibility testing */}
      {/* 
        What happens when you add a button html element ?
      */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}

      {/* text to speech testing */}
      <div className="card">
        <div
          tabIndex={0}
          role="button"
          onKeyUp={() => setCount((count) => count + 1)}
          onClick={() => setCount((count) => count + 1)}
        >
          <img src={PlusIcon} alt="plus" />
        </div>
        <div> count is {count}</div>
      </div>
    </>
  );
}

export default App;
