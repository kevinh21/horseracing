import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CurrentHighestBid() {
  const { id } = useParams();
  const horseId = parseInt(id);
  const [highestBid, setHighestBid] = useState(null);

  useEffect(() => {
    // Fetch highest bid for the horse from database or state
    // ...

    setHighestBid(100); // Example highest bid amount
  }, [horseId]);

  return (
    <div>
      <h1>Current Highest Bid for Horse {horseId}</h1>
      {highestBid ? (
        <p>The current highest bid is: {highestBid}</p>
      ) : (
        <p>No bids yet for this horse.</p>
      )}
    </div>
  );
}

export default CurrentHighestBid;
