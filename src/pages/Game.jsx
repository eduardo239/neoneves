import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useGameContext } from "../context/GameContext";

import { typeDB } from "../db/Type";
import { bossDB } from "../db/Boss";

import { generateRandomNumber } from "../helper";

import Fighting from "../components/map/Fighting";
import Map from "../components/map/Map";
import Store from "../components/map/Store";
import Treasure from "../components/map/Treasure";

export default function Game() {
  const {
    message,
    setMessage,
    map,
    setMap,
    dice,
    setDice,
    isFighting,
    setActualPlace,
    actualPlace,
    setIsFighting,
    isShopping,
    setIsShopping,
    isTreasure,
    setIsTreasure,
  } = useGameContext();

  useEffect(() => {
    generateRandomMap(41);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const generateRandomMap = (mapSize = 20) => {
    const _map = [];
    for (let i = 0; i < mapSize; i++) {
      let _placeType = typeDB[Math.floor(Math.random() * typeDB.length)];
      _map.push(_placeType);
    }
    _map.unshift(typeDB[0]);
    _map.push(bossDB[0]);
    setMap(_map);
  };

  const play = () => {
    const randomDice = generateRandomNumber(1, 6);
    setDice(randomDice);
    setActualPlace(actualPlace + randomDice);
  };

  const checkPlace = (place) => {
    switch (place) {
      case "empty":
        console.log("empty");
        break;
      case "shop":
        console.log("shop");
        break;
      case "treasure":
        console.log("treasure");

        setMessage("You found a treasure");
        setTimeout(() => {
          setIsTreasure(true);
        }, 1000);
        break;
      case "enemy":
        console.log("enemy");

        setMessage("You are fighting");
        setTimeout(() => {
          setIsFighting(true);
        }, 1000);

        break;
      case "boss":
        console.log("boss");
        break;
      default:
        console.log("default");
        break;
    }
  };

  useEffect(() => {
    if (map && map.length > 0) checkPlace(map[actualPlace].name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actualPlace, map]);

  return (
    <div className="container">
      {message && (
        <div className="message">
          <p>{message}</p>
        </div>
      )}
      <div className="top">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/character">Character</Link>
          <Link to="/game">Game</Link>
        </nav>
      </div>

      <div className="middle">
        {isFighting ? (
          <Fighting />
        ) : isShopping ? (
          <Store />
        ) : isTreasure ? (
          <Treasure />
        ) : (
          <Map />
        )}
      </div>

      <div className="bottom">
        <div className="footer-buttons">
          <button onClick={play} disabled={isFighting}>
            Play dice={dice} # actual={actualPlace}
          </button>
          <button
            onClick={() => setIsShopping(!isShopping)}
            disabled={isFighting}
          >
            Store
          </button>
          <button>Exit</button>
        </div>
      </div>
    </div>
  );
}
