import React, { useState } from 'react';
import './CreateHorsePage.css';

const CreateHorsePage = () => {
  const [color, setColor] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [races, setRaces] = useState('');
  const [highestEarning, setHighestEarning] = useState('');
  const [totalEarnings, setTotalEarnings] = useState('');
  const [firstPlaceFinishes, setFirstPlaceFinishes] = useState('');
  const [secondPlaceFinishes, setSecondPlaceFinishes] = useState('');
  const [thirdPlaceFinishes, setThirdPlaceFinishes] = useState('');
  const [pastPerformances, setPastPerformances] = useState('');
  const [sire, setSire] = useState('');
  const [dame, setDame] = useState('');
  const [tracksRaced, setTracksRaced] = useState('');
  const [stats, setStats] = useState('');

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleRacesChange = (event) => {
    setRaces(event.target.value);
  };

  const handleHighestEarningChange = (event) => {
    setHighestEarning(event.target.value);
  };

  const handleTotalEarningsChange = (event) => {
    setTotalEarnings(event.target.value);
  };

  const handleFirstPlaceFinishesChange = (event) => {
    setFirstPlaceFinishes(event.target.value);
  };

  const handleSecondPlaceFinishesChange = (event) => {
    setSecondPlaceFinishes(event.target.value);
  };

  const handleThirdPlaceFinishesChange = (event) => {
    setThirdPlaceFinishes(event.target.value);
  };

  const handlePastPerformancesChange = (event) => {
    setPastPerformances(event.target.value);
  };

  const handleSireChange = (event) => {
    setSire(event.target.value);
  };

  const handleDameChange = (event) => {
    setDame(event.target.value);
  };

  const handleTracksRacedChange = (event) => {
    setTracksRaced(event.target.value);
  };

  const handleStatsChange = (event) => {
    setStats(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: submit horse data to server
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="color-select">Color:</label>
        <select id="color-select" value={color} onChange={handleColorChange}>
          <option value="">--Please choose a color--</option>
          <option value="bay">Bay</option>
          <option value="black">Black</option>
          <option value="chestnut">Chestnut</option>
          <option value="gray">Gray</option>
          <option value="roan">Roan</option>
        </select>
      </div>
      <div>
        <label htmlFor="height-select">Height:</label>
        <select id="height-select"
value={height}
onChange={handleHeightChange}>
<option value="14 hands">14 hands</option>
<option value="15 hands">15 hands</option>
<option value="16 hands">16 hands</option>
<option value="17 hands">17 hands</option>
<option value="18 hands">18 hands</option>
</select>
</div>
<div>
<label htmlFor="weight-input">Weight:</label>
<input id="weight-input"
       type="number"
       value={weight}
       onChange={handleWeightChange}
       min="500"
       max="2000"
       step="50"
       required />
</div>
<div>
<label htmlFor="age-input">Age:</label>
<input id="age-input"
       type="number"
       value={age}
       onChange={handleAgeChange}
       min="1"
       max="30"
       required />
</div>
<div>
<label htmlFor="races-input">Number of Races:</label>
<input id="races-input"
       type="number"
       value={races}
       onChange={handleRacesChange}
       min="0"
       max="1000"
       step="1"
       required />
</div>
<div>
<label htmlFor="highest-earning-input">Highest Earning:</label>
<input id="highest-earning-input"
       type="number"
       value={highestEarning}
       onChange={handleHighestEarningChange}
       min="0"
       max="10000000"
       step="10000"
       required />
</div>
<div>
<label htmlFor="total-earnings-input">Total Earnings:</label>
<input id="total-earnings-input"
       type="number"
       value={totalEarnings}
       onChange={handleTotalEarningsChange}
       min="0"
       max="10000000"
       step="10000"
       required />
</div>
<div>
<label htmlFor="first-place-input">First Place Finishes:</label>
<input id="first-place-input"
       type="number"
       value={firstPlaceFinishes}
       onChange={handleFirstPlaceFinishesChange}
       min="0"
       max="1000"
       step="1"
       required />
</div>
<div>
<label htmlFor="second-place-input">Second Place Finishes:</label>
<input id="second-place-input"
       type="number"
       value={secondPlaceFinishes}
       onChange={handleSecondPlaceFinishesChange}
       min="0"
       max="1000"
       step="1"
       required />
</div>
<div>
<label htmlFor="third-place-input">Third Place Finishes:</label>
<input id="third-place-input"
       type="number"
       value={thirdPlaceFinishes}
       onChange={handleThirdPlaceFinishesChange}
       min="0"
       max="1000"
       step="1"
       required />
</div>
<div>
<label htmlFor="past-performances-input">Past Performances:</label>
<textarea id="past-performances-input"
          value={pastPerformances}
          onChange={handlePastPerformancesChange}
          rows="4"
          cols="50"
          required />
</div>
<div>
<label htmlFor="sire-input">Sire:</label>
<input id="sire-input"
       type="text"
       value={sire}
       onChange={handleSireChange}
       maxLength="50"
       required />
</div>
<div>
<label htmlFor="dame-input">Dame:</label>
<input id="dame-input"
       type="text"
       value={dame}
       onChange={handleDameChange}
       maxLength="50"
       required />
</div>
<div>
<label htmlFor="tracks-raced-input">Tracks Raced:</label>
<input id="tracks-raced-input"
       type="text"
       value={tracksRaced}
       onChange={handleTracksRacedChange}
       maxLength="50"
       required />
</div>
<div>
<label htmlFor="second-place-input">Second Place Finishes:</label>
<input id="second-place-input"
       type="number"
       value={secondPlaceFinishes}
       onChange={handleSecondPlaceFinishesChange}
       min="0"
       max="1000"
       step="1"
       required />
</div>
<div>
<label htmlFor="third-place-input">Third Place Finishes:</label>
<input id="third-place-input"
       type="number"
       value={thirdPlaceFinishes}
       onChange={handleThirdPlaceFinishesChange}
       min="0"
       max="1000"
       step="1"
       required />
</div>
<div>
<label htmlFor="past-performances-input">Past Performances:</label>
<textarea id="past-performances-input"
          value={pastPerformances}
          onChange={handlePastPerformancesChange}
          maxLength="5000"
          rows="5" />
</div>
<div>
<label htmlFor="sire-input">Sire:</label>
<input id="sire-input"
       type="text"
       value={sire}
       onChange={handleSireChange}
       maxLength="100"
       required />
</div>
<div>
<label htmlFor="dame-input">Dame:</label>
<input id="dame-input"
       type="text"
       value={dame}
       onChange={handleDameChange}
       maxLength="100"
       required />
</div>
<div>
<label htmlFor="tracks-raced-input">Tracks Raced:</label>
<input id="tracks-raced-input"
       type="text"
       value={tracksRaced}
       onChange={handleTracksRacedChange}
       maxLength="1000"
       required />
</div>
<div>
<label htmlFor="stats-input">Stats:</label>
<textarea id="stats-input"
          value={stats}
          onChange={handleStatsChange}
          maxLength="5000"
          rows="5" />
</div>
<button type="submit">Submit</button>
</form>
);
};
export default CreateHorsePage;