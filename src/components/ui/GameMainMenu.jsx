import { useGameContext } from "../../context/GameContext";
import { generateRandomNumber } from "../../helper";

export default function GameMainMenu() {
  const {
    hero,
    isFighting,
    isShopping,
    isTreasure,
    isInventory,
    isPlaying,
    setIsInventory,
    setIsShopping,
    setIsPlaying,
    setDice,
    setActualPlace,
    actualPlace,
  } = useGameContext();

  const openInventory = () => {
    setIsInventory(!isInventory);
    setIsShopping(false);
  };

  const openStore = () => {
    setIsShopping(!isShopping);
    setIsInventory(false);
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

  return (
    <div className="footer-buttons gap-25">
      <button
        className={isPlaying ? "active" : ""}
        onClick={play}
        disabled={
          !hero || isFighting || isShopping || isTreasure || isInventory
        }
      >
        Play
      </button>

      <button
        className={isInventory ? "active" : ""}
        disabled={isTreasure || !hero}
        onClick={openInventory}
      >
        Inventory
      </button>

      <button
        className={isShopping ? "active" : ""}
        disabled={isTreasure || isFighting || !hero}
        onClick={openStore}
      >
        Store
      </button>
    </div>
  );
}

GameMainMenu.propTypes = {};
