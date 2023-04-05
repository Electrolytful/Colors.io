import { useEffect, useState } from "react";
import "./home.css";

const Home = ({ colors }) => {
    const [boxColor, setBoxColor] = useState("");

  const setRandomColor = () => {
    let color = colors[Math.floor(Math.random() * colors.length)];
    setBoxColor(color.hex);
  };

  useEffect(() => {
    setInterval(setRandomColor, 1000);
  }, [])

  return (
    <div className="home-container">
      <h1 className="welcome">Welcome to Colors.io!</h1>
      <div
        className="color-box"
        style={{backgroundColor: boxColor}}
      ></div>
    </div>
  );
};

export default Home;
