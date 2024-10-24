import { useState } from 'react';
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  const heroData = [
    { text1: "Halooo", text2: "Good Morning" },
    { text1: "Heyyyyy", text2: "Beautiful" },
    { text1: "Byeee", text2: "Tataaa" },
  ];
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(true);

  return (
    <div>
      <Navbar />
      <Background playStatus={playStatus} heroCount={heroCount} />
    </div>
  );
}

export default App;
