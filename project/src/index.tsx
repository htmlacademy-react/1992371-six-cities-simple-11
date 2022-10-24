import React from 'react';
import ReactDOM from 'react-dom/client';
import WelcomeScreen from './pages/main/main';
/* import App from './components/app-card'; */
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Setting = {
  AmountRent: 4,
} as const;

root.render(
  <React.StrictMode>
    <WelcomeScreen
      AmountRent= {Setting.AmountRent}
    />
  </React.StrictMode>,
);
