// Write comprehensive react.js app named Leaderboard.js with simulated horse race animation using these parameters:
// Horses images will appear on the screen after the Start button is pressed.
// A reset button will reset all values to initialization.
// Horse images move across the screen from far left to edge of the right side
// Horse image movement is a function of the Track Length and Race Duration.
// Horse image reaches the right end of screen as the end of track length is reached.
// At the end of Race Horses do not show on screen.
// Horses Randomly increase or decrease speeds by 0.1 second increments.
// Track Length is generated Randomly = minimum 0.6 miles and maximum 2.6 miles.
// Race Duration Randomly will be a function of the Track length and using 5 second increments.
// Race will Randomly be greater than 30 seconds and less than 120 seconds.
// ADD 1 drop down menu using multiple selection of horses.
// Randomly create Horses greater than 3 and less than 10 total in each race.
// The Stopwatch is displayed in the top right corner of the screen
// The Leaderboard is displayed in the top left corner of the screen.
// The Leaderboard  is a table with rows and columns that maintains statistics about the race.
// The Leaderboard maintains these values -  horse name, horse number, post position, randomly changing racing position, Horse Odds, length of track, race name, Date,  Stopwatch timer 0.1 seconds increments for time of race.
// The Leaderboard displays Before the Race:  Horses Name, Rank, Jockey, Betting odds, owner, trainer.
// The Leaderboard displays after the start button has been pressed:  Horses Name, Current Race Position, Betting Odds, Jockey Name.
// The Leaderboard displays After the Race has ended:  the winning 1st, 2nd, 3rd, 4th horses.
// The 1st winning horse image,  1st winning horse Name,  1st winning horse odds,  1st winning horse Jockey are displayed in the center of the screen.
// using Local Horse Information:
// import React, { useState, useEffect, useRef } from "react";
// import "./Leaderboard.css";
// import Horse1 from './images/horse (1).gif';
// import Horse2 from './images/horse (2).gif';
// import Horse3 from './images/horse (3).gif';
// import Horse4 from './images/horse (4).gif';
// import Horse5 from './images/horse (5).gif';
// import Horse6 from './images/horse (6).gif';
// import Horse7 from './images/horse (7).gif';
// import Horse8 from './images/horse (8).gif';
// import Horse9 from './images/horse (9).gif';
// import Horse10 from './images/horse (10).gif';

// const horses = [
//   { name: 'Secretariat', number: 1, gif: Horse1 },
//   { name: "Man o' War", number: 2, gif: Horse2 },
//   { name: 'Seattle Slew', number: 3, gif: Horse3 },
//   { name: 'Affirmed', number: 4, gif: Horse4 },
//   { name: 'American Pharoah', number: 5, gif: Horse5 },
//   { name: 'Justify', number: 6, gif: Horse6 },
//   { name: 'Citation', number: 7, gif: Horse7 },
//   { name: 'Count Fleet', number: 8, gif: Horse8 },
//   { name: 'Assault', number: 9, gif: Horse9 },
//   { name: 'Whirlaway', number: 10, gif: Horse10 },
// ];
// =========================================================================
// Create the Leaderboard.js app with a simulated horse race animation using the provided parameters, we need to follow these steps:
// Add a component named "Leaderboard" that will contain the main logic of the app.
// Add necessary state variables to the Leaderboard component, such as trackLength, raceDuration, horses, and raceStarted.
// Add a function to generate random values for trackLength, raceDuration, and the number of horses.
// Add a function to initialize the horses with their respective properties such as name, number, gif, odds, jockey, owner, and trainer.
// Add a function to randomly assign values to the horses' properties such as odds, jockey, owner, and trainer.
// Add a function to handle the start button click event, which will set the raceStarted state to true and start the race.
// Add a function to handle the reset button click event, which will reset all values to their initial state.
// Add a function to calculate the position of each horse based on their speed and elapsed time.
// Add a function to sort the horses by their position and update the leaderboard accordingly.
// Add a function to check if the race has ended and display the winning horses.
// Add a stopwatch component to display the elapsed time since the race started.
// Add a dropdown component to allow the user to select multiple horses for betting.
// Render the Leaderboard, Stopwatch, and Dropdown components.
// Add CSS styles to create the horse race animation and the leaderboard table.
// ======================================================================================





import React, { useState, useEffect } from 'react';
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
import './Leaderboard.css';

const horses = [
{
name: 'Secretariat',
number: 1,
gif: Horse1,
},
{
name: "Man o' War",
number: 2,
gif: Horse2,
},
{
name: 'Seattle Slew',
number: 3,
gif: Horse3,
},
{
name: 'Affirmed',
number: 4,
gif: Horse4,
},
{
name: 'American Pharoah',
number: 5,
gif: Horse5,
},
{
name: 'Justify',
number: 6,
gif: Horse6,
},
{
name: 'Citation',
number: 7,
gif: Horse7,
},
{
name: 'Count Fleet',
number: 8,
gif: Horse8,
},
{
name: 'Assault',
number: 9,
gif: Horse9,
},
{
name: 'Whirlaway',
number: 10,
gif: Horse10,
},
];

const Leaderboard = () => {
const [raceTime, setRaceTime] = useState(30); // default race time of 30 seconds
const [raceStarted, setRaceStarted] = useState(false);
const [raceFinished, setRaceFinished] = useState(false);
const [horsesState, setHorsesState] = useState(horses.slice(0, 4).map((horse, index) => ({
...horse,
position: 0,
speed: Math.floor(Math.random() * 10) + 1, // random speed between 1 and 10
distance: 0,
odds: Math.floor(Math.random() * 10) + 1, // random odds between 1 and 10
rank: null,
})));
const [raceDuration, setRaceDuration] = useState(30); // default race duration of 30 seconds
const [selectedHorses, setSelectedHorses] = useState(4); // default number of horses in the race is 4

const startRace = () => {
setRaceStarted(true);
setRaceFinished(false);
setHorsesState(horses.slice(0, selectedHorses).map(horse => ({
...horse,
position: 0,
distance: 0,
rank: null,
speed: Math.floor(Math.random() * 10) + 1, // random speed between 1 and 10
odds: Math.floor(Math.random() * 10) + 1, // random odds between 1 and 10
})));
};

const finishRace = () => {
setRaceStarted(false);
setRaceFinished(true);
};

const restartRace = () => {
  setRaceStarted(false);
  setRaceFinished(false);
  setHorsesState(horses.slice(0, selectedHorses).map(horse => ({
  ...horse,
  position: 0,
  distance: 0,
  rank: null,
  speed: Math.floor(Math.random() * 10) + 1, // random speed between 1 and 10
  odds: Math.floor(Math.random() * 10) + 1, // random odds between 1 and 10
  })));
  };
  
  useEffect(() => {
  let intervalId;
  
  if (raceStarted && !raceFinished) {
  intervalId = setInterval(() => {
  setHorsesState(prevState => {
  const newState = [...prevState];
  
  newState.forEach((horse, index) => {
  // calculate the new distance of the horse based on its speed
  const distance = horse.distance + horse.speed;
  
  // check if the horse has reached the finish line
  if (distance >= 100) {
  // set the horse's position to 100 and mark it as finished
  horse.position = 100;
  horse.rank = newState.filter(h => h.position === 100).length;
  horse.speed = 0;
  } else {
  horse.distance = distance;
  }
  
  });
  
  // sort the horses by position
  newState.sort((a, b) => b.position - a.position);
  
  return newState;
  });
  }, 1000);
  }
  
  return () => clearInterval(intervalId);
  }, [raceStarted, raceFinished]);
  
  const handleTimeChange = e => {
  setRaceTime(e.target.value);
  setRaceDuration(e.target.value);
  };
  
  const handleHorseSelection = e => {
  setSelectedHorses(parseInt(e.target.value, 10));
  };
  
  return (
  
  <div className="leaderboard-container">
  <div className="settings">
  <label>
  Race time:
  <input
  type="number"
  min="10"
  max="60"
  step="5"
  value={raceTime}
  onChange={handleTimeChange}
  disabled={raceStarted}
  />
  </label>
  <label>
  Number of horses:
  <select value={selectedHorses} onChange={handleHorseSelection} disabled={raceStarted}>
  {[...Array(horses.length)].map((_, index) => (
  <option key={index} value={index + 1}>
  {index + 1}
  </option>
  ))}
  </select>
  </label>
  <button onClick={startRace} disabled={raceStarted}>
  Start Race
  </button>
  <button onClick={restartRace} disabled={!raceFinished}>
  Restart Race
  </button>
  </div>
  <div className="race-track">
  {horsesState.map((horse, index) => (
  <div key={index} className={`horse horse${index + 1}`} style={{ left: `${horse.distance}%` }}>
  <img src={horse.gif} alt={horse.name} />
  </div>
  ))}
  </div>
  {raceFinished && (
  <div className="results">
  <h2>Race Results</h2>
  <table>
  <thead>
  <tr>
  <th>Position</th>
  <th>Horse</th>
  <th>Odds</th>
  <th>Time</th>
  </tr>
  </thead>
  <tbody>
  {horsesState.map(horse => (
  <tr key={horse.number}>
  <td>{horse.rank}</td>
  <td>{horse.name}</td>
  <td>{horse.odds} to 1</td>
  <td>{raceDuration - raceTime + (horse.position / horse.speed)}</td>
  </tr>
  ))}
  </tbody>
  </table>
  </div>
  )}
  </div>
  );
  };
  export default Leaderboard;
  
  
  
  
  
  
  











///////////////////////////////////////////////////////////////////////////////
// works very good
// import React, { useState, useEffect } from 'react';
// import Horse1 from './images/horse (1).gif';
// import Horse2 from './images/horse (2).gif';
// import Horse3 from './images/horse (3).gif';
// import Horse4 from './images/horse (4).gif';
// import Horse5 from './images/horse (5).gif';
// import Horse6 from './images/horse (6).gif';
// import Horse7 from './images/horse (7).gif';
// import Horse8 from './images/horse (8).gif';
// import Horse9 from './images/horse (9).gif';
// import Horse10 from './images/horse (10).gif';
// import './Leaderboard.css';

// const horses = [
//   {
//     name: 'Secretariat',
//     number: 1,
//     gif: Horse1,
//   },
//   {
//     name: 'Man o\' War',
//     number: 2,
//     gif: Horse2,
//   },
//   {
//     name: 'Seattle Slew',
//     number: 3,
//     gif: Horse3,
//   },
//   {
//     name: 'Affirmed',
//     number: 4,
//     gif: Horse4,
//   },
//   {
//     name: 'American Pharoah',
//     number: 5,
//     gif: Horse5,
//   },
//   {
//     name: 'Justify',
//     number: 6,
//     gif: Horse6,
//   },
//   {
//     name: 'Citation',
//     number: 7,
//     gif: Horse7,
//   },
//   {
//     name: 'Count Fleet',
//     number: 8,
//     gif: Horse8,
//   },
//   {
//     name: 'Assault',
//     number: 9,
//     gif: Horse9,
//   },
//   {
//     name: 'Whirlaway',
//     number: 10,
//     gif: Horse10,
//   },
// ];

// const Leaderboard = () => {
//   const [raceTime, setRaceTime] = useState(30); // default race time of 30 seconds
//   const [raceStarted, setRaceStarted] = useState(false);
//   const [raceFinished, setRaceFinished] = useState(false);
//   const [horsesState, setHorsesState] = useState(horses.slice(0, 4).map((horse, index) => ({
//     ...horse,
//     position: 0,
//     speed: Math.floor(Math.random() * 10) + 1, // random speed between 1 and 10
//     distance: 0,
//     odds: Math.floor(Math.random() * 10) + 1, // random odds between 1 and 10
//     rank: null,
//   })));
//   const [raceDuration, setRaceDuration] = useState(30); // default race duration of 30 seconds
//   const [selectedHorses, setSelectedHorses] = useState(4); // default number of horses in the race is 4

//   const startRace = () => {
//     setRaceStarted(true);
//     setRaceFinished(false);
//     setHorsesState(horses.slice(0, selectedHorses).map(horse => ({
//       ...horse,
//       position: 0,
//       distance: 0,
//       rank: null,
//       speed: Math.floor(Math.random() * 10) + 1, // random speed between 1 and 10
//       odds: Math.floor(Math.random() * 10) + 1, // random odds between 1 and 10
//     })));
//   };

//   const finishRace = () => {
//     setRaceStarted(false);
//     setRaceFinished(true);
//   };

//   useEffect(() => {
//     let intervalId;
//     if (raceStarted) {
//       intervalId = setInterval(() => {
//         setHorsesState(prevHorsesState => {
//           // check if any horse has reached the finish line
// const finishedHorses = prevHorsesState.filter(horse => horse.distance >= 100);
// if (finishedHorses.length === prevHorsesState.length) {
// finishRace();
// return prevHorsesState;
// }
//       // update the position, distance and rank of each horse
//       const updatedHorses = prevHorsesState.map((horse, index) => {
//         const newDistance = horse.distance + horse.speed;
//         const newPosition = Math.min(newDistance, 100); // limit the position to 100
//         const newRank = finishedHorses.length + index + 1; // rank the horses that have finished

//         return {
//           ...horse,
//           position: newPosition,
//           distance: newDistance,
//           rank: horse.rank || (newPosition === 100 ? newRank : null), // only set rank if the horse has finished
//         };
//       });

//       // sort the horses by position
//       updatedHorses.sort((horseA, horseB) => horseB.position - horseA.position);

//       return updatedHorses;
//     });
//   }, 1000);
// }

// return () => clearInterval(intervalId); // clear the interval when component unmounts or race is finished
// }, [raceStarted]);

// return (
// <div className="leaderboard">
// <div className="header">
// <h1>Horse Racing Leaderboard</h1>
// <p>Select number of horses:</p>
// <select value={selectedHorses} onChange={(e) => setSelectedHorses(Number(e.target.value))}>
// {[...Array(horses.length)].map((_, index) => (
// <option key={index} value={index + 1}>{index + 1}</option>
// ))}
// </select>
// <p>Select race duration:</p>
// <select value={raceDuration} onChange={(e) => setRaceDuration(Number(e.target.value))}>
// {[...Array(30)].map((_, index) => (
// <option key={index} value={index + 1}>{index + 1} seconds</option>
// ))}
// </select>
// <button disabled={raceStarted} onClick={startRace}>Start Race</button>
// </div>
// <div className="race-track">
// {horsesState.map((horse, index) => (
// <div key={index} className={`horse horse-${index + 1}} style={{ left: ${horse.position}% }`}>
// <img src={horse.gif} alt={horse.name} />
// {/* <div className="horse-info">
// <span className="horse-name">{horse.name}</span>
// <span className="horse-odds">{horse.odds}:1</span>
// </div> */}
// </div>
// ))}
// </div>
// <div className="footer">
// {raceStarted && <p>Race is in progress...</p>}
// {raceFinished && (
// <>
// <p>Race has finished!</p>
// <table>
// <thead>
// <tr>
// <th>Rank</th>
// <th>Name</th>
// <th>Odds</th>
// </tr>
// </thead>
// <tbody>
// {horsesState.map((horse, index) => (
// <tr key={index}>
// <td>{horse.rank}</td>
// <td>{horse.name}</td>
// <td>{horse.odds}:1</td>
// </tr>
// ))}
// </tbody>
// </table>
// </>
// )}
// </div>
// </div>
// );
// };
// export default Leaderboard;



















// import React, { useState } from 'react';
// import Horse1 from './images/horse (1).gif';
// import Horse2 from './images/horse (2).gif';
// import Horse3 from './images/horse (3).gif';
// import Horse4 from './images/horse (4).gif';
// import Horse5 from './images/horse (5).gif';
// import Horse6 from './images/horse (6).gif';
// import Horse7 from './images/horse (7).gif';
// import Horse8 from './images/horse (8).gif';
// import Horse9 from './images/horse (9).gif';
// import Horse10 from './images/horse (10).gif';
// import LeaderboardStatus from './LeaderboardStatus';
// import Dropdown from './Dropdown';

// const horses = [
//   { name: 'Secretariat', number: 1, gif: Horse1 },
//   { name: "Man o' War", number: 2, gif: Horse2 },
//   { name: 'Seattle Slew', number: 3, gif: Horse3 },
//   { name: 'Affirmed', number: 4, gif: Horse4 },
//   { name: 'American Pharoah', number: 5, gif: Horse5 },
//   { name: 'Justify', number: 6, gif: Horse6 },
//   { name: 'Citation', number: 7, gif: Horse7 },
//   { name: 'Count Fleet', number: 8, gif: Horse8 },
//   { name: 'Assault', number: 9, gif: Horse9 },
//   { name: 'Whirlaway', number: 10, gif: Horse10 },
// ];

// const Leaderboard = () => {
//   const [selectedHorses, setSelectedHorses] = useState([]);
//   const [raceStarted, setRaceStarted] = useState(false);
//   const [winner, setWinner] = useState(null);

//   const handleHorseSelect = (horse) => {
//     if (selectedHorses.length < 3) {
//       setSelectedHorses((prevSelectedHorses) => [...prevSelectedHorses, horse]);
//     }
//   };

//   const handleStartRace = () => {
//     setRaceStarted(true);

//     // Implement race logic here
//     let winnerIndex = Math.floor(Math.random() * selectedHorses.length);
//     setWinner(selectedHorses[winnerIndex]);
//   };

//   const handleRestart = () => {
//     setSelectedHorses([]);
//     setRaceStarted(false);
//     setWinner(null);
//   };

//   const handleSelectChange = (selectedOptions) => {
//     setSelectedHorses(selectedOptions);
//   };

//   return (
//     <div>
//       <h2>Select three horses:</h2>

//       <div className="horse-selection">
//         {horses.map((horse) => (
//           <div key={horse.number} onClick={() => handleHorseSelect(horse)}>
//             <img src={horse.gif} alt={horse.name} />
//             <p>{horse.name}</p>
//           </div>
//         ))}
//       </div>

//       {selectedHorses.length === 3 && (
//         <div>
//           <h2>Selected horses:</h2>

//           <div className="horse-selection">
//             {selectedHorses.map((horse) => (
//               <div key={horse.number}>
//                 <img src={horse.gif} alt={horse.name} />
//                 <p>{horse.name}</p>
//               </div>
// ))}
// </div>
// <button onClick={handleStartRace}>Start Race</button>
//     </div>
//   )}

//   {raceStarted && (
//     <div>
//       <h2>Race in progress...</h2>

//       <div className="horse-selection">
//         {selectedHorses.map((horse) => (
//           <div key={horse.number}>
//             <img src={horse.gif} alt={horse.name} />
//           </div>
//         ))}
//       </div>

//       <p>And the winner is... {winner.name}!</p>
//       <button onClick={handleRestart}>Restart</button>
//     </div>
//   )}

//   {!raceStarted && selectedHorses.length !== 3 && (
//     <div>
//       <h2>Select three horses to start the race</h2>
//       <Dropdown
//         options={horses}
//         value={selectedHorses}
//         onChange={handleSelectChange}
//         placeholder="Select three horses"
//         isMulti={true}
//       />
//     </div>
//   )}

//   <LeaderboardStatus selectedHorses={selectedHorses} />
// </div>

// );
// };

// export default Leaderboard;

















// import React, { useState } from 'react';
// import Horse1 from './images/horse (1).gif';
// import Horse2 from './images/horse (2).gif';
// import Horse3 from './images/horse (3).gif';
// import Horse4 from './images/horse (4).gif';
// import Horse5 from './images/horse (5).gif';
// import Horse6 from './images/horse (6).gif';
// import Horse7 from './images/horse (7).gif';
// import Horse8 from './images/horse (8).gif';
// import Horse9 from './images/horse (9).gif';
// import Horse10 from './images/horse (10).gif';
// import LeaderboardStatus from './LeaderboardStatus';
// import Dropdown from './Dropdown';

// const horses = [
//   { name: 'Secretariat', number: 1, gif: Horse1 },
//   { name: "Man o' War", number: 2, gif: Horse2 },
//   { name: 'Seattle Slew', number: 3, gif: Horse3 },
//   { name: 'Affirmed', number: 4, gif: Horse4 },
//   { name: 'American Pharoah', number: 5, gif: Horse5 },
//   { name: 'Justify', number: 6, gif: Horse6 },
//   { name: 'Citation', number: 7, gif: Horse7 },
//   { name: 'Count Fleet', number: 8, gif: Horse8 },
//   { name: 'Assault', number: 9, gif: Horse9 },
//   { name: 'Whirlaway', number: 10, gif: Horse10 },
// ];

// const Leaderboard = () => {
//   const [selectedHorses, setSelectedHorses] = useState([]);

