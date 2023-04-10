import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@mui/material";
import "./colors.css";

const Colors = () => {
  const colors = useSelector((state) => state.colors.value);
  const navigate = useNavigate();
  const [colorList, setColorList] = useState(colors);

  const handleSearch = (input) => {
    if (!input) {
      setColorList(colors);
    } else {
      const newColorsList = colors.filter(
        (color) => color.name.toLowerCase() === input.toLowerCase()
      );
      if (!newColorsList) {
        setColorList([]);
      } else {
        setColorList(newColorsList);
      }
    }
  };

  return (
    <div className="colorsPage">
      <div className="searchContainer">
        <Input
          fullWidth
          placeholder="Search color"
          sx={{ color: "#F1F1F1" }}
          onChange={(event) => handleSearch(event.target.value)}
        />
      </div>

      {/* add a filter function here */}

      <div className="colorsListContainer">
        <ul className="colorsList">
          {colorList.map((color, i) => (
            <li className="color" key={i}>
              <div
                className="colorBox"
                style={{
                  backgroundColor: color.hex,
                  width: "250px",
                  height: "250px",
                }}
                onClick={() => navigate(`/colors/${color.name}`)}
              ></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Colors;
