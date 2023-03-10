import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home(props) {
  return (
    <div class="landingCards">
      <div class="landingCard">ONE</div>
      <div class="landingCard">
        TWO
        <img
          className="landingImageTwo"
          alt="Horse Racers"
          src={process.env.PUBLIC_URL + "/images/landingImage.jpg"}
        ></img>{" "}
      </div>
      <div class="landingCard">THREE</div>
      <div class="landingCard">FOUR</div>
      <div class="landingCard">FIVE</div>
      <div class="landingCard">SIX</div>
    </div>
  );
}

export default Home;

/*
// <div className="HomeWrap">
//       <img
//         className="landingHero"
//         alt="Horse Racers"
//         src={process.env.PUBLIC_URL + "/images/landingImage.jpg"}
//       ></img>
//       <div id="title">
//         DEVELOPER DERBY <br />
//         HORSE RACING AT IT'S FINEST{" "}
//       </div>
//       <p id="minBet">
//         Minimum Bet $2.00 <br />
//         You must be 18 to PLAY
//       </p>
//       <div id="HomeGoToHorseRace">
//         <Link to="/home"> Go To the Races</Link>
//       </div>
//     </div>

*/
