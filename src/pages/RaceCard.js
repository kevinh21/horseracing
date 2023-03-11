import React from 'react';

const RaceCard = ({ race }) => {
  return (
    <div>
      <h2>{race.name}</h2>
      <p>Date and Time: {race.date}</p>
      <p>Location: {race.location}</p>
      <p>Track Name: {race.trackName}</p>
      <p>Distance: {race.distance}</p>
      <p>Purse: {race.purse}</p>
      <p>Conditions: {race.conditions}</p>
      <p>List of Horses:</p>
      <ul>
        {race.horses.map((horse) => (
          <li key={horse.id}>
            {horse.name} ({horse.jockey})
          </li>
        ))}
      </ul>
      <p>Odds: {race.odds}</p>
      <p>Results: {race.results}</p>
      <p>Finishing Times: {race.finishingTimes}</p>
      <p>Replay or Video: {race.videoLink}</p>
      <p>Past Performances:</p>
      <ul>
        {race.pastPerformances.map((performance) => (
          <li key={performance.id}>
            {performance.horse} ({performance.jockey}) - {performance.result}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RaceCard;
