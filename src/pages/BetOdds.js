// You can use external APIs or services that provide 
// horse racing odds based on various factors. Some popular 
// options include Betfair, Bet365, and Paddy Power. These services 
// allow you to get real-time odds data that you can integrate 
// into your application.


import React, { useState, useEffect } from 'react';
import Horse1Gif from './images/horse running (1).gif';
import Horse2Gif from './images/horse running (2).gif';
import Horse3Gif from './images/horse running (3).gif';
import Horse4Gif from './images/horse running (4).gif';
import Horse5Gif from './images/horse running (5).gif';
import './BetOdds.css';

const horses = [
  { name: 'Horse 1', number: 1, gif: Horse1Gif },
  { name: 'Horse 2', number: 2, gif: Horse2Gif },
  { name: 'Horse 3', number: 3, gif: Horse3Gif },
  { name: 'Horse 4', number: 4, gif: Horse4Gif },
  { name: 'Horse 5', number: 5, gif: Horse5Gif }
];

function BetOdds() {
  const [selectedHorses, setSelectedHorses] = useState([]);
  const [raceDuration, setRaceDuration] = useState(null);
  const [trackLength, setTrackLength] = useState(null);
  const [racePositions, setRacePositions] = useState([]);
  const [odds, setOdds] = useState(null);

  useEffect(() => {
    const duration = (Math.floor(Math.random() * 8) + 12) * 1000; // 12-20 seconds intervals
    const length = (Math.floor(Math.random() * 16) + 5) * 0.125; // 0.625-2.5 miles intervals
    setRaceDuration(duration);
    setTrackLength(length);
  }, []);

  useEffect(() => {
    if (racePositions.length > 0) {
      const sortedRace = [...racePositions].sort((a, b) => a.position - b.position);
      const horseOdds = sortedRace.map((horse, index) => ({
        ...horse,
        odds: 1 / (index + 1)
      }));
      setOdds(horseOdds);
    }
  }, [racePositions]);

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

      if (race.some((horse) => horse.distance >= trackLength * 5280)) {
        clearInterval(interval);
        setRacePositions([...race]);
      } else {
        setSelectedHorses([...newRace]);
      }
    }, 100);
  };

  const handleHorseSelection = (horse) => {
    if (selectedHorses.length < 5 && !selectedHorses.includes(horse)) {
      setSelectedHorses([...selectedHorses, horse]);
    } else if (selectedHorses.includes(horse)) {
      const updatedHorses = selectedHorses.filter((h) => h !== horse);
      setSelectedHorses([...
selectedHorses.filter((h) => h !== horse)]);
}
};

return (
<div className="bet-odds-container">
<div className="horse-selection">
<h2>Select up to 5 horses:</h2>
<div className="horse-grid">
{horses.map((horse) => (
<div
key={horse.number}
className={`horse-card ${selectedHorses.includes(horse) && 'selected'}`}
onClick={() => handleHorseSelection(horse)}
>
<img src={horse.gif} alt={horse.name} />
<div className="horse-info">
<h3>{horse.name}</h3>
<p>Number: {horse.number}</p>
</div>
</div>
))}
</div>
<button onClick={startRace}>Start Race</button>
</div>
{odds && (
<div className="race-results">
<h2>Race Results:</h2>
<div className="race-grid">
{racePositions.map((horse) => (
<div key={horse.number} className="race-card">
<img src={horse.gif} alt={horse.name} />
<div className="horse-info">
<h3>{horse.name}</h3>
<p>Number: {horse.number}</p>
<p>Position: {horse.position}</p>
<p>Odds: {odds.find((o) => o.number === horse.number).odds.toFixed(2)}</p>
</div>
</div>
))}
</div>
</div>
)}
</div>
);
}

export default BetOdds;

// ============================================================

// import React, { useState, useEffect } from 'react';
// import Horse1Gif from './images/horse running (1).gif';
// import Horse2Gif from './images/horse running (2).gif';
// import Horse3Gif from './images/horse running (3).gif';
// import Horse4Gif from './images/horse running (4).gif';
// import Horse5Gif from './images/horse running (5).gif';
// import './BetOdds.css';

// const horses = [
//   { name: 'Horse 1', number: 1, gif: Horse1Gif },
//   { name: 'Horse 2', number: 2, gif: Horse2Gif },
//   { name: 'Horse 3', number: 3, gif: Horse3Gif },
//   { name: 'Horse 4', number: 4, gif: Horse4Gif },
//   { name: 'Horse 5', number: 5, gif: Horse5Gif }
// ];

