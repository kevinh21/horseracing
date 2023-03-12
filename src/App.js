import React from "react";
import {Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Bets from "./pages/Bets";
import BetTypes from "./pages/BetTypes";
import BetOdds from "./pages/BetOdds";
import Breeding from "./pages/Breeding";
import CreateHorsepage from "./pages/CreateHorsePage";
import Dashboard from "./pages/Dashboard"
import Earnings from "./pages/Earnings";
import FAQs from "./pages/FAQs";
import Gear from "./pages/Gear";
import History from "./pages/History";
import Home from "./pages/Home";
import Horse from "./pages/Horse";
import HorseTraining from "./pages/HorseTraining";
import Instructions from "./pages/Instructions";
import Jockey from "./pages/Jockey";
import JockeyHistory from "./pages/JockeyHistory";
import JockeyStats from "./pages/JockeyStats";
import JockeyStyle from "./pages/JockeyStyle";
import Leaderboard from "./pages/Leaderboard";
import LearnAboutRacing from "./pages/LearnAboutRacing";
import LoginForm from "./components/auth/LoginForm";
import News from "./pages/News";
import Owner from "./pages/Owner";
import BetPayouts from "./pages/BetPayouts";
import Profile from "./components/profile/Profile";
import ProfileEdit from "./components/profile/ProfileEditForm";
import Race from "./pages/Race";
import RaceResults from "./pages/RaceResults";
import RaceTrack from "./pages/RaceTrack";
import TrackType from "./pages/TrackType";
import TrackConditions from "./pages/TrackConditions";
import Signup from "./components/auth/SignupForm";
import Statistics from "./pages/Statistics";
import Trainer from "./pages/Trainer";
import TrainerStats from "./pages/TrainerStats";
import TrainerStyle from "./pages/TrainerStyle";
import TrainerHistory from "./pages/TrainerHistory";
import Tutorial from "./pages/Tutorial";
// AUCTION MODULE SECTION
import Auction from './modules/Auction/Auction';
import AuctionHorses from './modules/Auction/AuctionHorses';
import HorseDetails from './modules/Auction/HorseDetails';
import Bidding from './modules/Auction/Bidding';
import CurrentHighestBid from './modules/Auction/CurrentHighestBid';
import AuctionResults from './modules/Auction/AuctionResults';
import Facilities from './modules/Auction/Facilities';
import Staff from './modules/Auction/Staff';
import SalesContract from './modules/Auction/SalesContract';
import Transportation from './modules/Auction/Transportation';



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
        <Route path="/create-horse-page" element={<CreateHorsepage/>}/>
        <Route path="./dashboard" element={<Dashboard/>}/>
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

 {/* AUCTION MODULE SECTION */}
        <Route path="/auction-horses" element={<AuctionHorses />} />
        <Route path="/horse-details" element={<HorseDetails />} />
        <Route path="/bidding" element={<Bidding />} />
        <Route path="/current-highest-bid" element={<CurrentHighestBid />} />
        <Route path="/auction-results" element={<AuctionResults />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/sales-contract" element={<SalesContract />} />
        <Route path="/transportation" element={<Transportation />} />
      </Routes>
      </>
);  
}

export default App;
