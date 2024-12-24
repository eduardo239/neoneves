import { useGameContext } from "../../context/GameContext";

import Map from "../map/Map";
import Store from "../map/Store";
import Treasure from "../map/Treasure";
import Fighting from "../map/Fighting";
import Inventory from "../map/Inventory";

export default function GameMain() {
  const { isFighting, isShopping, isTreasure, isInventory } = useGameContext();

  return (
    <>
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
    </>
  );
}

GameMain.propTypes = {};
