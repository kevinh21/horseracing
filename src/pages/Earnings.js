

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Earnings.css';

function Earnings() {
const [horses, setHorses] = useState([]);
const [selectedHorse, setSelectedHorse] = useState(null);
const [earnings, setEarnings] = useState(null);
const [loading, setLoading] = useState(true);
const [showAllHorses, setShowAllHorses] = useState(false);
const [jockeys, setJockeys] = useState([]);
const [selectedJockey, setSelectedJockey] = useState(null);
const [jockeyEarnings, setJockeyEarnings] = useState(null);
const [trainers, setTrainers] = useState([]);
const [selectedTrainer, setSelectedTrainer] = useState(null);
const [trainerEarnings, setTrainerEarnings] = useState(null);
const [owners, setOwners] = useState([]);
const [selectedOwner, setSelectedOwner] = useState(null);
const [ownerEarnings, setOwnerEarnings] = useState(null);

useEffect(() => {
// Sample horse data
const sampleHorses = [
{
id: 1,
name: 'Horse 1',
sampleData: {
totalEarnings: 50000,
earningsPerStart: 2500,
earningsPerVenue: 10000,
earningsClassComparison: '+2%',
earningsAllHorsesComparison: 'Top 50%'
}
},
{
id: 2,
name: 'Horse 2',
sampleData: {
totalEarnings: 100000,
earningsPerStart: 5000,
earningsPerVenue: 15000,
earningsClassComparison: '+5%',
earningsAllHorsesComparison: 'Top 25%'
}
},
{
id: 3,
name: 'Horse 3',
sampleData: {
totalEarnings: 75000,
earningsPerStart: 3500,
earningsPerVenue: 12000,
earningsClassComparison: '+3%',
earningsAllHorsesComparison: 'Top 40%'
}
},
{
id: 4,
name: 'Horse 4',
sampleData: {
totalEarnings: 125000,
earningsPerStart: 6000,
earningsPerVenue: 18000,
earningsClassComparison: '+7%',
earningsAllHorsesComparison: 'Top 10%'
}
},
];
setHorses(sampleHorses);
setSelectedHorse(sampleHorses[0]);
}, []);

useEffect(() => {
if (selectedHorse) {
setEarnings(selectedHorse.sampleData);
setLoading(false);
}
}, [selectedHorse]);

useEffect(() => {
// Sample jockey data
const sampleJockeys = [
{
id: 1,
name: 'Jockey 1',
sampleData: {
totalEarnings: 75000,
earningsPerHorse: 10000,
earningsPerRace: 2500,
earningsAllJockeysComparison: 'Top 10%'
}
},
{
id: 2,
name: 'Jockey 2',
sampleData: {
totalEarnings: 100000,
earningsPerHorse: 12000,
earningsPerRace: 3000,
earningsAllJockeysComparison: 'Top 5%'
}
},
{
id: 3,
name: 'Jockey 3',
sampleData: {
totalEarnings: 50000,
earningsPerHorse: 8000,
earningsPerRace: 2000,
earningsAllJockeysComparison: 'Top 25%'
}
},
{
id: 4,
name: 'Jockey 4',
sampleData: {
totalEarnings: 125000,
earningsPerHorse: 15000,
earningsPerRace: 3750,
earningsAllJockeysComparison: 'Top 1%'
}
},
];
setJockeys(sampleJockeys);
setSelectedJockey(sampleJockeys[0]);
}, []);

useEffect(() => {
if (selectedJockey) {
setJockeyEarnings(selectedJockey.sampleData);
setLoading(false);
}
}, [selectedJockey]);

useEffect(() => {
// Sample trainer data
const sampleTrainers = [
{
id: 1,
name: 'Trainer 1',
sampleData: {
totalEarnings: 100000,
earningsPerHorse: 15000,
earningsPerStart: 5000,
earningsAllTrainersComparison: 'Top 10%'
}
},
{
id: 2,
name: 'Trainer 2',
sampleData: {
totalEarnings: 125000,
earningsPerHorse: 18000,
earningsPerStart: 6000,
earningsAllTrainersComparison: 'Top 5%'
}
},
{
id: 3,
name: 'Trainer 3',
sampleData: {
totalEarnings: 75000,
earningsPerHorse: 12000,
earningsPerStart: 4000,
earningsAllTrainersComparison: 'Top 25%'
}
},
{
id: 4,
name: 'Trainer 4',
sampleData: {
totalEarnings: 150000,
earningsPerHorse: 20000,
earningsPerStart: 7500,
earningsAllTrainersComparison: 'Top 1%'
}
},
];
setTrainers(sampleTrainers);
setSelectedTrainer(sampleTrainers[0]);
}, []);

useEffect(() => {
if (selectedTrainer) {
setTrainerEarnings(selectedTrainer.sampleData);
setLoading(false);
}
}, [selectedTrainer]);

useEffect(() => {
// Sample owner data
const sampleOwners = [
    {
    id: 1,
    name: 'Owner 1',
    sampleData: {
    totalEarnings: 75000,
    earningsPerHorse: 10000,
    earningsPerStart: 2500,
    earningsAllOwnersComparison: 'Top 10%'
    }
    },
    {
    id: 2,
    name: 'Owner 2',
    sampleData: {
    totalEarnings: 100000,
    earningsPerHorse: 12000,
    earningsPerStart: 3000,
    earningsAllOwnersComparison: 'Top 5%'
    }
    },
    {
    id: 3,
    name: 'Owner 3',
    sampleData: {
    totalEarnings: 50000,
    earningsPerHorse: 8000,
    earningsPerStart: 2000,
    earningsAllOwnersComparison: 'Top 25%'
    }
    },
    {
    id: 4,
    name: 'Owner 4',
    sampleData: {
    totalEarnings: 125000,
    earningsPerHorse: 15000,
    earningsPerStart: 3750,
    earningsAllOwnersComparison: 'Top 1%'
    }
    },
    ];
    setOwners(sampleOwners);
    setSelectedOwner(sampleOwners[0]);
    }, []);
    
    useEffect(() => {
    if (selectedOwner) {
    setOwnerEarnings(selectedOwner.sampleData);
    setLoading(false);
    }
    }, [selectedOwner]);
    
    const handleHorseChange = (event) => {
    const id = parseInt(event.target.value);
    const horse = horses.find(horse => horse.id === id);
    setSelectedHorse(horse);
    };
    
    const handleJockeyChange = (event) => {
    const id = parseInt(event.target.value);
    const jockey = jockeys.find(jockey => jockey.id === id);
    setSelectedJockey(jockey);
    };
    
    const handleTrainerChange = (event) => {
    const id = parseInt(event.target.value);
    const trainer = trainers.find(trainer => trainer.id === id);
    setSelectedTrainer(trainer);
    };
    
    const handleOwnerChange = (event) => {
    const id = parseInt(event.target.value);
    const owner = owners.find(owner => owner.id === id);
    setSelectedOwner(owner);
    };
    
    return (
    
    <div className="container">
    <h1>Earnings</h1>
    <div className="row">
    <div className="col-12 col-md-6">
    <div className="form-group">
    <label htmlFor="horse-select">Select Horse</label>
    <select className="form-control" id="horse-select" onChange={handleHorseChange}>
    {horses.map(horse => (
    <option key={horse.id} value={horse.id}>{horse.name}</option>
    ))}
    </select>
    </div>
    {loading && <p>Loading...</p>}
    {!loading && selectedHorse && (
    <div>
    <h2>{selectedHorse.name} Earnings</h2>
    <table className="table">
    <thead>
    <tr>
    <th>Total Earnings</th>
    <th>Earnings Per Start</th>
    <th>Earnings Per Venue</th>
    <th>Earnings Class Comparison</th>
    <th>Earnings All Horses Comparison</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>${earnings.totalEarnings}</td>
    <td>${earnings.earningsPerStart}</td>
    <td>${earnings.earningsPerVenue}</td>
    <td>{earnings.earningsClassComparison}</td>
    <td>{earnings.earningsAllHorsesComparison}</td>
    </tr>
    </tbody>
    </table>
    </div>
    )}
    </div>
    <div className="col-12 col-md-6">
    <div className="form-group">
    <label htmlFor="jockey-select">Select Jockey</label>
    <select className="form-control" id="jockey-select" onChange={handleJockeyChange}>
    {jockeys.map(jockey => (
<option key={jockey.id} value={jockey.id}>{jockey.name}</option>
))}
</select>
</div>
{loading && <p>Loading...</p>}
{!loading && selectedJockey && (
<div>
<h2>{selectedJockey.name} Earnings</h2>
<table className="table">
<thead>
<tr>
<th>Total Earnings</th>
<th>Earnings Per Start</th>
<th>Earnings Per Venue</th>
<th>Earnings All Jockeys Comparison</th>
</tr>
</thead>
<tbody>
<tr>
<td>${earnings.totalEarnings}</td>
<td>${earnings.earningsPerStart}</td>
<td>${earnings.earningsPerVenue}</td>
<td>{earnings.earningsAllJockeysComparison}</td>
</tr>
</tbody>
</table>
</div>
)}
</div>
</div>
<div className="row">
<div className="col-12 col-md-6">
<div className="form-group">
<label htmlFor="trainer-select">Select Trainer</label>
<select className="form-control" id="trainer-select" onChange={handleTrainerChange}>
{trainers.map(trainer => (
<option key={trainer.id} value={trainer.id}>{trainer.name}</option>
))}
</select>
</div>
{loading && <p>Loading...</p>}
{!loading && selectedTrainer && (
<div>
<h2>{selectedTrainer.name} Earnings</h2>
<table className="table">
<thead>
<tr>
<th>Total Earnings</th>
<th>Earnings Per Start</th>
<th>Earnings Per Venue</th>
<th>Earnings All Trainers Comparison</th>
</tr>
</thead>
<tbody>
<tr>
<td>${earnings.totalEarnings}</td>
<td>${earnings.earningsPerStart}</td>
<td>${earnings.earningsPerVenue}</td>
<td>{earnings.earningsAllTrainersComparison}</td>
</tr>
</tbody>
</table>
</div>
)}
</div>
<div className="col-12 col-md-6">
<div className="form-group">
<label htmlFor="owner-select">Select Owner</label>
<select className="form-control" id="owner-select" onChange={handleOwnerChange}>
{owners.map(owner => (
<option key={owner.id} value={owner.id}>{owner.name}</option>
))}
</select>
</div>
{loading && <p>Loading...</p>}
{!loading && selectedOwner && (
<div>
<h2>{selectedOwner.name} Earnings</h2>
<table className="table">
<thead>
<tr>
<th>Total Earnings</th>
<th>Earnings Per Horse</th>
<th>Earnings Per Start</th>
<th>Earnings All Owners Comparison</th>
</tr>
</thead>
<tbody>
<tr>
<td>${ownerEarnings.totalEarnings}</td>
<td>${ownerEarnings.earningsPerHorse}</td>
<td>${ownerEarnings.earningsPerStart}</td>
<td>{ownerEarnings.earningsAllOwnersComparison}</td>

</tr>
</tbody>
</table>
</div>
)}
</div>
</div>
</div>
);
}
export default Earnings;


















