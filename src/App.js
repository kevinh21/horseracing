import React from "react";
import {Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Auction from "./pages/Auction";
import Bets from "./pages/Bets";
import BetTypes from "./pages/BetTypes";
import BetOdds from "./pages/BetOdds.js";
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
import JockeyHistory from "./pages/JockeyHistory";
import JockeyStats from "./pages/JockeyStats.js";
import JockeyStyle from "./pages/JockeyStyle.js";
import Leaderboard from "./pages/Leaderboard";
import LearnAboutRacing from "./pages/LearnAboutRacing";
import LoginForm from "./components/auth/LoginForm";
import News from "./pages/News.js";
import Owner from "./pages/Owner";
import BetPayouts from "./pages/BetPayouts";
import Profile from "./components/profile/Profile";
import ProfileEdit from "./components/profile/ProfileEditForm";
import Race from "./pages/Race";
import RaceResults from "./pages/RaceResults";
import RaceTrack from "./pages/RaceTrack";
import TrackType from "./pages/TrackType.js";
import TrackConditions from "./pages/TrackConditions.js";
import Signup from "./components/auth/SignupForm";
import Statistics from "./pages/Statistics";
import Trainer from "./pages/Trainer";
import TrainerStats from "./pages/TrainerStats.js";
import TrainerStyle from "./pages/TrainerStyle.js";
import TrainerHistory from "./pages/TrainerHistory.js";
import Tutorial from "./pages/Tutorial";


function App() {
     return (
     <>
       <div className='test'></div>
      <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/horse" element={<Horse />} />
        <Route path="/jockey" element={<Jockey />} />
        <Route path="/jockey-History" element={<JockeyHistory />} />
        <Route path="/jockey-Stats" element={<JockeyStats />} />
        <Route path="/jockey-Style" element={<JockeyStyle />} />
        <Route path="/auction" element={<Auction />} />
        <Route path="/bets" element={<Bets />} />
        <Route path="/bet-types" element={<BetTypes />} />
        <Route path="/bet-odds" element={<BetOdds />} />
        <Route path="/bet-payouts" element={<BetPayouts />} />
        <Route path="/breeding" element={<Breeding />} />
        <Route path="/earnings" element={<Earnings />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/gear" element={<Gear />} />
        <Route path="/history" element={<History/>}/>
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/news" element={<News />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/learn-about-racing" element={<LearnAboutRacing />} />
        <Route path="/owner" element={<Owner />} />
        <Route path="/race" element={<Race />} />
        <Route path="/race-track" element={<RaceTrack />} />
        <Route path="/track-type" element={<TrackType />} />
        <Route path="/track-conditions" element={<TrackConditions />} />
        <Route path="/trainer" element={<Trainer />} />
        <Route path="/trainer-stats" element={<TrainerStats />} />
        <Route path="/trainer-style" element={<TrainerStyle />} />
        <Route path="/trainer-history" element={<TrainerHistory />} />
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
