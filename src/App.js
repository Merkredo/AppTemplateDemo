import React from 'react';
import './App.css';

import TopBar from './TopBar/TopBar.js'
import Footer from './Footer/Footer.js'
import Samples from './Samples.js'

export default function App() {
  return (
    <div>
      <TopBar />
      <Samples />
      <Footer />
    </div>
  );
}
