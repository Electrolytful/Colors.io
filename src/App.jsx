import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout, Home, Color, Colors, NewColor, Error } from "./pages";
import { ColorsProvider } from "./contexts";

const App = () => {
  return (
    <div className="App">
      <ColorsProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home  />} />
            <Route path="colors">
              <Route index element={<Colors />} />
              <Route path=":name" element={<Color />} />
              <Route path="new" element={<NewColor />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </ColorsProvider>
    </div>
  );
};

export default App;
