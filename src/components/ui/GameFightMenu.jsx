import { useState } from "react";
import { useGameContext } from "../../context/GameContext";

import Modal from "./Modal";
import Button from "./Button";
import HitLog from "../fight/HitLog";

export default function GameFightMenu() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hitLog, setHitLog] = useState({});

  const {
    hero,
    enemy,
    setHero,
    setEnemy,
    setIsFighting,
    heroSelectedCards,
    setHeroSelectedCards,

    setEnemySelectedCards,
    handRanking,
    setHeroCards,
    setEnemyCards,
    enemyCards,
    heroCards,
  } = useGameContext();

  function getRandomCards(cardsArray) {
    // Verifica se o array possui elementos
    if (!Array.isArray(cardsArray) || cardsArray.length === 0) {
      return [];
    }

    // Gera um número aleatório entre 1 e o tamanho do array (ou 4, o que for menor)
    const maxCards = Math.min(4, cardsArray.length);
    const numberOfCards = Math.floor(Math.random() * maxCards) + 1;

    // Embaralha o array original
    const shuffledArray = cardsArray.sort(() => Math.random() - 0.5);

    // Retorna os primeiros "numberOfCards" elementos
    return shuffledArray.slice(0, numberOfCards);
  }

  function hasTrueValue(obj) {
    // Verifica se o argumento é um objeto
    if (typeof obj !== "object" || obj === null) {
      throw new Error("O argumento deve ser um objeto válido.");
    }

    // Itera sobre os valores do objeto e verifica se algum é true
    return Object.values(obj).some((value) => value === true);
  }

  const hit = () => {
    setHitLog({
      heroTotalValue: null,
      enemyTotalValue: null,
      handRanking: null,
    });
    setIsModalOpen(true);
    const _reduce = (acc, item) => acc + item.value;

    // copy hero object
    const heroCopy = { ...hero };
    // copy enemy object
    const enemyCopy = { ...enemy };

    const enemyRandomCards = getRandomCards(enemyCards);

    // sum all values
    let heroTotalValue = heroSelectedCards.reduce(_reduce, 0);
    let enemyTotalValue = enemyRandomCards.reduce(_reduce, 0);

    // check hand rank
    const hasTrue = hasTrueValue(handRanking);
    //
    //TODO: add hand rank for enemy selected cards
    //
    // multiply values by hand rank
    if (hasTrue) {
      heroTotalValue *= 2;
    }
    // remove total from enemy defense
    console.log("hero hp", heroCopy.hp, "hero def", heroCopy.def);
    console.log("enemy hp", enemyCopy.hp, "enemy def", enemyCopy.def);
    // if total is more than enemy total, remove the difference from hp

    if (heroTotalValue > enemyTotalValue) {
      if (enemyCopy.def > 0) enemyCopy.hp -= heroTotalValue - enemyTotalValue;
    } else {
      if (heroCopy.def > 0) heroCopy.hp -= enemyTotalValue - heroTotalValue;
    }

    heroCopy.def -= enemyTotalValue;
    enemyCopy.def -= heroTotalValue;

    console.log(" ");

    console.log("hero hp", heroCopy.hp, "hero def", heroCopy.def);
    console.log("enemy hp", enemyCopy.hp, "enemy def", enemyCopy.def);

    setHero(heroCopy);
    setEnemy(enemyCopy);

    // remove selected cards from original array
    setHeroCards(heroCards.filter((c) => !heroSelectedCards.includes(c)));
    setHeroSelectedCards([]);

    setEnemyCards(enemyCards.filter((c) => !enemyRandomCards.includes(c)));
    setEnemySelectedCards([]);

    setHitLog({
      heroTotalValue,
      enemyTotalValue,
      handRanking: hasTrueValue(handRanking) ? "true" : "false",
    });
  };

  const magic = () => {
    console.log("magic");
  };

  const run = () => {
    setIsFighting(false);
    //
    setHeroSelectedCards([]);
    setEnemySelectedCards([]);
    //
    setHeroCards([]);
    setEnemyCards([]);
  };

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <HitLog data={hitLog} />
      </Modal>
      <div className="footer-buttons gap-25">
        <Button primary onClick={hit} value="HIT" />
        <Button primary onClick={magic} value="MAGIC" />
        <Button primary onClick={run} value="RUN" />
      </div>
    </div>
  );
}
