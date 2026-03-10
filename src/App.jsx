import React, { useState } from "react";
import Background from "./components/Background/Background";
import NavBar from "./components/Navbar/NavBar";

const App = () => {

  const heroData = [
    { text1: "Drive Your Dream", text2: "Find the perfect car today" },
    { text1: "Power Meets Style", text2: "Explore the world of automobiles" },
    { text1: "Start Your Journey", text2: "The road begins with the right car" }
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <NavBar/>
    </div>
  );
};

export default App;