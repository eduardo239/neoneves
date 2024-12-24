import { useNavigate } from "react-router-dom";
import TopMenu from "../components/ui/TopMenu";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="top">
        <TopMenu />
      </div>

      <div className="middle">
        <div className="centered">
          <h3>Game RPG</h3>
        </div>
      </div>

      <div className="bottom">
        <div className="footer-buttons">
          <button onClick={() => navigate("/character")}>Start</button>
        </div>
      </div>
    </div>
  );
}
