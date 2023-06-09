import { useState } from "react";
import A from "./components/A";
import B from "./components/B";
import C from "./components/C";
import D from "./components/D";

function App() {
  const [count, setCount] = useState(0);

  return (

    <div className="bg-red-100 min-h-screen flex flex-col gap-8 justify-center items-center">
      <A />
      <B />
      <C />
      <D />
      <div className="bg-red-100 flex justify-center items-center">
                <button className="border-2 rounded-lg mr-3 bg-white text-purple-500
                 border-purple-500 w-8 h-8" onClick={()=>{setCount (count+1)}}>+
                </button>
                <p className="text-purple-500">{count}</p>
                <button className="border-2 rounded-lg ml-3 bg-white text-blue-300
                 border-blue-300 w-8 h-8" onClick={()=>{setCount (count-1)}}>-</button>
            </div>
    </div>
  );
}

export default App;