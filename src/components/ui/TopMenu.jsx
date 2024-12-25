import { useNavigate } from "react-router-dom";
import { useGameContext } from "../../context/GameContext";
import Button from "./Button";

export default function TopMenu() {
  const navigate = useNavigate();

  const { resetGame } = useGameContext();

  return (
    <nav>
      <Button primary onClick={() => navigate("/")} value="Home" />

      <Button
        primary
        onClick={() => navigate("/character")}
        value="Character"
      />
      <Button primary onClick={() => resetGame()} value="Reset" />
    </nav>
  );
}