//   const handleHorseSelect = (horse) => {
//     if (selectedHorses.length < 3) {
//       setSelectedHorses((prevSelectedHorses) => [...prevSelectedHorses, horse]);
//     }
//   };

//   return (
//     <div>
      
//       <h2>Select three horses:</h2>
      
//       <div className="horse-selection">
//         {horses.map((horse) => (
//           <div key={horse.number} onClick={() => handleHorseSelect(horse)}>
//             <img src={horse.gif} alt={horse.name} />
//             <p>{horse.name}</p>
//           </div>
          
//         ))}
//       </div>
//       {selectedHorses.length === 3 && (
//         <div>
//           <h2>Selected horses:</h2>
//           <div className="horse-selection">
//             {selectedHorses.map((horse) => (
//               <div key={horse.number}>
//                 <img src={horse.gif} alt={horse.name} />
//                 <p>{horse.name}</p>
//               </div>
//             ))}
//           </div>
//           <div> <Dropdown/>
//           <LeaderboardStatus/>
          
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Leaderboard;














// import React, { useState, useEffect } from "react";
// import Horse1 from "./images/horse (1).gif";
// import Horse2 from "./images/horse (2).gif";
// import Horse3 from "./images/horse (3).gif";
// import Horse4 from "./images/horse (4).gif";
// import Horse5 from "./images/horse (5).gif";
// import Horse6 from "./images/horse (6).gif";
// import Horse7 from "./images/horse (7).gif";
// import Horse8 from "./images/horse (8).gif";
// import Horse9 from "./images/horse (9).gif";
// import Horse10 from "./images/horse (10).gif";
// import "./Leaderboard.css";

// const horses = [
// {
// name: "Secretariat",
// number: 1,
// gif: Horse1,
// jockey: "Jockey1",
// odds: Math.floor(Math.random() * 10) + 1,
// },
// {
// name: "Man o' War",
// number: 2,
// gif: Horse2,
// jockey: "Jockey2",
// odds: Math.floor(Math.random() * 10) + 1,
// },
// {
// name: "Seattle Slew",
// number: 3,
// gif: Horse3,
// jockey: "Jockey3",
// odds: Math.floor(Math.random() * 10) + 1,
// },
// {
// name: "Affirmed",
// number: 4,
// gif: Horse4,
// jockey: "Jockey4",
// odds: Math.floor(Math.random() * 10) + 1,
// },
// {
// name: "American Pharoah",
// number: 5,
// gif: Horse5,
// jockey: "Jockey5",
// odds: Math.floor(Math.random() * 10) + 1,
// },
// {
// name: "Justify",
// number: 6,
// gif: Horse6,
// jockey: "Jockey6",
// odds: Math.floor(Math.random() * 10) + 1,
// },
// {
// name: "Citation",
// number: 7,
// gif: Horse7,
// jockey: "Jockey7",
// odds: Math.floor(Math.random() * 10) + 1,
// },
// {
// name: "Count Fleet",
// number: 8,
// gif: Horse8,
// jockey: "Jockey8",
// odds: Math.floor(Math.random() * 10) + 1,
// },
// {
// name: "Assault",
// number: 9,
// gif: Horse9,
// jockey: "Jockey9",
// odds: Math.floor(Math.random() * 10) + 1,
// },
// {
// name: "Whirlaway",
// number: 10,
// gif: Horse10,
// jockey: "Jockey10",
// odds: Math.floor(Math.random() * 10) + 1,
// },
// ];

// const Leaderboard = () => {
// const [raceTime, setRaceTime] = useState(30); // default race time of 30 seconds
// const [raceStarted, setRaceStarted] = useState(false);
// const [raceFinished, setRaceFinished] = useState(false);
// const [selectedHorses, setSelectedHorses] = useState([]);
// const [selectedHorseNames, setSelectedHorseNames] = useState([]);
// const [selectedHorseOdds, setSelectedHorseOdds] = useState([]);
// const [selectedHorseNumbers, setSelectedHorseNumbers] = useState([]);

// const startRace = () => {
//   setRaceStarted(true);
//   let countdown = setInterval(() => {
//   setRaceTime(time => time - 1);
//   }, 1000);
//   setTimeout(() => {
//   clearInterval(countdown);
//   setRaceFinished(true);
//   }, raceTime * 1000);
//   };
  
//   useEffect(() => {
//   const randomHorses = [];
//   while (randomHorses.length < 3) {
//   const randomIndex = Math.floor(Math.random() * horses.length);
//   if (!randomHorses.includes(horses[randomIndex])) {
//   randomHorses.push(horses[randomIndex]);
//   }
//   }
//   setSelectedHorses(randomHorses);
//   setSelectedHorseNames(randomHorses.map(horse => horse.name));
//   setSelectedHorseOdds(randomHorses.map(horse => horse.odds));
//   setSelectedHorseNumbers(randomHorses.map(horse => horse.number));
//   }, []);
  
//   return (
//   <div className="leaderboard">
//   <h1>Horse Racing</h1>
//   {!raceStarted && (
//   <div className="start-race">
//   <p>Select three horses to race</p>
//   <button onClick={startRace}>Start Race</button>
//   </div>
//   )}
//   {raceStarted && !raceFinished && (
//   <div className="race-track">
//   <div className="race-time">{raceTime} seconds remaining</div>
//   {selectedHorses.map((horse, index) => (
//   <div key={horse.number} className={`horse horse-${index+1}`}>
//   <img src={horse.gif} alt={horse.name} />
//   <div className="horse-info">
//   <div>{horse.name}</div>
//   <div>Jockey: {horse.jockey}</div>
//   <div>Odds: {horse.odds}</div>
//   </div>
//   </div>
//   ))}
//   </div>
//   )}
//   {raceFinished && (
//   <div className="race-results">
//   <h2>Race Results</h2>
//   <ol>
//   {selectedHorseNames.map((horse, index) => (
//   <li key={index}>
//   <span className="horse-number">{selectedHorseNumbers[index]}</span>
//   <span className="horse-name">{horse}</span>
//   <span className="horse-odds">{selectedHorseOdds[index]}:1</span>
//   </li>
//   ))}
//   </ol>
//   <button onClick={() => window.location.reload()}>Start Over</button>
//   </div>
//   )}
//   </div>
//   );
//   };
  
//   export default Leaderboard;
  
  





//////////////////////////////////////////////////////////////////////////////////////////////

// VERY CLOSE
// import React, { useState, useEffect, useRef } from "react";
// // import "./Leaderboard.css";
// import Horse1 from './images/horse (1).gif';
// import Horse2 from './images/horse (2).gif';
// import Horse3 from './images/horse (3).gif';
// import Horse4 from './images/horse (4).gif';
// import Horse5 from './images/horse (5).gif';
// import Horse6 from './images/horse (6).gif';
// import Horse7 from './images/horse (7).gif';
// import Horse8 from './images/horse (8).gif';
// import Horse9 from './images/horse (9).gif';
// import Horse10 from './images/horse (10).gif';

// const horses = [
//   { name: 'Secretariat', number: 1, gif: Horse1 },
//   { name: "Man o' War", number: 2, gif: Horse2 },
//   { name: 'Seattle Slew', number: 3, gif: Horse3 },
//   { name: 'Affirmed', number: 4, gif: Horse4 },
//   { name: 'American Pharoah', number: 5, gif: Horse5 },
//   { name: 'Justify', number: 6, gif: Horse6 },
//   { name: 'Citation', number: 7, gif: Horse7 },
//   { name: 'Count Fleet', number: 8, gif: Horse8 },
//   { name: 'Assault', number: 9, gif: Horse9 },
//   { name: 'Whirlaway', number: 10, gif: Horse10 },
// ];

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// const Leaderboard = () => {
//   const [trackLength, setTrackLength] = useState(0);
//   const [raceDuration, setRaceDuration] = useState(0);
//   const [numHorses, setNumHorses] = useState(0);
//   const [horsesState, setHorsesState] = useState([]);
//   const [raceStarted, setRaceStarted] = useState(false);
//   const [stopwatch, setStopwatch] = useState(0);
//   const stopwatchRef = useRef(null);

//   const generateRandomValues = () => {
//     setTrackLength(randomInt(800, 1200));
//     setRaceDuration(randomInt(60, 120));
//     setNumHorses(randomInt(6, 10));
//   };

//   const initializeHorses = () => {
//     const newHorses = [];
//     for (let i = 0; i < numHorses; i++) {
//       const horse = horses[randomInt(0, 9)];
//       const odds = `${randomInt(5, 15)}:${randomInt(1, 4)}`;
//       const jockey = `Jockey ${randomInt(1, 5)}`;
//       const owner = `Owner ${randomInt(1, 5)}`;
//       const trainer = `Trainer ${randomInt(1, 5)}`;
//       newHorses.push({ ...horse, odds, jockey, owner, trainer, position: 0 });
//     }
//     setHorsesState(newHorses);
//   };

//   const startRace = () => {
//     setRaceStarted(true);
//     stopwatchRef.current = setInterval(() => {
//       setStopwatch((prevStopwatch) => prevStopwatch + 0.1);
//     }, 100);
//   };

//   const resetRace = () => {
//     setTrackLength(0);
//     setRaceDuration(0);
// setNumHorses(0);
// setHorsesState([]);
// setRaceStarted(false);
// setStopwatch(0);
// clearInterval(stopwatchRef.current);
// };

// useEffect(() => {
// generateRandomValues();
// }, []);

// useEffect(() => {
// if (numHorses > 0) {
// initializeHorses();
// }
// }, [numHorses]);

// useEffect(() => {
// if (raceDuration > 0 && horsesState.length > 0) {
// const intervalId = setInterval(() => {
// const updatedHorses = horsesState.map((horse) => {
// const newPosition = horse.position + randomInt(1, 5);
// return { ...horse, position: newPosition };
// });
// setHorsesState(updatedHorses);
// }, (raceDuration * 1000) / 10);
// return () => clearInterval(intervalId);
// }
// }, [raceDuration, horsesState]);

// useEffect(() => {
// if (horsesState.length > 0) {
// const sortedHorses = [...horsesState].sort((a, b) => b.position - a.position);
// setHorsesState(sortedHorses);
// }
// }, [horsesState]);

// return (
// <div className="leaderboard-container">
// <div className="header">
// <h1>Horse Racing</h1>
// {raceStarted && (
// <div className="stopwatch">
// <span>Time: {stopwatch.toFixed(1)}s</span>
// </div>
// )}
// </div>
// {!raceStarted && (
// <div className="settings">
// <h2>Settings</h2>
// <label>
// Track Length: {trackLength}m
// <input
// type="range"
// min="800"
// max="1200"
// value={trackLength}
// onChange={(e) => setTrackLength(parseInt(e.target.value))}
// />
// </label>
// <label>
// Race Duration: {raceDuration}s
// <input
// type="range"
// min="60"
// max="120"
// value={raceDuration}
// onChange={(e) => setRaceDuration(parseInt(e.target.value))}
// />
// </label>
// <label>
// Number of Horses: {numHorses}
// <input
// type="range"
// min="6"
// max="10"
// value={numHorses}
// onChange={(e) => setNumHorses(parseInt(e.target.value))}
// />
// </label>
// <button onClick={initializeHorses}>Generate Horses</button>
// <button onClick={startRace} disabled={horsesState.length === 0}>
// Start Race
// </button>
// </div>
// )}
// {raceStarted && (
// <div className="race-track">
// {horsesState.map((horse, index) => (
// <div key={horse.number} className="horse">
// <div className="horse-name">
// {index === 0 && <span role="img" aria-label="trophy">🏆</span>} {horse.name}
// </div>
// <div className="horse-info">
// <img src={horse.gif} alt={horse.name} />
// <div className="horse-details">
// <div className="detail">
// <span>Number:</span> {horse.number}
// </div>
// <div className="detail">
// <span>Odds:</span> {horse.odds}
// </div>
// <div className="detail">
// <span>Jockey:</span> {horse.jockey}
// </div>
// <div className="detail">
// <span>Position:</span> {horse.position}m

// </div>
// </div>
// </div>
// <div className="horse-progress" style={{ width: `${(horse.position / trackLength) * 100}%` }}>
// </div>
// </div>
// ))}
// </div>
// )}
// {raceStarted && (
// <button className="reset" onClick={resetRace}>
// Reset Race
// </button>
// )}
// </div>
// );
// }
// export default Leaderboard;









///////////////////////////////////////////////////
// Nice components but no images:
// import React, { useState, useEffect, useRef } from "react";
// import "./Leaderboard.css";
// import Horse1 from './images/horse (1).gif';
// import Horse2 from './images/horse (2).gif';
// import Horse3 from './images/horse (3).gif';
// import Horse4 from './images/horse (4).gif';
// import Horse5 from './images/horse (5).gif';
// import Horse6 from './images/horse (6).gif';
// import Horse7 from './images/horse (7).gif';
// import Horse8 from './images/horse (8).gif';
// import Horse9 from './images/horse (9).gif';
// import Horse10 from './images/horse (10).gif';

// const horses = [  { name: 'Secretariat', number: 1, gif: Horse1 },  { name: "Man o' War", number: 2, gif: Horse2 },  { name: 'Seattle Slew', number: 3, gif: Horse3 },  { name: 'Affirmed', number: 4, gif: Horse4 },  { name: 'American Pharoah', number: 5, gif: Horse5 },  { name: 'Justify', number: 6, gif: Horse6 },  { name: 'Citation', number: 7, gif: Horse7 },  { name: 'Count Fleet', number: 8, gif: Horse8 },  { name: 'Assault', number: 9, gif: Horse9 },  { name: 'Whirlaway', number: 10, gif: Horse10 },];

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// const Leaderboard = () => {
//   const [trackLength, setTrackLength] = useState(0);
//   const [raceDuration, setRaceDuration] = useState(0);
//   const [numHorses, setNumHorses] = useState(0);
//   const [horsesState, setHorsesState] = useState([]);
//   const [raceStarted, setRaceStarted] = useState(false);
//   const [stopwatch, setStopwatch] = useState(0);
//   const stopwatchRef = useRef(null);

//   const generateRandomValues = () => {
//     setTrackLength(randomInt(800, 1200));
//     setRaceDuration(randomInt(60, 120));
//     setNumHorses(randomInt(6, 10));
//   };

//   const initializeHorses = () => {
//     const newHorses = [];
//     for (let i = 0; i < numHorses; i++) {
//       const horse = horses[randomInt(0, 9)];
//       const odds = `${randomInt(5, 15)}:${randomInt(1, 4)}`;
//       const jockey = `Jockey ${randomInt(1, 5)}`;
//       newHorses.push({ ...horse, odds, jockey, position: 0 });
//     }
//     setHorsesState(newHorses);
//   };

//   const startRace = () => {
//     setRaceStarted(true);
//     stopwatchRef.current = setInterval(() => {
//       setStopwatch((prevStopwatch) => prevStopwatch + 0.1);
//     }, 100);
//   };

//   const resetRace = () => {
//     setTrackLength(0);
//     setRaceDuration(0);
//     setNumHorses(0);
//     setHorsesState([]);
//     setRaceStarted(false);
//     setStopwatch(0);
//     clearInterval(stopwatchRef.current);
//     };
    
//     useEffect(() => {
//     if (numHorses > 0) {
//     initializeHorses();
//     }
//     }, [numHorses]);
    
//     useEffect(() => {
//     if (raceStarted) {
//     const intervalId = setInterval(() => {
//     const newHorses = horsesState.map((horse) => {
//     const distance = randomInt(1, 10);
//     const newPosition = horse.position + distance;
//     if (newPosition >= trackLength) {
//     clearInterval(intervalId);
//     }
//     return { ...horse, position: newPosition };
//     });
//     setHorsesState(newHorses);
//     }, 1000);
//     return () => clearInterval(intervalId);
//     }
//     }, [raceStarted]);
    
//     const renderHorses = () => {
//     return horsesState.map((horse) => {
//     const { name, number, gif, odds, jockey, position } = horse;
//     const distance = position / trackLength * 100;
//     return (
//     <div className="horse" key={number}>
//     <img className="horse-gif" src={gif} alt={name} />
//     <div className="horse-details">
//     <h2 className="horse-name">{name}</h2>
//     <p className="horse-odds">{odds}</p>
//     <p className="horse-jockey">{jockey}</p>
//     </div>
//     <div className="horse-progress" style={`{ width: ${distance}% }`}></div>
//     </div>
//     );
//     });
//     };
    
//     return (
//     <div className="leaderboard">
//     <h1 className="title">Horse Racing</h1>
//     {!raceStarted ? (
//     <div className="form">
//     <label htmlFor="trackLength">Track Length (m)</label>
//     <input type="number" id="trackLength" value={trackLength} onChange={(e) => setTrackLength(Number(e.target.value))} />
//     <label htmlFor="raceDuration">Race Duration (s)</label>
//     <input type="number" id="raceDuration" value={raceDuration} onChange={(e) => setRaceDuration(Number(e.target.value))} />
//     <label htmlFor="numHorses">Number of Horses</label>
//     <input type="number" id="numHorses" value={numHorses} onChange={(e) => setNumHorses(Number(e.target.value))} />
//     <button onClick={generateRandomValues}>Generate Random Values</button>
//     <button onClick={initializeHorses}>Initialize Horses</button>
//     <button onClick={startRace}>Start Race</button>
//     </div>
//     ) : (
//       <div className="race-info">
//       <h2 className="track-length">Track Length: {trackLength} m</h2>
//       <h2 className="race-duration">Race Duration: {raceDuration} s</h2>
//       <h2 className="num-horses">Number of Horses: {numHorses}</h2>
//       <h2 className="stopwatch">Stopwatch: {stopwatch.toFixed(1)} s</h2>
//       <button onClick={resetRace}>Reset Race</button>
//     </div>
    
//     )}
//     {raceStarted && <div className="race-track">{renderHorses()}</div>}
//     </div>
//     );
//     };
    
//     export default Leaderboard;

































// import React, { useState, useEffect } from "react";
// import Horse1 from "./images/horse (1).gif";
// import Horse2 from "./images/horse (2).gif";
// import Horse3 from "./images/horse (3).gif";
// import Horse4 from "./images/horse (4).gif";
// import Horse5 from "./images/horse (5).gif";
// import Horse6 from "./images/horse (6).gif";
// import Horse7 from "./images/horse (7).gif";
// import Horse8 from "./images/horse (8).gif";
// import Horse9 from "./images/horse (9).gif";
// import Horse10 from "./images/horse (10).gif";
// import "./Leaderboard.css";

// const horses = [
// {
// name: "Secretariat",
// number: 1,
// gif: Horse1,
// jockey: "Jockey1",
// odds: Math.floor(Math.random() * 10) + 1,
// },
// {
// name: "Man o' War",
// number: 2,
// gif: Horse2,
// jockey: "Jockey2",
// odds: Math.floor(Math.random() * 10) + 1,
// },
// {
// name: "Seattle Slew",
// number: 3,
// gif: Horse3,
// jockey: "Jockey3",
// odds: Math.floor(Math.random() * 10) + 1,
// },
// {
// name: "Affirmed",
// number: 4,
// gif: Horse4,
// jockey: "Jockey4",
// odds: Math.floor(Math.random() * 10) + 1,
// },
// {
// name: "American Pharoah",
// number: 5,
// gif: Horse5,
// jockey: "Jockey5",
// odds: Math.floor(Math.random() * 10) + 1,
// },
// {
// name: "Justify",
// number: 6,
// gif: Horse6,
// jockey: "Jockey6",
// odds: Math.floor(Math.random() * 10) + 1,
// },
// {
// name: "Citation",
// number: 7,
// gif: Horse7,
// jockey: "Jockey7",
// odds: Math.floor(Math.random() * 10) + 1,
// },
// {
// name: "Count Fleet",
// number: 8,
// gif: Horse8,
// jockey: "Jockey8",
// odds: Math.floor(Math.random() * 10) + 1,
// },
// {
// name: "Assault",
// number: 9,
// gif: Horse9,
// jockey: "Jockey9",
// odds: Math.floor(Math.random() * 10) + 1,
// },
// {
// name: "Whirlaway",
// number: 10,
// gif: Horse10,
// jockey: "Jockey10",
// odds: Math.floor(Math.random() * 10) + 1,
// },
// ];

// const Leaderboard = () => {
// const [raceTime, setRaceTime] = useState(30); // default race time of 30 seconds
// const [raceStarted, setRaceStarted] = useState(false);
// const [raceFinished, setRaceFinished] = useState(false);
// const [selectedHorses, setSelectedHorses] = useState([]);
// const [selectedHorseNames, setSelectedHorseNames] = useState([]);
// const [selectedHorseOdds, setSelectedHorseOdds] = useState([]);
// const [selectedHorseNumbers, setSelectedHorseNumbers] = useState([]);

