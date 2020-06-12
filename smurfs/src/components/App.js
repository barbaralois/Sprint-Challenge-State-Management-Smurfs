import React, { useState, useEffect } from 'react';
import './App.css';
import { SmurfsContext } from '../contexts/SmurfsContext';
import AddSmurfForm from './AddSmurfForm';
import SmurfList from './SmurfList';
import axios from 'axios';

const initialState = [];

export default function App() {
  const [smurfs, setSmurfs] = useState(initialState);

  const getSmurfs = () => {
    axios
      .get('http://localhost:3333/smurfs')
      .then((res) => {
        setSmurfs(res.data);
      })
      .catch((err) => {
        console.log('Server Error', err.response);
      });
  };

  useEffect(() => {
    getSmurfs();
  }, []);

  const postNewSmurf = (newSmurf) => {
    axios
      .post(`http://localhost:3333/smurfs`, newSmurf)
      .then((res) => {
        getSmurfs();
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const deleteSmurf = (id) => {
    axios.delete(`http://localhost:3333/smurfs/${id}`).then((res) => {
      setSmurfs(res.data);
    });
  };

  return (
    <SmurfsContext.Provider value={{ smurfs, postNewSmurf, deleteSmurf }}>
      <div className="App">
        <h1>Barbara's Smurf Village</h1>
        <AddSmurfForm />
        <SmurfList />
      </div>
    </SmurfsContext.Provider>
  );
}