//=============================================================
//  INCOMPLETE CODE
// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Earnings.css';

// function Earnings() {
// const [horses, setHorses] = useState([]);
// const [selectedHorse, setSelectedHorse] = useState(null);
// const [earnings, setEarnings] = useState(null);
// const [loading, setLoading] = useState(true);
// const [showAllHorses, setShowAllHorses] = useState(false);
// const [jockeys, setJockeys] = useState([]);
// const [selectedJockey, setSelectedJockey] = useState(null);
// const [jockeyEarnings, setJockeyEarnings] = useState(null);
// const [trainers, setTrainers] = useState([]);
// const [selectedTrainer, setSelectedTrainer] = useState(null);
// const [trainerEarnings, setTrainerEarnings] = useState(null);
// const [owners, setOwners] = useState([]);
// const [selectedOwner, setSelectedOwner] = useState(null);
// const [ownerEarnings, setOwnerEarnings] = useState(null);

// useEffect(() => {
// // Sample horse data
// const sampleHorses = [
// {
// id: 1,
// name: 'Horse 1',
// sampleData: {
// totalEarnings: 50000,
// earningsPerStart: 2500,
// earningsPerVenue: 10000,
// earningsClassComparison: '+2%',
// earningsAllHorsesComparison: 'Top 50%'
// }
// },
// {
// id: 2,
// name: 'Horse 2',
// sampleData: {
// totalEarnings: 100000,
// earningsPerStart: 5000,
// earningsPerVenue: 15000,
// earningsClassComparison: '+5%',
// earningsAllHorsesComparison: 'Top 25%'
// }
// },
// {
// id: 3,
// name: 'Horse 3',
// sampleData: {
// totalEarnings: 75000,
// earningsPerStart: 3500,
// earningsPerVenue: 12000,
// earningsClassComparison: '+3%',
// earningsAllHorsesComparison: 'Top 40%'
// }
// },
// {
// id: 4,
// name: 'Horse 4',
// sampleData: {
// totalEarnings: 125000,
// earningsPerStart: 6000,
// earningsPerVenue: 18000,
// earningsClassComparison: '+7%',
// earningsAllHorsesComparison: 'Top 10%'
// }
// },
// ];
// setHorses(sampleHorses);
// setSelectedHorse(sampleHorses[0]);
// }, []);