// const startRace = () => {
//   setRaceStarted(true);
//   let countdown = setInterval(() => {
//   setRaceTime(time => time - 1);
//   }, 1000);
//   setTimeout(() => {
//   clearInterval(countdown);
//   setRaceFinished(true);
//   }, raceTime * 1000);
//   };
  
//   useEffect(() => {
//   const randomHorses = [];
//   while (randomHorses.length < 3) {
//   const randomIndex = Math.floor(Math.random() * horses.length);
//   if (!randomHorses.includes(horses[randomIndex])) {
//   randomHorses.push(horses[randomIndex]);
//   }
//   }
//   setSelectedHorses(randomHorses);
//   setSelectedHorseNames(randomHorses.map(horse => horse.name));
//   setSelectedHorseOdds(randomHorses.map(horse => horse.odds));
//   setSelectedHorseNumbers(randomHorses.map(horse => horse.number));
//   }, []);
  
//   return (
//   <div className="leaderboard">
//   <h1>Horse Racing</h1>
//   {!raceStarted && (
//   <div className="start-race">
//   <p>Select three horses to race</p>
//   <button onClick={startRace}>Start Race</button>
//   </div>
//   )}
//   {raceStarted && !raceFinished && (
//   <div className="race-track">
//   <div className="race-time">{raceTime} seconds remaining</div>
//   {selectedHorses.map((horse, index) => (
//   <div key={horse.number} className={`horse horse-${index+1}`}>
//   <img src={horse.gif} alt={horse.name} />
//   <div className="horse-info">
//   <div>{horse.name}</div>
//   <div>Jockey: {horse.jockey}</div>
//   <div>Odds: {horse.odds}</div>
//   </div>
//   </div>
//   ))}
//   </div>
//   )}
//   {raceFinished && (
//   <div className="race-results">
//   <h2>Race Results</h2>
//   <ol>
//   {selectedHorseNames.map((horse, index) => (
//   <li key={index}>
//   <span className="horse-number">{selectedHorseNumbers[index]}</span>
//   <span className="horse-name">{horse}</span>
//   <span className="horse-odds">{selectedHorseOdds[index]}:1</span>
//   </li>
//   ))}
//   </ol>
//   <button onClick={() => window.location.reload()}>Start Over</button>
//   </div>
//   )}
//   </div>
//   );
//   };
  
//   export default Leaderboard;
  
  
  
  






// import React, { useState, useEffect } from "react";
// import Horse1 from "./images/horse (1).gif";
// import Horse2 from "./images/horse (2).gif";
// import Horse3 from "./images/horse (3).gif";
// import Horse4 from "./images/horse (4).gif";
// import Horse5 from "./images/horse (5).gif";
// import Horse6 from "./images/horse (6).gif";
// import Horse7 from "./images/horse (7).gif";
// import Horse8 from "./images/horse (8).gif";
// import Horse9 from "./images/horse (9).gif";
// import Horse10 from "./images/horse (10).gif";
// import "./Leaderboard.css";

// const horses = [
//   {
//     name: "Secretariat",
//     number: 1,
//     gif: Horse1,
//     jockey: "Jockey1",
//     odds: Math.floor(Math.random() * 10) + 1,
//   },
//   {
//     name: "Man o' War",
//     number: 2,
//     gif: Horse2,
//     jockey: "Jockey2",
//     odds: Math.floor(Math.random() * 10) + 1,
//   },
//   {
//     name: "Seattle Slew",
//     number: 3,
//     gif: Horse3,
//     jockey: "Jockey3",
//     odds: Math.floor(Math.random() * 10) + 1,
//   },
//   {
//     name: "Affirmed",
//     number: 4,
//     gif: Horse4,
//     jockey: "Jockey4",
//     odds: Math.floor(Math.random() * 10) + 1,
//   },
//   {
//     name: "American Pharoah",
//     number: 5,
//     gif: Horse5,
//     jockey: "Jockey5",
//     odds: Math.floor(Math.random() * 10) + 1,
//   },
//   {
//     name: "Justify",
//     number: 6,
//     gif: Horse6,
//     jockey: "Jockey6",
//     odds: Math.floor(Math.random() * 10) + 1,
//   },
//   {
//     name: "Citation",
//     number: 7,
//     gif: Horse7,
//     jockey: "Jockey7",
//     odds: Math.floor(Math.random() * 10) + 1,
//   },
//   {
//     name: "Count Fleet",
//     number: 8,
//     gif: Horse8,
//     jockey: "Jockey8",
//     odds: Math.floor(Math.random() * 10) + 1,
//   },
//   {
//     name: "Assault",
//     number: 9,
//     gif: Horse9,
//     jockey: "Jockey9",
//     odds: Math.floor(Math.random() * 10) + 1,
//   },
//   {
//     name: "Whirlaway",
//     number: 10,
//     gif: Horse10,
//     jockey: "Jockey10",
//     odds: Math.floor(Math.random() * 10) + 1,
//   },
// ];

// const Leaderboard = () => {
//   const [raceTime, setRaceTime] = useState(30); // default race time of 30 seconds
//   const [raceStarted, setRaceStarted] = useState(false);
//   const [raceFinished, setRaceFinished] = useState(false);
//   const [selectedHorses, setSelectedHorses] = useState([]
//     );
    
//     // function to handle the start of the race
//     const startRace = () => {
//     setRaceStarted(true);
//     setRaceFinished(false);
//     setSelectedHorses([]);
//     // set a random race time between 30 and 60 seconds
//     setRaceTime(Math.floor(Math.random() * 31) + 30);
//     };
    
//     // function to handle the end of the race
//     const endRace = () => {
//     setRaceStarted(false);
//     setRaceFinished(true);
//     };
    
//     // function to handle the selection of a horse
//     const selectHorse = (horse) => {
//     if (!selectedHorses.includes(horse)) {
//     setSelectedHorses([...selectedHorses, horse]);
//     }
//     };
    
//     // function to handle the deselection of a horse
//     const deselectHorse = (horse) => {
//     const updatedHorses = selectedHorses.filter((h) => h !== horse);
//     setSelectedHorses(updatedHorses);
//     };
    
//     useEffect(() => {
//     let interval;
//     if (raceStarted && !raceFinished) {
//     interval = setInterval(() => {
//     setRaceTime((prevTime) => prevTime - 1);
//     }, 1000);
//     }
//     if (raceTime === 0) {
//     clearInterval(interval);
//     endRace();
//     }
//     return () => clearInterval(interval);
//     }, [raceStarted, raceFinished, raceTime]);
    
//     return (
//     <div className="leaderboard">
//     <div className="header">
//     <h1>Virtual Horse Race</h1>
//     <p>Select up to three horses to see who wins!</p>
//     {raceFinished && (
//     <button className="restart-button" onClick={startRace}>
//     Start Race Again
//     </button>
//     )}
//     </div>
//     <div className="horses-container">
//   {horses.map((horse) => (
//     <div
//       key={horse.number}
//       className={`horse-card ${selectedHorses.includes(horse) ? "selected" : ""}`}
//       onClick={() =>
//         selectedHorses.includes(horse) ? deselectHorse(horse) : selectHorse(horse)
//       }
//     >
//       <img src={horse.gif} alt={horse.name} />
//       <div className="horse-info">
//         <h3>{horse.name}</h3>
//         <p>Jockey: {horse.jockey}</p>
//         <p>Odds: {horse.odds}:1</p>
//       </div>
//     </div>
//   ))}
// </div>

//     {raceStarted && !raceFinished && (
//     <div className="countdown">
//     <p>Race starting in...</p>
//     <h2>{raceTime}</h2>
//     </div>
//     )}
//     {raceFinished && (
//     <div className="results">
//     <h2>Results:</h2>
//     {selectedHorses.length > 0 ? (
//     selectedHorses.map((horse, index) => (
//     <div key={index}>
//     <h3>{index + 1}. {horse.name}</h3>
//     <p>Jockey: {horse.jockey}</p>
//     <p>Odds: {horse.odds}:1</p>
//     </div>
//     ))
//     ) : (
//     <p>No horses selected</p>
//     )}
//     </div>
//     )}
//     </div>
//     );
//     };
    
//     export default Leaderboard;
    
    
    
    








// import React, { useState, useEffect } from "react";
// import Horse1 from "./images/horse (1).gif";
// import Horse2 from "./images/horse (2).gif";
// import Horse3 from "./images/horse (3).gif";
// import Horse4 from "./images/horse (4).gif";
// import Horse5 from "./images/horse (5).gif";
// import Horse6 from "./images/horse (6).gif";
// import Horse7 from "./images/horse (7).gif";
// import Horse8 from "./images/horse (8).gif";
// import Horse9 from "./images/horse (9).gif";
// import Horse10 from "./images/horse (10).gif";
// import "./Leaderboard.css";

// const horses = [
//   {
//     name: "Secretariat",
//     number: 1,
//     gif: Horse1,
//   },
//   {
//     name: "Man o' War",
//     number: 2,
//     gif: Horse2,
//   },
//   {
//     name: "Seattle Slew",
//     number: 3,
//     gif: Horse3,
//   },
//   {
//     name: "Affirmed",
//     number: 4,
//     gif: Horse4,
//   },
//   {
//     name: "American Pharoah",
//     number: 5,
//     gif: Horse5,
//   },
//   {
//     name: "Justify",
//     number: 6,
//     gif: Horse6,
//   },
//   {
//     name: "Citation",
//     number: 7,
//     gif: Horse7,
//   },
//   {
//     name: "Count Fleet",
//     number: 8,
//     gif: Horse8,
//   },
//   {
//     name: "Assault",
//     number: 9,
//     gif: Horse9,
//   },
//   {
//     name: "Whirlaway",
//     number: 10,
//     gif: Horse10,
//   },
// ];

// const Leaderboard = () => {
//   const [raceTime, setRaceTime] = useState(30); // default race time of 30 seconds
//   const [raceStarted, setRaceStarted] = useState(false);
//   const [raceFinished, setRaceFinished] = useState(false);
//   const [horsesState, setHorsesState] = useState(
//     horses.slice(0, 4).map((horse, index) => ({
//       ...horse,
//       position: 0,
//       speed: Math.floor(Math.random() * 10) + 1, // random speed between 1 and 10
//       distance: 0,
//       odds: Math.floor(Math.random() * 10) + 1, // random odds between 1 and 10
//       rank: null,
//     }))
//   );
//   const [raceDuration, setRaceDuration] = useState(30); // default race duration of 30 seconds
//   const [selectedHorses, setSelectedHorses] = useState(4); // default number of horses in the race is 4

//   const startRace = () => {
//     setRaceStarted(true);
//     setRaceFinished(false);
//     setHorsesState(
//       horses.slice(0, selectedHorses).map((horse) => ({
//         ...horse,
//         position: 0,
//         distance: 0,
//         rank: null,
//         speed: Math.floor(Math.random() * 10) + 1, // random speed between 1 and 10
//         odds: Math.floor(Math.random() * 10) + 1, // random odds between 1 and 10
//       }))
//     );
//     setRaceDuration(raceTime);
//   };

//   useEffect(() => {
//     let interval;
//     if (raceStarted && !raceFinished && raceDuration > 0) {
//       interval = setInterval(() => {
//         setRaceDuration((prevDuration) => prevDuration - 1);
//         setHorsesState((prevHorses) => {
//           const newHorses = prevHorses.map((horse) => {
//             const { speed, distance } = horse;
//             let newPosition = horse.position;
//             let newDistance = distance + speed;
//             if (newDistance >= 100) {
//               newDistance = 100;
//               newPosition = prevHorses.filter(
//                 (h) => h.position >= newPosition
//               ).length;
//               horse.rank = prevHorses.filter(
//                 (h) => h.position >= newPosition
//               ).length;
//             }
//             return {
//               ...horse,
//               position: newPosition,
//               distance: newDistance,
//             };
//           });
//           newHorses.sort((a, b) => b.distance - a.distance);
//           return newHorses;
//         });
//       }, 1000);
//     } else if (raceDuration === 0) {
//       setRaceFinished(true);
//       clearInterval(interval);
//       setHorsesState((prevHorses) => {
//         const finishedHorses = prevHorses.map((horse) => ({
//           ...horse,
//           rank: horse.rank || selectedHorses,
//         }));
//         finishedHorses.sort((a, b) => a.rank - b.rank);
//         return finishedHorses;
//       });
//     }
//     return () => clearInterval(interval);
//   }, [raceStarted, raceDuration, raceFinished, selectedHorses]);

//   const handleRaceTimeChange = (event) => {
//     setRaceTime(Number(event.target.value));
//   };

//   const handleHorseSelectionChange = (event) => {
//     const selectedHorses = Number(event.target.value);
//     setSelectedHorses(selectedHorses);
//     setHorsesState(
//       horses.slice(0, selectedHorses).map((horse) => ({
//         ...horse,
//         position: 0,
//         distance: 0,
//         rank: null,
//         speed: Math.floor(Math.random() * 10) + 1, // random speed between 1 and 10
//         odds: Math.floor(Math.random() * 10) + 1, // random odds between 1 and 10
//       }))
//     );
//   };

//   return (
//     <div className="leaderboard">
//       <h1>Horse Racing</h1>
//       <div className="controls">
//         <label>
//           Race Time (seconds):
//           <input
//             type="number"
//             min="1"
//             value={raceTime}
//             onChange={handleRaceTimeChange}
//           />
//         </label>
//         <label>
//           Number of Horses:
//           <select value={selectedHorses} onChange={handleHorseSelectionChange}>
//             {[...Array(horses.length)].map((_, index) => (
//               <option key={index} value={index + 1}>
//                 {index + 1}
//               </option>
//             ))}
//           </select>
//         </label>
//         <button onClick={startRace} disabled={raceStarted}>
//           Start Race
//         </button>
//       </div>
//       <div className="race">
//         {horsesState.map((horse) => (
//           <div className="horse" key={horse.number}>
//             <div className="horse-info">
//               <span className="horse-name">{horse.name}</span>
//               <span className="horse-odds">{horse.odds}:1</span>
//             </div>
//             <div
//               className={`horse-gif horse-gif-${horse.number}`}
//               style={{ backgroundPositionX: `${horse.position * -10}%` }}
//             />
//           </div>
//         ))}
//         <div className="race-timer">
//           {!raceStarted && !raceFinished ? (
//             <span>
//               Set race time and number of horses, then click Start Race.
//             </span>
//           ) : (
//             <span>Time Left: {raceDuration}s</span>
//           )}
//         </div>
//       </div>

//       {raceFinished && (
//         <div className="results">
//           <h2>Results</h2>
//           {horsesState.map((horse, index) => (
//             <div key={horse.number}>
//               <p>
//                 <span>{index + 1}.</span>
//                 <span>{horse.name}</span>
//                 <span>Finish Time: {100 - horse.distance}s</span>
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };
// export default Leaderboard;




//  CLOSE
// import React, { useState, useEffect } from 'react';
// import Horse1 from './images/horse (1).gif';
// import Horse2 from './images/horse (2).gif';
// import Horse3 from './images/horse (3).gif';
// import Horse4 from './images/horse (4).gif';
// import Horse5 from './images/horse (5).gif';
// import Horse6 from './images/horse (6).gif';
// import Horse7 from './images/horse (7).gif';
// import Horse8 from './images/horse (8).gif';
// import Horse9 from './images/horse (9).gif';
// import Horse10 from './images/horse (10).gif';
// // import './Leaderboard.css';

// const horses = [
//   {
//     name: 'Secretariat',
//     number: 1,
//     gif: Horse1,
//   },
//   {
//     name: "Man o' War",
//     number: 2,
//     gif: Horse2,
//   },
//   {
//     name: 'Seattle Slew',
//     number: 3,
//     gif: Horse3,
//   },
//   {
//     name: 'Affirmed',
//     number: 4,
//     gif: Horse4,
//   },
//   {
//     name: 'American Pharoah',
//     number: 5,
//     gif: Horse5,
//   },
//   {
//     name: 'Justify',
//     number: 6,
//     gif: Horse6,
//   },
//   {
//     name: 'Citation',
//     number: 7,
//     gif: Horse7,
//   },
//   {
//     name: 'Count Fleet',
//     number: 8,
//     gif: Horse8,
//   },
//   {
//     name: 'Assault',
//     number: 9,
//     gif: Horse9,
//   },
//   {
//     name: 'Whirlaway',
//     number: 10,
//     gif: Horse10,
//   },
// ];

// const Leaderboard = () => {
//   const [raceTime, setRaceTime] = useState(30); // default race time of 30 seconds
//   const [raceStarted, setRaceStarted] = useState(false);
//   const [raceFinished, setRaceFinished] = useState(false);
//   const [horsesState, setHorsesState] = useState(horses.slice(0, 4).map((horse, index) => ({
//     ...horse,
//     position: 0,
//     speed: Math.floor(Math.random() * 10) + 1, // random speed between 1 and 10
//     distance: 0,
//     odds: Math.floor(Math.random() * 10) + 1, // random odds between 1 and 10
//     rank: null,
//   })));
//   const [raceDuration, setRaceDuration] = useState(30); // default race duration of 30 seconds
//   const [selectedHorses, setSelectedHorses] = useState(4); // default number of horses in the race is 4

//   const startRace = () => {
//     setRaceStarted(true);
//     setRaceFinished(false);
//     setHorsesState(
//       horses
//         .slice(0, selectedHorses)
//         .map((horse) => ({
//           ...horse,
//           position: 0,
//           distance: 0,
//           rank: null,
//           speed: Math.floor(Math.random() * 10) + 1, // random speed between 1 and 10
//           odds: Math.floor(Math.random() * 10) + 1, // random odds between 1 and 10
//         }))
//     );
//         setRaceDuration(raceTime);
//         };

//         const resetRace = () => {
//         setRaceStarted(false);
//         setRaceFinished(false);
//         setHorsesState(horses.slice(0, 4).map((horse, index) => ({
//         ...horse,
//         position: 0,
//         speed: Math.floor(Math.random() * 10) + 1, // random speed between 1 and 10
//         distance: 0,
//         odds: Math.floor(Math.random() * 10) + 1, // random odds between 1 and 10
//         rank: null,
//         })));
//         setRaceDuration(raceTime);
//         setSelectedHorses(4);
//         };

//         const updateHorsePositions = () => {
//         setHorsesState((prevState) => {
//         const newState = [...prevState];
//         newState.forEach((horse, index) => {
//         if (horse.distance < 100) {
//         const distanceTraveled = Math.floor(Math.random() * horse.speed) + 1;
//         newState[index].distance += distanceTraveled;
//         newState[index].position = newState[index].distance / 100;
//         }
//         });
//         newState.sort((a, b) => b.distance - a.distance);
//         newState.forEach((horse, index) => {
//         if (horse.rank === null) {
//         newState[index].rank = index + 1;
//         }
//         });
//         return newState;
//         });
//         };

//         useEffect(() => {
//         let interval;
//         if (raceStarted && !raceFinished) {
//         interval = setInterval(() => {
//         setRaceDuration((prevState) => prevState - 1);
//         updateHorsePositions();
//         }, 1000);
//         }
//         if (raceDuration === 0) {
//         clearInterval(interval);
//         setRaceFinished(true);
//         }
//         return () => clearInterval(interval);
//         }, [raceStarted, raceDuration, raceFinished]);

//         const handleHorseSelect = (e) => {
//         setSelectedHorses(Number(e.target.value));
//         };

//         return (
//         <div className="leaderboard-container">
//         <h1 className="leaderboard-header">Horse Racing Leaderboard</h1>
//         <div className="leaderboard-controls">
//         <label htmlFor="race-time-input">Race Time:</label>
//         <input
//         type="number"
//         id="race-time-input"
//         min="10"
//         max="120"
//         value={raceTime}
//         onChange={(e) => setRaceTime(Number(e.target.value))}
//         />
//         <label htmlFor="horse-select">Number of Horses:</label>
//         <select id="horse-select" value={selectedHorses} onChange={handleHorseSelect}>
//         {[...Array(10).keys()].map((num) => (
//         <option key={num} value={num + 1}>
//         {num + 1}
//         </option>
//         ))}
//         </select>
//         <button onClick={startRace} disabled={raceStarted || raceFinished}>
//         Start Race
//         </button>
//         <button onClick={resetRace}>Reset</button>
//         </div>
//         {raceStarted && (
//   <div className="leaderboard-race-track">
//     {horsesState.map((horse, index) => (
//       <div key={horse.number} className="leaderboard-horse">
//         <div className="horse-info">
//           <div>{horse.name} ({horse.number})</div>
//           <div>Odds: {horse.odds}:1</div>
//           <div>Speed: {horse.speed}</div>
//         </div>
//         <div className="horse-progress" style={{ width: `${horse.position * 100}%` }}>
//           <div className={`horse-color-${index + 1}`}></div>
//         </div>
//       </div>
//     ))}
//   </div>
// )}

