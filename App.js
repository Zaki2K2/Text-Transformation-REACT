import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    document.body.style.backgroundColor = newMode === 'dark' ? '#20264a' : 'white';
    showAlert(`${newMode === 'dark' ? 'Dark' : 'Light'} Mode has been Enabled`, 'success');
    document.title = `Text Utils - ${newMode === 'dark' ? 'Dark' : 'Light'} Mode `;
  };

  const changeBodyColor = (backgroundColor, textColor) => {
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = textColor;
  };

  return (
    <Router>
    <Navbar
      title="TextUtils"
      mode={mode}
      toggleMode={toggleMode}
      changeBodyColor={changeBodyColor}
    />
   
    <Alert alert={alert} />
    <div className="container">
      <Routes>
        <Route
          path="/"
          element={
            <TextForm
              heading="Enter the Text to Analyse"
              showAlert={showAlert}
              mode={mode}
              placeHolder="Enter text here"
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
