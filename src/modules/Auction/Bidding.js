import React, { useState } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';

function Bidding() {
  const { id } = useParams();
  const horseId = parseInt(id);
  const history = useNavigate ();
  const [bidAmount, setBidAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function handleBidSubmit(event) {
    event.preventDefault();

    if (!bidAmount || isNaN(bidAmount) || bidAmount <= 0) {
      setErrorMessage('Please enter a valid bid amount.');
      return;
    }

    // Save bid to database or state
    // ...

    setBidAmount('');
    history.push(`/auction-horses/${horseId}/currentbid`);
  }

  return (
    <div>
      <h1>Bid for Horse {horseId}</h1>
      <form onSubmit={handleBidSubmit}>
        <label htmlFor="bidAmount">Bid Amount:</label>
        <input
          type="text"
          id="bidAmount"
          value={bidAmount}
          onChange={(event) => setBidAmount(event.target.value)}
        />
        <button type="submit">Submit Bid</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
}

export default Bidding;
