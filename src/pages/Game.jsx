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
import StatusBar from "../components/map/StatusBar";
import Inventory from "../components/map/Inventory";
import ButtonGame from "../components/ui/ButtonGame";

export default function Game() {
  const {
    message,
    setMessage,
    map,
    setMap,

    setDice,
    isFighting,
    setActualPlace,
    actualPlace,
    setIsFighting,
    isShopping,
    setIsShopping,
    isTreasure,
    setIsTreasure,
    isInventory,
    setIsInventory,

    setIsPlaying,
  } = useGameContext();

  useEffect(() => {
    generateRandomMap(31);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const generateRandomMap = (mapSize = 20) => {
    const placeList = [];

    for (let i = 0; i < mapSize; i++) {
      let _placeType = typeDB[Math.floor(Math.random() * typeDB.length)];
      placeList.push(_placeType);
    }
    placeList.unshift(typeDB[0]);
    placeList.push(bossDB[0]);
    setMap(placeList);
  };

  const play = () => {
    setIsPlaying(true);
    const randomDice = generateRandomNumber(1, 6);
    setDice(randomDice);
    setActualPlace(actualPlace + randomDice);
    setTimeout(() => {
      setIsPlaying(false);
    }, 1000);
  };

  const checkPlace = (place) => {
    switch (place) {
      case "empty":
        setMessage("");
        break;
      //
      case "treasure":
        setIsShopping(false);
        setIsFighting(false);
        //
        setMessage("You found a treasure");
        setTimeout(() => {
          setIsTreasure(true);
        }, 1000);
        break;
      //
      case "enemy":
        setIsShopping(false);
        setIsTreasure(false);
        //
        setMessage("You are fighting");
        setTimeout(() => {
          setIsFighting(true);
        }, 1000);
        break;
      //
      case "boss":
        console.info("boss");
        break;
      default:
        console.info("default");
        break;
    }
  };

  useEffect(() => {
    if (map && map.length > 0) checkPlace(map[actualPlace].name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actualPlace, map]);

  const openInventory = () => {
    setIsInventory(!isInventory);
    setIsShopping(false);
  };

  const openStore = () => {
    setIsShopping(!isShopping);
    setIsInventory(false);
  };

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
        ) : isInventory ? (
          <Inventory />
        ) : (
          <Map />
        )}
      </div>

      <div className="bottom">
        <StatusBar />

        <div className="footer-buttons gap-25">
          <ButtonGame onClick={play} type="play" />
          <ButtonGame onClick={openInventory} type="inventory" />
          <ButtonGame onClick={openStore} type="store" />
        </div>
      </div>
    </div>
  );
}
