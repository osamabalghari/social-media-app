import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import UserStateContext from './context/userContext/UserStateContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserStateContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserStateContext>
  </React.StrictMode>

);
