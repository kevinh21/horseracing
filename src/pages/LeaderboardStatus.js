import React from 'react';

const LeaderboardStatus = ({ selectedHorses }) => {
  return (
    <div>
      <h2>Selected horses:</h2>
      <p>{selectedHorses.length} out of 3 horses selected</p>
    </div>
  );
};

export default LeaderboardStatus;
