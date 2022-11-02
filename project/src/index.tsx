import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App/App';
import { bdPlaceCard } from './mocks/offer';
import { City } from './types';

const Settings: {
  city: City;
  rentalOffers: number;
} = {
  city: 'Paris',
  rentalOffers: 312,
};


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

export const Setting = {
  AmountRent: 4,
} as const;

root.render(
  <App
    city={Settings.city}
    rentalOffers={Settings.rentalOffers}
    places={bdPlaceCard}
  />
);
