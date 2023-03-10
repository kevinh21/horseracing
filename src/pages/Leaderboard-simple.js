import React, { useState, useEffect } from 'react';
import '../components/styles/Leaderboard.css';

function Leaderboard() {
  const [horseNames, setHorseNames] = useState([]);
  const [horseNumbers, setHorseNumbers] = useState([]);
  const [trackLength, setTrackLength] = useState(0);
  const [raceStarted, setRaceStarted] = useState(false);
  const [positions, setPositions] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'horseName':
        setHorseNames([...horseNames, value]);
        break;
      case 'horseNumber':
        setHorseNumbers([...horseNumbers, value]);
        break;
      case 'trackLength':
        setTrackLength(value);
        break;
      default:
        break;
    }
  };

  const startRace = () => {
    setRaceStarted(true);
  };

  useEffect(() => {
    let intervalId;
    if (raceStarted) {
      intervalId = setInterval(() => {
        const newPositions = [...positions];
        horseNumbers.forEach((horseNumber, index) => {
          const currentPosition = newPositions[index] || 0;
          const newPosition = currentPosition + Math.floor(Math.random() * 10);
          newPositions[index] = newPosition > trackLength ? trackLength : newPosition;
        });
        setPositions(newPositions);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [raceStarted, positions, horseNumbers, trackLength]);

  const renderHorses = () =>
    horseNames.map((horseName, index) => (
      <div key={horseNumbers[index]}>
        <span>{horseName}</span>
        <div className="horse" style={{ left: `${(positions[index] / trackLength) * 100}%` }}>
          {horseNumbers[index]}
        </div>
      </div>
    ));

  const renderLeaderboard = () =>
    horseNames
      .map((horseName, index) => ({ name: horseName, number: horseNumbers[index], position: positions[index] }))
      .sort((a, b) => b.position - a.position)
      .map(({ name, number, position }) => (
        <div key={number}>
          <span>{name}</span>
          <span>{position}</span>
        </div>
      ));

  return (
    <div className="leaderboard">
      <h1>Horse Race</h1>
      <div className="form">
        <label htmlFor="horseName">Horse Name:</label>
        <input type="text" name="horseName" onChange={handleInputChange} />
        <label htmlFor="horseNumber">Horse Number:</label>
        <input type="text" name="horseNumber" onChange={handleInputChange} />
        <label htmlFor="trackLength">Track Length:</label>
        <input type="number" name="trackLength" onChange={handleInputChange} />
        <button onClick={startRace}>Start Race</button>
      </div>
      {raceStarted && <div className="track">{renderHorses()}</div>}
      {raceStarted && (
        <div className="leaderboard">
          <h2>Leaderboard</h2>
          {renderLeaderboard()}
        </div>
      )}
    </div>
  );
}

export default Leaderboard;
