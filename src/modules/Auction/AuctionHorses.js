import React from 'react';
import { Link } from 'react-router-dom';
import HorseCard from '../Auction/HorseCard';

const horses = [
  {
    id: 1,
    name: 'Black Beauty',
    breed: 'Thoroughbred',
    age: 5,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Silver',
    breed: 'Arabian',
    age: 7,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Ginger',
    breed: 'Morgan',
    age: 4,
    image: 'https://via.placeholder.com/150',
  },
];

function AuctionHorses() {
  return (
    <div>
      <h1>Horses for Auction</h1>
      <div className="horse-list">
        {horses.map((horse) => (
          <Link to={`/auction-horses/${horse.id}`} key={horse.id}>
            <HorseCard horse={horse} />
          </Link>
        ))}
      </div>
    </div>
  );
}


export default AuctionHorses;