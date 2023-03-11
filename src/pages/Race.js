import React, { useState } from "react";
import "./Race.css";

const PAST_RACES = [
  {
    id: 1,
    title: "Kentucky Derby",
    date: "May 1, 2021",
    location: "Churchill Downs, Louisville, KY",
    distance: "1 1/4 miles",
    purse: "$3 million",
    conditions: "3-year-olds",
    horses: [
      { name: "Medina Spirit", jockey: "John R. Velazquez", odds: "12-1" },
      { name: "Mandaloun", jockey: "Florent Geroux", odds: "15-1" },
      { name: "Hot Rod Charlie", jockey: "Flavien Prat", odds: "5-1" },
      { name: "Essential Quality", jockey: "Luis Saez", odds: "2-1" },
      { name: "Known Agenda", jockey: "Irad Ortiz Jr.", odds: "6-1" },
    ],
    results: [
      { horse: "Medina Spirit", position: "1", time: "2:01.02" },
      { horse: "Mandaloun", position: "2", time: "2:01.98" },
      { horse: "Hot Rod Charlie", position: "3", time: "2:02.68" },
    ],
    replay: "https://www.youtube.com/watch?v=wD1JxN6Vz5Y",
  },
  {
    id: 2,
    title: "Preakness Stakes",
    date: "May 15, 2021",
    location: "Pimlico Race Course, Baltimore, MD",
    distance: "1 3/16 miles",
    purse: "$1.5 million",
    conditions: "3-year-olds",
    horses: [
      { name: "Rombauer", jockey: "Flavien Prat", odds: "11-1" },
      { name: "Midnight Bourbon", jockey: "Ricardo Santana Jr.", odds: "5-1" },
      { name: "Medina Spirit", jockey: "John R. Velazquez", odds: "2-1" },
      { name: "Crowded Trade", jockey: "Javier Castellano", odds: "10-1" },
      { name: "Keepmeinmind", jockey: "David Cohen", odds: "15-1" },
    ],
    results: [
      { horse: "Rombauer", position: "1", time: "1:53.62" },
      { horse: "Midnight Bourbon", position: "2", time: "1:54.02" },
      { horse: "Medina Spirit", position: "3", time: "1:54.23" },
    ],
    replay: "https://www.youtube.com/watch?v=VG0iZ-cXq3k",
  },
];

const FUTURE_RACES = [
  {
    id: 3,
    title: "Belmont Stakes",
    date: "June 5, 2021",
    location: "Belmont Park, Elmont, NY",
    distance: "1 1/2 miles",
    purse: "$1.5 million",
    conditions: "3-year-olds",
    horses: [
    { name: "Essential Quality", jockey: "Luis Saez", odds: "2-1" },
    { name: "Rombauer", jockey: "Flavien Prat", odds: "3-1" },
    { name: "Hot Rod Charlie", jockey: "Flavien Prat", odds: "5-1" },
    { name: "Rock Your World", jockey: "Joel Rosario", odds: "6-1" },
    { name: "Known Agenda", jockey: "Irad Ortiz Jr.", odds: "8-1" },
    ],
    replay: "",
    },
    {
    id: 4,
    title: "Breeders' Cup Classic",
    date: "November 6, 2021",
    location: "Del Mar Racetrack, Del Mar, CA",
    distance: "1 1/4 miles",
    purse: "$6 million",
    conditions: "3-year-olds and up",
    horses: [
    { name: "Essential Quality", jockey: "Luis Saez", odds: "3-1" },
    { name: "Hot Rod Charlie", jockey: "Flavien Prat", odds: "4-1" },
    { name: "Maxfield", jockey: "Jose Ortiz", odds: "5-1" },
    { name: "Life Is Good", jockey: "Mike Smith", odds: "6-1" },
    { name: "Knicks Go", jockey: "Joel Rosario", odds: "8-1" },
    ],
    replay: "",
    },
    ];
    
    function Race() {
    const [pastRace, setPastRace] = useState(null);
    const [futureRace, setFutureRace] = useState(null);
    
    const handlePastRaceChange = (event) => {
    const raceId = parseInt(event.target.value);
    const race = PAST_RACES.find((race) => race.id === raceId);
    setPastRace(race);
    setFutureRace(null);
    };
    
    const handleFutureRaceChange = (event) => {
    const raceId = parseInt(event.target.value);
    const race = FUTURE_RACES.find((race) => race.id === raceId);
    setFutureRace(race);
    setPastRace(null);
    };
    
    return (
    <div className="App">
    <h1>Horse Races</h1>
    <div className="select-container">
    <label htmlFor="past-race-select">Select a past race:</label>
    <select id="past-race-select" onChange={handlePastRaceChange}>
      <option value="">--Select--</option>
      {PAST_RACES.map((race) => (
        <option key={race.id} value={race.id}>
          {race.title}
        </option>
      ))}
    </select>
  </div>

  <div className="select-container">
    <label htmlFor="future-race-select">Select a future race:</label>
    <select id="future-race-select" onChange={handleFutureRaceChange}>
      <option value="">--Select--</option>
      {FUTURE_RACES.map((race) => (
        <option key={race.id} value={race.id}>
          {race.title}
        </option>
      ))}
    </select>
  </div>

  {pastRace && (
    <div className="race-card">
      <h2>{pastRace.title}</h2>
      <p>Date and Time: {pastRace.date}</p>
      <p>Location and Track:
      {pastRace.location}</p>
<p>Distance: {pastRace.distance}</p>
<p>Purse: {pastRace.purse}</p>
<p>Conditions: {pastRace.conditions}</p>
<h3>Results</h3>
<table>
<thead>
<tr>
<th>Horse</th>
<th>Position</th>
<th>Time</th>
</tr>
</thead>
<tbody>
{pastRace.results.map((result) => (
<tr key={result.horse}>
<td>{result.horse}</td>
<td>{result.position}</td>
<td>{result.time}</td>
</tr>
))}
</tbody>
</table>
<div className="video-container">
<h3>Replay</h3>
<iframe
title={pastRace.title + " Replay"}
width="560"
height="315"
src={pastRace.replay}
allowFullScreen
></iframe>
</div>
</div>
)}

{futureRace && (
<div className="race-card">
<h2>{futureRace.title}</h2>
<p>Date and Time: {futureRace.date}</p>
<p>Location and Track: {futureRace.location}</p>
<p>Distance: {futureRace.distance}</p>
<p>Purse: {futureRace.purse}</p>
<p>Conditions: {futureRace.conditions}</p>
<h3>Horses</h3>
<ul>
{futureRace.horses.map((horse) => (
<li key={horse.name}>
<span className="horse-name">{horse.name}</span>
<span className="horse-jockey">Jockey: {horse.jockey}</span>
<span className="horse-odds">Odds: {horse.odds}</span>
</li>
))}
</ul>
</div>
)}

</div>);
}
export default Race;