import PropTypes from "prop-types";
import { useGameContext } from "../../context/GameContext";

export default function ButtonGame({ onClick, type }) {
  const {
    hero,
    dice,
    isFighting,
    actualPlace,
    isShopping,
    isTreasure,
    isInventory,
    isPlaying,
    setIsInventory,
    setIsShopping,
  } = useGameContext();

  if (type === "play")
    return (
      <button
        className={isPlaying ? "active" : ""}
        onClick={onClick}
        disabled={
          !hero || isFighting || isShopping || isTreasure || isInventory
        }
      >
        Play dice={dice} # actual={actualPlace}
      </button>
    );
  if (type === "inventory")
    return (
      <button
        className={isInventory ? "active" : ""}
        disabled={isTreasure || !hero}
        onClick={() => {
          setIsInventory(!isInventory);
          setIsShopping(false);
        }}
      >
        Inventory
      </button>
    );

  if (type === "store")
    return (
      <button
        className={isShopping ? "active" : ""}
        disabled={isTreasure || isFighting || !hero}
        onClick={() => {
          setIsShopping(!isShopping);
          setIsInventory(false);
        }}
      >
        Store
      </button>
    );
  else return null;
}

ButtonGame.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
};
