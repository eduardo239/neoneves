import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Game from "./pages/Game";
// import { useEffect, useState } from "react";
//
// import Card from "./components/Card";
// import CardSimple from "./components/CardFront";

//
// import card1 from "./assets/Leonardo_Anime_XL_A_fierce_warrior_princess_with_flowing_silve_1.jpg";

//
// import { dbCards } from "./db/Cards";
// import {
//   checkPlace,
//   generateMap,
//   getRandomCards,
//   getTreasure,
//   rollDice,
//   selectRandomItemsFromList,
// } from "./helper";
//
// import CardPack from "./components/CardPack";
// import Map from "./components/Map";
// import MenuFight from "./components/MenuFight";
// import FightLog from "./components/FightLog";
// import { useGameContext } from "./context/GameContext";

// const _enemy = [
//   { name: "enemy small", hp: 15, mp: 15, atk: 3, def: 2, special: 0 },
//   { name: "enemy big", hp: 25, mp: 30, atk: 3, def: 4, special: 0 },
// ];

const App = () => {
  // const {
  //   hero,
  //   setHero,
  //   enemy,
  //   setEnemy,
  //   enemyCards,
  //   setEnemyCards,
  //   heroCards,
  //   setHeroCards,
  //   turn,
  //   setTurn,
  //   fightQueue,
  //   setFightQueue,
  //   isFighting,
  //   setIsFighting,
  //   isHeroFighting,
  //   setIsHeroFighting,
  //   heroSelectedCards,
  //   setHeroSelectedCards,
  //   enemySelectedCards,
  //   setEnemySelectedCards,
  //   message,
  //   setMessage,
  // } = useGameContext();
  /**
   *
   *
   *
   */
  // MAP
  // const [actualPlace, setActualPlace] = useState(0);
  // const [map, setMap] = useState([]);
  /**
   *
   *
   *
   *
   *
   *
   *
   */
  // const mapSize = 21;
  // const [dice, setDice] = useState(0);
  // const [inventory, setInventory] = useState([]);

  // useEffect(() => {
  // fight
  // if (isFighting) {
  //   setMessage(`Turn: ${turn}`);
  //   // check if hero or enemy has hp
  //   if (hero[0].hp <= 0) {
  //     setMessage("You lose");
  //     setIsFighting(false);
  //     return;
  //   }
  //   if (enemy[0].hp <= 0) {
  //     setMessage("You win");
  //     setIsFighting(false);
  //     return;
  //   }
  //   //
  //   setIsHeroFighting(true);
  //   const randomCards = selectRandomItemsFromList(enemyCards);
  //   setEnemySelectedCards(randomCards);
  //   //
  //   console.log(hero, enemy);
  //   //
  // }

  // }, [isFighting, fightQueue, turn]);

  // const physicalAttack = () => {
  // sum all values from cards
  // let _heroAtk = 0;
  // let _enemyAtk = 0;

  // heroSelectedCards.forEach((card) => {
  //   _heroAtk += card.value;
  // });

  // enemySelectedCards.forEach((card) => {
  //   _enemyAtk += card.value;
  // });

  // hero[0].attack(_heroAtk, enemy[0]);
  // enemy[0].attack(_enemyAtk, hero[0]);

  // remove used cards from hero and enemy
  //   const _filterHero = heroCards.filter(
  //     (card) => !heroSelectedCards.includes(card)
  //   );
  //   const _filterEnemy = enemyCards.filter(
  //     (card) => !enemySelectedCards.includes(card)
  //   );

  //   setHeroCards(_filterHero);
  //   setEnemyCards(_filterEnemy);

  //   updateTurn();
  // };

  // const updateTurn = () => {
  //   setTurn(turn + 1);
  // };

  // useEffect(() => {
  //   generateMap(mapSize, setMap);
  // }, []);

  // useEffect(() => {
  //   if (actualPlace > 0)
  //     checkPlace(
  //       map,
  //       actualPlace,
  //       hero[0],
  //       setEnemy,
  //       setEnemyCards,
  //       setHeroCards,
  //       setIsFighting,
  //       setFightQueue
  //     );

  // }, [actualPlace]);

  // const resetGame = () => {
  //   setDice(1);
  //   setActualPlace(0);
  //   generateMap(mapSize, setMap);
  //   // setHero([dbHeroes[0]]);
  //   setInventory([]);
  //   setHeroCards([]);
  //   setEnemyCards([]);
  //   setHeroSelectedCards([]);
  //   setEnemySelectedCards([]);
  //   setFightQueue([]);
  //   setMessage("");
  // };

  return (
    <main>
      {/* <h5>Actual Place: {actualPlace}</h5>
      <Map actualMap={map} actualPlace={actualPlace} />
      <div className="grid-2">
        <Card character={hero[0]} />
        <CardPack
          cards={heroCards}
          front={true}
          heroSelectedCards={heroSelectedCards}
          setHeroSelectedCards={setHeroSelectedCards}
        />
      </div>

      <br />
      <br />
      <FightLog turn={turn} fightQueue={fightQueue} />
      <MenuFight
        physicalAttack={physicalAttack}
        next={updateTurn}
        isHeroFighting={isHeroFighting}
      />
      <p>{message}</p>

      <br />
      <br />

      <div className="grid-2">
        <Card character={enemy[0]} />
        <CardPack
          cards={enemyCards}
          front={false}
          enemySelectedCards={enemySelectedCards}
        />
      </div>
      <div className="flex-center">
        <div className="flex">
          <button
            onClick={() => rollDice(setDice, setActualPlace, actualPlace, map)}
          >
            Play
          </button>
          <button>Store</button>
          <button onClick={resetGame}>Reset</button>
        </div>
      </div>
      <hr />
      <div>
        <h3>Inventário</h3>
        <CardPack cards={heroCards} use={true} />
      </div>
      <h3>All Cards</h3>
      <div className="flex-center flex">
        {dbCards.map((card, index) => {
          return <CardSimple key={index} card={card} />;
        })}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> */}
      {/* start
      <h1>Neonves</h1>
      <button>Start</button>
      <hr />

    
      <h2>Characters</h2>
      <div className="flex">
        <Card cardSrc={card1} />
        <Card cardSrc={card2} />
        <Card cardSrc={card3} />
      </div>
      <button>Start Game</button>
      <hr />
     

      <div className="store">
        <h2>Store</h2>
        <div className="flex">
          <CardBuy cardSrc={card4} />
          <CardBuy cardSrc={card4} />
          <CardBuy cardSrc={card4} />
        </div>
      </div>

      <button>close</button>
      <hr />

      <div className="dice-container">
        <div className="dice">
          <p className="dot">{dice}</p>
        </div>
      </div>

      <hr />

      <h5>Actual Place: {actualPlace}</h5>
      <div className="">
        {map.map((place, index) => {
          return (
            <Place
              index={index}
              key={index}
              actualPlace={actualPlace}
              type={place.name}
            />
          );
        })}
      </div>
      <hr />
       */}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/character" element={<Characters />} />
        <Route exact path="/game" element={<Game />} />
      </Routes>
    </main>
  );
};

export default App;
