import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState(''); 
  const [forDefault, setForDefault] = useState(''); // Initialize forDefault state

  const handleUpClick = () => {
    console.log('Uppercase Btn was Clicked' + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    console.log('LowerCase Btn was Clicked' + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleDefaultClick = () => {
    console.log('Default Btn was Clicked');
    setText(forDefault); // Set text to the value of forDefault
  };

  const handleOnChange = (event) => {
    console.log('ON CHANGE');
    setText(event.target.value);
    setForDefault(event.target.value); // Update forDefault on change
  };

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} placeholder='Enter Text Here' id="myBox" rows="8"></textarea>
      </div>
      <button className='btn btn-primary' onClick={handleUpClick}>Convert To UPPERCASE</button>
      <button className='btn btn-primary' onClick={handleLowClick} style={{ margin: '20px' }}>Convert To lowercase</button>
      <button className='btn btn-primary' onClick={handleDefaultClick} style={{ margin: '20px' }}>Convert To Default</button>
    </div>
  );
}
