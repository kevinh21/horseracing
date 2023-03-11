import React, { useState, useEffect } from 'react';
import Horse1Gif from './images/horse running (1).gif';
import Horse2Gif from './images/horse running (2).gif';
import Horse3Gif from './images/horse running (3).gif';
import Horse4Gif from './images/horse running (4).gif';
import Horse5Gif from './images/horse running (5).gif';
import Horse6Gif from './images/horse running (6).gif';
import Horse7Gif from './images/horse running (7).gif';
import Horse8Gif from './images/horse running (8).gif';
import Horse9Gif from './images/horse running (9).gif';
import Horse10Gif from './images/horse running (10).gif';
import './Leaderboard.css';


const horses = [
  { name: 'Horse 1', number: 1, gif: Horse1Gif },
  { name: 'Horse 2', number: 2, gif: Horse2Gif },
  { name: 'Horse 3', number: 3, gif: Horse3Gif },
  { name: 'Horse 4', number: 4, gif: Horse4Gif },
  { name: 'Horse 5', number: 5, gif: Horse5Gif },
  { name: 'Horse 6', number: 6, gif: Horse6Gif },
  { name: 'Horse 7', number: 7, gif: Horse7Gif },
  { name: 'Horse 8', number: 8, gif: Horse8Gif },
  { name: 'Horse 9', number: 9, gif: Horse9Gif },
  { name: 'Horse 10', number:10, gif: Horse10Gif }
];

