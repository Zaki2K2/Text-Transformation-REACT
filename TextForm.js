import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
  // State variables
  const [text, setText] = useState(''); // State for the input text
  const [forDefault, setForDefault] = useState(''); // State to store the original text for the "Default" button
  const [currentColorIndex, setCurrentColorIndex] = useState(5); // Index of the current color
  const colors = ['red', 'green', 'blue', 'purple', 'orange', '#20264a']; // List of colors

  // Event handlers
  const handleUpClick = () => {
    // Convert text to uppercase
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success")
  };

  const handleLowClick = () => {
    // Convert text to lowercase
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success")
  };

  const handleDefaultClick = () => {
    // Restore text to the original stored default value
    setText(forDefault);
    props.showAlert("Converted to Default!", "success")
  };

  const handleColorChange = () => {
    // Cycle through colors when the color button is clicked
    const nextColorIndex = (currentColorIndex + 1) % colors.length;
    setCurrentColorIndex(nextColorIndex);
    props.showAlert("Text Color has been Changed!", "success")
  };

  const handleRemoveSpaces = () => {
    // Replace consecutive spaces with a single space
    const cleanedText = text.replace(/\s+/g, ' ');
    setText(cleanedText);
    props.showAlert("Extra Spaces Removed!", "success")
  };
  const handleCopyClick = () => {
    // Create a temporary input element
    const tempInput = document.createElement('textarea');
    tempInput.value = text;
    document.body.appendChild(tempInput);
  
    // Select the text in the input element
    tempInput.select();
    document.execCommand('copy');
  
    // Remove the temporary input element
    document.body.removeChild(tempInput);
  
    // Show a copy success alert
    props.showAlert('Text copied to clipboard!', 'success');
  };
  

  const handleOnChange = (event) => {
    // Update text state as the user types
    setText(event.target.value);
    setForDefault(event.target.value); // Store the current input as the default value
  };

  return (
    <>
      {/* Text manipulation controls */}
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#20264a' }}>
        <br />
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: colors[currentColorIndex] }} // Use the current color
            placeholder='Enter Text Here'
            id="myBox"
            rows="12"
          ></textarea>
        </div>
        {/* Buttons for text manipulation */}
        <button className="btn btn-primary mx-2" onClick={handleUpClick} style={{ margin: '2px', width: '200px' }}>Convert To UPPERCASE</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick} style={{ margin: '2px', width: '200px' }}>Convert To lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleDefaultClick} style={{ margin: '2px', width: '200px' }}>Convert To Default</button>
        <button className="btn btn-primary mx-2" onClick={handleColorChange} style={{ margin: '2px', width: '200px' }}>Change Text Color</button>
        <button className="btn btn-primary mx-2" onClick={handleRemoveSpaces} style={{ margin: '2px', width: '200px' }}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick} style={{ margin: '2px', width: '200px' }}>Copy Text</button>

      </div>
      {/* Text summary and preview */}
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#20264a' }}>
        <h1>Your Text Summary</h1>
        {text.trim().length === 0 ? '0 words' : `${text.trim().split(' ').length} words`}
        <p>{0.008 * text.split(" ").length} <b>Minutes Read</b></p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter some Text to Preview it Here..."}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  mode: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  showAlert: PropTypes.func.isRequired,
};