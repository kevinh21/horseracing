


import React, { useState } from 'react';

const Race = () => {
  const [selectedRaces, setSelectedRaces] = useState([]);
  const races = [
    {
      id: 1,
      name: 'Kentucky Derby',
      date: 'May 7, 2022',
      location: 'Churchill Downs',
      track: 'Dirt',
      distance: '1 1/4 miles',
      purse: '$3 million',
      conditions: '3-year-old thoroughbreds',
      horses: [
        {
          id: 1,
          name: 'Essential Quality',
          jockey: 'Luis Saez',
          odds: '2-1',
          pastPerformances: [
            { year: 2021, result: '1st' },
            { year: 2020, result: 'N/A' },
          ],
        },
        {
          id: 2,
          name: 'Hot Rod Charlie',
          jockey: 'Flavien Prat',
          odds: '8-1',
          pastPerformances: [
            { year: 2021, result: '3rd' },
            { year: 2020, result: 'N/A' },
          ],
        },
      ],
      bettingInfo: [
        { betType: 'Win', odds: '2-1' },
        { betType: 'Place', odds: '5-2' },
        { betType: 'Show', odds: '3-1' },
      ],
      results: [
        { horse: 'Essential Quality', position: 1, time: '2:01.31' },
        { horse: 'Mandaloun', position: 2, time: '2:01.82' },
        { horse: 'Hot Rod Charlie', position: 3, time: '2:02.68' },
      ],
      replayUrl: 'https://www.youtube.com/watch?v=lI4a5ozdErY',
    },
    {
      id: 2,
      name: 'Preakness Stakes',
      date: 'May 21, 2022',
      location: 'Pimlico Race Course',
      track: 'Dirt',
      distance: '1 3/16 miles',
      purse: '$1.5 million',
      conditions: '3-year-old thoroughbreds',
      horses: [
        {
          id: 3,
          name: 'Medina Spirit',
          jockey: 'John Velazquez',
          odds: '5-2',
          pastPerformances: [
            { year: 2021, result: 'N/A' },
            { year: 2020, result: 'N/A' },
          ],
        },
        {
          id: 4,
          name: 'Concert Tour',
          jockey: 'Mike Smith',
          odds: '7-2',
          pastPerformances: [
            { year: 2021, result: 'N/A' },
            { year: 2020, result: 'N/A' },
          ],
        },
      ],
      bettingInfo: [
        { betType: 'Win', odds: '5-2' },
        { betType: 'Place', odds: '3-1' },
        { betType: 'Show', odds: '4-1' },
      ],
      results: [
        { horse: 'Rombauer', position: 1, time: '1:53.62' },
        {
          id: 2,
          horse: 'Midnight Bourbon',
          position: 2,
          time: '1:54.10',
          },
          { id: 3, horse: 'Medina Spirit', position: 3, time: '1:54.94' },
          ],
          replayUrl: 'https://www.youtube.com/watch?v=J0KdJJ-WUb4',
          },
          {
          id: 3,
          name: 'Belmont Stakes',
          date: 'June 11, 2022',
          location: 'Belmont Park',
          track: 'Dirt',
          distance: '1 1/2 miles',
          purse: '$1.5 million',
          conditions: '3-year-old thoroughbreds',
          horses: [
          {
          id: 5,
          name: 'Essential Quality',
          jockey: 'Luis Saez',
          odds: '5-2',
          pastPerformances: [
          { year: 2021, result: '4th' },
          { year: 2020, result: 'N/A' },
          ],
          },
          {
          id: 6,
          name: 'Hot Rod Charlie',
          jockey: 'Flavien Prat',
          odds: '7-2',
          pastPerformances: [
          { year: 2021, result: '2nd' },
          { year: 2020, result: 'N/A' },
          ],
          },
          ],
          bettingInfo: [
          { betType: 'Win', odds: '5-2' },
          { betType: 'Place', odds: '3-1' },
          { betType: 'Show', odds: '4-1' },
          ],
          results: [
          { horse: 'Essential Quality', position: 1, time: '2:27.11' },
          { horse: 'Hot Rod Charlie', position: 2, time: '2:27.71' },
          { horse: 'Rombauer', position: 3, time: '2:28.17' },
          ],
          replayUrl: 'https://www.youtube.com/watch?v=_3qRL-qkgT8',
          },
          ];
          
          const handleSelectRace = (raceId) => {
          if (selectedRaces.includes(raceId)) {
          setSelectedRaces(selectedRaces.filter((id) => id !== raceId));
          } else {
          setSelectedRaces([...selectedRaces, raceId]);
          }
          };
          
          return (
          <div>
          <h1>Horse Race Page</h1>
          <h2>Select races to display:</h2>
          <ul>
          {races.map((race) => (
          <li key={race.id}>
          <label>
          <input
          type="checkbox"
          checked={selectedRaces.includes(race.id)}
          onChange={() => handleSelectRace(race.id)}
          />
          {race.name}
          </label>
          </li>
          ))}
          </ul>
          {selectedRaces.map((raceId) => (
          <RaceCard key={raceId} race={races.find((race) => race.id === raceId)} />
          ))}
          </div>
          );
          };
          
          const RaceCard = ({ race }) => {
          return (
          <div>
          <h2>{race.name}</h2>
          <p>Date and Time: {race.date}</p>
          <p>Location: {race.location}</p>
          <p>Track: {race.track}</p>
          <p>Distance: {race.distance}</p>
          <h3>Horses:</h3>
<ul>
{race.horses.map((horse) => (
<li key={horse.id}>
<p>Name: {horse.name}</p>
<p>Jockey: {horse.jockey}</p>
<p>Odds: {horse.odds}</p>
<h4>Past Performances:</h4>
<ul>
{horse.pastPerformances.map((performance) => (
<li key={performance.year}>
<p>{performance.year}: {performance.result}</p>
</li>
))}
</ul>
</li>
))}
</ul>
<h3>Betting Information:</h3>
<ul>
{race.bettingInfo.map((bet) => (
<li key={bet.betType}>
<p>{bet.betType}: {bet.odds}</p>
</li>
))}
</ul>
<h3>Results:</h3>
<table>
<thead>
<tr>
<th>Position</th>
<th>Horse</th>
<th>Time</th>
</tr>
</thead>
<tbody>
{race.results.map((result) => (
<tr key={result.horse}>
<td>{result.position}</td>
<td>{result.horse}</td>
<td>{result.time}</td>
</tr>
))}
</tbody>
</table>
<p>Replay URL: <a href={race.replayUrl}>Click Here</a></p>
</div>
);
};
export default Race;
          
          
          
          
          











// import React, { useState } from 'react';
// import RaceCard from './RaceCard';

// const Race = ({ racesData }) => {
//   const [numRaces, setNumRaces] = useState(1);

//   const handleChange = (e) => {
//     setNumRaces(e.target.value);
//   };

//   const racesToShow = racesData.slice(0, numRaces);

//   return (
//     <div>
//       <h1>Horse Races</h1>
//       <div>
//         <label htmlFor="numRaces">Number of Races:</label>
//         <select id="numRaces" onChange={handleChange} value={numRaces}>
//           {[...Array(racesData.length)].map((_, i) => (
//             <option key={i + 1} value={i + 1}>
//               {i + 1}
//             </option>
//           ))}
//         </select>
//       </div>
//       {racesToShow.map((race) => (
//         <RaceCard key={race.id} race={race} />
//       ))}
//     </div>
//   );
// };

// export default Race;
