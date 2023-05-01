import { useState } from "react";

const colors = [
    "bg-orange-300",
    "bg-yellow-300",
    "bg-green-300",
    "bg-teal-300",
    "bg-sky-300",
    "bg-indigo-300",
    "bg-purple-300",
    "bg-pink-300",
  ]; 

const Card = () => {
    return(
            [1,2,3,4,5,6,7].map((v,i)=>{
                return(
                    <>
                    <div key={i} className={`${colors[i]} h-40 w-40 ml-4 `} > </div>
                        
                        </>
                )
            })
    )
}
export default Card;