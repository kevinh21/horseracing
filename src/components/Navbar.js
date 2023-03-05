import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  
  return (
    <>
      <div className="nav-wrapper">

        <ul className='menu-list dropdown'>HORSE MENU
        <ul className='dropdown'>
        <li> <NavLink exact to="/" activeClassName="active">Home</NavLink> </li>
        <li> <NavLink to="/race" activeClassName="active">Race</NavLink> </li>
        <li> <NavLink to="/horse" activeClassName="active">Horse</NavLink> </li>
        </ul>
          </ul>
          <ul className='menu-list dropdown'>JOCKEY MENU
        <ul className='dropdown'>
        <li> <NavLink to="/jockey" activeClassName="active">Jockey</NavLink> </li>
        <li> <NavLink to="/auction" activeClassName="active">Auction</NavLink> </li>
        <li> <NavLink to="/bets" activeClassName="active">Bets</NavLink> </li>
        <li> <NavLink to="/breeding" activeClassName="active">Breeding</NavLink> </li>
        </ul>
        </ul>
       <ul className='menu-list dropdown'>TRACK MENU
       <ul className='dropdown'>
        <li> <NavLink to="/earnings" activeClassName="active">Earnings</NavLink> </li>
        <li> <NavLink to="/faqs" activeClassName="active">FAQs</NavLink> </li>
        <li> <NavLink to="/gear" activeClassName="active">Gear</NavLink> </li>
        <li> <NavLink to="/type-of-bets" activeClassName="active">Type of Bets</NavLink> </li>
        <li> <NavLink to="/history" activeClassName="active">History</NavLink> </li>
        </ul>
          </ul>
          <ul className='menu-list dropdown'>ACTIVITY MENU
        <ul className='dropdown'>
        <li> <NavLink to="/instructions" activeClassName="active">Instructions</NavLink> </li>
        <li> <NavLink to="/news" activeClassName="active">News</NavLink> </li>
        <li> <NavLink to="/tutorial" activeClassName="active">Tutorial</NavLink> </li>
        <li> <NavLink to="/learn-about-racing" activeClassName="active">Learn About Racing</NavLink> </li>
        </ul>
          </ul>

        <ul className='menu-list dropdown'>TRACK MENU
        <ul className='dropdown'>

        <li> <NavLink to="/payouts" activeClassName="active">Payouts</NavLink> </li>
        <li> <NavLink to="/owner" activeClassName="active">Owner</NavLink> </li>
        <li> <NavLink to="/trainer" activeClassName="active">Trainer</NavLink> </li>
        <li> <NavLink to="/race-track" activeClassName="active">Race Track</NavLink> </li>
        </ul>
          </ul>

       <ul className='menu-list dropdown'>DASHBOARD MENU     
       <ul className='dropdown'>

        <li> <NavLink to="/horse-training" activeClassName="active">Horse Training</NavLink> </li>
        <li> <NavLink to="/signup" activeClassName="active">Sign Up</NavLink> </li>
        <li> <NavLink to="/profile" activeClassName="active">Profile</NavLink> </li>
        <li> <NavLink to="/profileEdit" activeClassName="active">Edit Profile</NavLink> </li>
        <li> <NavLink to="/leaderboard" activeClassName="active">Leaderboard</NavLink> </li>
        </ul>
          </ul>
        
        <ul className='menu-list dropdown'>TRACK MENU     
        <ul className='dropdown'>

        <li> <NavLink to="/login" activeClassName="active">Log In</NavLink> </li>
        <li> <NavLink to="/race-results" activeClassName="active">Race Results</NavLink> </li>
        <li> <NavLink to="/statistics" activeClassName="active">Statistics</NavLink> </li>
        </ul>
          </ul>

        <ul className='menu-list dropdown'>STATISTICS MENU
        <ul className='dropdown'>

        <li> <NavLink to="/jockey" activeClassName="active">Jockey</NavLink> </li>
        <li> <NavLink to="/auction" activeClassName="active">Auction</NavLink> </li>
        </ul>
          </ul>
      </div> 
    </>
  );
};

export default Navbar;




