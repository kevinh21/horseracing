import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  
  return (
    <>
      <div className="nav-wrapper">
      <li> <NavLink exact to="/" activeClassName="active">Welcome</NavLink> </li>
        <ul className='menu-list dropdown'>HORSE 
        <ul className='dropdown'>
        <li> <NavLink to="/horse" activeClassName="active">Horse</NavLink> </li>
               <li> <NavLink to="/earnings" activeClassName="active">Earnings</NavLink> </li>
               <li> <NavLink to="/owner" activeClassName="active">Owner</NavLink> </li>
               <li> <NavLink to="/history" activeClassName="active">History</NavLink> </li>
             </ul>
        </ul>
        <ul className='menu-list dropdown'>JOCKEY 
        <ul className='dropdown'>
        <li> <NavLink to="/jockey" activeClassName="active">Jockey</NavLink> </li>
        <li> <NavLink to="/jockey-History" activeClassName="active">History</NavLink> </li>
        <li> <NavLink to="/jockey-stats" activeClassName="active">Stats</NavLink> </li>
        <li> <NavLink to="/jockey-style" activeClassName="active">Style</NavLink> </li>
        </ul>
        </ul>
        <ul className='menu-list dropdown'>TRACK 
        <ul className='dropdown'>    
        <li> <NavLink to="/race-track" activeClassName="active">Track</NavLink> </li>
        <li> <NavLink to="/track-type" activeClassName="active">Track Type</NavLink> </li>
        <li> <NavLink to="/history" activeClassName="active">History</NavLink> </li>
        <li> <NavLink to="/track-conditions" activeClassName="active">Conditions</NavLink> </li>      
        </ul>
        </ul>
         <ul className='menu-list dropdown'>TRAINER      
        <ul className='dropdown'>
        <li> <NavLink to="/trainer" activeClassName="active">Trainer</NavLink> </li>
        <li> <NavLink to="/trainer-stats" activeClassName="active">Stats</NavLink> </li>
        <li> <NavLink to="/trainer-style" activeClassName="active">Style</NavLink> </li>
        <li> <NavLink to="/trainer-history" activeClassName="active">History</NavLink> </li>
               </ul>
          </ul>
     
       <ul className='menu-list dropdown'>RACE 
       <ul className='dropdown'>
       <li> <NavLink to="/race" activeClassName="active">Race</NavLink> </li>
       <li> <NavLink to="/leaderboard" activeClassName="active">Leaderboard</NavLink> </li>
       <li> <NavLink to="/race-results" activeClassName="active">Race Results</NavLink> </li>        
        <li> <NavLink to="/gear" activeClassName="active">Race Gear</NavLink> </li>
        </ul>
        </ul>
       <ul className='menu-list dropdown'>BETTING 
       <ul className='dropdown'>
       <li> <NavLink to="/bets" activeClassName="active">Bets</NavLink> </li>
        <li> <NavLink to="/bet-types" activeClassName="active">Bet Types</NavLink> </li>
        <li> <NavLink to="/bet-payouts" activeClassName="active">Payouts</NavLink> </li>
        <li> <NavLink to="/bet-odds" activeClassName="active">ODDS</NavLink> </li>
        </ul>
        </ul>
        <ul className='menu-list dropdown'>AUCTION 
        <ul className='dropdown'>
        <li> <NavLink to="/auction" activeClassName="active">Auction</NavLink> </li>
        <li> <NavLink to="/dates" activeClassName="active">Dates</NavLink> </li>
        <li> <NavLink to="/breeds" activeClassName="active">Breeds</NavLink> </li>
        <li> <NavLink to="/public" activeClassName="active">Public</NavLink> </li>
        <li> <NavLink to="/private" activeClassName="active">Private</NavLink> </li>
        </ul>
          </ul>
          <ul className='menu-list dropdown'>ACTIVITY 
        <ul className='dropdown'>
        <li> <NavLink to="/instructions" activeClassName="active">Instructions</NavLink> </li>
        <li> <NavLink to="/news" activeClassName="active">News</NavLink> </li>
        <li> <NavLink to="/tutorial" activeClassName="active">Tutorial</NavLink> </li>
        <li> <NavLink to="/learn-about-racing" activeClassName="active">Learn Racing</NavLink> </li>
        <li> <NavLink to="/faqs" activeClassName="active">FAQs</NavLink> </li>
        </ul>
        </ul>
        <ul className='menu-list dropdown'>STABLES      
        <ul className='dropdown'>
        <li> <NavLink to="/breeding" activeClassName="active">Breeding</NavLink> </li>
        <li> <NavLink to="/horse-training" activeClassName="active">Horse Training</NavLink> </li>
        <li> <NavLink to="/medical" activeClassName="active">Medical</NavLink> </li>
        <li> <NavLink to="/shoeing" activeClassName="active">Shoeing</NavLink> </li>
        </ul>
        </ul>   
        <ul className='menu-list dropdown'>STATISTICS 
        <ul className='dropdown'>
        <li> <NavLink to="/statistics" activeClassName="active">Statistics</NavLink> </li>     
            </ul>
          </ul>
          <ul className='menu-list dropdown'>DASHBOARD      
       <ul className='dropdown'>
               <li> <NavLink to="/signup" activeClassName="active">Sign Up</NavLink> </li>
        <li> <NavLink to="/login" activeClassName="active">Log In</NavLink> </li>
        <li> <NavLink to="/profile" activeClassName="active">Profile</NavLink> </li>
        <li> <NavLink to="/profileEdit" activeClassName="active">Edit Profile</NavLink> </li>
           </ul>
         </ul>
      </div> 
    </>
  );
};

export default Navbar;




