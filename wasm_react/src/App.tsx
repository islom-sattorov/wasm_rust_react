import { useState } from "react";
import { find_max } from "../public/pkg/wasm_test";
// import init from "../public/pkg/wasm_test_bg.wasm";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function find_max_js(arr: number[]) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function App() {
  const [count, setCount] = useState(0);
  const arr = [
    1, 123, 153, 345, 45, 654, 4, 325, 546, 5, 56, 67, 8, 3, 453, 5, 34, 32,
  ];

  const challengingArray = [
    345, -2938, 748394, 23984, -748392, 483920, -102938, 4839201, -583920,
    4839203, 102938, -102938, 594857, 1029384, -10293847, 123, 456, -789,
    101112, -131415, 161718, -192021, 222324, -252627, 282930, -313233, 343536,
    -373839, 404142, -434445, 464748, -495051, 525354, -555657, 585960, -616263,
    646566, -676869, 707172, -737475, 767778, -798081, 828384, -858687, 888990,
    -919293, 949596, -979899, 100101102, -103104105, 106107108, -109110111,
    112113114, -115116117, 118119120, -121122123, 124125126, -127128129,
    130131132, -133134135, 136137138, -139140141, 142143144, -145146147,
    148149150, -151152153, 154155156, -157158159, 160161162, -163164165,
    166167168, -169170171, 172173174, -175176177, 178179180, -181182183,
    184185186, -187188189, 190191192, -193194195, 196197198, -199200201,
    // You can continue adding more elements as needed to increase the difficulty
  ];

  // console.log(init);

  console.time("WASM");
  find_max(challengingArray);
  console.timeEnd("WASM");

  console.time("JS");
  find_max_js(challengingArray);
  console.timeEnd("JS");
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
