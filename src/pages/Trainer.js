

import React, { useState } from 'react';
import './Trainer.css';

const Trainer = () => {
  const [horses, setHorses] = useState([
    {
      name: "Thunderbolt",
      age: 5,
      gender: "Male",
      totalRaces: 10,
      totalWins: 4,
      totalPlaces: 3,
      totalShows: 1,
      earnings: 50000,
      lastRace: {
        date: "2022-12-12",
        track: "Churchill Downs",
        raceNumber: 8,
        finishPosition: 1
      }
    },
    {
      name: "Lightning",
      age: 4,
      gender: "Female",
      totalRaces: 12,
      totalWins: 6,
      totalPlaces: 2,
      totalShows: 1,
      earnings: 75000,
      lastRace: {
        date: "2022-12-05",
        track: "Gulfstream Park",
        raceNumber: 6,
        finishPosition: 2
      }
    },
    {
      name: "Whirlwind",
      age: 6,
      gender: "Male",
      totalRaces: 15,
      totalWins: 8,
      totalPlaces: 3,
      totalShows: 2,
      earnings: 100000,
      lastRace: {
        date: "2022-11-28",
        track: "Santa Anita Park",
        raceNumber: 9,
        finishPosition: 3
      }
    }
  ]);

  const totalHorses = horses.length;

  const totalRaces = horses.reduce((total, horse) => {
    return total + horse.totalRaces;
  }, 0);

  const totalWins = horses.reduce((total, horse) => {
    return total + horse.totalWins;
  }, 0);

  const totalPlaces = horses.reduce((total, horse) => {
    return total + horse.totalPlaces;
  }, 0);

  const totalShows = horses.reduce((total, horse) => {
    return total + horse.totalShows;
  }, 0);

  const winPercentage = totalWins / totalRaces * 100;
  const placePercentage = totalPlaces / totalRaces * 100;
  const showPercentage = totalShows / totalRaces * 100;

  const highestEarningHorse = horses.reduce((highest, horse) => {
    return horse.earnings > highest.earnings ? horse : highest;
  }, horses[0]);

  const latestRace = horses.reduce((latest, horse) => {
    return new Date(horse.lastRace.date) > new Date(latest.lastRace.date) ? horse : latest;
  }, horses[0]).lastRace;

  return (
    <div>
      <h1>Trainer Statistics</h1>
      <p>Total Horses: {totalHorses}</p>
      <p>Total Races: {totalRaces}</p>
      <p>Total Wins: {totalWins}</p>
      <p>Total Places: {totalPlaces}</p>
      <p>Total Shows: {totalShows}</p>
      <p>Win Percentage: {winPercentage.toFixed(2)}%</p>
      <p>Place Percentage: {placePercentage.toFixed(2)}%</p>
      <p>Show Percentage: {showPercentage.toFixed(2)}%</p>
      <p>Highest Earning Horse: {highestEarningHorse.name} (${   highestEarningHorse.earnings})</p>
  <h2>Latest Race Results</h2>
  <p>Date: {latestRace.date}</p>
  <p>Track: {latestRace.track}</p>
  <p>Race Number: {latestRace.raceNumber}</p>
  <p>Finish Position: {latestRace.finishPosition}</p>
  <h2>Horses</h2>
  {horses.map((horse, index) => (
    <div key={index}>
      <h3>{horse.name}</h3>
      <p>Age: {horse.age}</p>
      <p>Gender: {horse.gender}</p>
      <p>Total Races: {horse.totalRaces}</p>
      <p>Total Wins: {horse.totalWins}</p>
      <p>Total Places: {horse.totalPlaces}</p>
      <p>Total Shows: {horse.totalShows}</p>
      <p>Earnings: ${horse.earnings}</p>
      <h4>Last Race Results</h4>
      <p>Date: {horse.lastRace.date}</p>
      <p>Track: {horse.lastRace.track}</p>
      <p>Race Number: {horse.lastRace.raceNumber}</p>
      <p>Finish Position: {horse.lastRace.finishPosition}</p>
    </div>
  ))}
</div>
);
};

export default Trainer;



