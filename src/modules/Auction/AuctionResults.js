import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AuctionResults() {
  const [winningBids, setWinningBids] = useState([]);

  useEffect(() => {
    // Fetch all the winning bids from the database or state
    // ...

    setWinningBids([
      { horseId: 1, bidderName: 'John Doe', bidAmount: 5000 },
      { horseId: 2, bidderName: 'Jane Smith', bidAmount: 7500 },
      { horseId: 3, bidderName: 'Alice Brown', bidAmount: 10000 },
    ]); // Example winning bids
  }, []);

  return (
    <div>
      <h1>Auction Results</h1>
      {winningBids.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Horse ID</th>
              <th>Winning Bidder</th>
              <th>Bid Amount</th>
            </tr>
          </thead>
          <tbody>
            {winningBids.map((winningBid) => (
              <tr key={winningBid.horseId}>
                <td>{winningBid.horseId}</td>
                <td>{winningBid.bidderName}</td>
                <td>{winningBid.bidAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No winning bids yet.</p>
      )}
      <Link to="/">Go back to Home page</Link>
    </div>
  );
}

export default AuctionResults;