// {raceFinished && (
// <div className="leaderboard-results">
// <h2>Race Results:</h2>
// <ol>
// {horsesState.map((horse) => (
// <li key={horse.number}>
// {horse.name} ({horse.number}) - Rank {horse.rank}
// </li>
// ))}
// </ol>
// </div>
// )}
// </div>
// );
// };
// export default Leaderboard;

// import React, { useState, useEffect } from 'react';
// import Horse1 from './images/horse (1).gif';
// import Horse2 from './images/horse (2).gif';
// import Horse3 from './images/horse (3).gif';
// import Horse4 from './images/horse (4).gif';
// import Horse5 from './images/horse (5).gif';
// import Horse6 from './images/horse (6).gif';
// import Horse7 from './images/horse (7).gif';
// import Horse8 from './images/horse (8).gif';
// import Horse9 from './images/horse (9).gif';
// import Horse10 from './images/horse (10).gif';
// import './Leaderboard.css';

// const horses = [
// {
// name: 'Secretariat',
// number: 1,
// gif: Horse1,
// },
// {
// name: "Man o' War",
// number: 2,
// gif: Horse2,
// },
// {
// name: 'Seattle Slew',
// number: 3,
// gif: Horse3,
// },
// {
// name: 'Affirmed',
// number: 4,
// gif: Horse4,
// },
// {
// name: 'American Pharoah',
// number: 5,
// gif: Horse5,
// },
// {
// name: 'Justify',
// number: 6,
// gif: Horse6,
// },
// {
// name: 'Citation',
// number: 7,
// gif: Horse7,
// },
// {
// name: 'Count Fleet',
// number: 8,
// gif: Horse8,
// },
// {
// name: 'Assault',
// number: 9,
// gif: Horse9,
// },
// {
// name: 'Whirlaway',
// number: 10,
// gif: Horse10,
// },
// ];

// const Leaderboard = () => {
// const [raceTime, setRaceTime] = useState(30); // default race time of 30 seconds
// const [raceStarted, setRaceStarted] = useState(false);
// const [raceFinished, setRaceFinished] = useState(false);
// const [horsesState, setHorsesState] = useState(horses.slice(0, 4).map((horse, index) => ({
// ...horse,
// position: 0,
// speed: Math.floor(Math.random() * 10) + 1, // random speed between 1 and 10
// distance: 0,
// odds: Math.floor(Math.random() * 10) + 1, // random odds between 1 and 10
// rank: null,
// })));
// const [raceDuration, setRaceDuration] = useState(30); // default race duration of 30 seconds
// const [selectedHorses, setSelectedHorses] = useState(4); // default number of horses in the race is 4

// const startRace = () => {
// setRaceStarted(true);
// setRaceFinished(false);
// setHorsesState(
// horses
// .slice(0, selectedHorses)
// .map((horse) => ({
// ...horse,
// position: 0,
// distance: 0,
// rank: null,
// speed: Math.floor(Math.random() * 10) + 1, // random speed between 1 and 10
// odds: Math.floor(Math.random() * 10) + 1, // random odds between 1 and 10
// }))
// );
// };

// const finishRace = () => {
// setRaceStarted(false);
// setRaceFinished(true);
// };

// const restartRace = () => {
// setRaceTime(30);
// setRaceStarted(false);
// setRaceFinished(false);
// setHorsesState(horses.slice(0, 4).map((horse, index) => ({
// ...horse,
// position: 0,
// speed: Math.floor(Math.random() * 10) + 1, // random speed between 1 and 10
// distance: 0,
// odds: Math.floor(Math.random() * 10) + 1, // random odds between 1 and 10
// rank: null,
// })));
// };

// useEffect(() => {
// if (raceStarted && !raceFinished) {
// const intervalId = setInterval(() => {
// setHorsesState((prevState) => {
// const updatedHorses = prevState.map((horse) => {
// const distance = horse.distance + horse.speed;
// if (distance >= 100) {
// finishRace();
// return {
// ...horse,
// distance: 100,
// position: prevState.filter((prevHorse) => prevHorse !== horse && prevHorse.distance >= 100).length + 1,
// rank: null,
// };
// }
// return {
// ...horse,
// distance,
// };
// });
// return updatedHorses;
// });
// setRaceTime((prevTime) => prevTime - 1);
// }, 1000);
// return () => clearInterval(intervalId);
// } else if (raceFinished) {
// setHorsesState((prevState) => {
// const sortedHorses = prevState.slice().sort((a, b) => b.distance - a.distance);
// const rankedHorses = sortedHorses.map((horse, index) => ({
// ...horse,
// rank: index + 1,
// }));
// return rankedHorses;
// });
// }
// }, [raceStarted, raceFinished]);

// return (

// <div className="leaderboard">
// <div className="controls">
// <label htmlFor="race-duration-input">Race duration:</label>
// <input
// id="race-duration-input"
// type="number"
// min="10"
// max="60"
// value={raceDuration}
// onChange={(e) => setRaceDuration(parseInt(e.target.value))}
// />
// <label htmlFor="number-of-horses-input">Number of horses:</label>
// <input
// id="number-of-horses-input"
// type="number"
// min="2"
// max="10"
// value={selectedHorses}
// onChange={(e) => setSelectedHorses(parseInt(e.target.value))}
// />
// <button onClick={startRace}>Start Race</button>
// <button onClick={restartRace}>Restart Race</button>
// </div>
// {raceStarted && (
// <div className="race">
// <div className="track">
// {horsesState.map((horse, index) => (
// <div
// key={index}
// className={`horse horse-${horse.number}`}
// style={{
// backgroundImage: `url(${horse.gif})`,
// left: `${horse.distance}%`,
// }}
// >
// <div className="horse-info">
// <div className="horse-name">{horse.name}</div>
// <div className="horse-odds">Odds: {horse.odds} to 1</div>
// </div>
// </div>
// ))}
// </div>
// <div className="timer">{raceTime}</div>
// </div>
// )}
// {raceFinished && (
// <div className="results">
// <h2>Race Results</h2>
// <ol>
// {horsesState.map((horse, index) => (
// <li key={index}>
// {horse.rank}. {horse.name}
// </li>
// ))}
// </ol>
// </div>
// )}
// </div>
// );
// };
// export default Leaderboard;

// ALMOST THERE
// import React, { useState, useEffect } from 'react';
// import Horse1 from './images/horse (1).gif';
// import Horse2 from './images/horse (2).gif';
// import Horse3 from './images/horse (3).gif';
// import Horse4 from './images/horse (4).gif';
// import Horse5 from './images/horse (5).gif';
// import Horse6 from './images/horse (6).gif';
// import Horse7 from './images/horse (7).gif';
// import Horse8 from './images/horse (8).gif';
// import Horse9 from './images/horse (9).gif';
// import Horse10 from './images/horse (10).gif';
// import './Leaderboard.css';

// const horses = [
// {
// name: 'Secretariat',
// number: 1,
// gif: Horse1,
// },
// {
// name: "Man o' War",
// number: 2,
// gif: Horse2,
// },
// {
// name: 'Seattle Slew',
// number: 3,
// gif: Horse3,
// },
// {
// name: 'Affirmed',
// number: 4,
// gif: Horse4,
// },
// {
// name: 'American Pharoah',
// number: 5,
// gif: Horse5,
// },
// {
// name: 'Justify',
// number: 6,
// gif: Horse6,
// },
// {
// name: 'Citation',
// number: 7,
// gif: Horse7,
// },
// {
// name: 'Count Fleet',
// number: 8,
// gif: Horse8,
// },
// {
// name: 'Assault',
// number: 9,
// gif: Horse9,
// },
// {
// name: 'Whirlaway',
// number: 10,
// gif: Horse10,
// },
// ];

// const Leaderboard = () => {
// const [raceTime, setRaceTime] = useState(30); // default race time of 30 seconds
// const [raceStarted, setRaceStarted] = useState(false);
// const [raceFinished, setRaceFinished] = useState(false);
// const [horsesState, setHorsesState] = useState(horses.slice(0, 4).map((horse, index) => ({
// ...horse,
// position: 0,
// speed: Math.floor(Math.random() * 10) + 1, // random speed between 1 and 10
// distance: 0,
// odds: Math.floor(Math.random() * 10) + 1, // random odds between 1 and 10
// rank: null,
// })));
// const [raceDuration, setRaceDuration] = useState(30); // default race duration of 30 seconds
// const [selectedHorses, setSelectedHorses] = useState(4); // default number of horses in the race is 4

// const startRace = () => {
// setRaceStarted(true);
// setRaceFinished(false);
// setHorsesState(horses.slice(0, selectedHorses).map(horse => ({
// ...horse,
// position: 0,
// distance: 0,
// rank: null,
// speed: Math.floor(Math.random() * 10) + 1, // random speed between 1 and 10
// odds: Math.floor(Math.random() * 10) + 1, // random odds between 1 and 10
// })));
// };

// const finishRace = () => {
// setRaceStarted(false);
// setRaceFinished(true);
// };

// const restartRace = () => {
//   setRaceTime(30);
//   setRaceStarted(false);
//   setRaceFinished(false);
//   setHorsesState(horses.slice(0, selectedHorses).map(horse => ({
//   ...horse,
//   position: 0,
//   distance: 0,
//   rank: null,
//   speed: Math.floor(Math.random() * 10) + 1,
//   odds: Math.floor(Math.random() * 10) + 1,
//   })));
//   };

//   useEffect(() => {
//   let intervalId;
//   if (raceStarted) {
//   intervalId = setInterval(() => {
//   setHorsesState(prevState => {
//   const updatedHorses = [...prevState];
//   let finishedCount = 0;

//   updatedHorses.forEach(horse => {
//   if (horse.position < raceDuration) {
//   horse.distance += horse.speed;
//   horse.position = Math.min(horse.position + horse.speed, raceDuration);
//   } else if (!horse.rank) {
//   horse.rank = updatedHorses.filter(h => h.rank).length + 1;
//   finishedCount++;
//   }
//   });

//   if (finishedCount === selectedHorses) {
//   finishRace();
//   }

//   return updatedHorses;
//   });
//   }
//   , 1000);
//   }

//   return () => clearInterval(intervalId);
//   }, [raceStarted, raceDuration, selectedHorses]);

//   return (

//   <div className="leaderboard">
//   <h1>React Horse Racing</h1>
//   {!raceStarted && !raceFinished && (
//   <div className="form">
//   <label>
//   Race Time (in seconds):
//   <input type="number" value={raceTime} onChange={(e) => setRaceTime(parseInt(e.target.value))} />
//   </label>
//   <label>
//   Number of Horses:
//   <select value={selectedHorses} onChange={(e) => setSelectedHorses(parseInt(e.target.value))}>
//   {[...Array(horses.length).keys()].map(num => (
//   <option key={num + 1} value={num + 1}>{num + 1}</option>
//   ))}
//   </select>
//   </label>
//   <button onClick={startRace}>Start Race</button>
//   </div>
//   )}
//   {raceStarted && (
//   <div className="race">
//   {horsesState.map(horse => (
//   <div key={horse.number} className="horse">
//   <img src={horse.gif} alt={horse.name} style={{ marginLeft: horse.distance }} />
//   <span className="horse-name">{horse.name}</span>
//   </div>
//   ))}
//   </div>
//   )}
//   {raceFinished && (
//   <div className="results">
//   <h2>Race Results</h2>
//   <ol>
//   {horsesState.map(horse => (
//   <li key={horse.number}>
//   <span>{horse.rank}</span>
//   <span>{horse.name}</span>
//   <span>{horse.odds} to 1</span>
//   </li>
//   ))}
//   </ol>
//   <button onClick={restartRace}>Restart Race</button>
//   </div>
//   )}
//   </div>
//   );
//   };
//   export default Leaderboard;



// import React, { useState, useEffect, useRef } from "react";
// import "./Leaderboard.css";
// import Horse1 from './images/horse (1).gif';
// import Horse2 from './images/horse (2).gif';
// import Horse3 from './images/horse (3).gif';
// import Horse4 from './images/horse (4).gif';
// import Horse5 from './images/horse (5).gif';
// import Horse6 from './images/horse (6).gif';
// import Horse7 from './images/horse (7).gif';
// import Horse8 from './images/horse (8).gif';
// import Horse9 from './images/horse (9).gif';
// import Horse10 from './images/horse (10).gif';

// const horses = [
//   { name: 'Secretariat', number: 1, gif: Horse1 },
//   { name: "Man o' War", number: 2, gif: Horse2 },
//   { name: 'Seattle Slew', number: 3, gif: Horse3 },
//   { name: 'Affirmed', number: 4, gif: Horse4 },
//   { name: 'American Pharoah', number: 5, gif: Horse5 },
//   { name: 'Justify', number: 6, gif: Horse6 },
//   { name: 'Citation', number: 7, gif: Horse7 },
//   { name: 'Count Fleet', number: 8, gif: Horse8 },
//   { name: 'Assault', number: 9, gif: Horse9 },
//   { name: 'Whirlaway', number: 10, gif: Horse10 },
// ];

// const Horse = ({ horse, trackLength, raceDuration, onFinish, onUpdate, isSelected }) => {
//   const [speed, setSpeed] = useState(Math.random() * 0.1 + 0.1);
//   const [position, setPosition] = useState(0);
//   const [startTime, setStartTime] = useState(null);
//   const [finishTime, setFinishTime] = useState(null);
//   const intervalRef = useRef(null);

//   const handleStart = () => {
//     setStartTime(Date.now());
//     intervalRef.current = setInterval(() => {
//       setSpeed(Math.random() * 0.1 + 0.1);
//       setPosition((position + speed) % trackLength);
//       onUpdate(horse.number, position);
//       if (position >= trackLength) {
//         clearInterval(intervalRef.current);
//         setFinishTime(Date.now());
//         onFinish(horse.number);
//       }
//     }, raceDuration);
//   };

//   useEffect(() => {
//     if (isSelected) {
//       handleStart();
//     } else {
//       clearInterval(intervalRef.current);
//       setStartTime(null);
//       setFinishTime(null);
//       setPosition(0);
//       setSpeed(Math.random() * 0.1 + 0.1);
//     }
//   }, [isSelected]);

//   return (
//     <div className="horse">
//       <img src={horse.gif} alt={horse.name} className="horse-gif" style={{ left: `${(position / trackLength) * 100}%` }} />
//       <div className="horse-details">
//         <span className="horse-name">{horse.name}</span>
//         {startTime && <span className="horse-time">{((finishTime || Date.now()) - startTime) / 1000} s</span>}
//       </div>
//     </div>
//   );
// };

//         const Leaderboard = ({ trackLength = 1000, raceDuration = 50 }) => {
//         const [selectedHorse, setSelectedHorse] = useState(null);
//         const [positions, setPositions] = useState(horses.map(() => 0));
//         const [finishedHorses, setFinishedHorses] = useState([]);
//         const [isFinished, setIsFinished] = useState(false);

//         const handleUpdatePosition = (horseNumber, newPosition) => {
//         setPositions((prevPositions) => {
//         const newPositions = [...prevPositions];
//         newPositions[horseNumber - 1] = newPosition;
//         return newPositions;
//         });
//         };

//         const handleFinish = (horseNumber) => {
//         setFinishedHorses((prevFinishedHorses) => [...prevFinishedHorses, horseNumber]);
//         if (finishedHorses.length === horses.length - 1) {
//         setIsFinished(true);
//         }
//         };

//         return (
//         <div className="leaderboard">
//         <div className="track" style={{ width: `${trackLength}px` }}>
//         {horses.map((horse) => (
//         <Horse
//         key={horse.number}
//         horse={horse}
//         trackLength={trackLength}
//         raceDuration={raceDuration}
//         onFinish={handleFinish}
//         onUpdate={handleUpdatePosition}
//         isSelected={selectedHorse === horse.number}
//         />
//         ))}
//         </div>
//         <div className="controls">
//         <button onClick={() => setSelectedHorse(null)}>Reset</button>
//         {!isFinished ? (
//         <>
//         <span>Select a horse to start the race</span>
//         {horses.map((horse) => (
//         <button key={horse.number} disabled={selectedHorse !== null} onClick={() => setSelectedHorse(horse.number)}>
//         {horse.name}
//         </button>
//         ))}
//         </>
//         ) : (
//         <>
//         <span>Race finished!</span>
//         <button onClick={() => window.location.reload()}>Restart</button>
//         </>
//         )}
//         </div>
//         <div className="positions">
//         <h2>Positions</h2>
//         <ol>
//         {positions
//         .map((position, index) => ({ position, horse: horses[index] }))
//         .sort((a, b) => b.position - a.position)
//         .map((result, index) => (
//         <li key={result.horse.number}>
//         {index === 0 && <span className="medal gold">🥇</span>}
//         {index === 1 && <span className="medal silver">🥈</span>}
//         {index === 2 && <span className="medal bronze">🥉</span>}
//         <span className="horse-name">{result.horse.name}</span>
// <span className="horse-position">{result.position.toFixed(2)}m</span>

// </li>
// ))}
// </ol>
// </div>
// </div>
// );
// };
// export default Leaderboard;

// import React, { useState } from "react";
// import Stopwatch from "./Stopwatch";
// import Dropdown from "./Dropdown";
// import Horse from "./Horse";
// import { Button } from "react-bootstrap";

// const Leaderboard = () => {
//   // State variables
//   const [trackLength, setTrackLength] = useState(0);
//   const [raceDuration, setRaceDuration] = useState(0);
//   const [horses, setHorses] = useState([]);
//   const [raceStarted, setRaceStarted] = useState(false);
//   const [winningHorses, setWinningHorses] = useState([]);

//   // Function to generate random values for trackLength, raceDuration, and the number of horses
//   const generateRandomValues = () => {
//     const newTrackLength = Math.floor(Math.random() * 10) + 1;
//     const newRaceDuration = Math.floor(Math.random() * 10) + 1;
//     const numberOfHorses = Math.floor(Math.random() * 6) + 4;
//     return { newTrackLength, newRaceDuration, numberOfHorses };
//   };

//   // Function to initialize the horses with their respective properties
//   const initializeHorses = (numberOfHorses) => {
//     const horseNames = [
//       "Thunderbolt",
//       "Lightning",
//       "Windstorm",
//       "Blaze",
//       "Wildfire",
//       "Stormy",
//       "Spirit",
//       "Flash",
//       "Bolt",
//       "Comet",
//       "Rocket",
//       "Galaxy",
//       "Cosmo",
//       "Nova",
//       "Aurora",
//       "Star",
//       "Moonbeam",
//       "Sunburst",
//       "Glitter",
//       "Rainbow",
//     ];
//     const horsesArray = [];
//     for (let i = 1; i <= numberOfHorses; i++) {
//       const horseNameIndex = Math.floor(Math.random() * horseNames.length);
//       const horseName = horseNames[horseNameIndex];
//       horseNames.splice(horseNameIndex, 1);
//       const gifIndex = Math.floor(Math.random() * 7) + 1;
//       const gif = `horse${gifIndex}.gif`;
//       const horse = {
//         name: horseName,
//         number: i,
//         gif: gif,
//         odds: Math.floor(Math.random() * 10) + 1,
//         jockey: "Jockey Name",
//         owner: "Owner Name",
//         trainer: "Trainer Name",
//         position: 0,
//         speed: 0,
//       };
//       horsesArray.push(horse);
//     }
//     return horsesArray;
//   };

//   // Function to randomly assign values to the horses' properties
//   const assignHorseValues = () => {
//     const updatedHorses = horses.map((horse) => {
//       horse.odds = Math.floor(Math.random() * 10) + 1;
//       horse.jockey = "Jockey Name";
//       horse.owner = "Owner Name";
//       horse.trainer = "Trainer Name";
//       return horse;
//     });
//     setHorses(updatedHorses);
//   };

//   // Function to handle the start button click event
//   const handleStartRace = () => {
//     const { newTrackLength, newRaceDuration, numberOfHorses } =
//       generateRandomValues();
//     // set
// // Set the state variables with the new values //////////////////////////////////////////////////////////////////////////////
// setTrackLength(newTrackLength);
// setRaceDuration(newRaceDuration);
// setHorses(initializeHorses(numberOfHorses));
// setWinningHorses([]);
// setRaceStarted(true);
// // Randomly assign values to the horses' properties
// assignHorseValues();
// };

