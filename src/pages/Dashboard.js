import React, { useState, useEffect, useRef } from "react";
import './Dashboard.css';

const LiveStreamComponent = () => {
  const videoRef = useRef(null);
  const [horsePositions, setHorsePositions] = useState({}); // an object that holds the positions of each horse

  useEffect(() => {
    const video = videoRef.current;
    const positions = {}; // an object that holds the positions of each horse

    const updateHorsePositions = () => {
      // update the position of each horse
      Object.keys(positions).forEach((horseId) => {
        const newPosition = Math.round(Math.random() * 5000); // generate a random position between 0 and 5000 meters
        positions[horseId] = newPosition;
      });
      setHorsePositions(positions);
    };

    // play the video and update horse positions every second
    video.play();
    const intervalId = setInterval(updateHorsePositions, 1000);

    // pause the video and clear the interval when the component unmounts
    return () => {
      video.pause();
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="live-stream-container">
      <video
        ref={videoRef}
        controls
        autoPlay
        muted
        onLoadedMetadata={() => {
          // set the video's width and height to match its natural dimensions
          videoRef.current.width = videoRef.current.videoWidth;
          videoRef.current.height = videoRef.current.videoHeight;
        }}
      >
        <source src="./images/bayhorse.mp4" type="video/mp4" />
      </video>
      <div className="horse-positions-container">
        {Object.keys(horsePositions).map((horseId) => (
          <div key={horseId}>
            <p>{`Horse ${horseId}: ${horsePositions[horseId]} meters`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveStreamComponent;
