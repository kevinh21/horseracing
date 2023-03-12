import React from 'react';

function Staff() {
  const staffMembers = [
    { name: 'John Smith', position: 'Auctioneer', email: 'johnsmith@aucti.on' },
    { name: 'Mary Brown', position: 'Sales Manager', email: 'marybrown@aucti.on' },
    { name: 'David Lee', position: 'Marketing Manager', email: 'davidlee@aucti.on' },
    { name: 'Sarah Johnson', position: 'Customer Service', email: 'sarahjohnson@aucti.on' },
  ];

  return (
    <div>
      <h1>Staff</h1>
      <p>Our team of experienced professionals is here to assist you in every aspect of the auction process:</p>
      <ul>
        {staffMembers.map((staffMember) => (
          <li key={staffMember.email}>
            <strong>{staffMember.name}</strong> - {staffMember.position}<br />
            Email: <a href={`mailto:${staffMember.email}`}>{staffMember.email}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Staff;
