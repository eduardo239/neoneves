import { Link } from "react-router-dom";
import { heroesDB } from "../db/Hero.js";

import CardSimple from "../components/card/CardSimple.jsx";

export default function Characters() {
  const loopForHeroes = () => {
    return heroesDB.map((h) => {
      return (
        <div key={h.id}>
          <CardSimple h={h} />
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
        <div className="flex flex-center h-100">{loopForHeroes()}</div>
      </div>

      <div className="bottom">
        <div className="footer-buttons">
          <button>Back</button>
          <button>Start</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
}
