import { useState } from "react"
import React from 'react'
export default function Textform(props) {
  const [text, setText]=useState('');
  const [spaces, setSpaces]=useState(0);
    const func1 = ()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const func2 =(event)=>{

        setText(event.target.value);
        if(text.length===1)
        setSpaces(1);
        else if(text[text.length-1]==='\n')
        setSpaces(spaces+1);
        else if(text[text.length-2]===' '&&text[text.length-1]!==' ')
        setSpaces(spaces+1);
    }
    const func3=()=>{
      setText(text.toLowerCase());
    }
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={func2} id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'darkgrey':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={func1}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={func3}>Convert to Lowercase</button>
    </div>
    <div className="container my-2">
      <h1>Your text summary</h1>
      <p>{spaces} Words and {text.length} Characters</p>
      <p>{text.split(" ").length*0.008} Minutes read</p>
    </div>
    </>
  )
}
