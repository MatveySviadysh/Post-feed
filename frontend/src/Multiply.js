// src/Multiply.js

import React, { useState } from 'react';
import axios from 'axios';

const Multiply = () => {
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/process/', { number });
      setResult(response.data.result);
    } catch (error) {
      console.error('There was an error processing the request!', error);
    }
  };

  return (
    <div>
      <h1>Multiply Number by 2</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Number:
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </label>
        <button type="submit">Multiply</button>
      </form>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
};

export default Multiply;
