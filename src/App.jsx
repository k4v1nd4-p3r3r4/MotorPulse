import React, { useEffect, useState } from "react";
import Background from "./components/Background/Background";
import NavBar from "./components/Navbar/NavBar";
import Hero from "./components/Hero/Hero";

const App = () => {

  const heroData = [
    { text1: "Drive Your", text2: "Dream" },
    { text1: "Power Meets", text2: "Style" },
    { text1: "Start Your", text2: "Journey" }
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

 useEffect(() => {
  const interval = setInterval(() => {
    setHeroCount((count) => (count === 2 ? 0 : count + 1));
  }, 5000);

  return () => clearInterval(interval);
}, []);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <NavBar />

      <Hero
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
        setPlayStatus={setPlayStatus}
      />

    </div>
  );
};

export default App;