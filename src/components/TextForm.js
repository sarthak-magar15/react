import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () =>{
    console.log("Uppercase was clicked" + text); 
    let newText = text.toUpperCase();
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
    <div>
      <h1>{props.heading}</h1>
        <div className="form-group">
            <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert To UpperCase </button>
    </div>
  )
}