const Leaderboard = () => {
  const [selectedHorses, setSelectedHorses] = useState([]);
  const [raceDuration, setRaceDuration] = useState(null);
  const [trackLength, setTrackLength] = useState(null);
  const [racePositions, setRacePositions] = useState([]);

  useEffect(() => {
    const duration = (Math.floor(Math.random() * 8) + 12) * 1000; // 12-20 seconds intervals
    const length = (Math.floor(Math.random() * 16) + 5) * 0.125; // 0.625-2.5 miles intervals
    setRaceDuration(duration);
    setTrackLength(length);
  }, []);

  const startRace = () => {
    const race = selectedHorses.map((horse) => ({
      ...horse,
      time: 0,
      distance: 0,
      position: 0
    }));

    const interval = setInterval(() => {
      const newRace = [...race];
      newRace.forEach((horse) => {
        horse.distance += Math.floor(Math.random() * 10) + 10;
        horse.time += 100;
        const position = newRace.filter((h) => h.distance > horse.distance).length + 1;
        horse.position = position;
      });

      if (race.some((horse) => horse.distance >= trackLength * 1609)) {
        clearInterval(interval);
        const sortedRace = [...race].sort((a, b) => a.time - b.time);
        setRacePositions(sortedRace);
      } else {
        setRacePositions(newRace);
      }
    }, (Math.floor(Math.random() * 7) + 1) * 1000); // 1-7 seconds intervals
  };

  const resetGame = () => {
    setSelectedHorses([]);
    setRaceDuration(null);
    setTrackLength(null);
    setRacePositions([]);
  };

  return (
    <div className="App">
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
                {horse.name}
              </option>
            ))}
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="race-duration-input">Race Duration:</label>
          <input
            id="race-duration-input"
            type="number"
            value={raceDuration / 1000 || ""}
            min={12}
            max={20}
            step={1}
            onChange={(e) => setRaceDuration(e.target.value * 1000)}
          />
          <span>seconds</span>
        </div>
        <div className="input-group">
          <label htmlFor="track-length-input">Track Length:</label>
          <input
            id="track-length-input"
            type="number"
            value={trackLength || ""}
            min={0.625}
            max={2.5}
            step={0.125}
            onChange={(e) => setTrackLength(e.target.value)}
          />
          <span>miles</span>
        </div>
        <button onClick={startRace} disabled={!selectedHorses.length || !raceDuration || !trackLength}>
          Start Race
        </button>
        <button onClick={resetGame}>Reset</button>
        {racePositions.length > 0 && (
          <div className="leaderboard">
            <h2>Final Leaderboard</h2>
            {racePositions.map((horse) => (
              <div key={horse.number} className="horse">
                <img src={horse.gif} alt={horse.name} />
                <div className="info">
                  <h3>{horse.name}</h3>
                  <p>Distance: {horse.distance / 1609} miles</p>
                  <p>Time: {horse.time / 1000} seconds</p>
                  <p>Position: {horse.position}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      );
    };
    
    export default Leaderboard;



// WORKS PERFECTLY  NEED CSS UPGARDED
// import React, { useState, useEffect } from "react";
// import HorseImage from "./images/horse running (1).gif"; // Horse images folder
// import "./Leaderboard.css"; // Leaderboard styles

// const horses = [
//   { name: "Horse 1", number: 1 },
//   { name: "Horse 2", number: 2 },
//   { name: "Horse 3", number: 3 },
//   // ... add more horses here
// ];

// const Leaderboard = () => {
//   const [selectedHorses, setSelectedHorses] = useState([]);
//   const [raceDuration, setRaceDuration] = useState(null);
//   const [trackLength, setTrackLength] = useState(null);
//   const [racePositions, setRacePositions] = useState([]);

//   // Generate a random duration time and track length for each race
//   useEffect(() => {
//     const duration = (Math.floor(Math.random() * 8) + 12) * 1000; // 12-20 seconds intervals
//     const length = (Math.floor(Math.random() * 16) + 5) * 0.125; // 0.625-2.5 miles intervals
//     setRaceDuration(duration);
//     setTrackLength(length);
//   }, []);

//   // Start the race and update horse positions every 1-7 seconds
//   const startRace = () => {
//     // Create a new race with selected horses
//     const race = selectedHorses.map((horse) => ({
//       ...horse,
//       time: 0,
//       distance: 0,
//       position: 0,
//     }));

//     // Update horse positions every 1-7 seconds
//     const interval = setInterval(() => {
//       const newRace = [...race];
//       newRace.forEach((horse) => {
//         // Update horse distance based on their speed
//         horse.distance += Math.floor(Math.random() * 10) + 10;

//         // Update horse time in milliseconds
//         horse.time += 100;

//         // Update horse position based on their distance
//         const position =
//           newRace.filter((h) => h.distance > horse.distance).length + 1;
//         horse.position = position;
//       });

//       // Check if the race is over
//       if (race.some((horse) => horse.distance >= trackLength * 1609)) {
//         clearInterval(interval);

//         // Sort the race by finishing time
//         const sortedRace = [...race].sort((a, b) => a.time - b.time);

//         // Update race positions state variable
//         setRacePositions(sortedRace);
//       } else {
//         // Update race positions state variable
//         setRacePositions(newRace);
//       }
//     }, (Math.floor(Math.random() * 7) + 1) * 1000); // 1-7 seconds intervals
//   };

//   // Reset the game to its initial state
//   const resetGame = () => {
//     setSelectedHorses([]);
//     setRaceDuration(null);
//     setTrackLength(null);
//     setRacePositions([]);
//   };

//   return (
//     <div className="leaderboard">
//       <h1>Horse Racing Leaderboard</h1>

//       <div className="input-group">
//         <label htmlFor="horse-select">Select Horses:</label>
//         <select
//           id="horse-select"
//           multiple
//           value={selectedHorses.map((horse) => horse.number)}
//           onChange={(e) =>
//             setSelectedHorses(
//               Array.from(e.target.selectedOptions, (option) =>
//                 horses.find((horse) => horse.number === Number(option.value))
//               )
//             )
//           }
//         >
//           {horses.map((horse) => (
// <option key={horse.number} value={horse.number}>
// {horse.name} ({horse.number})
// </option>
// ))}
// </select>
// </div>
// <button onClick={startRace}>Start Game</button>
//   <button onClick={resetGame}>Reset Game</button>

//   {raceDuration && trackLength && (
//     <div className="race-info">
//       <p>Race Duration: {raceDuration / 1000} seconds</p>
//       <p>Track Length: {trackLength} miles</p>
//     </div>
//   )}

//   <div className="race-track">
//     {racePositions.map((horse) => (
//       <div
//         key={horse.number}
//         className={`horse horse-${horse.number}`}
//         style={{ left: `${(horse.distance / trackLength / 1609) * 100}%` }}
//       >
//         <img src={HorseImage[`horse${horse.number}`]} alt={`Horse ${horse.number}`} />
//         <p>#{horse.number}</p>
//         {horse.position === 1 && <span className="finish-line">Finish Line</span>}
//       </div>
//     ))}
//   </div>

//   {racePositions.length > 0 && (
//     <table>
//       <thead>
//         <tr>
//           <th>Position</th>
//           <th>Name</th>
//           <th>Number</th>
//           <th>Time</th>
//           <th>Distance</th>
//         </tr>
//       </thead>
//       <tbody>
//         {racePositions.map((horse, index) => (
//           <tr key={horse.number}>
//             <td>{index + 1}</td>
//             <td>{horse.name}</td>
//             <td>{horse.number}</td>
//             <td>{horse.time / 1000} seconds</td>
//             <td>{horse.distance / 1609} miles</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   )}
// </div>

// );
// };

// export default Leaderboard;




//  works good start
//import React, { useState, useEffect } from 'react';
// import './Leaderboard.css';

// const Leaderboard = () => {
//   const [horses, setHorses] = useState([]);
//   const [raceTime, setRaceTime] = useState(0);
//   const [raceStarted, setRaceStarted] = useState(false);
//   const [raceDistance, setRaceDistance] = useState(0);
//   const [winner, setWinner] = useState('');

//   const handleStartRace = () => {
//     setRaceStarted(true);
//     setRaceTime(0);
//     setRaceDistance(generateRandomDistance());
//     setHorses(generateRandomHorses());
//   };

//   const handleResetRace = () => {
//     setRaceStarted(false);
//     setRaceTime(0);
//     setRaceDistance(0);
//     setHorses([]);
//     setWinner('');
//   };

//   const generateRandomDistance = () => {
//     // Generate a random distance between 0.6 and 2.5 miles
//     const min = 0.6;
//     const max = 2.5;
//     const step = 0.125;
//     const distance = Math.floor(Math.random() * ((max - min) / step + 1)) * step + min;
//     return distance;
//   };

//   const generateRandomHorses = () => {
//     // Generate an array of 30 horses with random speeds
//     const numHorses = 30;
//     const horses = [];
//     for (let i = 1; i <= numHorses; i++) {
//       horses.push({
//         id: i,
//         name: `Horse ${i}`,
//         position: 0,
//         speed: Math.floor(Math.random() * 10) + 1 // Generate a random speed between 1 and 10
//       });
//     }
//     return horses;
//   };

//   useEffect(() => {
//     let intervalId;
//     if (raceStarted) {
//       intervalId = setInterval(() => {
//         // Update the position of each horse based on their speed and the race time
//         const updatedHorses = horses.map(horse => {
//           const newPosition = horse.speed * raceTime / 100; // Assuming 1 second = 100ms
//           return {
//             ...horse,
//             position: newPosition
//           };
//         });
//         // Check if any horse has crossed the finish line
//         const crossedFinishLine = updatedHorses.filter(horse => horse.position >= raceDistance);
//         if (crossedFinishLine.length > 0) {
//           setWinner(crossedFinishLine[0].name);
//           setRaceStarted(false);
//         } else {
//           setHorses(updatedHorses);
//           setRaceTime(raceTime + 100); // Assuming 1 second = 100ms
//         }
//       }, Math.floor(Math.random() * (5000 - 3000 + 1)) + 3000); // Update the horse positions randomly every 3-5 seconds
//     }
//     return () => clearInterval(intervalId);
//   }, [raceStarted, raceTime, raceDistance, horses]);

//   return (
//     <div>
//       <h1>Leaderboard</h1>
//       {!raceStarted && <button onClick={handleStartRace}>Start Race</button>}
//       {raceStarted && <button onClick={handleResetRace}>Reset Race</button>}
//       {raceStarted && <p>Race Time: {raceTime / 1000} seconds</p>}
// {raceStarted && <p>Race Distance: {raceDistance} miles</p>}
// {winner && <p>Winner: {winner}</p>}
// <table>
// <thead>
// <tr>
// <th>Position</th>
// <th>Horse</th>
// <th>Speed</th>
// <th>Distance</th>
// </tr>
// </thead>
// <tbody>
// {horses.map(horse => (
// <tr key={horse.id}>
// <td>{horse.position >= raceDistance ? 'Finished' : horse.position}</td>
// <td>{horse.name}</td>
// <td>{horse.speed}</td>
// <td>{horse.position.toFixed(2)} / {raceDistance}</td>
// </tr>
// ))}
// </tbody>
// </table>
// </div>
// );
// };

// export default Leaderboard;









// Works kind of 
//import React, { useState, useEffect } from "react";
// import "./Leaderboard.css";
// import Horse from './Horse';
// // import Leaderboard from "../modules/SAVE THESE/leaderboard";

// const MIN_RACE_DURATION = 90; // in seconds
// const MAX_RACE_DURATION = 180; // in seconds
// const MIN_TRACK_LENGTH = 0.62; // in miles
// const MAX_TRACK_LENGTH = 2.5; // in miles

// const HORSES = [  
// {name: 'Horse 1', number: 1, image:'./images/horse running (1).gif'},  
// {name: 'Horse 2', number: 2, image:'./images/horse running (2).gif'}, 
// {name: 'Horse 3', number: 3, image:'./images/horse running (3).gif'},
// {name: 'Horse 4', number: 4, image:'./images/horse running (4).gif'},
// {name: 'Horse 5', number: 5, image:'./images/horse running (5).gif'}
// ];

// function Leaderboard() {
//   const [raceDuration, setRaceDuration] = useState(0);
//   const [trackLength, setTrackLength] = useState(0);
//   const [selectedHorses, setSelectedHorses] = useState([]);
//   const [raceStarted, setRaceStarted] = useState(false);
//   const [timer, setTimer] = useState(0);
//   const [winner, setWinner] = useState('');
//   const [horsePositions, setHorsePositions] = useState([]);

//   const generateRandomRace = () => {
//     const duration =
//       Math.floor(Math.random() * (MAX_RACE_DURATION - MIN_RACE_DURATION + 1)) +
//       MIN_RACE_DURATION;
//     setRaceDuration(duration);

//     const length =
//       Math.floor(Math.random() * ((MAX_TRACK_LENGTH - MIN_TRACK_LENGTH) / 0.125 + 1)) *
//         0.125 +
//       MIN_TRACK_LENGTH;
//     setTrackLength(length);

//     const positions = [];
//     for (let i = 0; i < selectedHorses.length; i++) {
//       positions[i] = {
//         horseNumber: selectedHorses[i],
//         position: 0,
//         distance: 0,
//         time: 0,
//       };
//     }
//     setHorsePositions(positions);
//   };

//   const handleSelect = (e) => {
//     const selectedValues = Array.from(e.target.selectedOptions, (option) =>
//       parseInt(option.value)
//     );
//     setSelectedHorses(selectedValues.slice(0, 12));
//   };

//   const handleStartRace = () => {
//     if (selectedHorses.length < 6) {
//       const randomHorses = [];
//       while (randomHorses.length < 6 - selectedHorses.length) {
//         const randomHorse = Math.floor(Math.random() * 30) + 1;
//         if (
//           !randomHorses.includes(randomHorse) &&
//           !selectedHorses.includes(randomHorse)
//         ) {
//           randomHorses.push(randomHorse);
//         }
//       }
//       setSelectedHorses([...selectedHorses, ...randomHorses]);
//     }

//     generateRandomRace();
//     setRaceStarted(true);
//   };

//   const handleReset = () => {
//     setRaceStarted(false);
//     setWinner('');
//     setTimer(0);
//     setSelectedHorses([]);
//     setHorsePositions([]);
//   };

//   const updateHorsePositions = () => {
//     const newPositions = horsePositions.map((position) => {
//       if (position.distance >= trackLength) {
//         return position;
//       }

//       const speed = Math.floor(Math.random() * (10 - 5 + 1)) + 5; // in mph
//       const newDistance =
//         position.distance + (speed / 3600) * 5280 * 5; // in miles
//       const newPosition = Math.floor(newDistance / (trackLength / 5)) + 1;

//       return {
//         ...position,
//         position: newPosition,
//         distance: newDistance,
//         time: position.time + Math.floor(Math.random() * (5 - 1 + 1)) + 1, // in seconds
//       };
//       });
      
//       // sort positions by position in the race
//       newPositions.sort((a, b) => a.position - b.position);
      
//       // check if there is a winner
//       const winningHorse = newPositions.find((position) => position.distance >= trackLength);
//       if (winningHorse) {
//         setRaceStarted(false);
//         setWinner(HORSES.find((horse) => horse.number === winningHorse.horseNumber).name);
//       }
      
//       setHorsePositions(newPositions);
//       };
      
//       if (!raceStarted) {
//       return (
//       <div className="App">
//       <div className="form">
//       <label htmlFor="horses">Select up to 12 horses:</label>
//       <select id="horses" multiple={true} onChange={handleSelect}>
//       {HORSES.map((horse) => (
//       <option key={horse.number} value={horse.number}>
//       {horse.name}
//       </option>
//       ))}
//       </select>
//       <button onClick={handleStartRace}>Start Race</button>
//       <button onClick={handleReset}>Reset</button>
//       </div>
//       </div>
//       );
//       } else {
//       setTimeout(() => {
//       updateHorsePositions();
//       }, 5000);
//       }
      
//       return (
//       <div className="App">
//       <h1>Race Leaderboard</h1>
//       <div className="race-info">
//       <div>
//       <h2>Track Length</h2>
//       <p>{`${trackLength.toFixed(2)} miles`}</p>
//       </div>
//       <div>
//       <h2>Duration</h2>
//       <p>{`${raceDuration} seconds`}</p>
//       </div>
//       <div>
//       <h2>Timer</h2>
//       <p>{`${timer} seconds`}</p>
//       </div>
//       <div>
//       <h2>Winner</h2>
//       <p>{winner ? winner : '-'}</p>
//       </div>
//       </div>
//       <div className="leaderboard">
//       {horsePositions.map((position) => (
//       <Horse
//       key={position.horseNumber}
//       position={position.position}
//       horse={HORSES.find((horse) => horse.number === position.horseNumber)}
//       />
//       ))}
//       </div>
//       </div>
//       );
//       }
      
//       export default Leaderboard;

            



//   WORKS A LITTLE
//import React, { useState, useEffect } from "react"; // import React

// import './Leaderboard.css'; // import css

// function Leaderboard() {
//   const [horses, setHorses] = useState([]); // state for horses
//   const [selectedHorses, setSelectedHorses] = useState([]); // state for selected horses
//   const [raceStarted, setRaceStarted] = useState(false); // state for race started
//   const [timer, setTimer] = useState(0); // state for race timer
//   const [winner, setWinner] = useState(""); // state for winner

//   // Generate random race duration time and track length
//   const raceDuration = Math.floor(Math.random() * (180 - 90 + 1) + 90);
//   const trackLength = Math.floor(Math.random() * (20 - 10 + 1) + 10) / 10;

//   // Generate list of horses with their names and numbers
//   useEffect(() => {
//     const tempHorses = [];
//     for (let i = 1; i <= 30; i++) {
//       const horse = {
//         name: `Horse ${i}`,
//         number: i,
//         position: 0,
//         distance: 0,
//         time: 0,
//       };
//       tempHorses.push(horse);
//     }
//     setHorses(tempHorses);
//   }, [selectedHorses]);

//   // Handle horse selection from dropdown
//   const handleSelect = (e) => {
//     const selectedValues = Array.from(e.target.selectedOptions, (option) =>
//       parseInt(option.value)
//     );
//     setSelectedHorses(selectedValues);
//   };

//   // Handle start race button click
//   const handleStartRace = () => {
//     if (selectedHorses.length < 4) {
//       const randomHorses = [];
//       while (randomHorses.length < 5) {
//         const randomHorse = Math.floor(Math.random() * 30) + 1;
//         if (
//           !randomHorses.includes(randomHorse) &&
//           !selectedHorses.includes(randomHorse)
//         ) {
//           randomHorses.push(randomHorse);
//         }
//       }
//       setSelectedHorses([...selectedHorses, ...randomHorses]);
//     }
//     setRaceStarted(true);
//   };

//   // Handle reset button click
//   const handleReset = () => {
//     setRaceStarted(false);
//     setWinner("");
//     setTimer(0);
//     setSelectedHorses([]);
//     const tempHorses = horses.map((horse) => {
//       return {
//         ...horse,
//         position: 0,
//         distance: 0,
//         time: 0,
//       };
//     });
//     setHorses(tempHorses);
//   };

//   // Update horse positions and distances randomly every 1-7 seconds
//   useEffect(() => {
//     let interval;
//     if (raceStarted) {
//       interval = setInterval(() => {
//         const tempHorses = horses.map((horse) => {
//           if (selectedHorses.includes(horse.number)) {
//             const speed = Math.floor(Math.random() * (10 - 5 + 1) + 5) / 10;
//             const newDistance = horse.distance + speed * trackLength;
//             const newPosition =
//               Math.floor(newDistance / (trackLength * 5)) + 1;
//             const newTime = Math.round(timer * 10) / 10;
//             if (newDistance >= trackLength * 5) {
//               if (newPosition === 1 && winner === "") {
//                 setWinner(horse.name);
//                 }
//                 return {
//                 ...horse,
//                 position: newPosition,
//                 distance: trackLength * 5,
//                 time: newTime,
//                 };
//                 }
//                 return {
//                 ...horse,
//                 position: newPosition,
//                 distance: newDistance,
//                 time: newTime,
//                 };
//                 }
//                 return horse;
//                 });
//                 setHorses(tempHorses);
//                 setTimer(timer + 0.1);
//                 }, Math.floor(Math.random() * (7000 - 1000 + 1) + 1000));
//                 };
//                 return () => clearInterval(interval);
//                 }, [raceStarted, timer, horses, selectedHorses, trackLength, winner]);
                
//                 return (
//                 <div className="leaderboard-container">
//                 <div className="header">
//                 <h1>Virtual Horse Racing</h1>
//                 </div>
//                 <div className="body">
//                 {!raceStarted ? (
//                 <div className="form">
//                 <h2>Select 4 horses to race</h2>
//                 <select
//                            multiple
//                            value={selectedHorses}
//                            onChange={handleSelect}
//                            disabled={raceStarted}
//                          >
//                 {horses.map((horse) => (
//                 <option key={horse.number} value={horse.number}>
//                 {horse.name}
//                 </option>
//                 ))}
//                 </select>
//                 <button onClick={handleStartRace}>Start Race</button>
//                 </div>
//                 ) : (
//                 <div className="race">
//                 <div className="race-details">
//                 <h2>Race in progress</h2>
//                 <p>Duration: {raceDuration} seconds</p>
//                 <p>Track Length: {trackLength * 5} furlongs</p>
//                 <p>Timer: {timer.toFixed(1)} seconds</p>
//                 </div>
//                 <div className="race-track">
//                 {horses
//                 .filter((horse) => selectedHorses.includes(horse.number))
//                 .sort((a, b) => b.position - a.position)
//                 .map((horse) => (
//                 <div
//                 key={horse.number}
//                 className={horse.horse-`${horse.number}`}
//                 style={{
//                 left: `${(horse.position - 1) * 20}%`,
//                 bottom: `${horse.distance * 20}%`,
//                 }}
//                 >
//                 {horse.number}
//                 </div>
//                 ))}
//                 </div>
//                 {winner !== "" && (
//                 <div className="winner">
//                 <h2>The winner is {winner}!</h2>
//                 <button onClick={handleReset}>Reset</button>
//                 </div>
//                 )}
//                 </div>
//                 )}
//                 </div>
//                 </div>
//                 );
//                 }
                
//                 export default Leaderboard;
                
                
                
                
                





//UNKNOWN IF WORKINGG
// import React, { useState, useEffect } from 'react';
// import "./Leaderboard.css";

// function Leaderboard() {
//   const [horses, setHorses] = useState([]);
//   const [selectedHorses, setSelectedHorses] = useState([]);
//   const [raceInProgress, setRaceInProgress] = useState(false);
//   const [raceTime, setRaceTime] = useState(null);
//   const [raceResults, setRaceResults] = useState(null);

//   useEffect(() => {
//     // Generate 4 random horses when component mounts
//     generateHorses(4);
//   }, []);

//   function generateHorses(numHorses) {
//     // Generate random horses
//     const horsesArray = [];
//     const horseNames = ['Thunderbolt', 'Lightning', 'Flash', 'Quickstep', 'Jet', 'Sonic'];
//     for (let i = 0; i < numHorses; i++) {
//       const randomIndex = Math.floor(Math.random() * horseNames.length);
//       const horseName = horseNames.splice(randomIndex, 1);
//       const horse = { name: horseName[0], position: 0 };
//       horsesArray.push(horse);
//     }
//     setHorses(horsesArray);
//   }

//   function handleHorseSelection(horse) {
//     // Toggle horse selection
//     const isSelected = selectedHorses.some((selectedHorse) => selectedHorse.name === horse.name);
//     if (isSelected) {
//       setSelectedHorses(selectedHorses.filter((selectedHorse) => selectedHorse.name !== horse.name));
//     } else {
//       setSelectedHorses([...selectedHorses, horse]);
//     }
//   }

//   function startRace() {
//     setRaceInProgress(true);

//     // Generate random race time between 1 and 3 minutes
//     const raceDuration = Math.floor(Math.random() * 3 + 1);
//     const raceTimeSeconds = raceDuration * 60;

//     // Move horses at random intervals
//     const intervalId = setInterval(() => {
//       const updatedHorses = [...horses];
//       for (let i = 0; i < updatedHorses.length; i++) {
//         const distance = Math.floor(Math.random() * 10 + 1);
//         updatedHorses[i].position += distance;
//       }
//       setHorses(updatedHorses);
//     }, 1000);

//     // Stop race and show results after race time elapses
//     setTimeout(() => {
//       clearInterval(intervalId);
//       setRaceInProgress(false);

//       // Sort horses by position
//       const sortedHorses = horses.sort((a, b) => b.position - a.position);
//       setRaceResults(sortedHorses);

//       // Reset horse positions
//       const resetHorses = horses.map((horse) => ({ ...horse, position: 0 }));
//       setHorses(resetHorses);
//     }, raceTimeSeconds * 1000);

//     // Set race time for display
//     setRaceTime(raceDuration);
//   }

//   function resetGame() {
//     setSelectedHorses([]);
//     setRaceInProgress(false);
//     setRaceTime(null);
//     setRaceResults(null);
//     generateHorses(4);
//   }

//   return (
//     <div className="App">
//       <h1>Horse Racing Game</h1>
//       <p>Select up to 4 horses to race:</p>
//       <div className="horse-selection">
//         {horses.map((horse) => (
//           <div
//             key={horse.name}
//             className={`${selectedHorses.some((selectedHorse) => selectedHorse.name === horse.name) ? 'selected' : ''}`}
//             onClick={() => handleHorseSelection(horse)}
//           >
//             <p>{horse.name}</p>

//             <img src={`images/${horse.name.toLowerCase()}.jpg`} alt={horse.name} />
//       </div>
//     ))}
//   </div>
//   {!raceInProgress && (
//     <button
//       disabled={selectedHorses.length === 0}
//       onClick={startRace}
//     >
//       Start Race
//     </button>
//   )}
//   {raceInProgress && (
//     <div>
//       <p>Race in progress... {raceTime} minutes</p>
//       <div className="track">
//         {horses.map((horse) => (
//           <div
//             key={horse.name}
//             className="horse"
//             style={{ left: `${horse.position}%` }}
//           >
//             <img src={`images/${horse.name.toLowerCase()}.jpg`} alt={horse.name} />
//           </div>
//         ))}
//       </div>
//     </div>
//   )}
//   {raceResults && (
//     <div>
//       <h2>Race Results:</h2>
//       <ol>
//         {raceResults.map((horse, index) => (
//           <li key={horse.name}>
//             <p>{`${index + 1}. ${horse.name}`}</p>
//             <img src={`images/${horse.name.toLowerCase()}.jpg`} alt={horse.name} />
//           </li>
//         ))}
//       </ol>
//       <button onClick={resetGame}>Play Again</button>
//     </div>
//   )}
// </div>


// );
// }

// export default Leaderboard;



// import React, { useState, useEffect } from 'react';
// import "./Leaderboard.css";

// function Leaderboard() {
//   const [horses, setHorses] = useState([]);
//   const [selectedHorses, setSelectedHorses] = useState([]);
//   const [raceInProgress, setRaceInProgress] = useState(false);
//   const [raceTime, setRaceTime] = useState(null);
//   const [raceResults, setRaceResults] = useState(null);

//   useEffect(() => {
//     // Generate 4 random horses when component mounts
//     generateHorses(4);
//   }, []);

//   function generateHorses(numHorses) {
//     // Generate random horses
//     const horsesArray = [];
//     const horseNames = ['Thunderbolt', 'Lightning', 'Flash', 'Quickstep', 'Jet', 'Sonic'];
//     for (let i = 0; i < numHorses; i++) {
//       const randomIndex = Math.floor(Math.random() * horseNames.length);
//       const horseName = horseNames.splice(randomIndex, 1);
//       const horse = { name: horseName, position: 0 };
//       horsesArray.push(horse);
//     }
//     setHorses(horsesArray);
//   }

//   function handleHorseSelection(horse) {
//     // Toggle horse selection
//     const isSelected = selectedHorses.some((selectedHorse) => selectedHorse.name === horse.name);
//     if (isSelected) {
//       setSelectedHorses(selectedHorses.filter((selectedHorse) => selectedHorse.name !== horse.name));
//     } else {
//       setSelectedHorses([...selectedHorses, horse]);
//     }
//   }

//   function startRace() {
//     setRaceInProgress(true);

//     // Generate random race time between 1 and 3 minutes
//     const raceDuration = Math.floor(Math.random() * 3 + 1);
//     const raceTimeSeconds = raceDuration * 60;

//     // Move horses at random intervals
//     const intervalId = setInterval(() => {
//       const updatedHorses = [...horses];
//       for (let i = 0; i < updatedHorses.length; i++) {
//         const distance = Math.floor(Math.random() * 10 + 1);
//         updatedHorses[i].position += distance;
//       }
//       setHorses(updatedHorses);
//     }, 1000);

//     // Stop race and show results after race time elapses
//     setTimeout(() => {
//       clearInterval(intervalId);
//       setRaceInProgress(false);

//       // Sort horses by position
//       const sortedHorses = horses.sort((a, b) => b.position - a.position);
//       setRaceResults(sortedHorses);

//       // Reset horse positions
//       const resetHorses = horses.map((horse) => ({ ...horse, position: 0 }));
//       setHorses(resetHorses);
//     }, raceTimeSeconds * 1000);

//     // Set race time for display
//     setRaceTime(raceDuration);
//   }

//   function resetGame() {
//     setSelectedHorses([]);
//     setRaceInProgress(false);
//     setRaceTime(null);
//     setRaceResults(null);
//     generateHorses(4);
//   }

//   return (
//     <div className="App">
//       <h1>Horse Racing Game</h1>
//       <p>Select up to 4 horses to race:</p>
//       <div className="horse-selection">
//         {horses.map((horse) => (
//           <div
//             key={horse.name}
//             className={horse `${selectedHorses.some((selectedHorse) => selectedHorse.name === horse.name) ? 'selected' : ''}`}
//             onClick={() => handleHorseSelection(horse)}
//             >
//             <p>{horse.name}</p>
//             <p>Position: {horse.position}</p>
//             </div>
//             ))}
//             </div>
//             <button disabled={raceInProgress} onClick={startRace}>
//             {raceInProgress ? 'Race in progress...' : 'Start race'}
//             </button>
//             {raceTime && <p>Race time: {raceTime} minutes</p>}
//             {raceResults && (
//             <>
//             <h2>Race Results</h2>
//             {raceResults.map((horse, index) => (
//             <p key={horse.name}>
//             {index + 1}. {horse.name} - {horse.position} meters
//             </p>
//             ))}
//             <button onClick={resetGame}>Play Again</button>
//             </>
//             )}
//             </div>
//             );
//             }
            
//             export default Leaderboard;
            
          

//    GOOD CODE
// import React, { useState, useEffect } from 'react';
// import { Dropdown, Button, ListGroup, ProgressBar } from 'react-bootstrap';
// import "../components/styles/Leaderboard.css";
  
//   const Leaderboard = () => {

//     // State for horse positions
//     const [positions, setPositions] = useState([1, 2, 3, 4, 5]);
  
//     // State for selected horses
//     const [selectedHorses, setSelectedHorses] = useState([]);
  
//     // State for race clock
//     const [time, setTime] = useState(0);
  
//     // State for race progress bar
//     const [progress, setProgress] = useState(0);
  
//     // State for final race positions
//     const [finalPositions, setFinalPositions] = useState([]);
  
//     // State for game reset
//     const [reset, setReset] = useState(false);
  
//     // Generate random horse names and numbers
//     const horseList = [
//       { name: 'Thunderbolt', number: '1' },
//       { name: 'Lightning', number: '2' },
//       { name: 'Star', number: '3' },
//       { name: 'Comet', number: '4' },
//       { name: 'Blaze', number: '5' },
//       { name: 'Flash', number: '6' },
//       { name: 'Rocket', number: '7' },
//       { name: 'Bolt', number: '8' },
//       { name: 'Speedy', number: '9' },
//       { name: 'Gallop', number: '10' },
//       { name: 'Stride', number: '11' },
//       { name: 'Sprint', number: '12' },
//       { name: 'Dash', number: '13' },
//       { name: 'Runaway', number: '14' },
//       { name: 'Streak', number: '15' },
//     ];
  
//     // Shuffle horse positions randomly every 2-7 seconds
//     useEffect(() => {
//       const interval = setInterval(() => {
//         setPositions(shuffleArray(positions));
//       }, Math.floor(Math.random() * (7000 - 2000 + 1)) + 2000);
//       return () => clearInterval(interval);
//     }, [positions]);
  
//     // Calculate race progress and time
//     useEffect(() => {
//       let length = Math.round(Math.random() * 8) + 16; // Random length between 2 and 4 miles in .125 mile increments
//       let totalTime = length * Math.floor(Math.random() * 6 + 10); // Random time between 10-15 seconds per .125 mile increment
//       let timeLeft = totalTime;
//       let progressPercent = 0;
//       const interval = setInterval(() => {
//         timeLeft -= 100;
//         if (timeLeft <= 0) {
//           setProgress(100);
//           clearInterval(interval);
//           setFinalPositions([...positions]);
//         } else {
//           progressPercent = Math.round(((totalTime - timeLeft) / totalTime) * 100);
//           setProgress(progressPercent);
//           setTime((totalTime - timeLeft) / 1000);
//         }
//       }, 100);
//       return () => clearInterval(interval);
//     }, [positions]);
  
//     // Function to shuffle an array randomly
//     const shuffleArray = (arr) => {
//       let shuffledArr = [...arr];
//       for (let i = shuffledArr.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
//       }
//       return shuffledArr;
//     }
//   // Render function
//   return (
//   <div>
//   <h1>Horse Race</h1>
//   <Dropdown>
//   <Dropdown.Toggle variant="primary" id="dropdown-basic">
//   Select Horses
//   </Dropdown.Toggle>
//       <Dropdown.Menu>
//         {horseList.map((horse) => (
//           <Dropdown.Item
//             key={horse.number}
//             onClick={() =>
//               setSelectedHorses((prevHorses) => [...prevHorses, horse])
//             }
//           >
//             {horse.name}
//           </Dropdown.Item>
//         ))}
//       </Dropdown.Menu>
//     </Dropdown>
//     <Button
//       variant="danger"
//       onClick={() => {
//         setReset(true);
//         setPositions(shuffleArray(positions));
//         setSelectedHorses([]);
//         setTime(0);
//         setProgress(0);
//         setFinalPositions([]);
//         setTimeout(() => {
//           setReset(false);
//         }, 500);
//       }}
//     >
//       Reset Game
//     </Button>
//     <ListGroup>
//       {positions.map((position, index) => (
//         <ListGroup.Item key={position}>
//           <strong>{`#${position} - ${
//             selectedHorses.length > 0 ? selectedHorses[index]?.name : ''
//           }`}</strong>
//         </ListGroup.Item>
//       ))}
//     </ListGroup>
//     <ProgressBar now={progress} label={`${progress}%`} />
//     <p>Race Time: {time.toFixed(1)} seconds</p>
//     {finalPositions.length > 0 && (
//       <div>
//         <h2>Race Results</h2>
//         <ListGroup>
//           {finalPositions.map((position, index) => (
//             <ListGroup.Item key={position}>
//               <strong>{`#${position} - ${
//                 selectedHorses.length > 0 ? selectedHorses[index]?.name : ''
//               }`}</strong>
//             </ListGroup.Item>
//           ))}
//         </ListGroup>
//       </div>
//     )}
//   </div>
//   );
//   };
  
// export default Leaderboard;



//GOOD CODE
// import React, { useState, useEffect } from 'react';
// import { Dropdown, Button, ListGroup, ProgressBar } from 'react-bootstrap';
// import "../components/styles/Leaderboard.css"

// const Leaderboard = () => {
//   // State for horse positions
//   const [positions, setPositions] = useState([1, 2, 3, 4, 5]);

//   // State for selected horse
//   const [selectedHorse, setSelectedHorse] = useState('');

//   // State for race clock
//   const [time, setTime] = useState(0);

//   // State for race progress bar
//   const [progress, setProgress] = useState(0);

//   // State for final race positions
//   const [finalPositions, setFinalPositions] = useState([]);

//   // Generate random horse names and numbers
//   const horseList = [    { name: 'Thunderbolt', number: '1' },    { name: 'Lightning', number: '2' },    { name: 'Star', number: '3' },    { name: 'Comet', number: '4' },    { name: 'Blaze', number: '5' },    { name: 'Flash', number: '6' },    { name: 'Rocket', number: '7' },    { name: 'Bolt', number: '8' },    { name: 'Speedy', number: '9' },    { name: 'Gallop', number: '10' },    { name: 'Stride', number: '11' },    { name: 'Sprint', number: '12' },    { name: 'Dash', number: '13' },    { name: 'Runaway', number: '14' },    { name: 'Streak', number: '15' },  ];

//   // Shuffle horse positions randomly every 2-7 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPositions(shuffleArray(positions));
//     }, Math.floor(Math.random() * (7000 - 2000 + 1)) + 2000);
//     return () => clearInterval(interval);
//   }, [positions]);

//   // Calculate race progress and time
//   useEffect(() => {
//     let length = Math.round(Math.random() * 16) + 8; // Random length between 1 and 3 miles in .125 mile increments
//     let totalTime = length * Math.floor(Math.random() * 6 + 10); // Random time between 10-15 seconds per .125 mile increment
//     let timeLeft = totalTime;
//     let progressPercent = 0;
//     const interval = setInterval(() => {
//       timeLeft -= 100;
//       if (timeLeft <= 0) {
//         setProgress(100);
//         clearInterval(interval);
//         setFinalPositions([...positions]);
//       } else {
//         progressPercent = Math.round(((totalTime - timeLeft) / totalTime) * 100);
//         setProgress(progressPercent);
//         setTime(timeLeft / 1000);
//       }
//     }, 100);
//     return () => clearInterval(interval);
//   }, [positions]);

//   // Function to shuffle an array randomly
//   const shuffleArray = (arr) => {
//     let shuffledArr = [...arr];
//     for (let i = shuffledArr.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
//     }
//     return shuffledArr;
//   };

//   // Function to handle starting the race
//   const handleStart = () => {
//     setSelectedHorse('');
   
//     // Reset final positions and progress bar
// setFinalPositions([]);
// setProgress(0);

// // Select random horse to focus on
// const randomIndex = Math.floor(Math.random() * horseList.length);
// const selectedHorseName = horseList[randomIndex].name;
// const selectedHorseNumber = horseList[randomIndex].number;
// setSelectedHorse(`${selectedHorseName} (${selectedHorseNumber})`);

// // Reset horse positions to initial order
// setPositions([1, 2, 3, 4, 5]);
// };

// return (
// <div>
// <h1>Horse Race</h1>
// <Button onClick={handleStart}>Start Race</Button>
// <Dropdown>
// <Dropdown.Toggle variant="success" id="dropdown-basic">
// Select Horse
// </Dropdown.Toggle>
// <Dropdown.Menu>
// {horseList.map((horse) => (
// <Dropdown.Item key={horse.number} onClick={() => setSelectedHorse(`${horse.name}`(`${horse.number}`))}>
// {horse.name} ({horse.number})
// </Dropdown.Item>
// ))}
// </Dropdown.Menu>
// </Dropdown>
// <h3>Selected Horse: {selectedHorse}</h3>
// <ProgressBar now={progress} label={`${time.toFixed(2)}s`} />
// <ListGroup>
// {positions.map((position, index) => (
// <ListGroup.Item key={index}>
// #{position} - {horseList[index].name} ({horseList[index].number})
// </ListGroup.Item>
// ))}
// </ListGroup>
// {finalPositions.length > 0 && (
// <div>
// <h3>Final Positions</h3>
// <ListGroup>
// {finalPositions.map((position, index) => (
// <ListGroup.Item key={index}>
// #{position} - {horseList[index].name} ({horseList[index].number})
// </ListGroup.Item>
// ))}
// </ListGroup>
// </div>
// )}
// </div>
// );
// };

    
// export default Leaderboard;








// import React, { useState, useEffect } from "react";
// import "../components/styles/Leaderboard.css"
// const Leaderboard = () => {
//   const [horses, setHorses] = useState([]);
//   const [selectedHorses, setSelectedHorses] = useState([]);
//   const [raceStarted, setRaceStarted] = useState(false);
//   const [raceClock, setRaceClock] = useState(0);
//   const [raceDuration, setRaceDuration] = useState(0);

//   useEffect(() => {
//     const horseNames = [
//       "Thunderbolt",
//       "Black Jack",
//       "Lightning",
//       "Galloping Ghost",
//       "Pegasus",
//       "Wildfire",
//       "Sprinter",
//       "Gold Rush",
//       "Thunderstorm",
//       "Majestic",
//       "Bolt",
//       "Flash",
//       "Blaze",
//       "Champion",
//       "Rocket"
//     ];

//     const horses = horseNames.map((name, index) => ({
//       id: index,
//       name,
//       position: 0
//     }));

//     setHorses(horses);
//     setSelectedHorses(horses);
//   }, []);

//   const selectHorses = (event) => {
//     const selected = Array.from(event.target.selectedOptions, (option) => option.value);
//     const selectedHorses = horses.filter((horse) => selected.includes(horse.name));
//     setSelectedHorses(selectedHorses);
//   };

//   const startRace = () => {
//     setRaceStarted(true);
//     const raceDuration = Math.floor(Math.random() * 120) + 60; // race duration between 1 and 3 minutes
//     setRaceDuration(raceDuration);
//     const interval = setInterval(() => {
//       const updatedHorses = selectedHorses.map((horse) => ({
//         ...horse,
//         position: horse.position + Math.floor(Math.random() * 3) - 1 // move up or down by 0-2 positions
//       }));
//       setHorses(updatedHorses);
//       setSelectedHorses(updatedHorses);
//     }, Math.floor(Math.random() * 5000) + 3000); // random interval between 3 and 8 seconds

//     setTimeout(() => {
//       clearInterval(interval);
//       setRaceStarted(false);
//       setSelectedHorses((prevSelected) =>
//         prevSelected.sort((a, b) => b.position - a.position)
//       );
//     }, raceDuration * 1000);
//   };

//   useEffect(() => {
//     let intervalId;
//     if (raceStarted) {
//       intervalId = setInterval(() => {
//         setRaceClock((prevTime) => prevTime + 0.1);
//       }, 100);
//     }
//     return () => clearInterval(intervalId);
//   }, [raceStarted]);

//   return (
//     <div>
//       <h1>Racehorse Leaderboard</h1>
//       {!raceStarted && (
//         <div>
//           <h3>Select horses:</h3>
//           <select multiple onChange={selectHorses}>
//             {horses.map((horse) => (
//               <option key={horse.id} value={horse.name}>
//                 {horse.name}
//               </option>
//             ))}
//           </select>
//           <button onClick={startRace}>Start Race</button>
//         </div>
//       )}
//       {raceStarted && (
//         <div>
//           <h2>Race Clock: {raceClock.toFixed(1)}</h2>
//           <h2>Race Duration: {raceDuration} seconds</h2>
//         </div>
//       )}
//       {selectedHorses.length > 0 && (
//         <table>
//           <thead>
//             <tr>
//               <th>Position</th>
//               <th>Horse</th>
// </tr>
// </thead>
// <tbody>
// {selectedHorses.map((horse, index) => (
// <tr key={horse.id}>
// <td>{index + 1}</td>
// <td>{horse.name}</td>
// </tr>
// ))}
// </tbody>
// </table>
// )}
// </div>
// );
// };

// export default Leaderboard;




// import "../components/styles/Leaderboard.css"

// import React, { useState, useEffect } from 'react';

// const Leaderboard = () => {
//   const [horses, setHorses] = useState([]);
//   const [selectedHorses, setSelectedHorses] = useState([]);
//   const [raceClock, setRaceClock] = useState(0);
//   const [raceStarted, setRaceStarted] = useState(false);
//   const [raceLength, setRaceLength] = useState(0);
//   const [winner, setWinner] = useState('');

//   useEffect(() => {
//     const horseNames = ['Thunderbolt', 'Black Jack', 'Lightning', 'Galloping Ghost', 'Pegasus', 'Wildfire', 'Sprinter', 'Gold Rush', 'Thunderstorm', 'Majestic'];
//     const selectedHorses = [];
//     for (let i = 1; i <= 10; i++) {
//       const horse = {
//         number: i,
//         name: horseNames[Math.floor(Math.random() * horseNames.length)],
//         position: 0
//       };
//       selectedHorses.push(horse);
//     }
//     setHorses(selectedHorses);
//     setSelectedHorses(selectedHorses);
//   }, []);

//   const selectHorses = (event) => {
//     const selected = Array.from(event.target.selectedOptions, option => option.value);
//     const selectedHorses = horses.filter(horse => selected.includes(horse.name));
//     setSelectedHorses(selectedHorses);
//   }

//   const startRace = () => {
//     setRaceStarted(true);
//     const raceLength = (Math.floor(Math.random() * 16) + 8) / 8; // select race length between 1 and 3 miles
//     setRaceLength(raceLength);
//     let time = 0;
//     const raceInterval = setInterval(() => {
//       time += (Math.floor(Math.random() * 6) + 2); // random time between 10-15 seconds per .125 mile length of track
//       const updatedHorses = selectedHorses.map(horse => {
//         const newPos = horse.position + Math.floor(Math.random() * 5) + 1; // random position change between 1-5
//         return {
//           ...horse,
//           position: newPos
//         };
//       });
//       setHorses(updatedHorses);
//       setSelectedHorses(updatedHorses);
//       if (updatedHorses.some(horse => horse.position >= raceLength)) {
//         clearInterval(raceInterval);
//         const winningHorse = updatedHorses.find(horse => horse.position >= raceLength);
//         setWinner(winningHorse);
//       }
//     }, time * 1000);
//   };

//   useEffect(() => {
//     if (raceStarted) {
//       const interval = setInterval(() => {
//         setRaceClock(prev => prev + 0.1);
//       }, 100);
//       return () => clearInterval(interval);
//     }
//   }, [raceStarted]);

//   return (
//     <div>
//       <h1>Horse Race Leaderboard</h1>
//       {!raceStarted && (
//         <div>
//           <h3>Select horses:</h3>
//           <select multiple onChange={selectHorses}>
//             {horses.map(horse => (
//               <option key={horse.number} value={horse.name}>{horse.name} (Horse {horse.number})</option>
//             ))}
//           </select>
//           <button onClick={startRace}>Start Race</button>
//         </div>
//       )}
//       {raceStarted && (
//         <div>
//           <h2>Race Clock: {raceClock.toFixed(1)}</h2>
//           <h2>Race Length: {raceLength.toFixed(2)} miles</h2>
//           <table>

//         <thead>

//           <tr>
//             <th>Position</th>
//             <th>Horse Number</th>
//             <th>Horse Name</th>
//           </tr>
//         </thead>
//         <tbody>
//           {selectedHorses.sort((a, b) => b.position - a.position).map((horse, index) => (
//             <tr key={horse.number}>
//               <td>{index + 1}</td>
//               <td>{horse.number}</td>
//               <td>{horse.name}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {winner && (
//         <h2>The winner is Horse {winner.number} ({winner.name})!</h2>
//       )}
//     </div>
//   )}
// </div>
// );
// };


// export default Leaderboard;


// import React, { useState, useEffect } from 'react';
// import "../components/styles/Leaderboard.css"

// const Leaderboard = () => {
//   const [horses, setHorses] = useState([]);
//   const [raceClock, setRaceClock] = useState(0);
//   const [raceStarted, setRaceStarted] = useState(false);
//   const [raceLength, setRaceLength] = useState(0);
//   const [winner, setWinner] = useState('');

//   useEffect(() => {
//     const horseNames = ['Thunderbolt', 'Black Jack', 'Lightning', 'Galloping Ghost', 'Pegasus', 'Wildfire', 'Sprinter', 'Gold Rush', 'Thunderstorm', 'Majestic'];
//     const selectedHorses = [];
//     for (let i = 1; i <= 10; i++) {
//       const horse = {
//         number: i,
//         name: horseNames[Math.floor(Math.random() * horseNames.length)],
//         position: 0
//       };
//       selectedHorses.push(horse);
//     }
//     setHorses(selectedHorses);
//   }, []);

//   const selectHorses = (event) => {
//     const selected = Array.from(event.target.selectedOptions, option => option.value);
//     const selectedHorses = horses.filter(horse => selected.includes(horse.name));
//     setHorses(selectedHorses);
//   }

//   const startRace = () => {
//     setRaceStarted(true);
//     const raceLength = (Math.floor(Math.random() * 16) + 8) / 8; // select race length between 1 and 3 miles
//     setRaceLength(raceLength);
//     let time = 0;
//     const raceInterval = setInterval(() => {
//       time += (Math.floor(Math.random() * 6) + 2); // random time between 10-15 seconds per .125 mile length of track
//       const updatedHorses = horses.map(horse => {
//         const newPos = horse.position + Math.floor(Math.random() * 5) + 1; // random position change between 1-5
//         return {
//           ...horse,
//           position: newPos
//         };
//       });
//       setHorses(updatedHorses);
//       if (updatedHorses.some(horse => horse.position >= raceLength)) {
//         clearInterval(raceInterval);
//         const winningHorse = updatedHorses.find(horse => horse.position >= raceLength);
//         setWinner(winningHorse.name);
//       }
//     }, time * 1000);
//   };

//   useEffect(() => {
//     if (raceStarted) {
//       const interval = setInterval(() => {
//         setRaceClock(prev => prev + 0.1);
//       }, 100);
//       return () => clearInterval(interval);
//     }
//   }, [raceStarted]);

//   return (
//     <div>
//       <h1>Horse Race Leaderboard</h1>
//       {!raceStarted && (
//         <div>
//           <h3>Select horses:</h3>
//           <select multiple onChange={selectHorses}>
//             {horses.map(horse => (
//               <option key={horse.number} value={horse.name}>{horse.name} (Horse {horse.number})</option>
//             ))}
//           </select>
//           <button onClick={startRace}>Start Race</button>
//         </div>
//       )}
//       {raceStarted && (
//         <div>
//           <h2>Race Clock: {raceClock.toFixed(1)}</h2>
//           <h2>Race Length: {raceLength.toFixed(2)} miles</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>Horse Number</th>
//                 <th>Horse Name</th>
//                 <th>Position
// </th>
//               </tr>
//             </thead>
//             <tbody>
//               {horses.map(horse => (
//                 <tr key={horse.number}>
//                   <td>{horse.number}</td>
//                   <td>{horse.name}</td>
//                   <td>{horse.position.toFixed(2)}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//       {winner && (
//         <div>
//           <h2>The winner is: {winner}!</h2>
//           <button onClick={() => window.location.reload()}>Start Over</button>
//         </div>
//       )}
//     </div>
//   );
// };
// export default Leaderboard;












// import React, { useState, useEffect } from 'react';
// import "../components/styles/Leaderboard.css";

// const Leaderboard = () => {
//   const [horses, setHorses] = useState([]);
//   const [trackLength, setTrackLength] = useState(0);
//   const [clockTime, setClockTime] = useState(0);
//   const [raceTime, setRaceTime] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);

//   const MIN_TRACK_LENGTH = 8;
//   const MAX_TRACK_LENGTH = 24;
//   const INTERVAL_MIN = 2000;
//   const INTERVAL_MAX = 7000;
//   const HORSE_NAMES = [
//     'Thunder',
//     'Lightning',
//     'Stardust',
//     'Gallop',
//     'Speedy',
//     'Galloping',
//     'Stormy',
//     'Flash',
//     'Swift',
//     'Dashing',
//     'Quick',
//     'Rapid',
//     'Blaze',
//     'Fire',
//     'Comet',
//     'Meteor',
//     'Eclipse',
//     'Shadow',
//     'Phantom',
//     'Spirit',
//   ];

//   useEffect(() => {
//     if (isRunning) {
//       const intervalId = setInterval(updateLeaderboard, getRandomInterval());
//       return () => clearInterval(intervalId);
//     }
//   }, [isRunning]);

//   const getRandomInterval = () => {
//     return Math.floor(Math.random() * (INTERVAL_MAX - INTERVAL_MIN) + INTERVAL_MIN);
//   };

//   const updateLeaderboard = () => {
//     const newHorses = horses.map((horse) => {
//       const distance = horse.distance + getRandomDistance();
//       const time = (distance / trackLength) * raceTime;
//       return { ...horse, distance, time };
//     });

//     newHorses.sort((a, b) => b.distance - a.distance);
//     setHorses(newHorses);

//     const elapsedTime = (Date.now() - clockTime) / 1000;
//     setRaceTime(elapsedTime);
//   };

//   const getRandomDistance = () => {
//     return Math.floor(Math.random() * 8 + 1) / 8;
//   };

//   const getRandomHorseName = () => {
//     const randomIndex = Math.floor(Math.random() * HORSE_NAMES.length);
//     return HORSE_NAMES[randomIndex];
//   };

//   const handleStartRace = () => {
//     const newHorses = [];
//     const numHorses = parseInt(prompt('Enter the number of horses:'), 10);
//     for (let i = 1; i <= numHorses; i++) {
//       const horseName = getRandomHorseName() + ' ' + i;
//       newHorses.push({ name: horseName, distance: 0, time: 0 });
//     }
//     setHorses(newHorses);

//     const trackLength = Math.floor(Math.random() * (MAX_TRACK_LENGTH - MIN_TRACK_LENGTH + 1) + MIN_TRACK_LENGTH) / 8;
//     setTrackLength(trackLength);

//     setClockTime(Date.now());
//     setRaceTime(0);

//     setIsRunning(true);
//   };

//   const renderHorseRow = (horse, index) => {
//     return (
//       <tr key={index}>
//         <td>{index + 1}</td>
//         <td>{horse.name}</td>
//         <td>{horse.distance.toFixed(2)}</td>
//         <td>{horse.time.toFixed(2)}</td>
//       </tr>
//     );
//   };

//   return (
//     <div>
//       <h1>Horse Race Leaderboard</h1>
//       <button onClick={handleStartRace} disabled={isRunning}>
//         Start Race   </button>
//   {isRunning && (
//     <div>
//       <h2>Track Length: {trackLength.toFixed(2)} miles</h2>
//       <h2>Current Race Time: {raceTime.toFixed(2)} seconds</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Position</th>
//             <th>Horse Name</th>
//             <th>Distance (miles)</th>
//             <th>Time (seconds)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {horses.map(renderHorseRow)}
//         </tbody>
//       </table>
//     </div>
//   )}
// </div>
// );
// };

// export default Leaderboard;






// import React, { useState, useEffect } from 'react';
// import Horse from './Horse';

// import "../components/styles/Leaderboard.css";

// const HORSES = [  { name: 'Thunderbolt', number: 1 },  { name: 'Lightning', number: 2 },  { name: 'Black Beauty', number: 3 },  { name: 'Pegasus', number: 4 },  { name: 'Spirit', number: 5 },  { name: 'Seabiscuit', number: 6 },  { name: 'Secretariat', number: 7 },  { name: 'War Admiral', number: 8 },  { name: 'American Pharoah', number: 9 },  { name: 'Man o\' War', number: 10 },  { name: 'Seattle Slew', number: 11 },  { name: 'Affirmed', number: 12 },  { name: 'Citation', number: 13 },  { name: 'Count Fleet', number: 14 },  { name: 'Whirlaway', number: 15 },  { name: 'Gallant Fox', number: 16 },  { name: 'Omaha', number: 17 },  { name: 'Sir Barton', number: 18 },  { name: 'Assault', number: 19 },  { name: 'Bold Venture', number: 20 },  { name: 'Genuine Risk', number: 21 },  { name: 'Majestic Prince', number: 22 },  { name: 'Northern Dancer', number: 23 },  { name: 'Riva Ridge', number: 24 },  { name: 'Swaps', number: 25 },  { name: 'Tiznow', number: 26 },  { name: 'Tomy Lee', number: 27 },  { name: 'War Emblem', number: 28 },  { name: 'Winning Colors', number: 29 },  { name: 'Zenyatta', number: 30 },];

// const randomTrackLength = () => {
//   const min = 1.125;
//   const max = 2.875;
//   const increment = 0.125;
//   const length = Math.floor(Math.random() * ((max - min) / increment + 1)) * increment + min;
//   return length;
// };

// const randomRaceTime = (trackLength) => {
//   const minTime = 10;
//   const maxTime = 15;
//   const timePerIncrement = Math.random() * (maxTime - minTime) + minTime;
//   const raceTime = trackLength * timePerIncrement;
//   return raceTime;
// };

// const Leaderboard = () => {
//   const [horses, setHorses] = useState([]);
//   const [trackLength, setTrackLength] = useState(0);
//   const [raceTime, setRaceTime] = useState(0);
//   const [startTime, setStartTime] = useState(null);
//   const [currentTime, setCurrentTime] = useState(0);

//   useEffect(() => {
//     const horsePositions = HORSES.map((horse) => ({
//       ...horse,
//       position: Math.random() * trackLength,
//     }));
//     setHorses(horsePositions);
//   }, [trackLength]);

//   const handleStartRace = () => {
//     const trackLength = randomTrackLength();
//     setTrackLength(trackLength);

//     const raceTime = randomRaceTime(trackLength);
//     setRaceTime(raceTime);

//     setStartTime(Date.now());

//     setCurrentTime(0);
//     };
    
//     useEffect(() => {
//         if (startTime) {
//         const interval = setInterval(() => {
//         setCurrentTime(Date.now() - startTime);
//         }, 10);

//         return () => clearInterval(interval);
//     }
//     }, [startTime]);
    
//     return (
//     <div>
//     <h1>Horse Racing Simulator</h1>
//     <button onClick={handleStartRace}>Start Race</button>
//     <p>Track length: {trackLength} miles</p>
//     <p>Race time: {raceTime.toFixed(2)} seconds</p>
//     <p>Current time: {(currentTime / 1000).toFixed(2)} seconds</p>
//     <div className="race-track">
//     {horses.map((horse) => (
//     <Horse key={horse.number} horse={horse} trackLength={trackLength} raceTime={raceTime} currentTime={currentTime} />
//     ))}
//     </div>
//     <Leaderboard horses={horses} />
//     </div>
//     );
//     };
    
//     export default Leaderboard;






// import React, { useState, useEffect } from 'react';
// import "../components/styles/Leaderboard.css";

// const Leaderboard = () => {
//   const [horses, setHorses] = useState([]);
//   const [trackLength, setTrackLength] = useState(0);
//   const [clockTime, setClockTime] = useState(0);
//   const [raceTime, setRaceTime] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);

//   const MIN_TRACK_LENGTH = 8;
//   const MAX_TRACK_LENGTH = 24;
//   const INTERVAL_MIN = 2000;
//   const INTERVAL_MAX = 7000;
//   const HORSE_NAMES = [
//     'Thunder',
//     'Lightning',
//     'Stardust',
//     'Gallop',
//     'Speedy',
//     'Galloping',
//     'Stormy',
//     'Flash',
//     'Swift',
//     'Dashing',
//     'Quick',
//     'Rapid',
//     'Blaze',
//     'Fire',
//     'Comet',
//     'Meteor',
//     'Eclipse',
//     'Shadow',
//     'Phantom',
//     'Spirit',
//   ];

//   useEffect(() => {
//     if (isRunning) {
//       const intervalId = setInterval(updateLeaderboard, getRandomInterval());
//       return () => clearInterval(intervalId);
//     }
//   }, [isRunning]);

//   const getRandomInterval = () => {
//     return Math.floor(Math.random() * (INTERVAL_MAX - INTERVAL_MIN) + INTERVAL_MIN);
//   };

//   const updateLeaderboard = () => {
//     const newHorses = horses.map((horse) => {
//       const distance = horse.distance + getRandomDistance();
//       const time = (distance / trackLength) * raceTime;
//       return { ...horse, distance, time };
//     });

//     newHorses.sort((a, b) => b.distance - a.distance);
//     setHorses(newHorses);

//     const elapsedTime = (Date.now() - clockTime) / 1000;
//     setRaceTime(elapsedTime);
//   };

//   const getRandomDistance = () => {
//     return Math.floor(Math.random() * 8 + 1) / 8;
//   };

//   const getRandomHorseName = () => {
//     const randomIndex = Math.floor(Math.random() * HORSE_NAMES.length);
//     return HORSE_NAMES[randomIndex];
//   };

//   const handleStartRace = () => {
//     const newHorses = [];
//     const numHorses = parseInt(prompt('Enter the number of horses:'), 10);
//     for (let i = 1; i <= numHorses; i++) {
//       const horseName = getRandomHorseName() + ' ' + i;
//       newHorses.push({ name: horseName, distance: 0, time: 0 });
//     }
//     setHorses(newHorses);

//     const trackLength = Math.floor(Math.random() * (MAX_TRACK_LENGTH - MIN_TRACK_LENGTH + 1) + MIN_TRACK_LENGTH);
//     setTrackLength(trackLength);

//     setClockTime(Date.now());
//     setRaceTime(0);

//     setIsRunning(true);
//   };

//   const renderHorseRow = (horse, index) => {
//     return (
//       <tr key={index}>
//         <td>{horse.name}</td>
//         {/* <td>{horse.distance.toFixed(2)}</td>
//         <td>{horse.time.toFixed(2)}</td> */}
//       </tr>
//     );
//   };

//   return (
//     <div>
//       <h1>Horse Race Leaderboard</h1>
//       <button onClick={handleStartRace} disabled={isRunning}>
//         Start Race
//       </button>
//       {isRunning && (
       
// <>
// <h2>Track Length: {trackLength} miles</h2>
// <h2>Race Time: {raceTime.toFixed(2)} seconds</h2>
// <table>
// <thead>
// <tr>
// <th>Horse</th>
// <th>Distance</th>
// <th>Time</th>
// </tr>
// </thead>
// <tbody>
// {horses.map((horse, index) => renderHorseRow(horse, index))}
// </tbody>
// </table>
// </>
// )}
// </div>
// );
// };

// export default Leaderboard;




    
    //   const [trackLength, setTrackLength] = useState(2); // track length in 1/8 mile increments
    //   const [numHorses, setNumHorses] = useState(6);
    //   const [horseNames, setHorseNames] = useState(['Horse 1', 'Horse 2', 'Horse 3', 'Horse 4', 'Horse 5', 'Horse 6']);
    //   const [raceStarted, setRaceStarted] = useState(false);
    //   const [raceTime, setRaceTime] = useState(0);
    //   const [raceDuration, setRaceDuration] = useState(20); // default duration in seconds
    //   const [horsePositions, setHorsePositions] = useState(Array(numHorses).fill(0));
    
    //   const timerRef = useRef(null);
    
    //   useEffect(() => {
    //     if (raceStarted) {
    //       const interval = setInterval(() => {
    //         const newPositions = horsePositions.map((position, index) => {
    //           let newPosition = position + Math.random() * 0.5;
    //           if (newPosition >= trackLength) {
    //             newPosition = trackLength;
    //             setRaceStarted(false);
    //             clearInterval(interval);
    //             clearInterval(timerRef.current);
    //           }
    //           return newPosition;
    //         });
    //         setHorsePositions(newPositions);
    //       }, Math.floor(Math.random() * 5000) + 2000); // update every 2-7 seconds
    //       return () => clearInterval(interval);
    //     }
    //   }, [raceStarted, horsePositions, trackLength]);
    
    //   const handleStartRace = () => {
    //     setRaceStarted(true);
    //     setRaceTime(0);
    //     setHorsePositions(Array(numHorses).fill(0));
    //     setRaceDuration(Math.floor(Math.random() * 11) + 20); // race duration between 20-30 seconds per 1/4 mile
    //     timerRef.current = setInterval(() => {
    //       setRaceTime((time) => time + 0.1);
    //     }, 100);
    //   };
    
    //   const handleTrackLengthChange = (event) => {
    //     setTrackLength(parseInt(event.target.value));
    //   };
    
    //   const handleNumHorsesChange = (event) => {
    //     const newNumHorses = parseInt(event.target.value);
    //     setNumHorses(newNumHorses);
    //     setHorseNames(Array(newNumHorses).fill('').map((_, index) => `Horse ${index + 1}`));
    //     setHorsePositions(Array(newNumHorses).fill(0));
    //   };
    
    //   const handleHorseNameChange = (event, index) => {
    //     const newHorseNames = [...horseNames];
    //     newHorseNames[index] = event.target.value;
    //     setHorseNames(newHorseNames);
    //   };
    
    //   const formatTime = (time) => {
    //     const minutes = Math.floor(time / 60);
    //     const seconds = Math.floor(time % 60);
    //     const milliseconds = Math.floor((time % 1) * 10);
    //     return `${minutes}:${seconds.toString().padStart(2, '0')}.${milliseconds}`;
    //   };
    
    //   const leaderboard = horsePositions
    //     .map((position, index) => ({ name: horseNames[index], position }))
    //     .sort((a, b) => b.position - a.position);
    
    //   return (
    //     <div className="App">
    //       <div className="input-container">
    //         <label>
    //           Track Length (1/8 mile increments):
    //           <input type="number" min="1" max="16
    // " onChange={handleTrackLengthChange} value={trackLength} />
    // </label>
    // <label>
    // Number of Horses:
    // <input type="number" min="1" max="10" onChange={handleNumHorsesChange} value={numHorses} />
    // </label>
    // <label>
    // Race Duration (seconds):
    // <input type="number" min="20" max="30" value={raceDuration} readOnly />
    // </label>
    // <button onClick={handleStartRace} disabled={raceStarted}>
    // {raceStarted ? 'Race in Progress' : 'Start Race'}
    // </button>
    // <div>
    // Race Time: {formatTime(raceTime)}
    // </div>
    // </div>
    // <div className="leaderboard-container">
    // <h2>Horserace Leaderboard</h2>
    // <table>
    // <thead>
    // <tr>
    // <th>Position</th>
    // <th>Name</th>
    // <th>Distance</th>
    // </tr>
    // </thead>
    // <tbody>
    // {leaderboard.map((horse, index) => (
    // <tr key={horse.name}>
    // <td>{index + 1}</td>
    // <td>
    // <input type="text" value={horseNames[index]} onChange={(event) => handleHorseNameChange(event, index)} />
    // </td>
    // <td>{horse.position.toFixed(2)}</td>
    // </tr>
    // ))}
    // </tbody>
    // </table>
    // </div>
    // </div>
    // );
    // };
    
    // export default Leaderboard;




// import React, { useState, useEffect, useRef } from "react";
// import "..//components/styles/Leaderboard.css";

// const Leaderboard = () => {
//   const [trackLength, setTrackLength] = useState(2); // track length in 1/8 mile increments
//   const [numHorses, setNumHorses] = useState(6);
//   const [horseNames, setHorseNames] = useState([
//     "Horse 1",
//     "Horse 2",
//     "Horse 3",
//     "Horse 4",
//     "Horse 5",
//     "Horse 6",
//   ]);
//   const [raceStarted, setRaceStarted] = useState(false);
//   const [raceTime, setRaceTime] = useState(0);
//   const [raceDuration, setRaceDuration] = useState(20); // default duration in seconds
//   const [horsePositions, setHorsePositions] = useState(
//     Array(numHorses).fill(0)
//   );

//   const timerRef = useRef(null);

//   useEffect(() => {
//     if (raceStarted) {
//       const interval = setInterval(() => {
//         const newPositions = horsePositions.map((position, index) => {
//           let newPosition = position + Math.random() * 0.5;
//           if (newPosition >= trackLength) {
//             newPosition = trackLength;
//             setRaceStarted(false);
//             clearInterval(interval);
//             clearInterval(timerRef.current);
//           }
//           return newPosition;
//         });
//         setHorsePositions(newPositions);
//       }, Math.floor(Math.random() * 3000) + 2000); // update every 2-5 seconds
//       return () => clearInterval(interval);
//     }
//   }, [raceStarted, horsePositions, trackLength]);

//   const handleStartRace = () => {
//     setRaceStarted(true);
//     setRaceTime(0);
//     setHorsePositions(Array(numHorses).fill(0));
//     setRaceDuration(Math.floor(Math.random() * 11) + 20); // race duration between 20-30 seconds per 1/4 mile
//     timerRef.current = setInterval(() => {
//       setRaceTime((time) => time + 1);
//     }, 1000);
//   };

//   const handleTrackLengthChange = (event) => {
//     setTrackLength(parseInt(event.target.value));
//   };

//   const handleNumHorsesChange = (event) => {
//     const newNumHorses = parseInt(event.target.value);
//     setNumHorses(newNumHorses);
//     setHorseNames(
//       Array(newNumHorses)
//         .fill("")
//         .map((_, index) => `Horse ${index + 1}`)
//     );
//     setHorsePositions(Array(newNumHorses).fill(0));
//   };

//   const handleHorseNameChange = (event, index) => {
//     const newHorseNames = [...horseNames];
//     newHorseNames[index] = event.target.value;
//     setHorseNames(newHorseNames);
//   };

//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = time % 60;
//     return `${minutes}:${seconds.toString().padStart(2, "0")}`;
//   };

//   const leaderboard = horsePositions
//     .map((position, index) => ({ name: horseNames[index], position }))
//     .sort((a, b) => b.position - a.position);

//   return (
//     <div className="App">
//       <div className="input-section">
//         <label htmlFor="track-length">
//           Track Length (in 1/8 mile increments):{" "}
//         </label>
//         <input
//           type="number"
//           id="track-length"
//           min="1"
//           max="16"
//           value={trackLength}
//           onChange={handleTrackLengthChange}
//         />
//         <br />
//         <label htmlFor="num-horses">Number of Horses: </label>
//         <input
//           type="number"
//           id="num-horses"
//           min="1"
//           max="10"
//           value={numHorses}
//           onChange={handleNumHorsesChange}
//         />
//         <br />
//         <label htmlFor="race-clock">Race Clock: </label>
//         <span>{formatTime(raceTime)}</span>
//         <br />
//         <label htmlFor="race-duration">Race Duration: </label>
//         <span>{raceDuration} seconds</span>
//         <br />
//         <button onClick={handleStartRace} disabled={raceStarted}>
//           Start Race
//         </button>
//       </div>
//       {raceStarted ? (
//         <table>
//           <thead>
//             <tr>
//               <th>Position</th>
//               <th>Name</th>
//               <th>Distance (in 1/8 mile increments)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {leaderboard.map((horse, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>
//                   <input
//                     type="text"
//                     value={horse.name}
//                     onChange={(event) => handleHorseNameChange(event, index)}
//                   />
//                 </td>
//                 <td>{horse.position.toFixed(2)}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <div className="message">Click the Start Race button to begin</div>
//       )}
//     </div>
//   );
// };

// export default Leaderboard;