// // Function to handle the reset button click event
// const handleResetRace = () => {
// setTrackLength(0);
// setRaceDuration(0);
// setHorses([]);
// setWinningHorses([]);
// setRaceStarted(false);
// };

// // Function to calculate the position of each horse based on their speed and elapsed time
// const calculateHorsePosition = (horse, elapsedTime) => {
// const speedPerSecond = horse.speed / trackLength;
// const distanceTraveled = speedPerSecond * elapsedTime;
// if (distanceTraveled >= trackLength) {
// return trackLength;
// }
// return distanceTraveled;
// };

// // Function to sort the horses by their position and update the leaderboard accordingly
// const updateLeaderboard = (elapsedTime) => {
// const updatedHorses = horses.map((horse) => {
// const position = calculateHorsePosition(horse, elapsedTime);
// horse.position = position;
// return horse;
// });
// updatedHorses.sort((a, b) => b.position - a.position);
// setHorses(updatedHorses);
// };

// // Function to check if the race has ended and display the winning horses
// const checkForWinners = (elapsedTime) => {
// const finishedHorses = horses.filter((horse) =>
// calculateHorsePosition(horse, elapsedTime) >= trackLength
// );
// const winningHorses = finishedHorses.slice(0, 3);
// setWinningHorses(winningHorses);
// if (winningHorses.length > 0) {
// setRaceStarted(false);
// }
// };

// return (
// <div className="container">
// <h1>Horse Race Leaderboard</h1>
// <div className="row">
// <div className="col-md-6">
// <h2>Race Information</h2>
// <p>Track Length: {trackLength} furlongs</p>
// <p>Race Duration: {raceDuration} seconds</p>
// <Button
//          variant="success"
//          onClick={handleStartRace}
//          disabled={raceStarted}
//        >
// {raceStarted ? "Race in progress..." : "Start Race"}
// </Button>{" "}
// <Button
//          variant="danger"
//          onClick={handleResetRace}
//          disabled={!raceStarted}
//        >
// Reset Race
// </Button>
// </div>
// <div className="col-md-6">
// <Stopwatch
//          raceDuration={raceDuration}
//          raceStarted={raceStarted}
//          updateLeaderboard={updateLeaderboard}
//          checkForWinners={checkForWinners}
//        />
// </div>
// </div>
// <div className="row">
// <div className="col-md-6">
// <Dropdown horses={horses} />
// </div>
// <div className="col-md-6">
// <table className="table">
// <thead>
// <tr>
// <th>Position</th>
// <th>Name</th>
// <th>Jockey</th>
// <th>Owner</th>
// <th>Trainer</th>
// </tr>
// </thead>
// <tbody>
// {horses.map((horse, index) => (
// <Horse
// key={index}
// horse={horse}
// index={index}
// />
// ))}

// </tbody>
// </table>
// </div>
// </div>
// {winningHorses.length > 0 && (
// <div className="row">
// <div className="col-md-12">
// <h2>Winning Horses</h2>
// <ul>
// {winningHorses.map((horse) => (
// <li key={horse.id}>
// {horse.name} ({horse.jockey})
// </li>
// ))}
// </ul>
// </div>
// </div>
// )}
// </div>
// );
// }
// export default Leaderboard;

//BROKEN
// import React, { useState, useEffect, useRef } from "react";
// import "./Leaderboard.css";
// import Horse1 from './images/horse (1).gif';
// import Horse2 from './images/horse (2).gif';
// import Horse3 from './images/horse (3).gif';
// import Horse4 from './images/horse (4).gif';
// import Horse5 from './images/horse (5).gif';
// import Horse6 from './images/horse (6).gif';
// import Horse7 from './images/horse (7).gif';
// import Horse8 from './images/horse (8).gif';
// import Horse9 from './images/horse (9).gif';
// import Horse10 from './images/horse (10).gif';

// const horses = [
//   { name: 'Secretariat', number: 1, gif: Horse1 },
//   { name: "Man o' War", number: 2, gif: Horse2 },
//   { name: 'Seattle Slew', number: 3, gif: Horse3 },
//   { name: 'Affirmed', number: 4, gif: Horse4 },
//   { name: 'American Pharoah', number: 5, gif: Horse5 },
//   { name: 'Justify', number: 6, gif: Horse6 },
//   { name: 'Citation', number: 7, gif: Horse7 },
//   { name: 'Count Fleet', number: 8, gif: Horse8 },
//   { name: 'Assault', number: 9, gif: Horse9 },
//   { name: 'Whirlaway', number: 10, gif: Horse10 },
// ];

// const getRandomNumber = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const getRandomTrackLength = () => {
//   return (getRandomNumber(6, 26) / 10).toFixed(1);
// };

// const getRandomRaceDuration = (trackLength) => {
//   const minDuration = 30;
//   const maxDuration = 120;
//   const durationIncrement = 5;
//   const numIncrements = Math.round(trackLength * 10);
//   const randomIncrement = getRandomNumber(0, numIncrements) * durationIncrement;
//   const duration = minDuration + randomIncrement;
//   return duration;
// };

// const getHorsesInRace = () => {
//   const minHorses = 3;
//   const maxHorses = 10;
//   return getRandomNumber(minHorses, maxHorses);
// };

// const getHorseOdds = (horseNumber, numHorses) => {
//   const maxOdds = 99;
//   const oddsIncrement = Math.round(maxOdds / (numHorses - 1));
//   const horseOdds = maxOdds - (oddsIncrement * (horseNumber - 1));
//   return horseOdds;
// };

// const Leaderboard = () => {
//   const [raceStarted, setRaceStarted] = useState(false);
//   const [raceFinished, setRaceFinished] = useState(false);
//   const [trackLength, setTrackLength] = useState(getRandomTrackLength());
//   const [raceDuration, setRaceDuration] = useState(getRandomRaceDuration(trackLength));
//   const [horsesInRace, setHorsesInRace] = useState(getHorsesInRace());
//   const [selectedHorses, setSelectedHorses] = useState([]);
//   const [stopwatch, setStopwatch] = useState(0);
//   const [raceResults, setRaceResults] = useState([]);
//   const raceTimerRef = useRef();

//   const handleStartRace = () => {
//     // Reset race results
//     setRaceResults([]);
//     // Set selected horses for race
//     const selected = [];
//     while (selected.length < horsesInRace) {
//     const horse = horses[getRandomNumber(0, 9)];
//     if (!selected.includes(horse)) {
//     selected.push(horse);
//     }
//     }
//     setSelectedHorses(selected);
//     // Start race timer
//     setStopwatch(0);
//     raceTimerRef.current = setInterval(() => {
//     setStopwatch((prevStopwatch) => prevStopwatch + 1);
//     }, 10);
//     // Set race started flag
//     setRaceStarted(true);
//     };

//     const handleFinishRace = () => {
//     // Stop race timer
//     clearInterval(raceTimerRef.current);
//     // Sort selected horses by distance traveled
//     const results = [...selectedHorses].sort((a, b) => b.distance - a.distance);
//     // Calculate and assign odds for each horse
//     const numHorses = results.length;
//     results.forEach((horse, index) => {
//     horse.odds = getHorseOdds(horse.number, numHorses);
//     });
//     // Set race results and finished flag
//     setRaceResults(results);
//     setRaceFinished(true);
//     };

//     const handleResetRace = () => {
//     // Reset state values
//     setRaceStarted(false);
//     setRaceFinished(false);
//     setTrackLength(getRandomTrackLength());
//     setRaceDuration(getRandomRaceDuration(trackLength));
//     setHorsesInRace(getHorsesInRace());
//     setSelectedHorses([]);
//     setStopwatch(0);
//     setRaceResults([]);
//     };

//     const renderHorse = (horse, index) => {
//     return (
//     <div key={index} className="horse-container">
//     <img src={horse.gif} alt={horse.name} className="horse-gif" />
//     <div className="horse-info">
//     <div className="horse-name">{horse.name}</div>
//     <div className="horse-number">#{horse.number}</div>
//     </div>
//     </div>
//     );
//     };

//     const renderRaceResults = () => {
//     return (
//     <div className="race-results-container">
//     <div className="race-results-header">Race Results</div>
//     <table className="race-results-table">
//     <thead>
//     <tr>
//     <th>Place</th>
//     <th>Name</th>
//     <th>Odds</th>
//     <th>Distance</th>
//     </tr>
//     </thead>
//     <tbody>
//     {raceResults.map((horse, index) => (
//     <tr key={index}>
//     <td>{index + 1}</td>
//     <td>{horse.name}</td>
//     <td>{horse.odds}:1</td>
//     <td>{horse.distance.toFixed(1)} furlongs</td>
//     </tr>
//     ))}
//     </tbody>
//     </table>
//     <button className="reset-button" onClick={handleResetRace}>
//     Reset Race
//     </button>
//     </div>
//     );
//     };

//     return (
//     <div className="leaderboard-container">
//     {!raceStarted && !raceFinished && (
//     <button className="start-button" onClick={handleStartRace}>
//     Start Race
//     </button>
//     )}
//     {raceStarted && (
//     <div className="track-container">
//     <div className="track-length">{${trackLength} furlongs}</div>
//     <div className="race-timer">{(stopwatch / 100).toFixed(2)}</div>
//     {selectedHorses.map((horse, index) => (
//     <div
//     key={index} className={horse-track horse-${index + 1}}
// style={{ left: ${horse.distance / trackLength * 100}% }}

// <img src={horse.gif} alt={horse.name} className="horse-gif" />
// </div>
// ))}
// </div>
// )}
// {raceFinished && renderRaceResults()}
// {selectedHorses.length > 0 && (
// <div className="horse-selection-container">
// <div className="horse-selection-header">
// Selected Horses ({selectedHorses.length} of {horsesInRace})
// </div>
// <div className="horse-selection-list">
// {selectedHorses.map((horse, index) => renderHorse(horse, index))}
// </div>
// <button className="finish-button" onClick={handleFinishRace}>
// Finish Race
// </button>
// </div>
// )}
// </div>
// );
// };
// export default Leaderboard;

// import React, { useState, useEffect } from 'react';
// import './Leaderboard.css';
// import horse1 from './images/horse (1).gif';
// import horse2 from './images/horse (2).gif';
// import horse3 from './images/horse (3).gif';
// import horse4 from './images/horse (4).gif';
// import horse5 from './images/horse (5).gif';
// import horse6 from './images/horse (6).gif';
// import horse7 from './images/horse (7).gif';
// import horse8 from './images/horse (8).gif';
// import horse9 from './images/horse (9).gif';
// import horse10 from './images/horse (10).gif';

// const horses = [    { name: 'Secretariat', number: 1, gif: horse1 },    { name: "Man o' War", number: 2, gif: horse2 },    { name: 'Seattle Slew', number: 3, gif: horse3 },    { name: 'Affirmed', number: 4, gif: horse4 },    { name: 'American Pharoah', number: 5, gif: horse5 },    { name: 'Justify', number: 6, gif: horse6 },    { name: 'Citation', number: 7, gif: horse7 },    { name: 'Count Fleet', number: 8, gif: horse8 },    { name: 'Assault', number: 9, gif: horse9 },    { name: 'Whirlaway', number: 10, gif: horse10 },];

// const Leaderboard = () => {
//   const [trackLength, setTrackLength] = useState(0);
//   const [raceDuration, setRaceDuration] = useState(0);
//   const [numHorses, setNumHorses] = useState(0);
//   const [horsesData, setHorsesData] = useState([]);
//   const [raceStarted, setRaceStarted] = useState(false);
//   const [elapsedTime, setElapsedTime] = useState(0);
//   const [bettingHorses, setBettingHorses] = useState([]);

//   useEffect(() => {
//     generateRandomValues();
//     initializeHorses();
//   }, []);

//   const generateRandomValues = () => {
//     const trackLength = Math.floor(Math.random() * 10000) + 1000;
//     const raceDuration = Math.floor(Math.random() * 120) + 30;
//     const numHorses = Math.floor(Math.random() * 6) + 5;
//     setTrackLength(trackLength);
//     setRaceDuration(raceDuration);
//     setNumHorses(numHorses);
//   };

//   const initializeHorses = () => {
//     const shuffledHorses = shuffle(horses.slice());
//     const selectedHorses = shuffledHorses.slice(0, numHorses);
//     const initializedHorses = selectedHorses.map((horse) => {
//       const odds = Math.floor(Math.random() * 10) + 1;
//       const jockey = 'Jockey ' + Math.floor(Math.random() * 1000);
//       const owner = 'Owner ' + Math.floor(Math.random() * 1000);
//       const trainer = 'Trainer ' + Math.floor(Math.random() * 1000);
//       return {
//         ...horse,
//         odds,
//         jockey,
//         owner,
//         trainer,
//         position: 0,
//         speed: 0,
//         finished: false,
//       };
//     });
//     setHorsesData(initializedHorses);
//   };
// ////////////////////////////////////////////////////////////////////////////////////////////////
//   const shuffle = (array) => {
//   for (let i = array.length - 1; i > 0; i--) {
//   const j = Math.floor(Math.random() * (i + 1));
//   [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
//   };

//   const startRace = () => {
//   setRaceStarted(true);
//   const intervalId = setInterval(() => {
//   setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
//   const updatedHorsesData = horsesData.map((horse) => {
//   if (!horse.finished) {
//   const acceleration = Math.floor(Math.random() * 10) + 1;
//   const updatedSpeed = horse.speed + acceleration;
//   const updatedPosition = horse.position + updatedSpeed;
//   if (updatedPosition >= trackLength) {
//   horse.finished = true;
//   horse.position = trackLength;
//   return horse;
//   }
//   horse.speed = updatedSpeed;
//   horse.position = updatedPosition;
//   }
//   return horse;
//   });
//   setHorsesData(updatedHorsesData);
//   }, 1000);
//   setTimeout(() => {
//   clearInterval(intervalId);
//   setRaceStarted(false);
//   setElapsedTime(0);
//   }, raceDuration * 1000);
//   };

//   const handleHorseSelection = (horse) => {
//   if (bettingHorses.includes(horse)) {
//   setBettingHorses((prevBettingHorses) =>
//   prevBettingHorses.filter((selectedHorse) => selectedHorse !== horse)
//   );
//   } else {
//   setBettingHorses((prevBettingHorses) => [...prevBettingHorses, horse]);
//   }
//   };

//   return (
//   <div className="leaderboard-container">
//   <div className="race-settings">
//   <div className="setting">
//   <span>Track Length:</span> {trackLength}m
//   </div>
//   <div className="setting">
//   <span>Race Duration:</span> {raceDuration}s
//   </div>
//   <div className="setting">
//   <span>Number of Horses:</span> {numHorses}
//   </div>
//   <button
//          className="start-race-btn"
//          onClick={startRace}
//          disabled={raceStarted}
//        >
//   {raceStarted ? 'Race in Progress' : 'Start Race'}
//   </button>
//   </div>
//   <div className="race-track">
//   {horsesData.map((horse) => (
//   <div
//   key={horse.number}
//   className="horse"
//   style={{ bottom: horse.position }}
//   >
//   <img src={horse.gif} alt={horse.name} />
//   <div className="horse-info">
//   <div className="horse-name">{horse.name}</div>
//   <div className="horse-details">
//   <div>Owner: {horse.owner}</div>
//   <div>Trainer: {horse.trainer}</div>
//   <div>Jockey: {horse.jockey}</div>
//   <div>Odds: {horse.odds}</div>
//   </div>
//   <div className="horse-bet">
//   <input
//   type="checkbox"
//   checked={bettingHorses.includes(horse)}
//   onChange={() => handleHorseSelection(horse)}
//   disabled={raceStarted}
//   />
//   <span>Bet</span>
//   </div>
//   </div>
//   </div>
//   ))}
//   <div className="finish-line" style={{ bottom: trackLength }}>
//   Finish Line
//   </div>
//   </div>
//   <div className="race-info">
//   <div className="elapsed-time">Elapsed Time: {elapsedTime}s</div>

// <div className="leaderboard-header">Leaderboard</div>
// <table>
// <thead>
// <tr>
// <th>Position</th>
// <th>Horse Name</th>
// <th>Owner</th>
// <th>Trainer</th>
// <th>Jockey</th>
// <th>Odds</th>
// </tr>
// </thead>
// <tbody>
// {shuffle(horsesData)
// .sort((a, b) => b.position - a.position)
// .map((horse, index) => (
// <tr key={horse.number}>
// <td>{horse.finished ? index + 1 : '-'}</td>
// <td>{horse.name}</td>
// <td>{horse.owner}</td>
// <td>{horse.trainer}</td>
// <td>{horse.jockey}</td>
// <td>{horse.odds}</td>
// </tr>
// ))}
// </tbody>
// </table>
// <div className="betting-info">
// <div className="betting-header">My Bets</div>
// {bettingHorses.length > 0 ? (
// <ul>
// {bettingHorses.map((horse) => (
// <li key={horse.number}>{horse.name}</li>
// ))}
// </ul>
// ) : (
// <p>You haven't placed any bets yet.</p>
// )}
// </div>
// </div>
// </div>
// );
// };
// export default Leaderboard;

// // import React, { useState, useEffect, useRef } from "react";
// // import "./Leaderboard.css";
// import horse1 from './images/horse (1).gif';
// import horse2 from './images/horse (2).gif';
// import horse3 from './images/horse (3).gif';
// import horse4 from './images/horse (4).gif';
// import horse5 from './images/horse (5).gif';
// import horse6 from './images/horse (6).gif';
// import horse7 from './images/horse (7).gif';
// import horse8 from './images/horse (8).gif';
// import horse9 from './images/horse (9).gif';
// import horse10 from './images/horse (10).gif';

// const horses = [
//   { name: 'Secretariat', number: 1, gif: horse1 },
//   { name: "Man o' War", number: 2, gif: horse2 },
//   { name: 'Seattle Slew', number: 3, gif: horse3 },
//   { name: 'Affirmed', number: 4, gif: horse4 },
//   { name: 'American Pharoah', number: 5, gif: horse5 },
//   { name: 'Justify', number: 6, gif: horse6 },
//   { name: 'Citation', number: 7, gif: horse7 },
//   { name: 'Count Fleet', number: 8, gif: horse8 },
//   { name: 'Assault', number: 9, gif: horse9 },
//   { name: 'Whirlaway', number: 10, gif: horse10 },
// ];

// const Leaderboard = () => {
//   const [trackLength, setTrackLength] = useState(2); // track length in 1/8 mile increments
//   const [numHorses, setNumHorses] = useState(4);
//   const [selectedHorseNames, setSelectedHorseNames] = useState([]);
//   const [raceStarted, setRaceStarted] = useState(false);
//   const [raceTime, setRaceTime] = useState(0);
//   const [raceDuration, setRaceDuration] = useState(20); // default duration in seconds
//   const [horsePositions, setHorsePositions] = useState([]);

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
//     const numHorses = Math.max(4, Math.floor(Math.random() * 7 + 4));
//     const newHorsePositions = Array(numHorses).fill(0);
//     const newSelectedHorseNames = Array(numHorses).fill("");
//     setSelectedHorseNames(newSelectedHorseNames);
//     setHorsePositions(newHorsePositions);
//     setNumHorses(numHorses);
//     setRaceStarted(true);
//     setRaceTime(0);
//     setRaceDuration(Math.floor(Math.random() * 11) + 20); //
// // clear any existing timers
// clearInterval(timerRef.current);
//     // start timer for race duration
// const timer = setInterval(() => {
//   setRaceTime((time) => time + 1);
// }, 1000);
// timerRef.current = timer;
// };

// const handleSelectHorse = (index, name) => {
// const newSelectedHorseNames = [...selectedHorseNames];
// newSelectedHorseNames[index] = name;
// setSelectedHorseNames(newSelectedHorseNames);
// };

// return (
// <div className="leaderboard">
// <div className="controls">
// <label>
// Track Length:
// <input
// type="range"
// min={2}
// max={10}
// value={trackLength}
// onChange={(e) => setTrackLength(Number(e.target.value))}
// />
// {trackLength * 0.125} miles
// </label>
// <label>
// Number of Horses:
// <input
// type="range"
// min={4}
// max={10}
// value={numHorses}
// onChange={(e) => setNumHorses(Number(e.target.value))}
// />
// {numHorses}
// </label>
// <button disabled={raceStarted} onClick={handleStartRace}>
// Start Race
// </button>
// <div className="time">
// {`raceStarted ? Time: ${raceTime}s : "Click Start to begin race"`}
// </div>
// </div>
// <div className="race">
// {horses.slice(0, numHorses).map((horse, index) => (
// <div key={index} className="horse">
// <img src={horse.gif} alt={horse.name} />
// <div className="horse-info">
// <div className="name">{horse.name}</div>
// <div className="number">#{horse.number}</div>
// {raceStarted ? (
// <div className="position">{horsePositions[index].toFixed(2)}</div>
// ) : (
// <div className="select">
// <select
// value={selectedHorseNames[index]}
// onChange={(e) => handleSelectHorse(index, e.target.value)}
// >
// <option value="">Select Horse</option>
// {horses.map((horse) => (
// <option key={horse.name} value={horse.name}>
// {horse.name}
// </option>
// ))}
// </select>
// </div>
// )}
// </div>
// </div>
// ))}
// </div>
// </div>
// );
// };