// useEffect(() => {
// if (selectedHorse) {
// setEarnings(selectedHorse.sampleData);
// setLoading(false);
// }
// }, [selectedHorse]);

// useEffect(() => {
// // Sample jockey data
// const sampleJockeys = [
// {
// id: 1,
// name: 'Jockey 1',
// sampleData: {
// totalEarnings: 75000,
// earningsPerHorse: 10000,
// earningsPerRace: 2500,
// earningsAllJockeysComparison: 'Top 10%'
// }
// },
// {
// id: 2,
// name: 'Jockey 2', sampleData: {
//     totalEarnings: 100000,
//     earningsPerHorse: 12000,
//     earningsPerRace: 3000,
//     earningsAllJockeysComparison: 'Top 5%'
//     }
//     },
//     {
//     id: 3,
//     name: 'Jockey 3',
//     sampleData: {
//     totalEarnings: 50000,
//     earningsPerHorse: 8000,
//     earningsPerRace: 2000,
//     earningsAllJockeysComparison: 'Top 25%'
//     }
//     },
//     ];
//     setJockeys(sampleJockeys);
//     setSelectedJockey(sampleJockeys[0]);
//     }, []);
    
//     useEffect(() => {
//     if (selectedJockey) {
//     setJockeyEarnings(selectedJockey.sampleData);
//     }
//     }, [selectedJockey]);
    
