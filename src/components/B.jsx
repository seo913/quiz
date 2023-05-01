import { useState } from "react";

function B () {
    const [count, setCount] = useState(0);
    return(
        <>
            <div className="bg-red-100 flex justify-center items-center">
                <button className="border-2 rounded-lg mr-3 bg-white text-purple-500
                 border-purple-500 w-8 h-8" onClick={()=>{setCount (count+1)}}>+
                </button>
                <p className="text-purple-500">{count}</p>
                <button className="border-2 rounded-lg ml-3 bg-white text-blue-300
                 border-blue-300 w-8 h-8" onClick={()=>{setCount (count-1)}}>-</button>
            </div>
        </>
    )
}
export default B;