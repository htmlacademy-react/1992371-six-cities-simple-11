import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { City, PlaceCardInfo, AppRoute } from '../../types';
import { Login } from '../../pages/Login/Login';
import { Main } from '../../pages/Main/Main';
import { Property } from '../../pages/Property/Property';
import { NotFound } from '../../pages/NotFound/NotFound';

type AppProps = {
  city: City;
  rentalOffers: number;
  places: PlaceCardInfo[];
}

export function App({ city, rentalOffers, places}: AppProps) {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path = {AppRoute.Root}
            element = {
              <Main
                city={city}
                rentalOffers={rentalOffers}
                places={places}
              />
            }
          />
          <Route
            path={AppRoute.Login}
            element = {<Login />}
          />
          <Route
            path ={AppRoute.Room}
            element = {<Property />}
          />
          <Route
            path = '*'
            element = {<NotFound />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

