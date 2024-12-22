import PropTypes from "prop-types";

import { createContext, useState, useContext, useEffect } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [hero, setHero] = useState(null);
  const [enemy, setEnemy] = useState([]);
  // inventory
  const [inventory, setInventory] = useState([]);
  // cards
  const [enemyCards, setEnemyCards] = useState([]);
  const [heroCards, setHeroCards] = useState([]);
  // selected cards
  const [heroSelectedCards, setHeroSelectedCards] = useState([]);
  const [enemySelectedCards, setEnemySelectedCards] = useState([]);
  // queue turn
  const [turn, setTurn] = useState(0);
  const [fightQueue, setFightQueue] = useState([]);
  // bool
  const [isFighting, setIsFighting] = useState(false);
  const [isShopping, setIsShopping] = useState(false);
  const [isTreasure, setIsTreasure] = useState(false);
  const [isInventory, setIsInventory] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  // map
  const [map, setMap] = useState([]);
  const [actualPlace, setActualPlace] = useState(0);
  const [dice, setDice] = useState(0);

  // information
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage("");
      }, 1000);
    }
  }, [message]);

  return (
    <GameContext.Provider
      value={{
        hero,
        setHero,
        enemy,
        setEnemy,
        enemyCards,
        setEnemyCards,
        heroCards,
        setHeroCards,
        turn,
        setTurn,
        fightQueue,
        setFightQueue,
        isFighting,
        setIsFighting,
        isShopping,
        setIsShopping,
        heroSelectedCards,
        setHeroSelectedCards,
        enemySelectedCards,
        setEnemySelectedCards,
        message,
        setMessage,
        map,
        setMap,
        actualPlace,
        setActualPlace,
        dice,
        setDice,
        isTreasure,
        setIsTreasure,
        inventory,
        setInventory,
        isInventory,
        setIsInventory,
        isPlaying,
        setIsPlaying,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGameContext = () => {
  return useContext(GameContext);
};

GameProvider.propTypes = {
  children: PropTypes.any,
};
