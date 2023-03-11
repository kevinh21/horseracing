

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Horse.css';

function Horse() {
  const [horses, setHorses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/race_horses')
      .then(res => {
        setHorses(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    const sampleHorses = [
      {
        horse_id: 1,
        performance_races_run: 20,
        performance_wins: 5,
        performance_top_three_finishes: 15,
        performance_win_percentage: 25,
        performance_place_percentage: 75,
        performance_show_percentage: 100,
        earnings_total_earnings: 10000,
        earnings_earnings_per_start: 500,
        breeding_sire: 'Sire 1',
        breeding_dam: 'Dam 1',
        breeding_dams_sire: 'Dams Sire 1',
        physical_height: '15 hands',
        physical_weight: '1000 lbs',
        physical_color: 'Bay',
        physical_markings: 'Star',
        medical: 'Healthy'
      },
      {
        horse_id: 2,
        performance_races_run: 10,
        performance_wins: 3,
        performance_top_three_finishes: 8,
        performance_win_percentage: 30,
        performance_place_percentage: 80,
        performance_show_percentage: 100,
        earnings_total_earnings: 5000,
        earnings_earnings_per_start: 500,
        breeding_sire: 'Sire 2',
        breeding_dam: 'Dam 2',
        breeding_dams_sire: 'Dams Sire 2',
        physical_height: '16 hands',
        physical_weight: '1100 lbs',
        physical_color: 'Chestnut',
        physical_markings: 'Blaze',
        medical: 'Healthy'
      },
      {
        horse_id: 3,
        performance_races_run: 30,
        performance_wins: 10,
        performance_top_three_finishes: 20,
        performance_win_percentage: 33,
        performance_place_percentage: 73,
        performance_show_percentage: 93,
        earnings_total_earnings: 20000,
        earnings_earnings_per_start: 666.67,
        breeding_sire: 'Sire 3',
        breeding_dam: 'Dam 3',
        breeding_dams_sire: 'Dams Sire 3',
        physical_height: '17 hands',
        physical_weight: '1200 lbs',
        physical_color: 'Black',
        physical_markings: 'Snip',
        medical: 'Healthy'
      },
      {
        horse_id: 4,
        performance_races_run: 25,
        performance_wins: 6,
        performance_top_three_finishes: 18,
        performance_win_percentage: 24,
        performance_place_percentage: 72,
        performance_show_percentage: 92,
        earnings_total_earnings: 15000,
        earnings_earnings_per_start: 600,
        breeding_sire: 'Sire 4',
        breeding_dam: 'Dam 4',
        breeding_dams_sire: 'Dams Sire 4',
        physical_height: '16.5 hands',
        physical_weight: '1150 lbs',
        physical_color: 'Gray',
        physical_markings: 'None',
        medical: 'Healthy'
      }
      ];
setHorses(sampleHorses);
}, []);

return (
<div className="horse-container">
<h1>Horse Racing Information</h1>
<table className="table table-striped">
<thead>
<tr>
<th>Horse ID</th>
<th>Races Run</th>
<th>Wins</th>
<th>Top Three Finishes</th>
<th>Win Percent</th>
<th>Place Percent</th>
<th>Show Percent</th>
<th>Total Earnings</th>
<th>Earnings Per Start</th>
<th>Sire</th>
<th>Dam</th>
<th>Dam's Sire</th>
<th>Height</th>
<th>Weight</th>
<th>Color</th>
<th>Markings</th>
<th>Medical</th>
</tr>
</thead>
<tbody>
{horses.map(horse => (
<tr key={horse.horse_id}>
<td>{horse.horse_id}</td>
<td>{horse.performance_races_run}</td>
<td>{horse.performance_wins}</td>
<td>{horse.performance_top_three_finishes}</td>
<td>{horse.performance_win_percentage}%</td>
<td>{horse.performance_place_percentage}%</td>
<td>{horse.performance_show_percentage}%</td>
<td>${horse.earnings_total_earnings}</td>
<td>${horse.earnings_earnings_per_start}</td>
<td>{horse.breeding_sire}</td>
<td>{horse.breeding_dam}</td>
<td>{horse.breeding_dams_sire}</td>
<td>{horse.physical_height}</td>
<td>{horse.physical_weight}</td>
<td>{horse.physical_color}</td>
<td>{horse.physical_markings}</td>
<td>{horse.medical}</td>
</tr>
))}
</tbody>
</table>
</div>
);
}

export default Horse;







//============================================================================
// Need to import sqlite3 and create a new instance of sqlite3.Database with the 
// path to our database file. We then use db.all to retrieve all rows from the 
// race_horses table and set the state with setHorses. Finally, we close the database connection 
// with db.close(). Note that you will need to replace path/to/database.db with the actual 
// path to your database file.


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Horse.css';
// import { getAllRaceHorses } from './path/to/database/queries';

// function Horse() {
//   const [horses, setHorses] = useState([]);

//   useEffect(() => {
//     getAllRaceHorses((err, rows) => {
//       if (err) {
//         console.log(err);
//       } else {
//         setHorses(rows);
//       }
//     });
//   }, []);

//   return (
//     <div className="container">
//       <h2 className="text-center mb-4">Race Horses Table</h2>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Horse ID</th>
//             <th>Races Run</th>
//             <th>Wins</th>
//             <th>Top 3 Finishes</th>
//             <th>Win Percent</th>
//             <th>Place Percent</th>
//             <th>Show Percent</th>
//             <th>Total Earnings</th>
//             <th>Earnings per Start</th>
//             <th>Sire</th>
//             <th>Dam</th>
//             <th>Dam's Sire</th>
//             <th>Height</th>
//             <th>Weight</th>
//             <th>Color</th>
//             <th>Markings</th>
//             <th>Medical</th>
//           </tr>
//         </thead>
//         <tbody>
//           {horses.map(horse => (
//             <tr key={horse.horse_id}>
//               <td>{horse.horse_id}</td>
//               <td>{horse.performance_races_run}</td>
//               <td>{horse.performance_wins}</td>
//               <td>{horse.performance_top_three_finishes}</td>
//               <td>{horse.performance_win_percentage}</td>
//               <td>{horse.performance_place_percentage}</td>
//               <td>{horse.performance_show_percentage}</td>
//               <td>{horse.earnings_total_earnings}</td>
//               <td>{horse.earnings_earnings_per_start}</td>
//               <td>{horse.breeding_sire}</td>
//               <td>{horse.breeding_dam}</td>
//               <td>{horse.breeding_dams_sire}</td>
//               <td>{horse.physical_height}</td>
//               <td>{horse.physical_weight}</td>
//               <td>{horse.physical_color}</td>
//               <td>{horse.physical_markings}</td>
//               <td>{horse.medical}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
// export default Horse;

// Note: This assumes that you have created a separate file with the name 'queries.js' 
// inside the 'path/to/database/' directory which contains a function 'getAllRaceHorses(callback)' 
// that retrieves all the race horses from your sqlite3 database and calls the provided 
// 'callback' function with the error and rows (if any) as arguments.

// ===============================================










// import React, { useState, useEffect } from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import './Horse.css';
// import sqlite3 from 'sqlite3';

// function Horse() {
//   const [horses, setHorses] = useState([]);

//   useEffect(() => {
//     const db = new sqlite3.Database('path/to/database.db');

//     db.all('SELECT * FROM race_horses', (err, rows) => {
//       if (err) {
//         console.log(err);
//       } else {
//         setHorses(rows);
//       }
//     });

//     db.close();
//   }, []);

//   return (
//     <div className="container">
//       <h2 className="text-center mb-4">Race Horses Table</h2>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Horse ID</th>
//             <th>Races Run</th>
//             <th>Wins</th>
//             <th>Top 3 Finishes</th>
//             <th>Win Percent</th>
//             <th>Place Percent</th>
//             <th>Show Percent</th>
//             <th>Total Earnings</th>
//             <th>Earnings per Start</th>
//             <th>Sire</th>
//             <th>Dam</th>
//             <th>Dam's Sire</th>
//             <th>Height</th>
//             <th>Weight</th>
//             <th>Color</th>
//             <th>Markings</th>
//             <th>Medical</th>
//           </tr>
//         </thead>
//         <tbody>
//           {horses.map(horse => (
//             <tr key={horse.horse_id}>
//               <td>{horse.horse_id}</td>
//               <td>{horse.performance_races_run}</td>
//               <td>{horse.performance_wins}</td>
//               <td>{horse.performance_top_three_finishes}</td>
//               <td>{horse.performance_win_percentage}</td>
//               <td>{horse.performance_place_percentage}</td>
//               <td>{horse.performance_show_percentage}</td>
//               <td>{horse.earnings_total_earnings}</td>
//               <td>{horse.earnings_earnings_per_start}</td>
//               <td>{horse.breeding_sire}</td>
//               <td>{horse.breeding_dam}</td>
//               <td>{horse.breeding_dams_sire}</td>
//               <td>{horse.physical_height}</td>
//               <td>{horse.physical_weight}</td>
//               <td>{horse.physical_color}</td>
//               <td>{horse.physical_markings}</td>
//               <td>{horse.medical}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Horse;


      
// =======================================================
// WORKS FINE  BUT NO SAMPLE DATA
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Horse.css';

// function Horse() {
//   const [horses, setHorses] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8000/race_horses')
//       .then(res => {
//         setHorses(res.data);
//       })
//       .catch(err => console.log(err));
//   }, []);

//   return (
//     <div className="container">
//       <h2 className="text-center mb-4">Race Horses Table</h2>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Horse ID</th>
//             <th>Races Run</th>
//             <th>Wins</th>
//             <th>Top 3 Finishes</th>
//             <th>Win Percent</th>
//             <th>Place Percent</th>
//             <th>Show Percent</th>
//             <th>Total Earnings</th>
//             <th>Earnings per Start</th>
//             <th>Sire</th>
//             <th>Dam</th>
//             <th>Dam's Sire</th>
//             <th>Height</th>
//             <th>Weight</th>
//             <th>Color</th>
//             <th>Markings</th>
//             <th>Medical</th>
//           </tr>
//         </thead>
//         <tbody>
//           {horses.map(horse => (
//             <tr key={horse.horse_id}>
//               <td>{horse.horse_id}</td>
//               <td>{horse.performance_races_run}</td>
//               <td>{horse.performance_wins}</td>
//               <td>{horse.performance_top_three_finishes}</td>
//               <td>{horse.performance_win_percentage}</td>
//               <td>{horse.performance_place_percentage}</td>
//               <td>{horse.performance_show_percentage}</td>
//               <td>{horse.earnings_total_earnings}</td>
//               <td>{horse.earnings_earnings_per_start}</td>
//               <td>{horse.breeding_sire}</td>
//               <td>{horse.breeding_dam}</td>
//               <td>{horse.breeding_dams_sire}</td>
//               <td>{horse.physical_height}</td>
//               <td>{horse.physical_weight}</td>
//               <td>{horse.physical_color}</td>
//               <td>{horse.physical_markings}</td>
//               <td>{horse.medical}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Horse;


// ====================================================


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Horse.css';

// function RaceHorsesTable() {
//   const [horses, setHorses] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8000/race_horses')
//       .then(res => {
//         setHorses(res.data);
//       })
//       .catch(err => console.log(err));
//   }, []);

//   return (
//     <div className="container">
//       <h2>Race Horses Table</h2>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>horse_id</th>
//             <th>performance_races_run</th>
//             <th>performance_wins</th>
//             <th>performance_top_three_finishes</th>
//             <th>performance_win_percentage</th>
//             <th>performance_place_percentage</th>
//             <th>performance_show_percentage</th>
//             <th>earnings_total_earnings</th>
//             <th>earnings_earnings_per_start</th>
//             <th>breeding_sire</th>
//             <th>breeding_dam</th>
//             <th>breeding_dams_sire</th>
//             <th>physical_height</th>
//             <th>physical_weight</th>
//             <th>physical_color</th>
//             <th>physical_markings</th>
//             <th>medical</th>
//           </tr>
//         </thead>
//         <tbody>
//           {horses.map(horse => (
//             <tr key={horse.horse_id}>
//               <td>{horse.horse_id}</td>
//               <td>{horse.performance_races_run}</td>
//               <td>{horse.performance_wins}</td>
//               <td>{horse.performance_top_three_finishes}</td>
//               <td>{horse.performance_win_percentage}</td>
//               <td>{horse.performance_place_percentage}</td>
//               <td>{horse.performance_show_percentage}</td>
//               <td>{horse.earnings_total_earnings}</td>
//               <td>{horse.earnings_earnings_per_start}</td>
//               <td>{horse.breeding_sire}</td>
//               <td>{horse.breeding_dam}</td>
//               <td>{horse.breeding_dams_sire}</td>
//               <td>{horse.physical_height}</td>
//               <td>{horse.physical_weight}</td>
//               <td>{horse.physical_color}</td>
//               <td>{horse.physical_markings}</td>
//               <td>{horse.medical}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default RaceHorsesTable;
