import { useEffect } from "react";
import { useGameContext } from "../../context/GameContext";
import { getRandomEnemy, getRandomUniqueCards } from "../../helper";
import { sortingCards } from "../card/calculate";

import CardFull from "../card/CardFull";
import Deck from "../card/Deck";
import Inventory from "./Inventory";
import GameFightMenu from "../ui/GameFightMenu";

export default function Fighting() {
  const {
    hero,
    isFighting,
    isInventory,
    enemy,
    setEnemy,
    enemyCards,
    setEnemyCards,
    heroCards,
    setHeroCards,
  } = useGameContext();

  useEffect(() => {
    if (isFighting) {
      const _enemy = getRandomEnemy();
      setEnemy(_enemy);
      //
      const totalCards = 14; // have to be even
      const randomCards = getRandomUniqueCards(totalCards);
      const heroCards = randomCards.slice(0, totalCards / 2);
      const enemyCards = randomCards.slice(totalCards / 2, totalCards);

      setHeroCards(sortingCards(heroCards));
      setEnemyCards(sortingCards(enemyCards));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFighting]);

  return (
    <div className="game-grid">
      <div className="flex flex-center">
        <div className="character-grid">
          <div className="flex-1">
            {hero ? <CardFull character={hero} /> : "No hero selected"}
          </div>
          {hero && (
            <div className="flex gap-25 flex-column">
              <code>LVL: {hero.level}</code>
              <code>EXP: {hero.exp}</code>
              <code>NXT: {hero.nextLevel}</code>
            </div>
          )}
        </div>
      </div>
      <div className="deck-grid">
        <Deck cards={heroCards} isFront={true} />
        <GameFightMenu />
      </div>
      {/* HERO */}

      {/* ENEMY */}
      <>
        <div className="flex flex-center">
          <div className="character-grid">
            {enemy ? <CardFull character={enemy} /> : "No enemy selected"}
          </div>
        </div>
        <div className="deck-grid">
          {isInventory ? (
            <Inventory />
          ) : (
            <Deck cards={enemyCards} isFront={false} />
          )}
        </div>
      </>
    </div>
  );
}
