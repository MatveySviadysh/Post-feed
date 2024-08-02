import React, { useState } from 'react';
import Cookies from 'js-cookie';

const CookieForm = () => {
  const [cookieValue, setCookieValue] = useState('');

  const handleSetCookie = () => {
    fetch('http://localhost:8000/set-cookie/', {
      method: 'GET',
      credentials: 'include'
    })
    .then(() => {
      Cookies.set('my_cookie', cookieValue, { expires: 1 });
      alert('Cookie set!');
    })
    .catch(error => {
      console.error('Error setting cookie:', error);
    });
  };
  
  const handleGetCookie = () => {
    fetch('http://localhost:8000/get-cookie/', {
      method: 'GET',
      credentials: 'include'
    })
    .then(response => response.text())
    .then(text => {
      alert('Cookie value: ' + text);
    })
    .catch(error => {
      console.error('Error getting cookie:', error);
    });
  };
  

  return (
    <div>
      <input
        type="text"
        value={cookieValue}
        onChange={(e) => setCookieValue(e.target.value)}
      />
      <button onClick={handleSetCookie}>Set Cookie</button>
      <button onClick={handleGetCookie}>Get Cookie</button>
    </div>
  );
};

export default CookieForm;
