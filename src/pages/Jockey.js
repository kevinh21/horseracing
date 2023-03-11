
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Jockey.css';

function Jockey() {
  const [jockeys, setJockeys] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/jockeys')
      .then(res => {
        setJockeys(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    const sampleJockeys = [
      {
        jockey_id: 1,
        name: 'John Smith',
        races_ridden: 100,
        wins: 25,
        win_percentage: 25,
        top_three_finishes: 70,
        place_percentage: 70,
        show_percentage: 80,
        earnings_total_earnings: 50000,
        earnings_earnings_per_race: 500,
        medical: 'Healthy'
      },
      {
        jockey_id: 2,
        name: 'Jane Doe',
        races_ridden: 80,
        wins: 20,
        win_percentage: 25,
        top_three_finishes: 60,
        place_percentage: 75,
        show_percentage: 85,
        earnings_total_earnings: 40000,
        earnings_earnings_per_race: 500,
        medical: 'Healthy'
      },
      {
        jockey_id: 3,
        name: 'David Johnson',
        races_ridden: 120,
        wins: 30,
        win_percentage: 25,
        top_three_finishes: 90,
        place_percentage: 75,
        show_percentage: 85,
        earnings_total_earnings: 60000,
        earnings_earnings_per_race: 500,
        medical: 'Healthy'
      },
      {
        jockey_id: 4,
        name: 'Sarah Lee',
        races_ridden: 90,
        wins: 22,
        win_percentage: 24,
        top_three_finishes: 65,
        place_percentage: 72,
        show_percentage: 82,
        earnings_total_earnings: 45000,
        earnings_earnings_per_race: 500,
        medical: 'Healthy'
      }
    ];
    setJockeys(sampleJockeys);
  }, []);

  return (
    <div className="jockey-container">
      <h2>Jockey Statistics</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Jockey Name</th>
            <th>Races Ridden</th>
            <th>Wins</th>
            <th>Win Percent</th>
            <th>Top 3 Finishes</th>
            <th>Place Percent</th>
            <th>Show Percent</th>
            <th>Total Earnings</th>
            <th>Earnings per Race</th>
            <th>Medical Status</th>
          </tr>
        </thead>
        <tbody>
          {jockeys.map(jockey => (
            <tr key={jockey.jockey_id}>
              <td>{jockey.name}</td>
              <td>{jockey.races_ridden}</td>
              <td>{jockey.wins}</td>
              <td>{jockey.win_percentage}%</td>
              <td>{jockey.top_three_finishes}</td>
              <td>{jockey.place_percentage}%</td>
              <td>{jockey.show_percentage}%</td>
              <td>${jockey.earnings_total_earnings.toLocaleString()}</td>
          <td>${jockey.earnings_earnings_per_race}</td>
          <td>{jockey.medical}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
);
}

export default Jockey;
