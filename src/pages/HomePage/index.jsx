import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./home.css";
import { ButtonHoverUp } from "../../components";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const colors = useSelector((state) => state.colors.value);
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
      <div
        className="color-box"
        style={{ backgroundColor: boxColor }}
        onClick={() => navigate(`/colors/${colorName}`)}
      ></div>
      <div className="buttons-container">
        <ButtonHoverUp text="List of Colors" link="/colors" />
        <ButtonHoverUp text="Create New Color" link="/colors/new" />
      </div>
    </div>
  );
};

export default Home;
