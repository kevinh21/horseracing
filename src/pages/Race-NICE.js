import React from "react";

function Race() {
  const raceName = "Kentucky Derby";
  const raceDate = "May 1, 2023";
  const raceLocation = "Churchill Downs";
  const raceTrack = "Dirt track";
  const raceDistance = "1 1/4 miles";
  const racePurse = "$3 million";
  const raceConditions = "3-year-old thoroughbreds";
  const horses = [
    {
      id: 1,
      name: "Thunderbolt",
      jockey: "John Smith",
      odds: "4-1",
      time: "2:03.45",
      pastPerformances: ["1st in the Preakness Stakes"],
    },
    {
      id: 2,
      name: "Lightning Strike",
      jockey: "Emily Johnson",
      odds: "8-1",
      time: "2:04.22",
      pastPerformances: ["2nd in the Belmont Stakes"],
    },
    {
      id: 3,
      name: "Tornado Alley",
      jockey: "Mark Davis",
      odds: "10-1",
      time: "2:05.18",
      pastPerformances: ["3rd in the Travers Stakes"],
    },
    {
      id: 4,
      name: "Storm Warning",
      jockey: "Rachel Lee",
      odds: "12-1",
      time: "2:06.03",
      pastPerformances: ["4th in the Breeders' Cup Classic"],
    },
    {
      id: 5,
      name: "Hurricane",
      jockey: "Michael Brown",
      odds: "15-1",
      time: "2:06.43",
      pastPerformances: ["2nd in the Florida Derby"],
    },
  ];

  return (
    <div className="container">
      <header>
        <h1>{raceName}</h1>
        <p>{raceDate}</p>
      </header>
      <section>
        <h2>Race Details</h2>
        <p><strong>Location:</strong> {raceLocation}</p>
        <p><strong>Track:</strong> {raceTrack}</p>
        <p><strong>Distance:</strong> {raceDistance}</p>
        <p><strong>Purse:</strong> {racePurse}</p>
        <p><strong>Conditions:</strong> {raceConditions}</p>
      </section>
      <section>
        <h2>Entries and Odds</h2>
        <table>
          <thead>
            <tr>
              <th>Horse</th>
              <th>Jockey</th>
              <th>Odds</th>
              <th>Past Performances</th>
            </tr>
          </thead>
          <tbody>
            {horses.map((horse) => (
              <tr key={horse.id}>
                <td>{horse.name}</td>
                <td>{horse.jockey}</td>
                <td>{horse.odds}</td>
                <td>
                  <ul>
                    {horse.pastPerformances.map((performance, index) => (
                      <li key={index}>{performance}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section>
        <h2>Results</h2>
        <table>
          <thead>
            <tr>                    
            <th>Horse</th>
          <th>Jockey</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {horses.map((horse) => (
          <tr key={horse.id}>
            <td>{horse.name}</td>
            <td>{horse.jockey}</td>
            <td>{horse.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
  <section>
    <h2>Replay</h2>
    <video controls>
      <source src="/videos/kentucky_derby_2023.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </section>
  <section>
    <h2>Past Performances</h2>
    <table>
      <thead>
        <tr>
          <th>Horse</th>
          <th>Jockey</th>
          <th>Race</th>
          <th>Finish</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Thunderbolt</td>
          <td>John Smith</td>
          <td>Preakness Stakes</td>
          <td>1st</td>
        </tr>
        <tr>
          <td>Lightning Strike</td>
          <td>Emily Johnson</td>
          <td>Belmont Stakes</td>
          <td>2nd</td>
        </tr>
        <tr>
          <td>Tornado Alley</td>
          <td>Mark Davis</td>
          <td>Travers Stakes</td>
          <td>3rd</td>
        </tr>
        <tr>
          <td>Storm Warning</td>
          <td>Rachel Lee</td>
          <td>Breeders' Cup Classic</td>
          <td>4th</td>
        </tr>
        <tr>
          <td>Hurricane</td>
          <td>Michael Brown</td>
          <td>Florida Derby</td>
          <td>2nd</td>
        </tr>
      </tbody>
    </table>
  </section>
  <section>
    <h2>Related Information</h2>
    <ul>
      <li>News</li>
      <li>Upcoming Races</li>
      <li>Standings</li>
      <li>Betting Tips</li>
    </ul>
  </section>
</div>

);
}

export default Race;

