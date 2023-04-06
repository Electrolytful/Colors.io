import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { useColors } from "../../contexts";
import { ButtonHoverUp } from "../../components";

const Home = () => {
  const { colors } = useColors();
  const [colorName, setColorName] = useState("");
  const [boxColor, setBoxColor] = useState("");

  const setRandomColor = () => {
    let color = colors[Math.floor(Math.random() * colors.length)];
    setColorName(color.name);
    setBoxColor(color.hex);
  };

  useEffect(() => {
    setInterval(setRandomColor, 1000);
  }, []);

  return (
    <div className="home-container">
      <h1 className="welcome">Welcome to Colors.io!</h1>
      <Link to={`/colors/${colorName}`}>
        <div className="color-box" style={{ backgroundColor: boxColor }}></div>
      </Link>
      <div className="buttons-container">
        <ButtonHoverUp text="List of Colors" link="/colors"/>
        <ButtonHoverUp text="Create New Color" link="/colors/new"/>
      </div>
    </div>
  );
};

export default Home;