// export default Leaderboard;

// import React, { useState, useEffect, useRef } from "react";
// import "./Leaderboard.css";

// import Horse1 from './images/horse (1).gif';
// import Horse2 from './images/horse (2).gif';
// import Horse3 from './images/horse (3).gif';
// import Horse4 from './images/horse (4).gif';
// import Horse5 from './images/horse (5).gif';
// import Horse6 from './images/horse (6).gif';
// import Horse7 from './images/horse (7).gif';
// import Horse8 from './images/horse (8).gif';
// import Horse9 from './images/horse (9).gif';
// import Horse10 from './images/horse (10).gif';

// const horses = [
// { name: 'Secretariat', number: 1, gif: Horse1 },
// { name: "Man o' War", number: 2, gif: Horse2 },
// { name: 'Seattle Slew', number: 3, gif: Horse3 },
// { name: 'Affirmed', number: 4, gif: Horse4 },
// { name: 'American Pharoah', number: 5, gif: Horse5 },
// { name: 'Justify', number: 6, gif: Horse6 },
// { name: 'Citation', number: 7, gif: Horse7 },
// { name: 'Count Fleet', number: 8, gif: Horse8 },
// { name: 'Assault', number: 9, gif: Horse9 },
// { name: 'Whirlaway', number: 10, gif: Horse10 },
// ];

// const Leaderboard = () => {
// const [trackLength, setTrackLength] = useState(2); // track length in 1/8 mile increments
// const [numHorses, setNumHorses] = useState(6);
// const [selectedHorseNames, setSelectedHorseNames] = useState(Array(numHorses).fill(""));
// const [raceStarted, setRaceStarted] = useState(false);
// const [raceTime, setRaceTime] = useState(0);
// const [raceDuration, setRaceDuration] = useState(20); // default duration in seconds
// const [horsePositions, setHorsePositions] = useState(Array(numHorses).fill(0));

// const timerRef = useRef(null);

// useEffect(() => {
// if (raceStarted) {
// const interval = setInterval(() => {
// const newPositions = horsePositions.map((position, index) => {
// let newPosition = position + Math.random() * 0.5;
// if (newPosition >= trackLength) {
// newPosition = trackLength;
// setRaceStarted(false);
// clearInterval(interval);
// clearInterval(timerRef.current);
// }
// return newPosition;
// });
// setHorsePositions(newPositions);
// }, Math.floor(Math.random() * 3000) + 2000); // update every 2-5 seconds
// return () => clearInterval(interval);
// }
// }, [raceStarted, horsePositions, trackLength]);

// const handleStartRace = () => {
// setRaceStarted(true);
// setRaceTime(0);
// setHorsePositions(Array(numHorses).fill(0));
// setRaceDuration(Math.floor(Math.random() * 11) + 20); // race duration
// timerRef.current = setInterval(() => {
// setRaceTime((time) => time + 1);
// }, 1000);
// };

// const handleTrackLengthChange = (event) => {
// const value = parseInt(event.target.value);
// if (!isNaN(value)) {
// setTrackLength(value);
// setHorsePositions(Array(numHorses).fill(0));
// }
// };

// const handleNumHorsesChange = (event) => {
// const value = parseInt(event.target.value);
// if (!isNaN(value)) {
// setNumHorses(value);
// setSelectedHorseNames(Array(value).fill(""));
// setHorsePositions(Array(value).fill(0));
// }
// };

// const handleHorseSelect = (event, index) => {
// const { value } = event.target;
// const newSelectedHorseNames = [...selectedHorseNames];
// newSelectedHorseNames[index] = value;
// setSelectedHorseNames(newSelectedHorseNames);
// };

// const getRaceResults = () => {
// const positionsCopy = [...horsePositions];
// const results = [];
// for (let i = 0; i < numHorses; i++) {
// const max = Math.max(...positionsCopy);
// const index = positionsCopy.indexOf(max);
// results.push(index);
// positionsCopy[index] = -1;
// }
// return results;
// };

// const handleResetRace = () => {
// setRaceStarted(false);
// setRaceTime(0);
// setHorsePositions(Array(numHorses).fill(0));
// clearInterval(timerRef.current);
// };

// return (

// <div className="leaderboard-container">
// <div className="header">
// <h1>Horse Racing Leaderboard</h1>
// </div>
// <div className="settings-container">
// <h2>Race Settings</h2>
// <label htmlFor="track-length">Track Length (in furlongs):</label>
// <input type="number" id="track-length" name="track-length" min="1" max="10" value={trackLength} onChange={handleTrackLengthChange} />
// <label htmlFor="num-horses">Number of Horses:</label>
// <input type="number" id="num-horses" name="num-horses" min="2" max="10" value={numHorses} onChange={handleNumHorsesChange} />
// <div className="horse-selection">
// {Array(numHorses).fill().map((_, index) => (
// <div key={index} className="horse-selection-item">
// <label htmlFor={`horse-${index}`}>Horse {index + 1}:</label>
// <select id={`horse-${index}`} name={`horse-${index}`} value={selectedHorseNames[index]} onChange={(event) => handleHorseSelect(event, index)}>
// <option value="">Select a horse</option>
// {horses.map((horse, i) => (
// <option key={i} value={horse.name}>{horse.name}</option>
// ))}
// </select>
// </div>
// ))}
// </div>
// <button className="start-race-btn" onClick={handleStartRace} disabled={selectedHorseNames.includes("")}>Start Race</button>
// <button className="reset-race-btn" onClick={handleResetRace}>Reset Race</button>
// </div>
// <div className="race-container">
// {raceStarted ?
// <>
// <h2>Race Time: {raceTime} seconds</h2>
// <div className="race-track">
// {Array(numHorses).fill().map((_, index) => (
// <div key={index} className="horse" style={{ left: `${(horsePositions[index]/trackLength) * 100}%`, backgroundImage: `url(${horses[index].gif})` }}>
// <span>{selectedHorseNames[index]}</span>
// </div>
// ))}
// </div>
// </>
// :
// <h2>Click Start Race to Begin</h2>
// }
// </div>
// <div className="results-container">
// <h2>Race Results</h2>
// <ol>
// {getRaceResults().map((index, i) => (
// <li key={i}>{selectedHorseNames[index]}</li>
// ))}
// </ol>
// </div>
// </div>
// );
// };
// export default Leaderboard;

// import React, { useState, useEffect, useRef } from "react";
// import "./Leaderboard.css";

// import Horse1 from './images/horse (1).gif';
// import Horse2 from './images/horse (2).gif';
// import Horse3 from './images/horse (3).gif';
// import Horse4 from './images/horse (4).gif';
// import Horse5 from './images/horse (5).gif';
// import Horse6 from './images/horse (6).gif';
// import Horse7 from './images/horse (7).gif';
// import Horse8 from './images/horse (8).gif';
// import Horse9 from './images/horse (9).gif';
// import Horse10 from './images/horse (10).gif';

// const horses = [  {    name: 'Secretariat',    number: 1,    gif: Horse1,  },  {    name: 'Man o\' War',    number: 2,    gif: Horse2,  },  {    name: 'Seattle Slew',    number: 3,    gif: Horse3,  },  {    name: 'Affirmed',    number: 4,    gif: Horse4,  },  {    name: 'American Pharoah',    number: 5,    gif: Horse5,  },  {    name: 'Justify',    number: 6,    gif: Horse6,  },  {    name: 'Citation',    number: 7,    gif: Horse7,  },  {    name: 'Count Fleet',    number: 8,    gif: Horse8,  },  {    name: 'Assault',    number: 9,    gif: Horse9,  },  {    name: 'Whirlaway',    number: 10,    gif: Horse10,  },];

// const Leaderboard = () => {
//   const [trackLength, setTrackLength] = useState(2); // track length in 1/8 mile increments
//   const [numHorses, setNumHorses] = useState(6);
//   const [horseNames, setHorseNames] = useState(Array(numHorses).fill(""));
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
//       }, Math.floor(Math.random() * 3000) + 200); // update every .2-3 seconds
//       return () => clearInterval(interval);
//     }
//   }, [raceStarted, horsePositions, trackLength]);

//   const handleStartRace = () => {
//     setRaceStarted(true);
//     setRaceTime(0);
//     setHorsePositions(Array(numHorses).fill(0));
//     setRaceDuration(Math.floor(Math.random() * 11) + 20); // race duration
//     timerRef.current = setInterval(() => {
//       setRaceTime((time) => time + 1);
//       }, 1000);
//       };

//       const handleTrackLengthChange = (event) => {
//       const value = parseInt(event.target.value);
//       if (!isNaN(value)) {
//       setTrackLength(value);
//       setHorsePositions(Array(numHorses).fill(0));
//       }
//       };

//       const handleNumHorsesChange = (event) => {
//       const value = parseInt(event.target.value);
//       if (!isNaN(value)) {
//       setNumHorses(value);
//       setHorseNames(Array(value).fill(""));
//       setHorsePositions(Array(value).fill(0));
//       }
//       };

//       const handleHorseNameChange = (event, index) => {
//       const newHorseNames = [...horseNames];
//       newHorseNames[index] = event.target.value;
//       setHorseNames(newHorseNames);
//       };

//       return (
//       <div className="leaderboard">
//       <div className="controls">
//       <label htmlFor="track-length-input">Track Length (in 1/8 mile increments):</label>
//       <input
//              type="number"
//              id="track-length-input"
//              value={trackLength}
//              min="2"
//              max="10"
//              onChange={handleTrackLengthChange}
//            />
//       <label htmlFor="num-horses-input">Number of Horses:</label>
//       <input
//              type="number"
//              id="num-horses-input"
//              value={numHorses}
//              min="2"
//              max="10"
//              onChange={handleNumHorsesChange}
//            />
//       <button onClick={handleStartRace} disabled={raceStarted}>
//       Start Race
//       </button>
//       </div>
//       {horseNames.map((horseName, index) => (
//       <div className="horse" key={index}>
//       <img src={horses[index].gif} alt={horses[index].name} />
//       <div className="details">
//       <div className="name">
//       <input
//       type="text"
//       placeholder={`Horse ${index + 1}`}
//       value={horseName}
//       onChange={(event) => handleHorseNameChange(event, index)}
//       />
//       </div>
//       {/* <div className="number">{horses[index].number}</div>
//       <div className="position">{horsePositions[index].toFixed(2)} / {trackLength}</div> */}
//       </div>
//       </div>
//       ))}
//       {/* {raceStarted && <div className="timer">{raceTime} seconds</div>}
//       {raceStarted && <div className="duration">Race duration: {raceDuration} seconds</div>} */}
//       </div>
//       );
//       };

//       export default Leaderboard;

// import React, { useState, useEffect } from 'react';
// import Horse1 from './images/horse (1).gif';
// import Horse2 from './images/horse (2).gif';
// import Horse3 from './images/horse (3).gif';
// import Horse4 from './images/horse (4).gif';
// import Horse5 from './images/horse (5).gif';
// import Horse6 from './images/horse (6).gif';
// import Horse7 from './images/horse (7).gif';
// import Horse8 from './images/horse (8).gif';
// import Horse9 from './images/horse (9).gif';
// import Horse10 from './images/horse (10).gif';
// import './Leaderboard.css';

// const horses = [
// {
// name: 'Secretariat',
// number: 1,
// odds: Math.floor(Math.random() * 10) + 1,
// gif: Horse1,
// },
// {
// name: "Man o' War",
// number: 2,
// odds: Math.floor(Math.random() * 10) + 1,
// gif: Horse2,
// },
// {
// name: 'Seattle Slew',
// number: 3,
// odds: Math.floor(Math.random() * 10) + 1,
// gif: Horse3,
// },
// {
// name: 'Affirmed',
// number: 4,
// odds: Math.floor(Math.random() * 10) + 1,
// gif: Horse4,
// },
// {
// name: 'American Pharoah',
// number: 5,
// odds: Math.floor(Math.random() * 10) + 1,
// gif: Horse5,
// },
// {
// name: 'Justify',
// number: 6,
// odds: Math.floor(Math.random() * 10) + 1,
// gif: Horse6,
// },
// {
// name: 'Citation',
// number: 7,
// odds: Math.floor(Math.random() * 10) + 1,
// gif: Horse7,
// },
// {
// name: 'Count Fleet',
// number: 8,
// odds: Math.floor(Math.random() * 10) + 1,
// gif: Horse8,
// },
// {
// name: 'Assault',
// number: 9,
// odds: Math.floor(Math.random() * 10) + 1,
// gif: Horse9,
// },
// {
// name: 'Whirlaway',
// number: 10,
// odds: Math.floor(Math.random() * 10) + 1,
// gif: Horse10,
// },
// ];

// const trackLengths = [0.6, 1.2, 1.8, 2.4];

// const Leaderboard = () => {
// const [raceStarted, setRaceStarted] = useState(false);
// const [raceFinished, setRaceFinished] = useState(false);
// const [horsesState, setHorsesState] = useState([]);
// const [selectedHorses, setSelectedHorses] = useState([]);
// const [trackLength, setTrackLength] = useState(trackLengths[Math.floor(Math.random() * trackLengths.length)]);
// const [raceTime, setRaceTime] = useState(0);

// useEffect(() => {
// setHorsesState(selectedHorses.map((horse, index) => ({
// ...horses.find(h => h.name === horse),
// position: 0,
// distance: 0,
// rank: null,
// speed: Math.floor(Math.random() * 10)
// })));
// }, [selectedHorses]);

// const startRace = () => {
//   setRaceStarted(true);
//   setRaceFinished(false);
//   setHorsesState(horsesState.map(horse => ({
//   ...horse,
//   position: 0,
//   distance: 0,
//   rank: null
//   })));
//   const intervalId = setInterval(() => {
//   setHorsesState(horsesState => {
//   let raceFinished = true;
//   const updatedHorses = horsesState.map(horse => {
//   const newDistance = horse.distance + horse.speed * 0.1;
//   if (newDistance >= trackLength) {
//   horse.position = trackLength;
//   horse.rank = 1;
//   horse.distance = trackLength;
//   } else {
//   horse.position = newDistance;
//   horse.distance = newDistance;
//   raceFinished = false;
//   }
//   return horse;
//   }).sort((a, b) => b.position - a.position);
//   if (raceFinished) {
//   clearInterval(intervalId);
//   setRaceFinished(true);
//   setRaceTime(Date.now() - startTime);
//   }
//   return updatedHorses;
//   });
//   }, 100);
//   const startTime = Date.now();
//   };

//   const handleHorseSelection = (event) => {
//   setSelectedHorses(Array.from(event.target.selectedOptions, option => option.value));
//   };

//   const handleReset = () => {
//   setSelectedHorses([]);
//   setRaceStarted(false);
//   setRaceFinished(false);
//   setHorsesState([]);
//   setTrackLength(trackLengths[Math.floor(Math.random() * trackLengths.length)]);
//   setRaceTime(0);
//   };

//   return (

//     <div className="leaderboard-container">
//       <h1>Horse Race</h1>
//       <div className="race-setup">
//         <label htmlFor="horse-select">Select Horses:</label>
//         <select id="horse-select" multiple={true} onChange={handleHorseSelection}>
//           {horses.map(horse => <option key={horse.number} value={horse.name}>{horse.name}</option>)}
//         </select>
//         <button onClick={startRace} disabled={raceStarted || selectedHorses.length < 2}>Start Race</button>
//         <button onClick={handleReset}>Reset</button>
//       </div>
//       {raceStarted && (
//         <div>
//           <h2>Race in progress...</h2>
//           <div className="race-track">
//             {horsesState.map(horse => (
//               <div key={horse.number} className="horse" style={{ backgroundImage: `url(${horse.gif})`, left: `${(horse.position / trackLength) * 100}%` }}>
//                 {horse.rank && <span className="rank">{horse.rank}</span>}
//               </div>
//             ))}
//             <div className="track-length" style={{ width: `${trackLength * 100}vw` }}></div>
//           </div>
//         </div>
//       )}
//       {raceFinished && (
//         <div>
//           <h2>Race finished in {raceTime / 1000} seconds!</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>Rank</th>
//                 <th>Horse</th>
//                 <th>Time</th>
//                 <th>Odds</th>
//               </tr>
//             </thead>
//             <tbody>
//               {horsesState.map(horse => (
//                 <tr key={horse.number}>
//                   <td>{horse.rank}</td>
//                   <td>{horse.name}</td>
//                   <td>{raceTime / 1000} seconds</td>
//                   <td>{horse.odds}:1</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <button onClick={handleReset}>Reset</button>
//                      </div>
// )}

//   </div>
// );
// };
// export default Leaderboard;

// import React, { useState, useEffect } from 'react';
// import Horse1 from './images/horse (1).gif';
// import Horse2 from './images/horse (2).gif';
// import Horse3 from './images/horse (3).gif';
// import Horse4 from './images/horse (4).gif';
// import Horse5 from './images/horse (5).gif';
// import Horse6 from './images/horse (6).gif';
// import Horse7 from './images/horse (7).gif';
// import Horse8 from './images/horse (8).gif';
// import Horse9 from './images/horse (9).gif';
// import Horse10 from './images/horse (10).gif';
// import './Leaderboard.css';

// const horses = [
//   {
//     name: 'Secretariat',
//     number: 1,
//     odds: Math.floor(Math.random() * 10) + 1,
//     gif: Horse1,
//   },
//   {
//     name: "Man o' War",
//     number: 2,
//     odds: Math.floor(Math.random() * 10) + 1,
//     gif: Horse2,
//   },
//   {
//     name: 'Seattle Slew',
//     number: 3,
//     odds: Math.floor(Math.random() * 10) + 1,
//     gif: Horse3,
//   },
//   {
//     name: 'Affirmed',
//     number: 4,
//     odds: Math.floor(Math.random() * 10) + 1,
//     gif: Horse4,
//   },
//   {
//     name: 'American Pharoah',
//     number: 5,
//     odds: Math.floor(Math.random() * 10) + 1,
//     gif: Horse5,
//   },
//   {
//     name: 'Justify',
//     number: 6,
//     odds: Math.floor(Math.random() * 10) + 1,
//     gif: Horse6,
//   },
//   {
//     name: 'Citation',
//     number: 7,
//     odds: Math.floor(Math.random() * 10) + 1,
//     gif: Horse7,
//   },
//   {
//     name: 'Count Fleet',
//     number: 8,
//     odds: Math.floor(Math.random() * 10) + 1,
//     gif: Horse8,
//   },
//   {
//     name: 'Assault',
//     number: 9,
//     odds: Math.floor(Math.random() * 10) + 1,
//     gif: Horse9,
//   },
//   {
//     name: 'Whirlaway',
//     number: 10,
//     odds: Math.floor(Math.random() * 10) + 1,
//     gif: Horse10,
//   },
// ];

// const trackLengths = [0.6, 1.2, 1.8, 2.4];

// const Leaderboard = () => {
//   const [raceStarted, setRaceStarted] = useState(false);
//   const [raceFinished, setRaceFinished] = useState(false);
//   const [horsesState, setHorsesState] = useState([]);
//   const [selectedHorses, setSelectedHorses] = useState(4); // default number of horses in the race is 4
//   const [trackLength, setTrackLength] = useState(trackLengths[Math.floor(Math.random() * trackLengths.length)]);
//   const [raceTime, setRaceTime] = useState(0);

//   useEffect(() => {
//     setHorsesState(horses.slice(0, selectedHorses).map((horse, index) => ({
//       ...horse,
//       position: 0,
//       distance: 0,
//       rank: null,
//       speed: Math.floor(Math.random() * 10)
//     })));
//   }, [selectedHorses]);

//   const startRace = () => {
//   setRaceStarted(true);
//   let interval = setInterval(() => {
//   setHorsesState(horsesState => {
//   let newHorsesState = [...horsesState];
//   let finishedHorses = 0;
//   newHorsesState.forEach(horse => {
//   if (horse.rank !== null) {
//   return;
//   }
//   horse.distance += horse.speed;
//   if (horse.distance >= trackLength) {
//   horse.position = trackLength;
//   horse.rank = ++finishedHorses;
//   if (finishedHorses === newHorsesState.length) {
//   setRaceFinished(true);
//   clearInterval(interval);
//   }
//   } else {
//   horse.position = (horse.distance / trackLength) * 100;
//   }
//   });
//   setRaceTime(prev => prev + 1);
//   return newHorsesState;
//   });
//   }, 100);
//   };

