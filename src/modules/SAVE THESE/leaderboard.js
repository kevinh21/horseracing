import React, { useState, useEffect } from 'react';
import "./Leaderboard.css";

function Leaderboard() {
  const [horses, setHorses] = useState([]);
  const [selectedHorses, setSelectedHorses] = useState([]);
  const [raceInProgress, setRaceInProgress] = useState(false);
  const [raceTime, setRaceTime] = useState(null);
  const [raceResults, setRaceResults] = useState(null);

  useEffect(() => {
    // Generate 4 random horses when component mounts
    generateHorses(4);
  }, []);

  function generateHorses(numHorses) {
    // Generate random horses
    const horsesArray = [];
    const horseNames = ['Thunderbolt', 'Lightning', 'Flash', 'Quickstep', 'Jet', 'Sonic'];
    for (let i = 0; i < numHorses; i++) {
      const randomIndex = Math.floor(Math.random() * horseNames.length);
      const horseName = horseNames.splice(randomIndex, 1);
      const horse = { name: horseName[0], position: 0 };
      horsesArray.push(horse);
    }
    setHorses(horsesArray);
  }

  function handleHorseSelection(horse) {
    // Toggle horse selection
    const isSelected = selectedHorses.some((selectedHorse) => selectedHorse.name === horse.name);
    if (isSelected) {
      setSelectedHorses(selectedHorses.filter((selectedHorse) => selectedHorse.name !== horse.name));
    } else {
      setSelectedHorses([...selectedHorses, horse]);
    }
  }

  function startRace() {
    setRaceInProgress(true);

    // Generate random race time between 1 and 3 minutes
    const raceDuration = Math.floor(Math.random() * 3 + 1);
    const raceTimeSeconds = raceDuration * 60;

    // Move horses at random intervals
    const intervalId = setInterval(() => {
      const updatedHorses = [...horses];
      for (let i = 0; i < updatedHorses.length; i++) {
        const distance = Math.floor(Math.random() * 10 + 1);
        updatedHorses[i].position += distance;
      }
      setHorses(updatedHorses);
    }, 1000);

    // Stop race and show results after race time elapses
    setTimeout(() => {
      clearInterval(intervalId);
      setRaceInProgress(false);

      // Sort horses by position
      const sortedHorses = horses.sort((a, b) => b.position - a.position);
      setRaceResults(sortedHorses);

      // Reset horse positions
      const resetHorses = horses.map((horse) => ({ ...horse, position: 0 }));
      setHorses(resetHorses);
    }, raceTimeSeconds * 1000);

    // Set race time for display
    setRaceTime(raceDuration);
  }

  function resetGame() {
    setSelectedHorses([]);
    setRaceInProgress(false);
    setRaceTime(null);
    setRaceResults(null);
    generateHorses(4);
  }

  return (
    <div className="App">
      <h1>Horse Racing Game</h1>
      <p>Select up to 4 horses to race:</p>
      <div className="horse-selection">
        {horses.map((horse) => (
          <div
            key={horse.name}
            className={`${selectedHorses.some((selectedHorse) => selectedHorse.name === horse.name) ? 'selected' : ''}`}
            onClick={() => handleHorseSelection(horse)}
          >
            <p>{horse.name}</p>

            <img src={`images/${horse.name.toLowerCase()}.jpg`} alt={horse.name} />
      </div>
    ))}
  </div>
  {!raceInProgress && (
    <button
      disabled={selectedHorses.length === 0}
      onClick={startRace}
    >
      Start Race
    </button>
  )}
  {raceInProgress && (
    <div>
      <p>Race in progress... {raceTime} minutes</p>
      <div className="track">
        {horses.map((horse) => (
          <div
            key={horse.name}
            className="horse"
            style={{ left: `${horse.position}%` }}
          >
            <img src={`images/${horse.name.toLowerCase()}.jpg`} alt={horse.name} />
          </div>
        ))}
      </div>
    </div>
  )}
  {raceResults && (
    <div>
      <h2>Race Results:</h2>
      <ol>
        {raceResults.map((horse, index) => (
          <li key={horse.name}>
            <p>{`${index + 1}. ${horse.name}`}</p>
            <img src={`images/${horse.name.toLowerCase()}.jpg`} alt={horse.name} />
          </li>
        ))}
      </ol>
      <button onClick={resetGame}>Play Again</button>
    </div>
  )}
</div>


);
}

export default Leaderboard;

