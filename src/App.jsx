import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Game from "./pages/Game";

const App = () => {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/character" element={<Characters />} />
        <Route exact path="/game" element={<Game />} />
      </Routes>
    </main>
  );
};

export default App;
