
import React, { useState} from "react";
import './../styles/App.css';

const App = () => {
 const [input,setInput]=useState("");

 const handleInput =(event)=>{
setInput(event.target.value);
 }
  return (
    <div>
        {/* Do not remove the main div */}
        <h1 >Enter your name:</h1>
        <input type="text" value={input}  onChange={handleInput}></input>


        {/* <input value={value} id="name" onChange={e => setInput(e.target.value)} type={type} />
        <p>Hello { input}</p> */}
       { input &&<p>Hello {input}</p>}
    </div>
  )
}

export default App
