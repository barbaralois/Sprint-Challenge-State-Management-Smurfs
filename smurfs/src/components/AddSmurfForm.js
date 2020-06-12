import React, { useState, useContext } from 'react';
import { SmurfsContext } from '../contexts/SmurfsContext';

const initialFormValues = {
  name: '',
  age: '',
  height: '',
};

export default function AddSmurfForm() {
  const { postNewSmurf } = useContext(SmurfsContext);
  const [formValues, setFormValues] = useState(initialFormValues);
  const onInputChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newSmurf = {
      name: formValues.name,
      age: formValues.age,
      height: formValues.height,
      id: Date.now(),
    };
    postNewSmurf(newSmurf);
    setFormValues(initialFormValues);
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Add a New Smurf!</h2>

      <label>
        Name:&nbsp;
        <input
          type="text"
          placeholder="..."
          maxLength="30"
          name="name"
          value={formValues.name}
          onChange={onInputChange}
        />
      </label>
      <label>
        Age:&nbsp;
        <input
          type="text"
          name="age"
          placeholder="..."
          maxLength="50"
          value={formValues.age}
          onChange={onInputChange}
        />
      </label>
      <label>
        Height:&nbsp;
        <input
          type="text"
          name="height"
          placeholder="..."
          maxLength="5"
          value={formValues.height}
          onChange={onInputChange}
        />
      </label>

      <button>Submit</button>
    </form>
  );
}
