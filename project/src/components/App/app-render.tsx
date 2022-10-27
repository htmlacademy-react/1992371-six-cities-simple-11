import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Login } from '../../pages/login/login';
import { Main } from '../../pages/main/main';
import { Property } from '../../pages/property/property';
import { NotFound } from '../../pages/not-found/not-found';

export function AppRender () {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route
            path = '/'
            element = {<Main AmountRent={4} />}
          />
          <Route
            path='/login'
            element = {<Login />}
          />
          <Route
            path = '/offer/:id'
            element = {<Property />}
          />
          <Route
            path = '*'
            element = {<NotFound />}
          />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

