import React from 'react';

function HorseCard(props) {
  const { horse } = props;

  return (
    <div className="horse-card">
      <img src={horse.image} alt={horse.name} style={{width: '360px'}} />
      <h2>{horse.name}</h2>
      <p>Breed: {horse.breed}</p>
      <p>Age: {horse.age}</p>
    </div>
  );
}

export default HorseCard;
