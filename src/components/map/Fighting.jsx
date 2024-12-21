import { useGameContext } from "../../context/GameContext";
import CardFull from "../card/CardFull";
import Deck from "../card/Deck";

export default function Fighting() {
  const { hero, setIsFighting } = useGameContext();

  const run = () => {
    setIsFighting(false);
  };

  return (
    <div className="game-grid">
      <div className="flex flex-center">
        {hero ? <CardFull h={hero} /> : "No hero selected"}
      </div>
      <div className="deck-grid">
        <Deck />
        <div className="footer-buttons">
          <button>Hit</button>
          <button>Inventory</button>
          <button onClick={run}>Run</button>
        </div>
      </div>
      {/*  */}

      {/*  */}
      <div className="flex flex-center">
        {hero ? <CardFull h={hero} /> : "No hero selected"}
      </div>
      <div className="deck-grid">
        <Deck />
      </div>
    </div>
  );
}
