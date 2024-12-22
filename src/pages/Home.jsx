import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
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
        <div className="centered">
          <h3>Game RPG</h3>
        </div>
      </div>

      <div className="bottom">
        <div className="footer-buttons">
          <button>XXX</button>
          <button onClick={() => navigate("/character")}>Start</button>
          <button>XXX</button>
        </div>
      </div>
    </div>
  );
}
