import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () =>{
    console.log("Uppercase was clicked" + text); 
    let newText = text.toUpperCase();
    setText(newText)
  }  

  const handleLowClick = () =>{
    console.log("Lowercase was clicked" + text); 
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleClick = () =>{
    console.log("Copy to was clicked" + text); 
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleOnChange = (event) =>{
    console.log("On change"); 
    setText(event.target.value);
  }
  const [text, setText] = useState('Enter text here');
  //text = "New text here " // this is wrong way to change the value of text variable 
  //setText = ("New text here "); // this is the correct way 

  return (
    <>
    <div className = "container">
      <h1>{props.heading}</h1>
        <div className="form-group">
            <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert To LowerCase </button>
        <button className="btn btn-primary mx-2" onClick={handleClick}>Copy To Clipboard  </button>
    </div>
    <div classname = "container my-2">
      <h1>Your text summary </h1>
      <p>{text.split(" ").length} words and {text.length} Characters </p>
      <p>{0.008*text.split(" ").length} minutes to read </p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
    
  )
}
