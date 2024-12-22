import { Link, useNavigate } from "react-router-dom";
import { heroesDB } from "../db/Hero.js";
import { v4 as uuidv4 } from "uuid";

import CardSimple from "../components/card/CardSimple.jsx";
import StatusBar from "../components/map/StatusBar.jsx";

export default function Characters() {
  const navigate = useNavigate();

  const loopForHeroes = () => {
    return heroesDB.map((h) => {
      const heroCopy = { ...h, id: uuidv4() };
      return (
        <div key={heroCopy.id}>
          <CardSimple item={heroCopy} mode="hero" />
        </div>
      );
    });
  };

  return (
    <div className="container">
      <div className="top">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/character">Character</Link>
          <Link to="/game">Game</Link>
        </nav>
      </div>

      <div className="middle">
        <div className="h-100 flex-center-center flex-column">
          <h2>Heroes</h2>
          <div className="flex gap-25">{loopForHeroes()}</div>
        </div>
      </div>

      <div className="bottom">
        <StatusBar />
        <div className="footer-buttons">
          <button onClick={() => navigate("/")}>Back</button>
          <button>XXX</button>
          <button onClick={() => navigate("/game")}>Next</button>
        </div>
      </div>
    </div>
  );
}
