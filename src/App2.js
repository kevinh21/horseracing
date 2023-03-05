import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import './App.css'

// Import all the components/pages/modules for the game
import HomePage from "./pages/HomePage";
import AuctionModule from "./modules/AuctionModule";
import AuctionList from "./components/auction/AuctionList";
import AuctionItem from "./components/auction/AuctionItem";
import AuctionBidForm from "./components/auction/AuctionBidForm";
import AuctionSellForm from "./components/auction/AuctionSellForm";
import AuctionSearch from "./components/auction/AuctionSearch";
import AuthenticationForm from "./components/AuthenticationForm";
import BettingModule from "./modules/BettingModule";
import BreedingModule from "./modules/BreedingModule";
import ContactForm from "./components/ContactForm";
import CreateHorsePage from "./pages/CreateHorsePage";
import ForgotPasswordForm from "./components/auth/ForgotPasswordForm";
import HorseMarketplacePage from "./pages/HorseMarketplacePage";
import HorseProfilePage from "./pages/HorseProfilePage";
import LeaderboardTable from "./components/LeaderboardTable";
import ProfileCard from "./components/ProfileCard";
import ProfileEditForm from "./components/profile/ProfileEditForm";
import RaceTrackPage from "./pages/RaceTrackPage";
import SettingsForm from "./components/SettingsForm";
import SignupForm from "./components/auth/SignupForm";
import TrainingModule from "./modules/TrainingModule";

function App() {
  return (
    <>
    <div className='test'>This is the App.js Page with the routes and Navbar</div>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auction" element={<AuctionModule />} />
        <Route path="/auction/:id/bid" element={<AuctionBidForm />} />
        <Route path="/auction/list" element={<AuctionList />} />
        <Route path="/auction/search" element={<AuctionSearch />} />
        <Route path="/auction/sell" element={<AuctionSellForm />} />
        <Route path="/auction/:id" element={<AuctionItem />} />
        <Route path="/login" element={<AuthenticationForm />} />
        <Route path="/betting" element={<BettingModule />} />
        <Route path="/breeding" element={<BreedingModule />} />
        <Route path="/create-horse" element={<CreateHorsePage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/horse-profile/:id" element={<HorseProfilePage />} />
        <Route path="/leaderboard" element={<LeaderboardTable />} />
        <Route path="/profile" element={<ProfileCard />} />
        <Route path="/editprofile" element={<ProfileEditForm/>} />
        <Route path="/race-track" element={<RaceTrackPage />} />
        <Route path="/settings" element={<SettingsForm />} />
        <Route path="/training" element={<TrainingModule />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/forgot-password" element={<ForgotPasswordForm />} />
        <Route path="/horse-marketplace" element={<HorseMarketplacePage />} />
      </Routes>
      </>
      );
}
 export default App;
