


import React from 'react';
import { Link } from 'react-router-dom';
import HorseCard from '../Auction/HorseCard';
import AuctionHorses from './AuctionHorses';
import Footer from './Footer';

const horses = [
  {
    id: 1,
    name: 'Black Beauty',
    breed: 'Thoroughbred',
    age: 5,
    image: '/horse1.gif', // Modify the image path to point to the local file
  },
  {
    id: 2,
    name: 'Silver',
    breed: 'Arabian',
    age: 7,
    image: '/horse2.gif',
  },
  {
    id: 3,
    name: 'Ginger',
    breed: 'Morgan',
    age: 4,
    image: '/horse3.gif',
  },
];

function Auction() {
  return (
    <div>
      <h1>Welcome to our Auction!</h1>
      <p>We are excited to offer some of the finest horses for auction.</p>
      <h2>Featured Horses</h2>
      <div className="horse-list">
        {horses.map((horse) => (
          <Link to={`/horses/${horse.id}`} key={horse.id}>
            <HorseCard horse={horse} />
          </Link>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default Auction;






// import React from 'react';
// import { Link } from 'react-router-dom';
// import HorseCard from '../Auction/HorseCard';
// import Footer from './Footer';

// const horses = [
//   {
//     id: 1,
//     name: 'Black Beauty',
//     breed: 'Thoroughbred',
//     age: 5,
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     id: 2,
//     name: 'Silver',
//     breed: 'Arabian',
//     age: 7,
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     id: 3,
//     name: 'Ginger',
//     breed: 'Morgan',
//     age: 4,
//     image: 'https://via.placeholder.com/150',
//   },
// ];

// function Home() {
//   return (
//     <div>
//       <h1>Welcome to our Auction!</h1>
//       <p>We are excited to offer some of the finest horses for auction.</p>
//       <h2>Featured Horses</h2>
//       <div className="horse-list">
//         {horses.map((horse) => (
//           <Link to={`/horses/${horse.id}`} key={horse.id}>
//             <HorseCard horse={horse} />
//           </Link>
//         ))}
//       </div>
//       <Footer/>
//     </div>
//   );
// }

// export default Home;
