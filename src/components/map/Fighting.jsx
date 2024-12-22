import { useEffect, useState } from "react";
import { useGameContext } from "../../context/GameContext";
import { getRandomUniqueCards } from "../../helper";
import { sortingCards } from "../card/calculate";

import CardFull from "../card/CardFull";
import Deck from "../card/Deck";
import Inventory from "./Inventory";
import ButtonFight from "../ui/ButtonFight";

export default function Fighting() {
  const { hero, isFighting, setIsFighting, isInventory } = useGameContext();

  const [heroCards, setHeroCards] = useState([]);
  const [enemyCards, setEnemyCards] = useState([]);

  const run = () => {
    setIsFighting(false);
  };

  const hit = () => {
    console.log("hit");
  };

  const magic = () => {
    console.log("magic");
  };

  useEffect(() => {
    if (isFighting) {
      const totalCards = 14; // have to be even
      const randomCards = getRandomUniqueCards(totalCards);
      const heroCards = randomCards.slice(0, totalCards / 2);
      const enemyCards = randomCards.slice(totalCards / 2, totalCards);

      const oc = sortingCards(heroCards);
      console.log(oc);
      setHeroCards(sortingCards(heroCards));
      setEnemyCards(sortingCards(enemyCards));
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
          <ButtonFight onClick={hit} type="hit" />
          <ButtonFight onClick={magic} type="magic" />
          <ButtonFight onClick={run} type="run" />
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
