import React from "react";
import {Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Auction from "./pages/Auction";
import Bets from "./pages/Bets";
import BetTypes from "./pages/BetTypes";
import Breeding from "./pages/Breeding";
import Earnings from "./pages/Earnings.js";
import FAQs from "./pages/FAQs";
import Gear from "./pages/Gear";
import History from "./pages/History.js";
import Home from "./pages/Home";
import Horse from "./pages/Horse";
import HorseTraining from "./pages/HorseTraining";
import Instructions from "./pages/Instructions";
import Jockey from "./pages/Jockey";
import Leaderboard from "./pages/Leaderboard";
import LearnAboutRacing from "./pages/LearnAboutRacing";
import LoginForm from "./components/auth/LoginForm";
import News from "./pages/News.js";
import Owner from "./pages/Owner";
import Payouts from "./pages/Payouts";
import Profile from "./components/profile/Profile";
import ProfileEdit from "./components/profile/ProfileEditForm";
import Race from "./pages/Race";
import RaceResults from "./pages/RaceResults";
import RaceTrack from "./pages/RaceTrackPage";
import Signup from "./components/auth/SignupForm";
import Statistics from "./pages/Statistics";
import Trainer from "./pages/Trainer";
import Tutorial from "./pages/Tutorial";


function App() {
     return (
     <>
       <div className='test'></div>
      <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/race" element={<Race />} />
        <Route path="/horse" element={<Horse />} />
        <Route path="/jockey" element={<Jockey />} />
        <Route path="/auction" element={<Auction />} />
        <Route path="/bets" element={<Bets />} />
        <Route path="/breeding" element={<Breeding />} />
        <Route path="/earnings" element={<Earnings />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/gear" element={<Gear />} />
        <Route path="/type-of-bets" element={<BetTypes />} />
        <Route path="/history" element={<History/>}/>
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/news" element={<News />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/learn-about-racing" element={<LearnAboutRacing />} />
        <Route path="/payouts" element={<Payouts />} />
        <Route path="/owner" element={<Owner />} />
        <Route path="/trainer" element={<Trainer />} />
        <Route path="/race-track" element={<RaceTrack />} />
        <Route path="/horse-training" element={<HorseTraining />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profileEdit" element={<ProfileEdit />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/race-results" element={<RaceResults />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
      </>
);  
}

export default App;
