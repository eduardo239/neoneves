import PropTypes from "prop-types";

import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const navigate = useNavigate();

  const [hero, setHero] = useState(null);
  const [enemy, setEnemy] = useState(null);
  // inventory
  const [inventory, setInventory] = useState([]);
  // cards
  const [enemyCards, setEnemyCards] = useState([]);
  const [heroCards, setHeroCards] = useState([]);
  // selected cards
  const [heroSelectedCards, setHeroSelectedCards] = useState([]);
  const [enemySelectedCards, setEnemySelectedCards] = useState([]);
  const [handRanking, setHandRanking] = useState(null);
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

  const resetGame = () => {
    setHero(null);
    setEnemy(null);
    setInventory([]);
    setEnemyCards([]);
    setHeroCards([]);
    setHeroSelectedCards([]);
    setEnemySelectedCards([]);
    setHandRanking(null);
    setTurn(0);
    setFightQueue([]);
    setIsFighting(false);
    setIsShopping(false);
    setIsTreasure(false);
    setIsInventory(false);
    setIsPlaying(false);
    setMap([]);
    setActualPlace(0);
    setDice(0);

    navigate("/character");
  };

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
        handRanking,
        setHandRanking,

        resetGame,
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
