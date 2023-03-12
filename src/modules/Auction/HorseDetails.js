import React from 'react';
import { useParams } from 'react-router-dom';

const horses = [
  {
    id: 1,
    name: 'Black Beauty',
    breed: 'Thoroughbred',
    age: 5,
    image: 'https://via.placeholder.com/150',
    description: 'A beautiful black horse with a great personality.',
    startingBid: 5000,
  },
  {
    id: 2,
    name: 'Silver',
    breed: 'Arabian',
    age: 7,
    image: 'https://via.placeholder.com/150',
    description: 'A majestic silver horse with excellent lineage.',
    startingBid: 7000,
  },
  {
    id: 3,
    name: 'Ginger',
    breed: 'Morgan',
    age: 4,
    image: 'https://via.placeholder.com/150',
    description: 'A spirited chestnut mare with a lot of potential.',
    startingBid: 4000,
  },
];

function HorseDetails() {
  const { id } = useParams();
  const horse = horses.find((horse) => horse.id === parseInt(id));

  return (
    <div>
      <h1>{horse.name}</h1>
      <img src={horse.image} alt={horse.name} />
      <p>Breed: {horse.breed}</p>
      <p>Age: {horse.age}</p>
      <p>Description: {horse.description}</p>
      <p>Starting Bid: {horse.startingBid}</p>
    </div>
  );
}

export default HorseDetails;
