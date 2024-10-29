import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Background from './Components/Background/Background'; // Import the Background component
import './App.css';

const App = () => {
  return (
    <div className="app-background">
      <Background playStatus={true} heroCount={0} /> {/* Set playStatus to true to play the video */}
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