//   const restartRace = () => {
//   setRaceStarted(false);
//   setRaceFinished(false);
//   setRaceTime(0);
//   setSelectedHorses(4);
//   };

//   return (
//   <div className="leaderboard">
//   <h1>Horse Race</h1>
//   <div className="race-info">
//   <div className="race-details">
//   <div className="race-detail">
//   <strong>Number of horses:</strong> {selectedHorses}
//   </div>
//   <div className="race-detail">
//   <strong>Track length:</strong> {trackLength} miles
//   </div>
//   <div className="race-detail">
//   <strong>Race time:</strong> {raceTime} seconds
//   </div>
//   </div>
//   <div className="race-buttons">
//   {!raceStarted && (
//   <>
//   <button onClick={() => setSelectedHorses(4)}>4 horses</button>
//   <button onClick={() => setSelectedHorses(6)}>6 horses</button>
//   <button onClick={() => setSelectedHorses(8)}>8 horses</button>
//   <button onClick={() => setSelectedHorses(10)}>10 horses</button>
//   <button onClick={startRace}>Start race</button>
//   </>
//   )}
//   {raceStarted && !raceFinished && (
//   <>
//   <button onClick={() => setTrackLength(trackLengths[Math.floor(Math.random() * trackLengths.length)])}>
//   Change track length
//   </button>
//   <button onClick={() => setHorsesState(horsesState => horsesState.map(horse => ({...horse, speed: Math.floor(Math.random() * 10)})))}>
//   Shuffle horses
//   </button>
//   </>
//   )}
//   {raceFinished && (
//   <button onClick={restartRace}>Restart race</button>
//   )}
//   </div>
//   </div>
//   <div className="race-track">
//   {horsesState.map(horse => (
//   <div key={horse.number} className="horse" style={{ left: `${horse.position}%`}}>
//   <img src={horse.gif} alt={horse.name} />
//   <div className="horse-info">
//   <div className="horse-name">{horse.name}</div>
//   <div className="horse-odds">{horse.odds}:1</div>
//   </div>
//   </div>
//   ))}
//   {raceFinished && (
//   <div className="finish-line" style={{ left: `${trackLength * 100}%`}}>
//   <div>Finish Line</div>
//   </div>
//   )}
//   </div>
//   </div>
//   );
//   };

//   export default Leaderboard;

// import React, { useState, useEffect } from 'react';
// import Horse1 from './images/horse (1).gif';
// import Horse2 from './images/horse (2).gif';
// import Horse3 from './images/horse (3).gif';
// import Horse4 from './images/horse (4).gif';
// import Horse5 from './images/horse (5).gif';
// import Horse6 from './images/horse (6).gif';
// import Horse7 from './images/horse (7).gif';
// import Horse8 from './images/horse (8).gif';
// import Horse9 from './images/horse (9).gif';
// import Horse10 from './images/horse (10).gif';
// import './Leaderboard.css';

// const horses = [
// {
// name: 'Secretariat',
// number: 1,
// odds: Math.floor(Math.random() * 10) + 1,
// gif: Horse1,
// },
// {
// name: "Man o' War",
// number: 2,
// odds: Math.floor(Math.random() * 10) + 1,
// gif: Horse2,
// },
// {
// name: 'Seattle Slew',
// number: 3,
// odds: Math.floor(Math.random() * 10) + 1,
// gif: Horse3,
// },
// {
// name: 'Affirmed',
// number: 4,
// odds: Math.floor(Math.random() * 10) + 1,
// gif: Horse4,
// },
// {
// name: 'American Pharoah',
// number: 5,
// odds: Math.floor(Math.random() * 10) + 1,
// gif: Horse5,
// },
// {
// name: 'Justify',
// number: 6,
// odds: Math.floor(Math.random() * 10) + 1,
// gif: Horse6,
// },
// {
// name: 'Citation',
// number: 7,
// odds: Math.floor(Math.random() * 10) + 1,
// gif: Horse7,
// },
// {
// name: 'Count Fleet',
// number: 8,
// odds: Math.floor(Math.random() * 10) + 1,
// gif: Horse8,
// },
// {
// name: 'Assault',
// number: 9,
// odds: Math.floor(Math.random() * 10) + 1,
// gif: Horse9,
// },
// {
// name: 'Whirlaway',
// number: 10,
// odds: Math.floor(Math.random() * 10) + 1,
// gif: Horse10,
// },
// ];

// const Leaderboard = () => {
// const [raceStarted, setRaceStarted] = useState(false);
// const [raceFinished, setRaceFinished] = useState(false);
// const [horsesState, setHorsesState] = useState([]);
// const [selectedHorses, setSelectedHorses] = useState(4); // default number of horses in the race is 4
// const [trackLength, setTrackLength] = useState(Math.floor(Math.random() * 20) + 6);
// const [raceTime, setRaceTime] = useState(0);

// useEffect(() => {
// setHorsesState(horses.slice(0, selectedHorses).map((horse, index) => ({
// ...horse,
// position: 0,
// distance: 0,
// rank: null,
// speed: Math.floor(Math.random() * 10) + 1, // random speed between 1 and 10
// })));
// }, [selectedHorses]);

// const startRace = () => {
// setRaceStarted(true);

// setHorsesState(horsesState.map((horse) => ({
// ...horse,
// distance: 0,
// })));

// const timer = setInterval(() => {
// setHorsesState(horsesState.map((horse) => {
// const newDistance = horse.distance + horse.speed;
// const newPosition = Math.round((newDistance / trackLength) * 100);

// if (newPosition >= 100 && !horse.rank) {
// // horse has crossed the finish line and has not been ranked yet
// const rankedHorses = horsesState.filter((h) => h.rank !== null);
// const rank = rankedHorses.length + 1;
// return {
// ...horse,
// position: newPosition,
// distance: newDistance,
// rank,
// };
// } else {
// return {
// ...horse,
// position: newPosition,
// distance: newDistance,
// };
// }
// }));

// setRaceTime((prevTime) => prevTime + 1);
// }, 1000);

// setTimeout(() => {
// setRaceFinished(true);
// clearInterval(timer);
// }, (trackLength * 1000) + 1000);
// };

// const resetRace = () => {
// setRaceStarted(false);
// setRaceFinished(false);
// setHorsesState([]);
// setSelectedHorses(4);
// setTrackLength(Math.floor(Math.random() * 20) + 6);
// setRaceTime(0);
// };

// return (

// <div className="Leaderboard">
// <h1>Horse Racing</h1>
// {!raceStarted && (
// <>
// <label htmlFor="horse-select">Select number of horses:</label>
// <select id="horse-select" value={selectedHorses} onChange={(e) => setSelectedHorses(parseInt(e.target.value))}>
// <option value={2}>2</option>
// <option value={3}>3</option>
// <option value={4}>4</option>
// <option value={5}>5</option>
// <option value={6}>6</option>
// <option value={7}>7</option>
// <option value={8}>8</option>
// <option value={9}>9</option>
// <option value={10}>10</option>
// </select>
// <br />
// <button onClick={startRace}>Start Race</button>
// </>
// )}
// {raceStarted && !raceFinished && (
// <>

// <p>Race time: {raceTime}s</p>
// <div className="race-track">
// {horsesState.map((horse) => (
// <div className="horse" key={horse.number} style={{ left: `${horse.position}%` }}>
// <img src={horse.gif} alt={horse.name} />
// </div>
// ))}
// <div className="finish-line" style={{ left: `${100 - ((1 / trackLength) * 100)}%` }}></div>
// </div>
// </>
// )}
// {raceFinished && (
// <>

// <p>Race finished in {raceTime}s!</p>
// <table>
// <thead>
// <tr>
// <th>Rank</th>
// <th>Name</th>
// <th>Odds</th>
// </tr>
// </thead>
// <tbody>
// {horsesState.sort((a, b) => a.rank - b.rank).map((horse) => (
// <tr key={horse.number}>
// <td>{horse.rank}</td>
// <td>{horse.name}</td>
// <td>{horse.odds}</td>
// </tr>
// ))}
// </tbody>
// </table>
// <button onClick={resetRace}>Reset Race</button>
// </>
// )}
// </div>
// );
// };
// export default Leaderboard;

// import React, { useState, useEffect } from 'react';
// import Horse1 from './images/horse (1).gif';
// import Horse2 from './images/horse (2).gif';
// import Horse3 from './images/horse (3).gif';
// import Horse4 from './images/horse (4).gif';
// import Horse5 from './images/horse (5).gif';
// import Horse6 from './images/horse (6).gif';
// import Horse7 from './images/horse (7).gif';
// import Horse8 from './images/horse (8).gif';
// import Horse9 from './images/horse (9).gif';
// import Horse10 from './images/horse (10).gif';
// import './Leaderboard.css';

// const horses = [
// {
// name: 'Secretariat',
// number: 1,
// gif: Horse1,
// },
// {
// name: "Man o' War",
// number: 2,
// gif: Horse2,
// },
// {
// name: 'Seattle Slew',
// number: 3,
// gif: Horse3,
// },
// {
// name: 'Affirmed',
// number: 4,
// gif: Horse4,
// },
// {
// name: 'American Pharoah',
// number: 5,
// gif: Horse5,
// },
// {
// name: 'Justify',
// number: 6,
// gif: Horse6,
// },
// {
// name: 'Citation',
// number: 7,
// gif: Horse7,
// },
// {
// name: 'Count Fleet',
// number: 8,
// gif: Horse8,
// },
// {
// name: 'Assault',
// number: 9,
// gif: Horse9,
// },
// {
// name: 'Whirlaway',
// number: 10,
// gif: Horse10,
// },
// ];

// const Leaderboard = () => {
// const [raceTime, setRaceTime] = useState(null);
// const [raceStarted, setRaceStarted] = useState(false);
// const [raceFinished, setRaceFinished] = useState(false);
// const [horsesState, setHorsesState] = useState([]);
// const [selectedHorses, setSelectedHorses] = useState(4);
// const [trackLength, setTrackLength] = useState(null);

// const startRace = () => {
// setRaceStarted(true);
// setRaceFinished(false);
// setHorsesState(horses.slice(0, selectedHorses).map(horse => ({
// ...horse,
// position: 0,
// distance: 0,
// rank: null,
// speed: Math.floor(Math.random() * 10) + 1,
// odds: Math.floor(Math.random() * 10) + 1,
// })));
// };

// const resetRace = () => {
// setRaceStarted(false);
// setRaceFinished(false);
// setRaceTime(null);
// setHorsesState([]);
// };

// useEffect(() => {
// const min = 20;
// const max = 120;
// setRaceTime(Math.floor(Math.random() * (max - min + 1)) + min);
// }, []);

// useEffect(() => {
// const min = 0.6;
// const max = 2.6;
// setTrackLength((Math.random() * (max - min) + min).toFixed(2));
// }, []);

// useEffect(() => {
// if (raceStarted && !raceFinished && horsesState.length > 0) {
// const interval = setInterval(() => {
// setHorsesState(horsesState => horsesState.map((horse, index) => {
// const distance = horse.distance + (horse.speed /trackLength);
// const position = distance / trackLength * 100;
// return {
// ...horse,
// position,
// distance,
// };
// }));
// }, 100);
// return () => clearInterval(interval);
// }
// }, [raceStarted, raceFinished, horsesState, trackLength]);
// useEffect(() => {
// if (raceStarted && !raceFinished && horsesState.length > 0) {
// const interval = setInterval(() => {
// setHorsesState(horsesState => {
// const sortedHorses = [...horsesState].sort((a, b) => b.distance - a.distance);
// let rank = 1;
// sortedHorses[0].rank = rank;
// for (let i = 1; i < sortedHorses.length; i++) {
// if (sortedHorses[i].distance === sortedHorses[i - 1].distance) {
// sortedHorses[i].rank = rank;
// } else {
// rank = i + 1;
// sortedHorses[i].rank = rank;
// }
// }
// return sortedHorses;
// });
// }, 100);
// return () => clearInterval(interval);
// }
// }, [raceStarted, raceFinished, horsesState]);

// useEffect(() => {
// if (raceStarted && !raceFinished && horsesState.length > 0) {
// const interval = setInterval(() => {
// const finishedHorses = horsesState.filter(horse => horse.distance >= trackLength);
// if (finishedHorses.length === horsesState.length) {
// setRaceFinished(true);
// setRaceStarted(false);
// clearInterval(interval);
// }
// }, 100);
// return () => clearInterval(interval);
// }
// }, [raceStarted, raceFinished, horsesState, trackLength]);

// return (

// <div className="leaderboard-container">
// <h1>React Racecourse</h1>
// {!raceStarted && !raceFinished && (
// <>
// <p>Select number of horses:</p>
// <select value={selectedHorses} onChange={e => setSelectedHorses(parseInt(e.target.value))}>
// {[...Array(horses.length)].map((_, i) => (
// <option key={i + 1} value={i + 1}>
// {i + 1}
// </option>
// ))}
// </select>
// <button onClick={startRace}>Start Race</button>
// </>
// )}
// {raceStarted && !raceFinished && (
// <>
// <p>Race is in progress...</p>
// <p>Race time: {raceTime} seconds</p>
// <p>Track length: {trackLength} km</p>
// <div className="race-track">
// {horsesState.map(horse => (
// <div key={horse.number} className="horse" style={{ left: `${horse.position}%` }}>
// <img src={horse.gif} alt={horse.name} />
// <p className="horse-info">
// {horse.name} ({horse.odds}:1)
// </p>
// </div>
// ))}
// </div>
// </>
// )}
// {!raceStarted && raceFinished && (
// <>
// <p>Race is finished!</p>
// <p>Results:</p>
// <table>
// <thead>
// <tr>
// <th>Rank</th>
// <th>Name</th>
// <th>Odds</th>
// <th>Time</th>
// </tr>
// </thead>
// <tbody>
// {horsesState.map(horse => (
// <tr key={horse.number}>
// <td>{horse.rank}</td>
// <td>{horse.name}</td>
// <td>{horse.odds}:1</td>
// <td>{raceTime} seconds</td>
// </tr>
// ))}
// </tbody>
// </table>
// <button onClick={resetRace}>Start Over</button>
// </>
// )}
// </div>
// );
// };
// export default Leaderboard;

// import React, { useState, useEffect } from 'react';
// import Horse1 from './images/horse (1).gif';
// import Horse2 from './images/horse (2).gif';
// import Horse3 from './images/horse (3).gif';
// import Horse4 from './images/horse (4).gif';
// import Horse5 from './images/horse (5).gif';
// import Horse6 from './images/horse (6).gif';
// import Horse7 from './images/horse (7).gif';
// import Horse8 from './images/horse (8).gif';
// import Horse9 from './images/horse (9).gif';
// import Horse10 from './images/horse (10).gif';
// import './Leaderboard.css';

// const horses = [
//   {
//     name: 'Secretariat',
//     number: 1,
//     gif: Horse1,
//   },
//   {
//     name: 'Man o\' War',
//     number: 2,
//     gif: Horse2,
//   },
//   {
//     name: 'Seattle Slew',
//     number: 3,
//     gif: Horse3,
//   },
//   {
//     name: 'Affirmed',
//     number: 4,
//     gif: Horse4,
//   },
//   {
//     name: 'American Pharoah',
//     number: 5,
//     gif: Horse5,
//   },
//   {
//     name: 'Justify',
//     number: 6,
//     gif: Horse6,
//   },
//   {
//     name: 'Citation',
//     number: 7,
//     gif: Horse7,
//   },
//   {
//     name: 'Count Fleet',
//     number: 8,
//     gif: Horse8,
//   },
//   {
//     name: 'Assault',
//     number: 9,
//     gif: Horse9,
//   },
//   {
//     name: 'Whirlaway',
//     number: 10,
//     gif: Horse10,
//   },
// ];

// const Leaderboard = () => {
//   const [raceTime, setRaceTime] = useState(30); // default race time of 30 seconds
//   const [raceStarted, setRaceStarted] = useState(false);
//   const [raceFinished, setRaceFinished] = useState(false);
//   const [horsesState, setHorsesState] = useState(horses.slice(0, 4).map((horse, index) => ({
//     ...horse,
//     position: 0,
//     speed: Math.floor(Math.random() * 10) + 1, // random speed between 1 and 10
//     distance: 0,
//     odds: Math.floor(Math.random() * 10) + 1, // random odds between 1 and 10
//     rank: null,
//   })));
//   const [raceDuration, setRaceDuration] = useState(30); // default race duration of 30 seconds
//   const [selectedHorses, setSelectedHorses] = useState(4); // default number of horses in the race is 4

//   const startRace = () => {
//     setRaceStarted(true);
//     setRaceFinished(false);
//     setHorsesState(horses.slice(0, selectedHorses).map(horse => ({
//       ...horse,
//       position: 0,
//       distance: 0,
//       rank: null,
//       speed: Math.floor(Math.random() * 10) + 1,
//     })));
//   };

//   const resetRace = () => {
//     setRaceStarted(false);
//     setRaceFinished(false);
//     setRaceTime(30);
//     setHorsesState(horses.slice(0, selectedHorses).map((horse, index) => ({
//       ...horse,
//       position: 0,
//       distance: 0,
//       rank: null,
//       speed: Math.floor(Math.random() * 10) + 1,
//       })));
//       };

//       useEffect(() => {
//       let timer = null;
//       if (raceStarted && !raceFinished && raceTime > 0) {
//         timer = setInterval(() => {
//           setRaceTime(time => time - 1);
//         }, 1000);
//       }

//       if (raceTime === 0) {
//         setRaceFinished(true);
//         clearInterval(timer);

//         // set rank of each horse based on their position
//         const sortedHorses = horsesState.slice().sort((a, b) => b.position - a.position);
//         setHorsesState(sortedHorses.map((horse, index) => ({
//           ...horse,
//           rank: index + 1,
//         })));
//       }

//       return () => clearInterval(timer);
//     }, [raceTime, raceStarted, raceFinished, horsesState]);

//     const updateDistance = (horseIndex) => {
//     setHorsesState(horsesState.map((horse, index) => {
//     if (index === horseIndex) {
//     const newDistance = horse.distance + horse.speed;
//     const newPosition = Math.floor(newDistance / 10);
//     return {
//     ...horse,
//     position: newPosition,
//     distance: newDistance,
//     };
//     }
//     return horse;
//     }));
//     };

//     useEffect(() => {
//     let interval = null;
//     if (raceStarted && !raceFinished) {
//       interval = setInterval(() => {
//         horsesState.forEach((horse, index) => {
//           // update distance of each horse
//           updateDistance(index);
//         });
//       }, 1000);
//     }

//     if (raceFinished) {
//       clearInterval(interval);
//     }

//     return () => clearInterval(interval);
//   }, [raceStarted, raceFinished, horsesState]);

//   const handleSelectChange = (event) => {
//   setSelectedHorses(parseInt(event.target.value));
//   };

//   return (
//   <div className="leaderboard">
//   <h1>Horse Racing Leaderboard</h1>
//   <div className="options">
//   <label htmlFor="raceTime">Race Time (seconds):</label>
//   <input type="number" id="raceTime" name="raceTime" min="10" max="60" value={raceDuration} onChange={(e) => setRaceDuration(parseInt(e.target.value))} />
//   <label htmlFor="numHorses">Number of Horses:</label>
//   <select id="numHorses" name="numHorses" value={selectedHorses} onChange={handleSelectChange}>
//   <option value="4">4</option>
//   <option value="5">5</option>
//   <option value="6">6</option>
//   <option value="7">7</option>
//   <option value="8">8</option>
//   <option value="9">9</option>
//   <option value="10">10</option>
//   </select>
//   <button onClick={startRace} disabled={raceStarted || raceFinished}>Start Race</button>
//   <button onClick={resetRace} disabled={!raceStarted || raceFinished}>Reset Race</button>
//   </div>
//   <div className="raceTrack">
//   {horsesState.map((horse, index) => (
//   <div key={index} className={`horse horse${index + 1}`}>
//   <img src={horse.gif} alt={horse.name} />
//   <div className="horseName">{horse.name}</div>
//   <div className="horseOdds">Odds: {horse.odds}</div>
//   {raceFinished && <div className="horseRank">Rank: {horse.rank}</div>}
//   </div>
//   ))}
// </div>
// {raceStarted && !raceFinished && (
// <div className="raceTimer">
// <h2>Time Remaining: {raceTime} seconds</h2>
// </div>
// )}
// {raceFinished && (
// <div className="finalResults">
// <h2>Final Results</h2>
// <ol>
// {horsesState.map((horse, index) => (
// <li key={index}>{horse.rank}. {horse.name}</li>
// ))}
// </ol>
// </div>
// )}
// </div>
// );
// };
// export default Leaderboard;

