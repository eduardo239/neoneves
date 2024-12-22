import { useEffect, useState } from "react";
import { useGameContext } from "../../context/GameContext";
import { getRandomUniqueCards } from "../../helper";

import CardFull from "../card/CardFull";
import Deck from "../card/Deck";
import Inventory from "./Inventory";

export default function Fighting() {
  const { hero, isFighting, setIsFighting, isInventory, setIsInventory } =
    useGameContext();

  const [heroCards, setHeroCards] = useState([]);
  const [enemyCards, setEnemyCards] = useState([]);

  const run = () => {
    setIsFighting(false);
  };

  useEffect(() => {
    if (isFighting) {
      const randomCards = getRandomUniqueCards(14);
      const heroCards = randomCards.slice(0, 7);
      const enemyCards = randomCards.slice(7, 14);

      setHeroCards(heroCards);
      setEnemyCards(enemyCards);
    }
  }, [isFighting]);

  return (
    <div className="game-grid">
      <div className="flex flex-center">
        {hero ? <CardFull h={hero} /> : "No hero selected"}
      </div>
      <div className="deck-grid">
        <Deck cards={heroCards} />
        <div className="footer-buttons gap-25">
          <button>Hit</button>
          <button
            className={isInventory ? "active" : ""}
            onClick={() => {
              setIsInventory(!isInventory);
            }}
          >
            Inventory
          </button>
          <button onClick={run}>Run</button>
        </div>
      </div>
      {/* HERO */}

      {/* ENEMY */}

      <>
        <div className="flex flex-center">
          {hero ? <CardFull h={hero} /> : "No hero selected"}
        </div>
        <div className="deck-grid">
          {isInventory ? <Inventory /> : <Deck cards={enemyCards} />}
        </div>
      </>
    </div>
  );
}
