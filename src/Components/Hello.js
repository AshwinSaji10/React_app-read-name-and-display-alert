import React,{useState} from 'react';
import './Hello.css';



const Hello=()=>{
    const [inputText,SetinputText]=useState("");

    const handleChange=event=>{
        SetinputText(event.target.value);
        //alert("hi"+{SetinputText});
    }
    const btnClick=()=>{
        alert("hi "+inputText);
    }
    return(
        <div className='align'>
            <h1>Enter your name</h1>
            <input type="text" value={inputText} onChange={handleChange}/>
            <button onClick={btnClick}>Submit</button>
        </div>
    );
};

export default Hello;