// function BetOdds() {
//   const [selectedHorses, setSelectedHorses] = useState([]);
//   const [raceDuration, setRaceDuration] = useState(null);
//   const [trackLength, setTrackLength] = useState(null);
//   const [racePositions, setRacePositions] = useState([]);
//   const [odds, setOdds] = useState(null);

//   useEffect(() => {
//     const duration = (Math.floor(Math.random() * 8) + 12) * 1000; // 12-20 seconds intervals
//     const length = (Math.floor(Math.random() * 16) + 5) * 0.125; // 0.625-2.5 miles intervals
//     setRaceDuration(duration);
//     setTrackLength(length);
//   }, []);

//   useEffect(() => {
//     if (racePositions.length > 0) {
//       const sortedRace = [...racePositions].sort((a, b) => a.position - b.position);
//       const horseOdds = sortedRace.map((horse, index) => ({
//         ...horse,
//         odds: 1 / (index + 1)
//       }));
//       setOdds(horseOdds);
//     }
//   }, [racePositions]);

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

//       if (race.some((horse) => horse.distance >= trackLength * 5280)) {
//         clearInterval(interval);
//         setRacePositions([...race]);
//       } else {
//         setSelectedHorses([...newRace]);
//       }
//     }, 100);
//   };

//   const handleHorseSelection = (horse) => {
//     if (selectedHorses.length < 5 && !selectedHorses.includes(horse)) {
//       setSelectedHorses([...selectedHorses, horse]);
//     } else if (selectedHorses.includes(horse)) {
//       const updatedHorses = selectedHorses.filter((h) => h !== horse);
//       setSelectedHorses([...updatedHorses]);
//     }
//   };

//   return (
//     <div className="leaderboard-odds-container">
//       <div className="leaderboard-odds-header">
//       <h2>Place Your Bets!</h2>
//     <button onClick={startRace}>Start Race</button>
//   </div>
//   <div className="leaderboard-odds-content">
//     <div className="horse-selection-container">
//       <h3>Select Your Horses:</h3>
//       <div className="horse-grid">
//         {horses.map((horse) => (
//           <div
//             key={horse.number}
//             className={`horse ${selectedHorses.includes(horse) ? 'selected' : ''}`}
//             onClick={() => handleHorseSelection(horse)}
//           >
//             <img src={horse.gif} alt={horse.name} />
//             <p>{horse.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//     <div className="race-leaderboard-container">
//       <h3>Race Leaderboard:</h3>
//       <div className="race-leaderboard-grid">
//         {racePositions.length > 0 ? (
//           racePositions.map((horse) => (
//             <div key={horse.number} className="race-leaderboard-item">
//               <img src={horse.gif} alt={horse.name} />
//               <p>{horse.name}</p>
//               <p>Position: {horse.position}</p>
//               <p>Odds: {odds.find((o) => o.number === horse.number).odds.toFixed(2)}</p>
//             </div>
//           ))
//         ) : (
//           <p>Waiting for the race to start...</p>
//         )}
//       </div>
//     </div>
//   </div>
// </div>
// );
// }

// export default BetOdds;





// {/* ================================================== */}

// // import React, { useState, useEffect } from 'react';
// // import Horse1Gif from './images/horse running (1).gif';
// // import Horse2Gif from './images/horse running (2).gif';
// // import Horse3Gif from './images/horse running (3).gif';
// // import Horse4Gif from './images/horse running (4).gif';
// // import Horse5Gif from './images/horse running (5).gif';
// // import './BetOdds.css';

// // const horses = [
// //   { name: 'Horse 1', number: 1, gif: Horse1Gif },
// //   { name: 'Horse 2', number: 2, gif: Horse2Gif },
// //   { name: 'Horse 3', number: 3, gif: Horse3Gif },
// //   { name: 'Horse 4', number: 4, gif: Horse4Gif },
// //   { name: 'Horse 5', number: 5, gif: Horse5Gif }
// // ];

// // const BetOdds = () => {
// //   const [selectedHorses, setSelectedHorses] = useState([]);
// //   const [raceDuration, setRaceDuration] = useState(null);
// //   const [trackLength, setTrackLength] = useState(null);
// //   const [racePositions, setRacePositions] = useState([]);
// //   const [odds, setOdds] = useState(null);

