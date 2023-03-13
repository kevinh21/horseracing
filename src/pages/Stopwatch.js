import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./Stopwatch.css";

const Stopwatch = ({ raceDuration, raceStarted, updateLeaderboard, checkForWinners }) => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (!raceStarted) {
      clearInterval(intervalId);
      setElapsedTime(0);
    }
  }, [raceStarted]);

  useEffect(() => {
    if (elapsedTime === raceDuration) {
      clearInterval(intervalId);
      checkForWinners(elapsedTime);
    }
  }, [elapsedTime, raceDuration, checkForWinners, intervalId]);

  const handleStartStopwatch = () => {
    const newIntervalId = setInterval(() => {
      setElapsedTime((prevElapsedTime) => prevElapsedTime + 0.1);
      updateLeaderboard(elapsedTime);
    }, 100);
    setIntervalId(newIntervalId);
  };

  const handlePauseStopwatch = () => {
    clearInterval(intervalId);
  };

  const handleResetStopwatch = () => {
    clearInterval(intervalId);
    setElapsedTime(0);
    updateLeaderboard(0);
  };

  const formatElapsedTime = () => {
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = Math.floor(elapsedTime % 60);
    const milliseconds = Math.floor((elapsedTime % 1) * 10);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}.${milliseconds}`;
  };

  return (
    <div className="stopwatch">
      <div className="stopwatch-display">{formatElapsedTime()}</div>
      <div className="stopwatch-controls">
        {!raceStarted && (
          <Button variant="primary" onClick={handleStartStopwatch} disabled={elapsedTime >= raceDuration}>
            Start
          </Button>
        )}
        {raceStarted && (
          <>
            <Button variant="danger" onClick={handlePauseStopwatch}>
              Pause
            </Button>
            <Button variant="warning" onClick={handleResetStopwatch}>
              Reset
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Stopwatch;
