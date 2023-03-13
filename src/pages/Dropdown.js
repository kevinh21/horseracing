import React, { useState } from "react";
import "./Dropdown.css";

import Horse1 from './images/horse (1).gif';
import Horse2 from './images/horse (2).gif';
import Horse3 from './images/horse (3).gif';
import Horse4 from './images/horse (4).gif';
import Horse5 from './images/horse (5).gif';
import Horse6 from './images/horse (6).gif';
import Horse7 from './images/horse (7).gif';
import Horse8 from './images/horse (8).gif';
import Horse9 from './images/horse (9).gif';
import Horse10 from './images/horse (10).gif';
// import LeaderboardStatus from './LeaderboardStatus';
// import Stopwatch from './Stopwatch';

const horses = [
  { name: 'Secretariat', number: 1, gif: Horse1 },
  { name: "Man o' War", number: 2, gif: Horse2 },
  { name: 'Seattle Slew', number: 3, gif: Horse3 },
  { name: 'Affirmed', number: 4, gif: Horse4 },
  { name: 'American Pharoah', number: 5, gif: Horse5 },
  { name: 'Justify', number: 6, gif: Horse6 },
  { name: 'Citation', number: 7, gif: Horse7 },
  { name: 'Count Fleet', number: 8, gif: Horse8 },
  { name: 'Assault', number: 9, gif: Horse9 },
  { name: 'Whirlaway', number: 10, gif: Horse10 },
];

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="dropdown-header-text">
          {selectedOptions.length ? `${selectedOptions.length} options selected` : "Select an option"}
        </div>
        <div className={`dropdown-icon ${isOpen ? "open" : ""}`} />
      </div>
      {isOpen && (
        <div className="dropdown-options">
          {horses.map((horse) => (
            <div
              key={horse.name}
              className={`dropdown-option ${selectedOptions.includes(horse.name) ? "selected" : ""}`}
              onClick={() => handleOptionClick(horse.name)}
            >
              {horse.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
