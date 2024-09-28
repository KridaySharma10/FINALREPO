"use client";

import React, { useState } from 'react';
import countries from '../data/medals';

const MedalTally: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <h2 onClick={toggleExpand}>Medal Tally {expanded ? '▲' : '▼'}</h2>
      {expanded && (
        <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>Gold</th>
              <th>Silver</th>
              <th>Bronze</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country) => (
              <tr key={country.name}>
                <td>{country.name}</td>
                <td>{country.gold}</td>
                <td>{country.silver}</td>
                <td>{country.bronze}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MedalTally;
