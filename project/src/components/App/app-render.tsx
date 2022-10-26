import { Main } from '../../pages/main/main';
import React from 'react';
import { Setting } from '../..';

export function AppRender () {
  return (
    <React.StrictMode>
      <Main
        AmountRent= {Setting.AmountRent}
      />
    </React.StrictMode>
  );
}

