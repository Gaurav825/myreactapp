
import React,{useState} from 'react'




export default function Example(props) {
    const handleUpClick=()=>
    {
     // console.log("UpperCase Was Clicked");
      const text1=text.toUpperCase();
      setText(text1);
    }
    const handleLowClick=()=>
    {
      const text1=text.toLowerCase();
      setText(text1);

    }
    const handleOnChange=(event)=>{
      //console.log("On Change")
      setText(event.target.value);
    }
    const [text, setText]  = useState('Enter text here')
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
    
<div className="my-3">
 
       <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnChange} value={text} rows="8"></textarea>
</div>
<button type="button" class="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Upper Case</button>
<button type="button" class="btn btn-primary" onClick={handleLowClick}>Convert To Lower Case</button>

    </div>

    <div className="container">
      <h2>your Text Summary</h2>
      <p>{text.length}  words {text.split(' ').length}    charcters</p>
      <h5>Preview of Text</h5>
      <p>{text}</p>
    </div>
    </>
  )
}

