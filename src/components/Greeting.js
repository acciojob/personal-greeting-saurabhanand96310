
import React, { useState} from "react";


const Greeting=()=>{
  const [greet, setGreet]=useState("");

const handle=(e)=>{
  setGreet(e.target.value);
}

  return <>
       <p></p>
       <input  type="text" value={greet} onChange={handle}></input>
       {greet && <p>Hello {greet}</p>}
  </>


}
export default Greeting;