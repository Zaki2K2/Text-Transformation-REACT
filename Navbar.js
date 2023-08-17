import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function Navbar(props) {
  const darkModeActive = props.mode === 'dark';

  const handleGreenClick = () => {
    if (darkModeActive) {
      props.changeBodyColor('green', 'white');
    }
  };

  const handleBrownClick = () => {
    if (darkModeActive) {
      props.changeBodyColor('brown', 'white');
    }
  };

  return (
    // Navigation bar component
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        {/* Brand/logo link */}
        <a className="navbar-brand" href="/">{props.title}</a>
        {/* Toggler button for collapsible navigation menu */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Collapsible navigation menu */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Home and About links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              {props.aboutText}
            </NavLink>
          </li>
          </ul>

          {/* Dark mode toggle */}
          <div className={`form-check form-switch mx-3 ${props.mode === 'light' ? 'text-dark' : 'text-light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            
            {/* Conditional rendering of circular buttons when Dark Mode is on */}
            {darkModeActive && (
              <div className="d-flex align-items-center">
              
              <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={(e) => {
            const selectedValue = e.target.value;
            if (selectedValue === 'green') {
              handleGreenClick();
            } else if (selectedValue === 'brown') {
              handleBrownClick();
            }
          }}>
            <option value="">Select a color</option>
            <option value="green">Green</option>
            <option value="brown">Brown</option>
          </select>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

// PropTypes for type checking and default values
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
  mode: PropTypes.oneOf(['light', 'dark']).isRequired,
  toggleMode: PropTypes.func.isRequired,
  changeBodyColor: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  aboutText: 'About',
};
