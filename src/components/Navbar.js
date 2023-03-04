import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        Horse Racing Game
      </Link>
      <ul className="navbar__menu">
        <li className="navbar__item">
          <NavLink to="/" className="navbar__link" activeClassName="active">
            Home
          </NavLink>
        </li>

        <ul className="navbar__dropdown">
          AUCTIOIN MENU
          <li className="navbar__item">
            <NavLink
              to="/auction"
              className="navbar__link"
              activeClassName="active"
            >
              Auction
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="/auction/:id/bid"
              className="navbar__link"
              activeClassName="active"
            >
              Auction Bid
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="/auction/list"
              className="navbar__link"
              activeClassName="active"
            >
              Auction List
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="/auction/search"
              className="navbar__link"
              activeClassName="active"
            >
              Auction Search
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="/auction/sell"
              className="navbar__link"
              activeClassName="active"
            >
              Auction Sell
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="/auction/:id"
              className="navbar__link"
              activeClassName="active"
            >
              Auction Item
            </NavLink>
          </li>
        </ul>

        <ul className="navbar__dropdown">
          BETTING MENU
          <li className="navbar__item">
            <NavLink
              to="/leaderboard"
              className="navbar__link"
              activeClassName="active"
            >
              Leaderboard
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="/betting"
              className="navbar__link"
              activeClassName="active"
            >
              Betting
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="/race-track"
              className="navbar__link"
              activeClassName="active"
            >
              Race Track
            </NavLink>
          </li>
        </ul>
        <ul className="navbar__dropdown">
          ACTIVITY MENU
          <li className="navbar__item">
            <NavLink
              to="/training"
              className="navbar__link"
              activeClassName="active"
            >
              Training
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="/horse-marketplace"
              className="navbar__link"
              activeClassName="active"
            >
              Marketplace
            </NavLink>
          </li>
        </ul>

        <ul className="navbar__dropdown">
          HORSE MENU
          <li className="navbar__item">
            <NavLink
              to="/breeding"
              className="navbar__link"
              activeClassName="active"
            >
              Breeding
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="/create-horse"
              className="navbar__link"
              activeClassName="active"
            >
              Create Horse
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="/horse-profile/:id"
              className="navbar__link"
              activeClassName="active"
            >
              Horse Profile
            </NavLink>
          </li>
        </ul>

        <ul className="navbar__dropdown">
          MY PROFILE
          <li className="navbar__item">
            <NavLink
              to="/settings"
              className="navbar__link"
              activeClassName="active"
            >
              Settings
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="/profile"
              className="navbar__link"
              activeClassName="active"
            >
              My Profile
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="/editprofile"
              className="navbar__link"
              activeClassName="active"
            >
              Edit Profile
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="/forgot-password"
              className="navbar__link"
              activeClassName="active"
            >
              Forgot Password
            </NavLink>
          </li>
        </ul>
        <ul>
          <li className="navbar__item">
            <NavLink
              to="/login"
              className="navbar__link"
              activeClassName="active"
            >
              Login
            </NavLink>
          </li>

          <li className="navbar__item">
            <NavLink
              to="/signup"
              className="navbar__link"
              activeClassName="active"
            >
              Signup
            </NavLink>
          </li>
        </ul>
        <li className="navbar__item">
          <NavLink
            to="/contact"
            className="navbar__link"
            activeClassName="active"
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
