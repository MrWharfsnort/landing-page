import React from 'react';

import Navigation from './Components/Navigation/Navigation';
import AboutUs from './Components/AboutUs/AboutUs';

import './scss/main.scss';

const app = () => (
  <div className="App">
    <Navigation />
    <AboutUs />
  </div>
);

export default app;
