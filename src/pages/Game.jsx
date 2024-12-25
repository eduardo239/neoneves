import { useEffect } from "react";
import { useGameContext } from "../context/GameContext";

import { typeDB } from "../db/Type";
import { bossDB } from "../db/Boss";

import StatusBar from "../components/map/StatusBar";

import background from "../assets/bg/bg345.jpg";
// import TopMenu from "../components/ui/TopMenu";
import GameMain from "../components/ui/GameMain";
import GameMainMenu from "../components/ui/GameMainMenu";
import Message from "../components/ui/Message";

export default function Game() {
  const {
    setMessage,
    map,
    hero,
    enemy,
    setMap,
    actualPlace,
    setIsFighting,
    setIsShopping,
    setIsTreasure,
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

  const checkPlace = (place) => {
    switch (place) {
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
        break;
    }
  };

  useEffect(() => {
    if (map && map.length > 0) checkPlace(map[actualPlace].name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actualPlace, map]);

  return (
    <div
      className="container background"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Message />
      <div className="top">
        {/* <TopMenu /> */}

        {hero && <StatusBar character={hero} />}
      </div>

      <div className="middle">
        <GameMain />
      </div>

      <div className="bottom">
        {enemy && <StatusBar character={enemy} />}
        <GameMainMenu />
      </div>
    </div>
  );
}