//     useEffect(() => {
//     // Sample trainer data
//     const sampleTrainers = [
//     {
//     id: 1,
//     name: 'Trainer 1',
//     sampleData: {
//     totalEarnings: 100000,
//     earningsPerHorse: 12000,
//     earningsPerRace: 3000,
//     earningsAllTrainersComparison: 'Top 10%'
//     }
//     },
//     {
//     id: 2,
//     name: 'Trainer 2',
//     sampleData: {
//     totalEarnings: 150000,
//     earningsPerHorse: 15000,
//     earningsPerRace: 4000,
//     earningsAllTrainersComparison: 'Top 5%'
//     }
//     },
//     {
//     id: 3,
//     name: 'Trainer 3',
//     sampleData: {
//     totalEarnings: 75000,
//     earningsPerHorse: 10000,
//     earningsPerRace: 2500,
//     earningsAllTrainersComparison: 'Top 25%'
//     }
//     },
//     ];
//     setTrainers(sampleTrainers);
//     setSelectedTrainer(sampleTrainers[0]);
//     }, []);
    
//     useEffect(() => {
//     if (selectedTrainer) {
//     setTrainerEarnings(selectedTrainer.sampleData);
//     }
//     }, [selectedTrainer]);
    
//     useEffect(() => {
//     // Sample owner data
//     const sampleOwners = [
//     {
//     id: 1,
//     name: 'Owner 1',
//     sampleData: {
//     totalEarnings: 50000,
//     earningsPerHorse: 10000,
//     earningsPerRace: 2500,
//     earningsAllOwnersComparison: 'Top 50%'
//     }
//     },
//     {
//     id: 2,
//     name: 'Owner 2',
//     sampleData: {
//     totalEarnings: 75000,
//     earningsPerHorse: 12000,
//     earningsPerRace: 3000,
//     earningsAllOwnersComparison: 'Top 25%'
//     }
//     },
//     {
//     id: 3,
//     name: 'Owner 3',
//     sampleData: {
//     totalEarnings: 100000,
//     earningsPerHorse: 15000,
//     earningsPerRace: 4000,
//     earningsAllOwnersComparison: 'Top 10%'
//     }
//     },
//     ];
//     setOwners(sampleOwners);
//     setSelectedOwner(sampleOwners[0]);
//     }, []);
    
//     useEffect(() => {
//     if (selectedOwner) {
//     setOwnerEarnings(selectedOwner.sampleData);
//     }
//     }, [selectedOwner]);
    
//     const handleHorseSelect = (horse) => {
//     setSelectedHorse(horse);
//     setLoading(true);
//     };
    
//     const handleJockeySelect = (jockey) => {
//     setSelectedJockey(jockey);
//     };
    
//     const handleTrainerSelect = (trainer) => {
//     setSelectedTrainer(trainer);
//     };
    
//     const handleOwnerSelect = (owner) => {
//     setSelectedOwner(owner);
//     };
    
//     const renderHorses = () => {
//     if (showAllHorses) {
//     return horses.map((horse) => (
//     <button
//     key={horse.id}
//     className={`list-group-item list-group-item-action ${
//     selectedHorse && selectedHorse.id === horse.id ? 'active' : ''
// }`}
// onClick={() => handleHorseSelect(horse)}

// {horse.name}
// </button>
// ));
// } else {
// return (
// <button
// className="list-group-item list-group-item-action"
// onClick={() => setShowAllHorses(true)}

// Show All Horses
// </button>
// );
// }
// };

// const renderJockeys = () => {
// return jockeys.map((jockey) => (
// <button
// key={jockey.id}
// className={list-group-item list-group-item-action ${ selectedJockey && selectedJockey.id === jockey.id ? 'active' : '' }}
// onClick={() => handleJockeySelect(jockey)}

// {jockey.name}
// </button>
// ));
// };

// const renderTrainers = () => {
// return trainers.map((trainer) => (
// <button
// key={trainer.id}
// className={list-group-item list-group-item-action ${ selectedTrainer && selectedTrainer.id === trainer.id ? 'active' : '' }}
// onClick={() => handleTrainerSelect(trainer)}

// {trainer.name}
// </button>
// ));
// };

