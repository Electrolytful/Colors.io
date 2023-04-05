import './App.css';
import { Route, Routes } from "react-router-dom";
import { Layout, Home, Color, Colors, NewColor, Error } from "./pages";
import { useEffect, useState } from 'react';

const App = () => {
  const [colors, setColors] = useState([{name: "red", hex: "#FF0000"}, {name: "yellow", hex: "#FFFF00"}, {name: "blue", hex: "#004FFF"}, {name: "green", hex: "#69FF00"}, {name: "pink", hex: "#FF00E1"}, {name: "purple", hex: "#9200FF"}]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home colors={colors} />} />
          <Route path="colors">
            <Route index element={<Colors />} />
            <Route path=":name" element={<Color />} />
            <Route path="new" element={<NewColor />}/>
          </Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App