// import React, { useState, useEffect } from 'react';
// import Horse1 from './images/horse (1).gif';
// import Horse2 from './images/horse (2).gif';
// import Horse3 from './images/horse (3).gif';
// import Horse4 from './images/horse (4).gif';
// import Horse5 from './images/horse (5).gif';
// import Horse6 from './images/horse (6).gif';
// import Horse7 from './images/horse (7).gif';
// import Horse8 from './images/horse (8).gif';
// import Horse9 from './images/horse (9).gif';
// import Horse10 from './images/horse (10).gif';
// import './Leaderboard.css';

// const horses = [
//   {
//     name: 'Secretariat',
//     number: 1,
//     gif: Horse1,
//   },
//   {
//     name: 'Man o\' War',
//     number: 2,
//     gif: Horse2,
//   },
//   {
//     name: 'Seattle Slew',
//     number: 3,
//     gif: Horse3,
//   },
//   {
//     name: 'Affirmed',
//     number: 4,
//     gif: Horse4,
//   },
//   {
//     name: 'American Pharoah',
//     number: 5,
//     gif: Horse5,
//   },
//   {
//     name: 'Justify',
//     number: 6,
//     gif: Horse6,
//   },
//   {
//     name: 'Citation',
//     number: 7,
//     gif: Horse7,
//   },
//   {
//     name: 'Count Fleet',
//     number: 8,
//     gif: Horse8,
//   },
//   {
//     name: 'Assault',
//     number: 9,
//     gif: Horse9,
//   },
//   {
//     name: 'Whirlaway',
//     number: 10,
//     gif: Horse10,
//   },
// ];

// const Leaderboard = () => {
//   const [raceTime, setRaceTime] = useState(30); // default race time of 30 seconds
//   const [raceStarted, setRaceStarted] = useState(false);
//   const [raceFinished, setRaceFinished] = useState(false);
//   const [horsesState, setHorsesState] = useState(horses.slice(0, 4).map((horse, index) => ({
//     ...horse,
//     position: 0,
//     speed: Math.floor(Math.random() * 10) + 1, // random speed between 1 and 10
//     distance: 0,
//     odds: Math.floor(Math.random() * 10) + 1, // random odds between 1 and 10
//     rank: null,
//   })));
//   const [raceDuration, setRaceDuration] = useState(30); // default race duration of 30 seconds
//   const [selectedHorses, setSelectedHorses] = useState(4); // default number of horses in the race is 4

//   const startRace = () => {
//     setRaceStarted(true);
//     setRaceFinished(false);
//     setHorsesState(horses.slice(0, selectedHorses).map(horse => ({
//       ...horse,
//       position: 0,
//       distance: 0,
//       rank: null,
//       speed: Math.floor(Math.random() * 10) + 1,
// //////////////////////////////////////////////////////////////////////////////////////
//     })));
//   };

//   const resetRace = () => {
//   setRaceStarted(false);
//   setRaceFinished(false);
//   setHorsesState(horses.slice(0, selectedHorses).map((horse, index) => ({
//   ...horse,
//   position: 0,
//   distance: 0,
//   rank: null,
//   speed: Math.floor(Math.random() * 10) + 1,
//   odds: Math.floor(Math.random() * 10) + 1,
//   })));
//   };

//   const handleSelectChange = e => {
//   setSelectedHorses(parseInt(e.target.value));
//   };

//   useEffect(() => {
//   const interval = setInterval(() => {
//   if (raceStarted && !raceFinished) {
//   setRaceTime(prevRaceTime => prevRaceTime - 1);
//   }
//   }, 1000);
// ///////////////////////////////////////////////////////////////////////////////////

// if (raceTime === 0) {
//   setRaceFinished(true);
//   clearInterval(interval);
// }

// return () => clearInterval(interval);

// }, [raceStarted, raceFinished, raceTime]);

// useEffect(() => {
// if (raceStarted && !raceFinished) {
// const interval = setInterval(() => {
// setHorsesState(prevHorsesState => {
// const updatedHorsesState = prevHorsesState.map(horse => {
// const newDistance = horse.distance + horse.speed;
// const newPosition = Math.floor(newDistance / 10);
// const updatedHorse = {
// ...horse,
// distance: newDistance,
// position: newPosition,
// };
// if (newPosition >= 100 && !horse.rank) {
//   updatedHorse.rank = prevHorsesState.filter(h => h !== horse && h.position >= 100).length + 1;
// }

// return updatedHorse;
// });

// if (updatedHorsesState.filter(horse => horse.rank !== null).length === selectedHorses) {
// setRaceFinished(true);
// }

// return updatedHorsesState;
// });
// }, 1000);

// return () => clearInterval(interval);
// }
// }, [raceStarted, raceFinished, selectedHorses]);

// return (
// <div className="leaderboard">
// <h1>Horse Racing Leaderboard</h1>
// <div className="race-info">
// <div className="race-status">
// <p>{raceStarted ? 'Race in progress' : 'Race has not started'}</p>
// <p>{`raceFinished ? 'Race finished' : Time remaining: ${raceTime} seconds`}</p>
// </div>
// <div className="race-actions">
// {!raceStarted && !raceFinished && (
// <>
// <label htmlFor="numHorses">Number of horses:</label>
// <select id="numHorses" value={selectedHorses} onChange={handleSelectChange}>
// {[4, 5, 6, 7, 8, 9, 10].map(num => (
// <option key={num} value={num}>
// {num}
// </option>
// ))}
// </select>
// <button onClick={startRace}>Start Race</button>
// </>
// )}
// {(raceStarted || raceFinished) && (
// <button onClick={resetRace}>Reset Race</button>
// )}
// </div>
// </div>
// <div className="race-track">
// {horsesState.map(horse => (
// <div key={`horse.number} className={horse horse${horse.number} pos${horse.position}`}>
// <img src={horse.gif} alt={horse.name} />
// <p>{horse.name}</p>
// <p>Speed: {horse.speed}</p>
// <p>Odds: {horse.odds}</p>
// <p>Distance: {horse.distance}</p>
// <p>Rank: {horse.rank ? horse.rank : '-'}</p>
// </div>
// ))}
// </div>
// </div>
// );
// };
// export default Leaderboard;

// =============================================

// import React, { useState, useEffect } from 'react';
// import Horse1Gif from './images/horse (1).gif';
// import Horse2Gif from './images/horse (2).gif';
// import Horse3Gif from './images/horse (3).gif';
// import Horse4Gif from './images/horse (4).gif';
// import Horse5Gif from './images/horse (5).gif';
// import Horse6Gif from './images/horse (6).gif';
// import Horse7Gif from './images/horse (7).gif';
// import Horse8Gif from './images/horse (8).gif';
// import Horse9Gif from './images/horse (9).gif';
// import Horse10Gif from './images/horse (10).gif';
// import './Leaderboard.css';

// const horses = [
//   { name: 'Horse 1', number: 1, gif: Horse1Gif },
//   { name: 'Horse 2', number: 2, gif: Horse2Gif },
//   { name: 'Horse 3', number: 3, gif: Horse3Gif },
//   { name: 'Horse 4', number: 4, gif: Horse4Gif },
//   { name: 'Horse 5', number: 5, gif: Horse5Gif },
//   { name: 'Horse 6', number: 6, gif: Horse6Gif },
//   { name: 'Horse 7', number: 7, gif: Horse7Gif },
//   { name: 'Horse 8', number: 8, gif: Horse8Gif },
//   { name: 'Horse 9', number: 9, gif: Horse9Gif },
//   { name: 'Horse 10', number:10, gif: Horse10Gif }
// ];

// const Leaderboard = () => {
//   const [raceTime, setRaceTime] = useState(30); // default race time of 30 seconds
//   const [raceStarted, setRaceStarted] = useState(false);
//   const [raceFinished, setRaceFinished] = useState(false);
//   const [horsesState, setHorsesState] = useState(horses.map((horse, index) => ({
//     ...horse,
//     position: 0,
//     speed: Math.floor(Math.random() * 10) + 1, // random speed between 1 and 10
//     distance: 0,
//     odds: Math.floor(Math.random() * 10) + 1, // random odds between 1 and 10
//     rank: null,
//   })));

//   const startRace = () => {
//     setRaceStarted(true);
//     setRaceFinished(false);
//     horses(horsesState.map(horse => ({
//       ...horse,
//       position: 0,
//       distance: 0,
//       rank: null,
//     })));
//   };

//   const finishRace = () => {
//     setRaceStarted(false);
//     setRaceFinished(true);
//   };

//   useEffect(() => {
//     let intervalId;
//     if (raceStarted) {
//       intervalId = setInterval(() => (
//         setHorsesState(prevHorsesState => {
//           // check if any horse has reached the finish line
//           const finishedHorses = prevHorsesState.filter(horse => horse.distance >= 100);
//           if (finishedHorses.length === prevHorsesState.length) {
//             // all horses finished the race
//             finishRace();
//             clearInterval(intervalId);
//             return prevHorsesState;
//           }

//           // update each horse's distance based on its speed
//           const updatedHorsesState = prevHorsesState.map(horse => {
//             const distance = horse.distance + horse.speed;
//             const position = Math.floor(distance / 10);

//             return {
//               ...horse,
//               distance,
//               position,
//             };
//           });

//           // sort horses by distance and assign their rank
//           const sortedHorses = updatedHorsesState.sort((a, b) => b.distance - a.distance);
//           const rankedHorses = sortedHorses.map((horse, index) => ({
//             ...horse,
//             rank: index + 1,
//           }));

//           // update state with new horses data
//           return rankedHorses;
//         })), 1000);
//       }

//       return () => clearInterval(intervalId);
//     }, [raceStarted]);

//     return (
//       <div className="leaderboard">
//         <h1>Virtual Horse Racing</h1>
//         <div className="race-time">
//           <span>Race Time:</span>
//           <input
//             type="number"
//             value={raceTime}
//             onChange={(event) => setRaceTime(event.target.value)}
//           />
//           <button onClick={startRace} disabled={raceStarted}>
//             {raceStarted ? 'Race in progress' : 'Start race'}
//           </button>
//         </div>
//         <div className="horses">
//           {horsesState.map(horse => (
//             <div key={horse.number} className={`horse horse-${horse.number}`}>
//               <div className="horse-name">{horse.name}</div>
//               <img src={horse.gif} alt={horse.name} style={{ left: `${horse.position}%` }} />
//               <div className="horse-odds">Odds: {horse.odds} to 1</div>
//               {raceFinished && <div className="horse-rank">Rank: {horse.rank}</div>}
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   export default Leaderboard;

// import React, { useState, useEffect } from 'react';
// import Horse1Gif from './images/horse (1).gif';
// import Horse2Gif from './images/horse (2).gif';
// import Horse3Gif from './images/horse (3).gif';
// import Horse4Gif from './images/horse (4).gif';
// import Horse5Gif from './images/horse (5).gif';
// import Horse6Gif from './images/horse (6).gif';
// import Horse7Gif from './images/horse (7).gif';
// import Horse8Gif from './images/horse (8).gif';
// import Horse9Gif from './images/horse (9).gif';
// import Horse10Gif from './images/horse (10).gif';
// import './Leaderboard.css';

// const horses = [
//   { name: 'Horse 1', number: 1, gif: Horse1Gif },
//   { name: 'Horse 2', number: 2, gif: Horse2Gif },
//   { name: 'Horse 3', number: 3, gif: Horse3Gif },
//   { name: 'Horse 4', number: 4, gif: Horse4Gif },
//   { name: 'Horse 5', number: 5, gif: Horse5Gif },
//   { name: 'Horse 6', number: 6, gif: Horse6Gif },
//   { name: 'Horse 7', number: 7, gif: Horse7Gif },
//   { name: 'Horse 8', number: 8, gif: Horse8Gif },
//   { name: 'Horse 9', number: 9, gif: Horse9Gif },
//   { name: 'Horse 10', number:10, gif: Horse10Gif }
// ];

// const Leaderboard = () => {
//   const [raceTime, setRaceTime] = useState(30); // default race time of 30 seconds
//   const [raceStarted, setRaceStarted] = useState(false);
//   const [raceFinished, setRaceFinished] = useState(false);
//   const [horsesState, setHorsesState] = useState(horses.map((horse, index) => ({
//     ...horse,
//     position: 0,
//     speed: Math.floor(Math.random() * 10) + 1, // random speed between 1 and 10
//     distance: 0,
//     odds: Math.floor(Math.random() * 10) + 1, // random odds between 1 and 10
//     rank: null,
//   })));

//   const startRace = () => {
//     setRaceStarted(true);
//     setRaceFinished(false);
//     setHorsesState(horsesState.map(horse => ({
//       ...horse,
//       position: 0,
//       distance: 0,
//       rank: null,
//     })));
//   };

//   const finishRace = () => {
//     setRaceStarted(false);
//     setRaceFinished(true);
//   };

//   useEffect(() => {
//     let intervalId;
//     if (raceStarted) {
//       intervalId = setInterval(() => {
//         setHorsesState(prevHorsesState => {
//           const updatedHorsesState = prevHorsesState.map(horse => {
//             let newDistance = horse.distance + (horse.speed / 10);
//             let newPosition = Math.round(newDistance / 10 * window.innerWidth);
//             if (newPosition > window.innerWidth - 100) {
//               newDistance = window.innerWidth - 100;
//             }
//             return {
//               ...horse,
//               position:newPosition,
//               distance: newDistance,
//               };
//               });
//               const sortedHorsesState = [...updatedHorsesState].sort((a, b) => b.distance - a.distance);
//               let rank = 1;
//               sortedHorsesState.forEach((horse, index) => {
//                 if (index > 0 && horse.distance !== sortedHorsesState[index - 1].distance) {
//                   rank++;
//                 }
//                 updatedHorsesState.find(updatedHorse => updatedHorse.number === horse.number).rank = rank;
//               });

//               if (updatedHorsesState[0].distance >= window.innerWidth - 100) {
//                 clearInterval(intervalId);
//                 finishRace();
//               }

//               return updatedHorsesState;
//             });
//           }, 100);
//         }
//         return () => clearInterval(intervalId);

//       }, [raceStarted]);

//       return (
//       <div className="leaderboard-container">
//       <h1>React Horse Race</h1>
//       <div className="race-info">
//       <p>Race time: {raceTime} seconds</p>
//       {raceStarted && <p>Race is in progress...</p>}
//       {raceFinished && <p>Race has finished!</p>}
//       {!raceStarted && !raceFinished && <button onClick={startRace}>Start Race</button>}
//       </div>
//       <div className="race-track">
//       {horsesState.map(horse => (
//       <div key={horse.number} className="horse-container" style={{ left: horse.position }}>
//       <img src={horse.gif} alt={horse.name} />
//       <p>{horse.name} ({horse.odds} to 1)</p>
//       {horse.rank && <p>#{horse.rank}</p>}
//       </div>
//       ))}
//       </div>
//       </div>
//       );
//       };

//       export default Leaderboard;

// ================================================

// import React, { useState, useEffect } from 'react';
// import Horse1Gif from './images/horse (1).gif';
// import Horse2Gif from './images/horse (2).gif';
// import Horse3Gif from './images/horse (3).gif';
// import Horse4Gif from './images/horse (4).gif';
// import Horse5Gif from './images/horse (5).gif';
// import Horse6Gif from './images/horse (6).gif';
// import Horse7Gif from './images/horse (7).gif';
// import Horse8Gif from './images/horse (8).gif';
// import Horse9Gif from './images/horse (9).gif';
// import Horse10Gif from './images/horse (10).gif';
// import './Leaderboard.css';

// const horses = [
//   { name: 'Horse 1', number: 1, gif: Horse1Gif },
//   { name: 'Horse 2', number: 2, gif: Horse2Gif },
//   { name: 'Horse 3', number: 3, gif: Horse3Gif },
//   { name: 'Horse 4', number: 4, gif: Horse4Gif },
//   { name: 'Horse 5', number: 5, gif: Horse5Gif },
//   { name: 'Horse 6', number: 6, gif: Horse6Gif },
//   { name: 'Horse 7', number: 7, gif: Horse7Gif },
//   { name: 'Horse 8', number: 8, gif: Horse8Gif },
//   { name: 'Horse 9', number: 9, gif: Horse9Gif },
//   { name: 'Horse 10', number:10, gif: Horse10Gif }
// ];

// const Leaderboard = () => {
//   const [selectedHorses, setSelectedHorses] = useState([]);
//   const [raceDuration, setRaceDuration] = useState(null);
//   const [trackLength, setTrackLength] = useState(null);
//   const [racePositions, setRacePositions] = useState([]);

//   useEffect(() => {
//     const duration = (Math.floor(Math.random() * 8) + 12) * 1000; // 12-20 seconds intervals
//     const length = (Math.floor(Math.random() * 16) + 5) * 0.125; // 0.625-2.5 miles intervals
//     setRaceDuration(duration);
//     setTrackLength(length);
//   }, []);

//   const startRace = () => {
//     const race = selectedHorses.map((horse) => ({
//       ...horse,
//       time: 0,
//       distance: 0,
//       position: 0
//     }));

//     const interval = setInterval(() => {
//       const newRace = [...race];
//       newRace.forEach((horse) => {
//         horse.distance += Math.floor(Math.random() * 10) + 10;
//         horse.time += 100;
//         const position = newRace.filter((h) => h.distance > horse.distance).length + 1;
//         horse.position = position;
//       });

//       if (race.some((horse) => horse.distance >= trackLength * 1609)) {
//         clearInterval(interval);
//         const sortedRace = [...race].sort((a, b) => a.time - b.time);
//         setRacePositions(sortedRace);
//       } else {
//         setRacePositions(newRace);
//       }
//     }, (Math.floor(Math.random() * 7) + 1) * 1000); // 1-7 seconds intervals
//   };

//   const resetGame = () => {
//     setSelectedHorses([]);
//     setRaceDuration(30000);
//     setTrackLength(2);
//     setRacePositions([]);
//   };

//   return (
//     <div className="App">
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
//               )
//             }
//           >
//             {horses.map((horse) => (
//               <option key={horse.number} value={horse.number}>
//                 {horse.name}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="input-group">
//           <label htmlFor="race-duration-input">Race Duration:</label>
//           <input
//             id="race-duration-input"
//             type="number"
//             value={raceDuration / 1000 || ""}
//             min={12}
//             max={60}
//             step={1}
//             onChange={(e) => setRaceDuration(e.target.value * 1000)}
//           />
//           <span>seconds</span>
//         </div>
//         <div className="input-group">
//           <label htmlFor="track-length-input">Track Length:</label>
//           <input
//             id="track-length-input"
//             type="number"
//             value={trackLength || ""}
//             min={0.625}
//             max={2.5}
//             step={0.125}
//             onChange={(e) => setTrackLength(e.target.value)}
//           />
//           <span>miles</span>
//         </div>
//         <button onClick={startRace} disabled={!selectedHorses.length || !raceDuration || !trackLength}>
//           Start Race
//         </button>
//         <button onClick={resetGame}>Reset</button>
//         {racePositions.length > 0 && (
//           <div className="leaderboard">
//             <h2>Final Leaderboard</h2>
//             {racePositions.map((horse) => (
//               <div key={horse.number} className="horse">
//                 <img src={horse.gif} alt={horse.name} />
//                 <div className="info">
//                   <h3>{horse.name}</h3>
//                   {/* <p>Distance: {horse.distance / 1609} miles</p>
//                   <p>Time: {horse.time / 1000} seconds</p> */}
//                   {/* <p>Position: {horse.position}</p> */}
//                  <p>{horse.position}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//       );
//     };

//     export default Leaderboard;

// ===========================================================================================
// WORKS PERFECTLY  NEED CSS UPGARDED
// import React, { useState, useEffect } from "react";
// import HorseImage from "./images/horse (1).gif"; // Horse images folder
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
// {name: 'Horse 1', number: 1, image:'./images/horse (1).gif'},
// {name: 'Horse 2', number: 2, image:'./images/horse (2).gif'},
// {name: 'Horse 3', number: 3, image:'./images/horse (3).gif'},
// {name: 'Horse 4', number: 4, image:'./images/horse (4).gif'},
// {name: 'Horse 5', number: 5, image:'./images/horse (5).gif'}
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
// import "./Leaderboard.css";

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
