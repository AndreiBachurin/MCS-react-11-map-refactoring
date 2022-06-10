import React, { useEffect, useLayoutEffect, useState } from "react";
import { render } from "react-dom";
import "./index.css";
import useMapbox from "./useMapbox";

function App() {
  const [random, setRandom] = useState(Math.random());

  useMapbox('map', [30.19, 59.57], 7);

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-5"
        id="rerender"
        onClick={() => setRandom(Math.random())}
      >
        Ререндер!
      </button>
      <div id="map"></div>
    </>
  );
}

render(<App />, document.querySelector("#root"));