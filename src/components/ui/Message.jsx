import { useGameContext } from "../../context/GameContext";

export default function Message() {
  const { message } = useGameContext();

  if (message)
    return (
      <div className="message">
        <p>{message}</p>
      </div>
    );
  else return null;
}