// const renderOwners = () => {
// return owners.map((owner) => (
// <button
// key={owner.id}
// className={list-group-item list-group-item-action ${ selectedOwner && selectedOwner.id === owner.id ? 'active' : '' }}
// onClick={() => handleOwnerSelect(owner)}

// {owner.name}
// </button>
// ));
// };

// return (

// <div className="container-fluid">
// <div className="row">
// <div className="col-md-3">
// <div className="card mb-3">
// <div className="card-header">Horses</div>
// <div className="list-group list-group-flush">{renderHorses()}</div>
// </div>
// </div>
// <div className="col-md-9">
// {loading ? (
// <div className="text-center">
// <div className="spinner-border" role="status">
// <span className="visually-hidden">Loading...</span>
// </div>
// </div>
// ) : (
// <HorseDetails
// horse={selectedHorse}
// jockeyEarnings={jockeyEarnings}
// trainerEarnings={trainerEarnings}
// ownerEarnings={ownerEarnings}
// />
// )}
// </div>
// </div>
// <div className="row">
// <div className="col-md-4">
// <div className="card mb-3">
// <div className="card-header">Jockeys</div>
// <div className="list-group list-group-flush">{renderJockeys()}</div>
// </div>
// </div>
// <div className="col-md-4">
// <div className="card mb-3">
// <div className="card-header">Trainers</div>
// <div className="list-group list-group-flush">{renderTrainers()}</div>
// </div>
// </div>
// <div className="col-md-4">
// <div className="card mb-3">
// <div className="card-header">Owners</div>
// <div className="list-group list-group-flush">{renderOwners()}</div>
// </div>
// </div>
// </div>
// </div>
// </div>
// );
// }









// =================================================
// Works perfectly 
// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Earnings.css';

// function Earnings() {
//   const [horses, setHorses] = useState([]);
//   const [selectedHorse, setSelectedHorse] = useState(null);
//   const [earnings, setEarnings] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [showAllHorses, setShowAllHorses] = useState(false);

//   useEffect(() => {
//     // Sample horse data
//     const sampleHorses = [      { id: 1, name: 'Horse 1', sampleData: { totalEarnings: 50000, earningsPerStart: 2500, earningsPerVenue: 10000, earningsClassComparison: '+2%', earningsAllHorsesComparison: 'Top 50%' } },      { id: 2, name: 'Horse 2', sampleData: { totalEarnings: 100000, earningsPerStart: 5000, earningsPerVenue: 15000, earningsClassComparison: '+5%', earningsAllHorsesComparison: 'Top 25%' } },      { id: 3, name: 'Horse 3', sampleData: { totalEarnings: 75000, earningsPerStart: 3500, earningsPerVenue: 12000, earningsClassComparison: '+3%', earningsAllHorsesComparison: 'Top 40%' } },      { id: 4, name: 'Horse 4', sampleData: { totalEarnings: 125000, earningsPerStart: 6000, earningsPerVenue: 18000, earningsClassComparison: '+7%', earningsAllHorsesComparison: 'Top 10%' } },    ];
//     setHorses(sampleHorses);
//     setSelectedHorse(sampleHorses[0]);
//   }, []);

//   useEffect(() => {
//     if (selectedHorse) {
//       setEarnings(selectedHorse.sampleData);
//       setLoading(false);
//     }
//   }, [selectedHorse]);

//   const handleHorseSelect = (event) => {
//     const horseId = parseInt(event.target.value);
//     const selectedHorse = horses.find((horse) => horse.id === horseId);
//     setSelectedHorse(selectedHorse);
//   };

//   const handleShowAllHorses = () => {
//     setShowAllHorses(true);
//   };

//   if (loading) {
//     return <p>Loading earnings...</p>;
//   }

//   const {
//     totalEarnings,
//     earningsPerStart,
//     earningsPerVenue,
//     earningsClassComparison,
//     earningsAllHorsesComparison
//   } = earnings;

