import axios from "axios";
import { useState } from "react";

function D (){
    const [get1,setGet] = useState();

    const submitBtn = async ()=>{
        try {
            const response = await axios.get("https://green-bush-5824.fly.dev/"); //요청주소
            setGet(response.data.message); 
            console.log(response);
            
            if(response.status !== 200){
                alert("에러발생!");
                return;
            }
        } catch {
            }
        }
        
    return(
        <div className="bg-red-100 flex flex-col justify-center items-center">
            <button onClick={submitBtn} type="button" 
            className="bg-white border-2 border-purple-500 text-purple-500 rounded-xl p-4">
                요청
            </button>
            <div>{get1}</div>
        </div>
    )  
}
export default D;