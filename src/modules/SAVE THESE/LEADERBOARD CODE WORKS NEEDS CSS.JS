import React, { useState, useEffect } from "react";
import HorseImage from "./images/horse running (1).gif"; // Horse images folder
import "./Leaderboard.css"; // Leaderboard styles

const horses = [
  { name: "Horse 1", number: 1 },
  { name: "Horse 2", number: 2 },
  { name: "Horse 3", number: 3 },
  // ... add more horses here
];

const Leaderboard = () => {
  const [selectedHorses, setSelectedHorses] = useState([]);
  const [raceDuration, setRaceDuration] = useState(null);
  const [trackLength, setTrackLength] = useState(null);
  const [racePositions, setRacePositions] = useState([]);

  // Generate a random duration time and track length for each race
  useEffect(() => {
    const duration = (Math.floor(Math.random() * 8) + 12) * 1000; // 12-20 seconds intervals
    const length = (Math.floor(Math.random() * 16) + 5) * 0.125; // 0.625-2.5 miles intervals
    setRaceDuration(duration);
    setTrackLength(length);
  }, []);

  // Start the race and update horse positions every 1-7 seconds
  const startRace = () => {
    // Create a new race with selected horses
    const race = selectedHorses.map((horse) => ({
      ...horse,
      time: 0,
      distance: 0,
      position: 0,
    }));

    // Update horse positions every 1-7 seconds
    const interval = setInterval(() => {
      const newRace = [...race];
      newRace.forEach((horse) => {
        // Update horse distance based on their speed
        horse.distance += Math.floor(Math.random() * 10) + 10;

        // Update horse time in milliseconds
        horse.time += 100;

        // Update horse position based on their distance
        const position =
          newRace.filter((h) => h.distance > horse.distance).length + 1;
        horse.position = position;
      });

      // Check if the race is over
      if (race.some((horse) => horse.distance >= trackLength * 1609)) {
        clearInterval(interval);

        // Sort the race by finishing time
        const sortedRace = [...race].sort((a, b) => a.time - b.time);

        // Update race positions state variable
        setRacePositions(sortedRace);
      } else {
        // Update race positions state variable
        setRacePositions(newRace);
      }
    }, (Math.floor(Math.random() * 7) + 1) * 1000); // 1-7 seconds intervals
  };

  // Reset the game to its initial state
  const resetGame = () => {
    setSelectedHorses([]);
    setRaceDuration(null);
    setTrackLength(null);
    setRacePositions([]);
  };

  return (
    <div className="leaderboard">
      <h1>Horse Racing Leaderboard</h1>

      <div className="input-group">
        <label htmlFor="horse-select">Select Horses:</label>
        <select
          id="horse-select"
          multiple
          value={selectedHorses.map((horse) => horse.number)}
          onChange={(e) =>
            setSelectedHorses(
              Array.from(e.target.selectedOptions, (option) =>
                horses.find((horse) => horse.number === Number(option.value))
              )
            )
          }
        >
          {horses.map((horse) => (
<option key={horse.number} value={horse.number}>
{horse.name} ({horse.number})
</option>
))}
</select>
</div>
<button onClick={startRace}>Start Game</button>
  <button onClick={resetGame}>Reset Game</button>

  {raceDuration && trackLength && (
    <div className="race-info">
      <p>Race Duration: {raceDuration / 1000} seconds</p>
      <p>Track Length: {trackLength} miles</p>
    </div>
  )}

  <div className="race-track">
    {racePositions.map((horse) => (
      <div
        key={horse.number}
        className={`horse horse-${horse.number}`}
        style={{ left: `${(horse.distance / trackLength / 1609) * 100}%` }}
      >
        <img src={HorseImage[`horse${horse.number}`]} alt={`Horse ${horse.number}`} />
        <p>#{horse.number}</p>
        {horse.position === 1 && <span className="finish-line">Finish Line</span>}
      </div>
    ))}
  </div>

  {racePositions.length > 0 && (
    <table>
      <thead>
        <tr>
          <th>Position</th>
          <th>Name</th>
          <th>Number</th>
          <th>Time</th>
          <th>Distance</th>
        </tr>
      </thead>
      <tbody>
        {racePositions.map((horse, index) => (
          <tr key={horse.number}>
            <td>{index + 1}</td>
            <td>{horse.name}</td>
            <td>{horse.number}</td>
            <td>{horse.time / 1000} seconds</td>
            <td>{horse.distance / 1609} miles</td>
          </tr>
        ))}
      </tbody>
    </table>
  )}
</div>

);
};

export default Leaderboard;
