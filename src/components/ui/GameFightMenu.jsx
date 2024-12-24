import { useGameContext } from "../../context/GameContext";

export default function GameFightMenu() {
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
      throw new Error("O array deve conter ao menos um elemento.");
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
    const _reduce = (acc, card) => acc + card.value;

    // copy hero object
    const heroCopy = { ...hero };
    // copy enemy object
    const enemyCopy = { ...enemy };

    const enemyRandomCards = getRandomCards(enemyCards);

    // sum all values
    let heroTotalValue = heroSelectedCards.reduce(_reduce, 0);
    let enemyTotalValue = enemyRandomCards.reduce(_reduce, 0);

    console.log("hero total ", heroTotalValue);
    console.log("enemy total", enemyTotalValue);
    // check hand rank

    const hasTrue = hasTrueValue(handRanking);
    console.log("handranking ", hasTrue);
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
    <div className="footer-buttons gap-25">
      <div className="footer-buttons gap-25">
        <button onClick={hit}>HIT</button>
        <button onClick={magic}>MAGIC</button>
        <button onClick={run}>RUN</button>
      </div>
    </div>
  );
}