//   return (
//     <div className="container">
//       <h2 className="text-center mb-4">Earnings</h2>
//       <div className="row">
//         <div className="col-sm-6">
//           <div className="form-group">
//             <label htmlFor="horse-select">Select a horse:</label>
//             <select className="form-control" id="horse-select" onChange={handleHorseSelect}>
//               {horses.map((horse) => (
//                 <option key={horse.id} value={horse.id}>{horse.name}</option>
//               ))}
//             </select>
//           </div>
//           <p><strong>Total Earnings:</strong> ${totalEarnings}</p>
//           <p><strong>Earnings per Start:</strong> ${earningsPerStart}</p>
//           <p><strong>Earnings per Venue:</strong> ${earningsPerVenue}</p>
//           <button className="btn btn-primary " onClick={handleShowAllHorses}>Show All Horses</button>
// </div>
// <div className="col-sm-6">
// <h4 className="text-center">Earnings Comparison</h4>
// <table className="table table-striped">
// <thead>
// <tr>
// <th>Comparison</th>
// <th>% Difference</th>
// </tr>
// </thead>
// <tbody>
// <tr>
// <td>Class</td>
// <td>{earningsClassComparison}</td>
// </tr>
// <tr>
// <td>All Horses</td>
// <td>{earningsAllHorsesComparison}</td>
// </tr>
// </tbody>
// </table>
// </div>
// </div>
// {showAllHorses && (
// <div className="row mt-4">
// <div className="col-sm-12">
// <h4 className="text-center">All Horses</h4>
// <table className="table table-striped">
// <thead>
// <tr>
// <th>Name</th>
// <th>Total Earnings</th>
// <th>Earnings per Start</th>
// <th>Earnings per Venue</th>
// <th>Class Comparison</th>
// <th>All Horses Comparison</th>
// </tr>
// </thead>
// <tbody>
// {horses.map((horse) => (
// <tr key={horse.id}>
// <td>{horse.name}</td>
// <td>${horse.sampleData.totalEarnings}</td>
// <td>${horse.sampleData.earningsPerStart}</td>
// <td>${horse.sampleData.earningsPerVenue}</td>
// <td>{horse.sampleData.earningsClassComparison}</td>
// <td>{horse.sampleData.earningsAllHorsesComparison}</td>
// </tr>
// ))}
// </tbody>
// </table>
// </div>
// </div>
// )}
// </div>
// );
// }

// export default Earnings;






// =================================================
// Works Fine
// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Earnings.css';

// function Earnings() {
//   const [horses, setHorses] = useState([]);
//   const [selectedHorse, setSelectedHorse] = useState(null);
//   const [earnings, setEarnings] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Sample horse data
//     const sampleHorses = [
//       { id: 1, name: 'Horse 1', sampleData: { totalEarnings: 50000, earningsPerStart: 2500, earningsPerVenue: 10000, earningsClassComparison: '+2%', earningsAllHorsesComparison: 'Top 50%' } },
//       { id: 2, name: 'Horse 2', sampleData: { totalEarnings: 100000, earningsPerStart: 5000, earningsPerVenue: 15000, earningsClassComparison: '+5%', earningsAllHorsesComparison: 'Top 25%' } },
//       { id: 3, name: 'Horse 3', sampleData: { totalEarnings: 75000, earningsPerStart: 3500, earningsPerVenue: 12000, earningsClassComparison: '+3%', earningsAllHorsesComparison: 'Top 40%' } },
//       { id: 4, name: 'Horse 4', sampleData: { totalEarnings: 125000, earningsPerStart: 6000, earningsPerVenue: 18000, earningsClassComparison: '+7%', earningsAllHorsesComparison: 'Top 10%' } },
//     ];
//     setHorses(sampleHorses);
//     setSelectedHorse(sampleHorses[0]);
//   }, []);

//   useEffect(() => {
//     if (selectedHorse) {
//       setEarnings(selectedHorse.sampleData);
//       setLoading(false);
//     }
//   }, [selectedHorse]);

//   const handleHorseSelect = (event) => {
//     const horseId = parseInt(event.target.value);
//     const selectedHorse = horses.find((horse) => horse.id === horseId);
//     setSelectedHorse(selectedHorse);
//   }

//   if (loading) {
//     return <p>Loading earnings...</p>;
//   }

//   const {
//     totalEarnings,
//     earningsPerStart,
//     earningsPerVenue,
//     earningsClassComparison,
//     earningsAllHorsesComparison
//   } = earnings;

//   return (
//     <div className="container">
//       <h2 className="text-center mb-4">Earnings</h2>
//       <div className="row">
//         <div className="col-sm-6">
//           <div className="form-group">
//             <label htmlFor="horse-select">Select a horse:</label>
//             <select className="form-control" id="horse-select" onChange={handleHorseSelect}>
//               {horses.map((horse) => (
//                 <option key={horse.id} value={horse.id}>{horse.name}</option>
//               ))}
//             </select>
//           </div>
//           <p><strong>Total Earnings:</strong> ${totalEarnings}</p>
//           <p><strong>Earnings per Start:</strong> ${earningsPerStart}</p>
//           <p><strong>Earnings per Venue:</strong> ${earningsPerVenue}</p>
//         </div>
//         <div className="col-sm-6">
//           <p><strong>Earnings compared to horses in same class:</strong> {earningsClassComparison}</p>
//           <p><strong>Earnings compared to all horses:</strong> {earningsAllHorsesComparison}</p>
// </div>
// </div>
// </div>
// );
// }

// export default Earnings;










// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Earnings.css';

