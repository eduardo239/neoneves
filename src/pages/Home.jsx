import { Link } from "react-router-dom";

export default function Home() {
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
        <div className="flex flex-center h-100">
          <h3>Game RPG</h3>
        </div>
      </div>

      <div className="bottom">
        <div className="footer-buttons">
          <button>test</button>
          <button>Start</button>
          <button>test</button>
        </div>
      </div>
    </div>
  );
}
