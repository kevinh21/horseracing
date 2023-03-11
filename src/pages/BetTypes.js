import React, { useState } from 'react';
// import './BetTypes.css';

function BetAccordion() {
  const [active, setActive] = useState(null);

  const toggleAccordion = (index) => {
    setActive(active === index ? null : index);
  };

  const bets = [
    {
      title: 'Exacta',
      description:
        'In this bet, you need to pick the two horses that will finish first and second in the exact order in a single race. For example, if you bet on Horse 1 to win and Horse 2 to come second, and they finish in that order, you win the bet.',
    },
    {
      title: 'Quinella',
      description:
        'This bet is similar to the Exacta, except that the order of the first and second place horses doesnt matter. As long as the two horses you pick finish in the top two positions, you win the bet.',
    },
    {
      title: 'Trifecta',
      description:
        'In this bet, you need to pick the three horses that will finish first, second, and third in the exact order in a single race. For example, if you bet on Horse 1 to win, Horse 2 to come second, and Horse 3 to come third, and they finish in that order, you win the bet.',
    },
    {
      title: 'Superfecta',
      description:
        'This is a more challenging version of the Trifecta bet, where you need to pick the four horses that will finish first, second, third, and fourth in the exact order in a single race.',
    },
    {
      title: 'Future',
      description:
        'This bet allows you to place a wager on the outcome of a future race, typically one that will take place several weeks or months in the future. For example, you can bet on a horse to win the Kentucky Derby even before the race is scheduled to take place.',
    },
    {
      title: 'Place Pick All',
      description:
        "In this bet, you need to pick a horse to place (come in first or second) in each of the races on a given day's racing card.",
    },
    {
      title: 'Win Pick All',
      description:
        "In this bet, you need to pick a horse to win each of the races on a given day's racing card.",
    },
    {
      title: 'Daily Double',
      description:
        'This bet requires you to select the winner of two consecutive races. You need to pick the winner of the first race and then the winner of the second race.',
    },
    {
      title: 'Pick 3, Pick 4, Pick 5, and Pick 6',
      description:
        'These are similar to the Daily Double, except that you need to pick the winners of three, four, five, or six consecutive races, respectively. These bets are typically more challenging than the Daily Double and offer higher payouts.',
    },
  ];

  return (
    <div className="bet-accordion">
      {bets.map((bet, index) => (
        <div
          key={index}
          className={`bet-item ${active === index ? 'active' : ''}`}
          onClick={() => toggleAccordion(index)}
        >
          <h3 className="bet-title">{bet.title}</h3>
          <div className="bet-description">{bet.description}</div>
        </div>
      ))}
    </div>
  );
}

export default BetAccordion;







// import React, { useState } from 'react';
// import { Accordion, Card, Button } from 'react-bootstrap';
// import './BetTypes.css';

// function BetAccordion() {
//   const [activeIndex, setActiveIndex] = useState(-1);

//   const handleToggle = (index) => {
//     setActiveIndex(index === activeIndex ? -1 : index);
//   };

//   return (
//     <Accordion>
//       <Card>
//         <Card.Header>
//           <Accordion.Toggle as={Button} variant="link" eventKey="exacta" onClick={() => handleToggle(0)}>
//             Exacta
//           </Accordion.Toggle>
//         </Card.Header>
//         <Accordion.Collapse eventKey="exacta" isActive={activeIndex === 0}>
//           <Card.Body>
//             In this bet, you need to pick the two horses that will finish first and second in the exact order in a single race.
//             For example, if you bet on Horse 1 to win and Horse 2 to come second, and they finish in that order, you win the bet.
//           </Card.Body>
//         </Accordion.Collapse>
//       </Card>

//       <Card>
//         <Card.Header>
//           <Accordion.Toggle as={Button} variant="link" eventKey="quinella" onClick={() => handleToggle(1)}>
//             Quinella
//           </Accordion.Toggle>
//         </Card.Header>
//         <Accordion.Collapse eventKey="quinella" isActive={activeIndex === 1}>
//           <Card.Body>
//             This bet is similar to the Exacta, except that the order of the first and second place horses doesn't matter.
//             As long as the two horses you pick finish in the top two positions, you win the bet.
//           </Card.Body>
//         </Accordion.Collapse>
//       </Card>

//       <Card>
//         <Card.Header>
//           <Accordion.Toggle as={Button} variant="link" eventKey="trifecta" onClick={() => handleToggle(2)}>
//             Trifecta
//           </Accordion.Toggle>
//         </Card.Header>
//         <Accordion.Collapse eventKey="trifecta" isActive={activeIndex === 2}>
//           <Card.Body>
//             In this bet, you need to pick the three horses that will finish first, second, and third in the exact order in a single race.
//             For example, if you bet on Horse 1 to win, Horse 2 to come second, and Horse 3 to come third, and they finish in that order, you win the bet.
//           </Card.Body>
//         </Accordion.Collapse>
//       </Card>

//       <Card>
//         <Card.Header>
//           <Accordion.Toggle as={Button} variant="link" eventKey="superfecta" onClick={() => handleToggle(3)}>
//             Superfecta
//           </Accordion.Toggle>
//         </Card.Header>
//         <Accordion.Collapse eventKey="superfecta" isActive={activeIndex === 3}>
//           <Card.Body>
//             This is a more challenging version of the Trifecta bet, where you need to pick the four horses that will finish first,
//             second, third, and fourth in the exact order in a single race.
//           </Card.Body>
//         </Accordion.Collapse>
//       </Card>

//       <Card>
//         <Card.Header>
//           <Accordion.Toggle as={Button} variant="link" eventKey="future" onClick={() => handleToggle(4)}>
//             Future
//           </Accordion.Toggle>
//         </Card.Header>
//         <Accordion.Collapse eventKey="future" isActive={activeIndex === 4}>
//           <Card.Body>
//             This bet allows you to place a wager on the outcome of a future race, typically

// one that will take place several weeks or even months from the current date.
// For example, you might bet on a specific horse to win a major race like the Kentucky Derby before the race has even begun.
// Future bets can be risky since there are many factors that can impact the outcome of a race over an extended period of time.
// </Card.Body>
// </Accordion.Collapse>
// </Card>
// </Accordion>
// );
// }
// export default BetAccordion;