// //   useEffect(() => {
// //     const duration = (Math.floor(Math.random() * 8) + 12) * 1000; // 12-20 seconds intervals
// //     const length = (Math.floor(Math.random() * 16) + 5) * 0.125; // 0.625-2.5 miles intervals
// //     setRaceDuration(duration);
// //     setTrackLength(length);
// //   }, []);

// //   useEffect(() => {
// //     if (racePositions.length > 0) {
// //       const sortedRace = [...racePositions].sort((a, b) => a.position - b.position);
// //       const horseOdds = sortedRace.map((horse, index) => ({
// //         ...horse,
// //         odds: 1 / (index + 1)
// //       }));
// //       setOdds(horseOdds);
// //     }
// //   }, [racePositions]);

// //   const startRace = () => {
// //     const race = selectedHorses.map((horse) => ({
// //       ...horse,
// //       time: 0,
// //       distance: 0,
// //       position: 0
// //     }));

// //     const interval = setInterval(() => {
// //       const newRace = [...race];
// //       newRace.forEach((horse) => {
// //         horse.distance += Math.floor(Math.random() * 10) + 10;
// //         horse.time += 100;
// //         const position = newRace.filter((h) => h.distance > horse.distance).length + 1;
// //         horse.position = position;
// //       });

// //       if (race.some((horse) => horse.distance >= trackLength * 5280)) {
// //         clearInterval(interval);
// //         setRacePositions([...race]);
// //       } else {
// //         setSelectedHorses([...newRace]);
// //         }
// //         }, 100);
// //         };
        
// //         const handleHorseSelection = (horse) => {
// //         if (selectedHorses.length < 5 && !selectedHorses.includes(horse)) {
// //         setSelectedHorses([...selectedHorses, horse]);
// //         } else if (selectedHorses.includes(horse)) {
// //         const updatedHorses = selectedHorses.filter((h) => h !== horse);
// //         setSelectedHorses([...updatedHorses]);
// //         }
// //         };
        
// //         return (
// //         <div className="leaderboard-odds-container">
// //         <div className="leaderboard-odds-header">
// //         <h2>Horse Race Leaderboard and Odds</h2>
// //         <button onClick={startRace}>Start Race</button>
// //         </div>
// //         <div className="leaderboard-odds-body">
// //         <div className="leaderboard-odds-horse-selection">
// //         <h3>Select up to 5 horses:</h3>
// //         <div className="leaderboard-odds-horse-grid">
// //         {horses.map((horse) => (
// //         <div
// //         key={horse.number}
// //         className={`leaderboard-odds-horse ${selectedHorses.includes(horse) ? 'selected' : ''}`}
// //         onClick={() => handleHorseSelection(horse)}
// //         >
// //         <img src={horse.gif} alt={horse.name} />
// //         <p>{horse.name}</p>
// //         </div>
// //         ))}
// //         </div>
// //         </div>
// //         <div className="leaderboard-odds-race">
// //         <div className="leaderboard-odds-track">
// //         <div className="leaderboard-odds-track-distance">{`${trackLength} miles`}</div>
// //         </div>
// //         {racePositions.length > 0 ? (
// //         <div className="leaderboard-odds-leaderboard">
// //         <h3>Final Positions:</h3>
// //         <ol>
// //         {racePositions.map((horse) => (
// //         <li key={horse.number}>
// //         <span>{horse.name}</span>
// //         <span>{`${horse.distance.toFixed(2)} ft`}</span>
// //         <span>{`${(horse.time / 1000).toFixed(2)} s`}</span>
// //         <span>{horse.position}</span>
// //         </li>
// //         ))}
// //         </ol>
// //         <h3>Odds:</h3>
// //         <ol>
// //         {odds.map((horse) => (
// //         <li key={horse.number}>
// //         <span>{horse.name}</span>
// //         <span>{horse.odds.toFixed(2)}</span>
// //         </li>
// //         ))}
// //         </ol>
// //         </div>
// //         ) : (
// //         <div className="leaderboard-odds-leaderboard">
// //         <p>Click Start Race to begin</p>
// //         </div>
// //         )}
// //         </div>
// //         </div>
// //         </div>
// //         );
// //         };
        
// //         export default BetOdds;
