import React from 'react';
import ReactDOM from 'react-dom/client';
/* import App from './components/app-card'; */
import { AppRender } from './components/App/app-render';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

export const Setting = {
  AmountRent: 4,
} as const;

root.render(
  <AppRender />
);
