import { useNavigate } from "react-router-dom";
import { useGameContext } from "../../context/GameContext";

export default function TopMenu() {
  const navigate = useNavigate();

  const { resetGame } = useGameContext();

  return (
    <nav>
      <button onClick={() => navigate("/")}>HOME</button>
      <button onClick={() => navigate("/character")}>CHARACTER</button>
      <button onClick={() => resetGame()}>Reset</button>
    </nav>
  );
}
