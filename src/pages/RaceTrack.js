import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RaceTrack.css';

function RaceTrack() {
const [tracks, setTracks] = useState([]);

useEffect(() => {
axios.get('http://localhost:8000/tracks')
.then(res => {
setTracks(res.data);
})
.catch(err => console.log(err));
}, []);

useEffect(() => {
const sampleTracks = [
{
track_id: 1,
name: 'Belmont Park',
location: 'Elmont, New York',
surface: 'Dirt',
distance: '1.5 miles',
condition: 'Fast',
weather: 'Sunny',
date: '2022-06-05',
races: [
{
race_id: 1,
race_number: 1,
race_name: 'The Belmont Stakes',
race_type: 'Grade 1',
distance: '1.5 miles',
purse: 1000000,
winning_time: '2:27.52',
winning_horse: 'Essential Quality',
winning_jockey: 'Luis Saez',
winning_trainer: 'Brad Cox',
track_record: '2:24.00',
speed_figure: 110,
weather: 'Sunny'
},
{
race_id: 2,
race_number: 2,
race_name: 'The Manhattan Stakes',
race_type: 'Grade 1',
distance: '1 1/4 miles',
purse: 750000,
winning_time: '1:59.78',
winning_horse: 'Colonel Liam',
winning_jockey: 'Irad Ortiz Jr.',
winning_trainer: 'Todd Pletcher',
track_record: '1:58.33',
speed_figure: 105,
weather: 'Sunny'
}
]
},
{
track_id: 2,
name: 'Churchill Downs',
location: 'Louisville, Kentucky',
surface: 'Dirt',
distance: '1.25 miles',
condition: 'Fast',
weather: 'Rainy',
date: '2022-05-07',
races: [
{
race_id: 3,
race_number: 1,
race_name: 'The Kentucky Derby',
race_type: 'Grade 1',
distance: '1.25 miles',
purse: 3000000,
winning_time: '2:03.30',
winning_horse: 'Medina Spirit',
winning_jockey: 'John Velazquez',
winning_trainer: 'Bob Baffert',
track_record: '1:59.40',
speed_figure: 110,
weather: 'Rainy'
},
{
race_id: 4,
race_number: 2,
race_name: 'The Churchill Downs Stakes',
race_type: 'Grade 2',
distance: '7 furlongs',
purse: 500000,
winning_time: '1:20.52',
winning_horse: 'Yaupon',
winning_jockey: 'Joel Rosario',
winning_trainer: 'Steve Asmussen',
track_record: '1:19.70',
speed_figure: 105,
weather: 'Rainy'
}
]
}
];
setTracks(sampleTracks);
}, []);

return (
<div className="track-container">
<h1 className="text-center">Track List</h1>

<table className="table">
<thead>
<tr>
<th scope="col">#</th>
<th scope="col">Name</th>
<th scope="col">Location</th>
<th scope="col">Surface</th>
<th scope="col">Distance</th>
<th scope="col">Condition</th>
<th scope="col">Weather</th>
<th scope="col">Date</th>
<th scope="col">Races</th>
</tr>
</thead>
<tbody>
{tracks.map((track, index) => (
<tr key={track.track_id}>
<th scope="row">{index + 1}</th>
<td>{track.name}</td>
<td>{track.location}</td>
<td>{track.surface}</td>
<td>{track.distance}</td>
<td>{track.condition}</td>
<td>{track.weather}</td>
<td>{track.date}</td>
<td>
<table className="table">
<thead>
<tr>
<th scope="col">#</th>
<th scope="col">Race Name</th>
<th scope="col">Race Type</th>
<th scope="col">Distance</th>
<th scope="col">Purse</th>
<th scope="col">Winning Time</th>
<th scope="col">Winning Horse</th>
<th scope="col">Winning Jockey</th>
<th scope="col">Winning Trainer</th>
<th scope="col">Track Record</th>
<th scope="col">Speed Figure</th>
<th scope="col">Weather</th>
</tr>
</thead>
<tbody>
{track.races.map(race => (
<tr key={race.race_id}>
<th scope="row">{race.race_number}</th>
<td>{race.race_name}</td>
<td>{race.race_type}</td>
<td>{race.distance}</td>
<td>${race.purse}</td>
<td>{race.winning_time}</td>
<td>{race.winning_horse}</td>
<td>{race.winning_jockey}</td>
<td>{race.winning_trainer}</td>
<td>{race.track_record}</td>
<td>{race.speed_figure}</td>
<td>{race.weather}</td>
</tr>
))}
</tbody>
</table>
</td>
</tr>
))}
</tbody>
</table>
</div>
);
}
export default RaceTrack;








