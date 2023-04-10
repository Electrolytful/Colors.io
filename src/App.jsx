import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout, Home, Color, Colors, NewColor, Error } from "./pages";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="colors">
            <Route index element={<Colors />} />
            <Route path=":name" element={<Color />} />
            <Route path="new" element={<NewColor />} />
          </Route>
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
