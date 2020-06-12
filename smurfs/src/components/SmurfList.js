import React, { useContext } from 'react';
import Smurf from './Smurf';
import { SmurfsContext } from '../contexts/SmurfsContext';

export default function SmurfList() {
  const { smurfs } = useContext(SmurfsContext);
  return (
    <div className="smurf-list">
      {smurfs.map((smurf) => (
        <Smurf key={smurf.id} smurf={smurf} />
      ))}
    </div>
  );
}