// function Earnings() {
//   const [horses, setHorses] = useState([]);
//   const [selectedHorse, setSelectedHorse] = useState(null);
//   const [earnings, setEarnings] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch the list of horses
//     fetch('/api/horses')
//       .then(response => response.json())
//       .then(data => {
//         setHorses(data);
//         setSelectedHorse(data[0]);
//       })
//       .catch(error => console.error(error));
//   }, []);

//   useEffect(() => {
//     if (selectedHorse) {
//       // Fetch the earnings data for the selected horse
//       fetch(`/api/earnings/${selectedHorse.id}`)
//         .then(response => response.json())
//         .then(data => {
//           setEarnings(data);
//           setLoading(false);
//         })
//         .catch(error => console.error(error));
//     }
//   }, [selectedHorse]);

//   const handleHorseSelect = (event) => {
//     const horseId = parseInt(event.target.value);
//     const selectedHorse = horses.find((horse) => horse.id === horseId);
//     setSelectedHorse(selectedHorse);
//   }

//   if (loading) {
//     return <p>Loading earnings...</p>;
//   }

//   const {
//     totalEarnings,
//     earningsPerStart,
//     earningsPerVenue,
//     earningsClassComparison,
//     earningsAllHorsesComparison
//   } = earnings;

//   return (
//     <div className="container">
//       <h2 className="text-center mb-4">Earnings</h2>
//       <div className="row">
//         <div className="col-sm-6">
//           <div className="form-group">
//             <label htmlFor="horse-select">Select a horse:</label>
//             <select className="form-control" id="horse-select" onChange={handleHorseSelect}>
//               {horses.map((horse) => (
//                 <option key={horse.id} value={horse.id}>{horse.name}</option>
//               ))}
//             </select>
//           </div>
//           <p><strong>Total Earnings:</strong> ${totalEarnings}</p>
//           <p><strong>Earnings per Start:</strong> ${earningsPerStart}</p>
//           <p><strong>Earnings per Venue:</strong> ${earningsPerVenue}</p>
//         </div>
//         <div className="col-sm-6">
//           <p><strong>Earnings compared to horses in same class:</strong> {earningsClassComparison}</p>
//           <p><strong>Earnings compared to all horses:</strong> {earningsAllHorsesComparison}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Earnings;




// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Earnings.css';

// function Earnings() {
//   const [horses, setHorses] = useState([]);
//   const [selectedHorse, setSelectedHorse] = useState(null);
//   const [earnings, setEarnings] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Sample horse data
//     const sampleHorses = [
//       { id: 1, name: 'Horse 1' },
//       { id: 2, name: 'Horse 2' },
//       { id: 3, name: 'Horse 3' },
//       { id: 4, name: 'Horse 4' },
//     ];
//     setHorses(sampleHorses);
//     setSelectedHorse(sampleHorses[0]);
//   }, []);

//   useEffect(() => {
//     // Sample earnings data
//     const sampleEarnings = {
//       totalEarnings: 150000,
//       earningsPerStart: 5000,
//       earningsPerVenue: 20000,
//       earningsClassComparison: '+5%',
//       earningsAllHorsesComparison: 'Top 25%'
//     };
//     setEarnings(sampleEarnings);
//     setLoading(false);
//   }, [selectedHorse]);

//   const handleHorseSelect = (event) => {
//     const horseId = parseInt(event.target.value);
//     const selectedHorse = horses.find((horse) => horse.id === horseId);
//     setSelectedHorse(selectedHorse);
//   }

//   if (loading) {
//     return <p>Loading earnings...</p>;
//   }

//   const {
//     totalEarnings,
//     earningsPerStart,
//     earningsPerVenue,
//     earningsClassComparison,
//     earningsAllHorsesComparison
//   } = earnings;

//   return (
//     <div className="container">
//       <h2 className="text-center mb-4">Earnings</h2>
//       <div className="row">
//         <div className="col-sm-6">
//           <div className="form-group">
//             <label htmlFor="horse-select">Select a horse:</label>
//             <select className="form-control" id="horse-select" onChange={handleHorseSelect}>
//               {horses.map((horse) => (
//                 <option key={horse.id} value={horse.id}>{horse.name}</option>
//               ))}
//             </select>
//           </div>
//           <p><strong>Total Earnings:</strong> ${totalEarnings}</p>
//           <p><strong>Earnings per Start:</strong> ${earningsPerStart}</p>
//           <p><strong>Earnings per Venue:</strong> ${earningsPerVenue}</p>
//         </div>
//         <div className="col-sm-6">
//           <p><strong>Earnings compared to horses in same class:</strong> {earningsClassComparison}</p>
//           <p><strong>Earnings compared to all horses:</strong> {earningsAllHorsesComparison}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Earnings;











// ================================================
// WORKS FINE

// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Earnings.css';

