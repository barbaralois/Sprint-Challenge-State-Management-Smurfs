import React, { useContext } from 'react';
import { SmurfsContext } from '../contexts/SmurfsContext';

export default function Smurf(props) {
  const { deleteSmurf } = useContext(SmurfsContext);
  const smurf = props.smurf;
  return (
    <div className="smurf">
      <h3>{smurf.name}</h3>
      <h4>Age: {smurf.age}</h4>
      <h4>Height: {smurf.height}</h4>
      <button onClick={() => deleteSmurf(smurf.id)}>Delete Smurf</button>
    </div>
  );
}
