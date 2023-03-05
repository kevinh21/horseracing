import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function RaceHorsesTable() {
  const [horses, setHorses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/race_horses')
      .then(res => {
        setHorses(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container">
      <h2>Race Horses Table</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>horse_id</th>
            <th>performance_races_run</th>
            <th>performance_wins</th>
            <th>performance_top_three_finishes</th>
            <th>performance_win_percentage</th>
            <th>performance_place_percentage</th>
            <th>performance_show_percentage</th>
            <th>earnings_total_earnings</th>
            <th>earnings_earnings_per_start</th>
            <th>breeding_sire</th>
            <th>breeding_dam</th>
            <th>breeding_dams_sire</th>
            <th>physical_height</th>
            <th>physical_weight</th>
            <th>physical_color</th>
            <th>physical_markings</th>
            <th>medical</th>
          </tr>
        </thead>
        <tbody>
          {horses.map(horse => (
            <tr key={horse.horse_id}>
              <td>{horse.horse_id}</td>
              <td>{horse.performance_races_run}</td>
              <td>{horse.performance_wins}</td>
              <td>{horse.performance_top_three_finishes}</td>
              <td>{horse.performance_win_percentage}</td>
              <td>{horse.performance_place_percentage}</td>
              <td>{horse.performance_show_percentage}</td>
              <td>{horse.earnings_total_earnings}</td>
              <td>{horse.earnings_earnings_per_start}</td>
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

export default RaceHorsesTable;