// function Earnings() {
//   const [earnings, setEarnings] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Sample data
//     const sampleEarnings = {
//       totalEarnings: 150000,
//       earningsPerStart: 5000,
//       earningsPerVenue: 20000,
//       earningsClassComparison: '+5%',
//       earningsAllHorsesComparison: 'Top 25%'
//     };
//     setEarnings(sampleEarnings);
//     setLoading(false);
//   }, []);

//   if (loading) {
//     return <p>Loading earnings...</p>;
//   }

//   const {
//     totalEarnings,
//     earningsPerStart,
//     earningsPerVenue,
//     earningsClassComparison,
//     earningsAllHorsesComparison
//   } = earnings;

//   return (
//     <div className="container">
//       <h2 className="text-center mb-4">Earnings</h2>
//       <div className="row">
//         <div className="col-sm-6">
//           <p><strong>Total Earnings:</strong> ${totalEarnings}</p>
//           <p><strong>Earnings per Start:</strong> ${earningsPerStart}</p>
//           <p><strong>Earnings per Venue:</strong> ${earningsPerVenue}</p>
//         </div>
//         <div className="col-sm-6">
//           <p><strong>Earnings compared to horses in same class:</strong> {earningsClassComparison}</p>
//           <p><strong>Earnings compared to all horses:</strong> {earningsAllHorsesComparison}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Earnings;
// // In this example, we've replaced the API call with a useEffect hook that sets the earnings state to a sample data object. This data object includes all of the properties that the original example expected, with example values.

// // Of course, in a real application you would want to fetch this data from an actual API or database, but this example should help you understand how to structure the Earnings component and how to render the data once you have it.







// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Earnings.css';

// function Earnings() {
//   const [earnings, setEarnings] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get('path/to/api/earnings');
//         setEarnings(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//     fetchData();
//   }, []);

//   if (loading) {
//     return <p>Loading earnings...</p>;
//   }

//   const {
//     totalEarnings,
//     earningsPerStart,
//     earningsPerVenue,
//     earningsClassComparison,
//     earningsAllHorsesComparison
//   } = earnings;

//   return (
//     <div className="container">
//       <h2 className="text-center mb-4">Earnings</h2>
//       <div className="row">
//         <div className="col-sm-6">
//           <p><strong>Total Earnings:</strong> ${totalEarnings}</p>
//           <p><strong>Earnings per Start:</strong> ${earningsPerStart}</p>
//           <p><strong>Earnings per Venue:</strong> ${earningsPerVenue}</p>
//         </div>
//         <div className="col-sm-6">
//           <p><strong>Earnings compared to horses in same class:</strong> {earningsClassComparison}</p>
//           <p><strong>Earnings compared to all horses:</strong> {earningsAllHorsesComparison}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Earnings;




// This component expects a horseId prop, which is used to retrieve the 
// horse's earnings data from a database. It uses the getHorseEarnings

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Earnings.css';
// import { getHorseEarnings } from './path/to/database/queries';

// function Earnings({ horseId }) {
//   const [earnings, setEarnings] = useState({});
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     getHorseEarnings(horseId, (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         setEarnings(data);
//         setIsLoading(false);
//       }
//     });
//   }, [horseId]);

//   return (
//     <div className="container">
//       {isLoading ? (
//         <div className="text-center">Loading...</div>
//       ) : (
//         <>
//           <h2 className="text-center mb-4">Horse Earnings</h2>
//           <div className="row">
//             <div className="col-md-6">
//               <div className="card">
//                 <div className="card-body">
//                   <h5 className="card-title">Total Earnings</h5>
//                   <p className="card-text">{`$${earnings.totalEarnings.toLocaleString()}`}</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div className="card">
//                 <div className="card-body">
//                   <h5 className="card-title">Earnings per Start</h5>
//                   <p className="card-text">{`$${earnings.earningsPerStart.toLocaleString()}`}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <h2 className="text-center mb-4">Horse Earnings Comparison</h2>
//           <div className="row">
//             <div className="col-md-6">
//               <div className="card">
//                 <div className="card-body">
//                   <h5 className="card-title">Earnings Compared to Class</h5>
//                   <p className="card-text">{`$${earnings.earningsComparedToClass.toLocaleString()}`}</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div className="card">
//                 <div className="card-body">
//                   <h5 className="card-title">Earnings Compared to All Horses</h5>
//                   <p className="card-text">{`$${earnings.earningsComparedToAllHorses.toLocaleString()}`}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <h2 className="text-center mb-4">Horse Earnings by Track Venue</h2>
//           <div className="row">
//             {earnings.earningsByTrackVenue.map((venue) => (
//               <div className="col-md-6" key={venue.venueId}>
//                 <div className="card">
//                   <div className="card-body">
//                     <h5 className="card-title">{venue.venueName}</h5>
//                     <p className="card-text">{`$${venue.totalEarnings.toLocaleString()}`}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default Earnings;
