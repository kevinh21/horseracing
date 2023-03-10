import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import "./Bets.css";

const Bets = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [selectedHorses, setSelectedHorses] = useState([]);
  const [betType, setBetType] = useState('win');
  const [betAmount, setBetAmount] = useState(0);
  const [odds, setOdds] = useState(0);

  const handleHorseSelection = (horseId) => {
    if (selectedHorses.includes(horseId)) {
      setSelectedHorses(selectedHorses.filter((id) => id !== horseId));
    } else {
      setSelectedHorses([...selectedHorses, horseId]);
    }
  };

  const handleBetTypeSelection = (event) => {
    setBetType(event.target.value);
  };

  const onSubmit = (data) => {
    console.log(data);
    // TODO: Submit the bet to the server.
  };

  const calculatePotentialPayout = () => {
    if (betAmount && odds) {
      const payout = betAmount * odds;
      return payout.toFixed(2);
    }
    return 0;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h3>Choose Horse(s)</h3>
        <div>
          <label>
            <input type="checkbox" {...register('horses')} value="1" onChange={() => handleHorseSelection(1)} />
            Horse 1
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" {...register('horses')} value="2" onChange={() => handleHorseSelection(2)} />
            Horse 2
          </label>
        </div>
        {/* Add more horse options as necessary */}
      </div>
      <div>
        <h3>Choose Bet Type</h3>
        <div>
          <label>
            <input type="radio" {...register('betType')} value="win" checked={betType === 'win'} onChange={handleBetTypeSelection} />
            Win
          </label>
        </div>
        <div>
          <label>
            <input type="radio" {...register('betType')} value="place" checked={betType === 'place'} onChange={handleBetTypeSelection} />
            Place
          </label>
        </div>
        <div>
          <label>
            <input type="radio" {...register('betType')} value="show" checked={betType === 'show'} onChange={handleBetTypeSelection} />
            Show
          </label>
        </div>
        <div>
          <label>
            <input type="radio" {...register('betType')} value="exacta" checked={betType === 'exacta'} onChange={handleBetTypeSelection} />
            Exacta
          </label>
        </div>
        <div>
          <label>
            <input type="radio" {...register('betType')} value="trifecta" checked={betType === 'trifecta'} onChange={handleBetTypeSelection} />
            Trifecta
          </label>
        </div>
        <div>
          <label>
            <input type="radio" {...register('betType')} value="quinella" checked={betType === 'quinella'} onChange={handleBetTypeSelection} />
            Quinella
</label>
</div>
<div>
<label>
<input type="radio" {...register('betType')} value="superfecta" checked={betType === 'superfecta'} onChange={handleBetTypeSelection} />
Superfecta
</label>
</div>
<div>
<label>
<input type="radio" {...register('betType')} value="superhigh5" checked={betType === 'superhigh5'} onChange={handleBetTypeSelection} />
Super High 5
</label>
</div>
<div>
<label>
<input type="radio" {...register('betType')} value="dailydouble" checked={betType === 'dailydouble'} onChange={handleBetTypeSelection} />
Daily Double
</label>
</div>
<div>
<label>
<input type="radio" {...register('betType')} value="pick3" checked={betType === 'pick3'} onChange={handleBetTypeSelection} />
Pick 3
</label>
</div>
<div>
<label>
<input type="radio" {...register('betType')} value="pick4" checked={betType === 'pick4'} onChange={handleBetTypeSelection} />
Pick 4
</label>
</div>
<div>
<label>
<input type="radio" {...register('betType')} value="pick5" checked={betType === 'pick5'} onChange={handleBetTypeSelection} />
Pick 5
</label>
</div>
<div>
<label>
<input type="radio" {...register('betType')} value="pick6" checked={betType === 'pick6'} onChange={handleBetTypeSelection} />
Pick 6
</label>
</div>
{/* Add more bet type options as necessary */}
</div>
<div>
<h3>Enter Bet Amount</h3>
<input type="number" {...register('betAmount', { required: true, min: 1 })} onChange={(e) => setBetAmount(parseFloat(e.target.value))} />
{errors.betAmount?.type === 'required' && <span>Please enter a bet amount.</span>}
{errors.betAmount?.type === 'min' && <span>Please enter a bet amount greater than zero.</span>}
</div>
<div>
<h3>Enter Odds</h3>
<input type="number" {...register('odds', { required: true, min: 1 })} onChange={(e) => setOdds(parseFloat(e.target.value))} />
{errors.odds?.type === 'required' && <span>Please enter the odds.</span>}
{errors.odds?.type === 'min' && <span>Please enter odds greater than zero.</span>}
</div>
<div>
<h3>Potential Payout</h3>
<p>{calculatePotentialPayout()}</p>
</div>
<button type="submit">Place Bet</button>
</form>
);
};

export default Bets;





// =====================================================================================

// import React, { useState } from 'react';

// function Bets() {
//   const [horseName, setHorseName] = useState('');
//   const [betAmount, setBetAmount] = useState(0);
//   const [betType, setBetType] = useState('');
//   const [betResult, setBetResult] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Add code here to handle the form submission
//   };

//   return (
//     <div>
//       <h2>Betting Form</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Horse Name:
//           <input
//             type="text"
//             value={horseName}
//             onChange={(event) => setHorseName(event.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Bet Amount:
//           <input
//             type="number"
//             value={betAmount}
//             onChange={(event) => setBetAmount(event.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Bet Type:
//           <select value={betType} onChange={(event) => setBetType(event.target.value)}>
//             <option value="">Please select</option>
//             <option value="Win">Win</option>
//             <option value="Place">Place</option>
//             <option value="Each Way">Each Way</option>
//           </select>
//         </label>
//         <br />
//         <label>
//           Bet Result:
//           <select value={betResult} onChange={(event) => setBetResult(event.target.value)}>
//             <option value="">Please select</option>
//             <option value="Won">Won</option>
//             <option value="Lost">Lost</option>
//             <option value="Pending">Pending</option>
//           </select>
//         </label>
//         <br />
//         <button type="submit">Place Bet</button>
//       </form>
//     </div>
//   );
// }

// export default Bets;
