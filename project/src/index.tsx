import React from 'react';
import ReactDOM from 'react-dom/client';
import WelcomeScreen from './pages/welcome-screen/welcome-screen';
/* import App from './components/app/app'; */
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <WelcomeScreen />
  </React.StrictMode>,
);
