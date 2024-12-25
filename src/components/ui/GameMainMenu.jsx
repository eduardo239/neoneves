import { useNavigate } from "react-router-dom";
import { useGameContext } from "../../context/GameContext";
import { generateRandomNumber } from "../../helper";
import Button from "./Button";

export default function GameMainMenu() {
  const navigate = useNavigate();

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
    resetGame,
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

  const disablePlayButton =
    !hero || isFighting || isShopping || isTreasure || isInventory || isPlaying;
  const disableInventoryButton = isTreasure || isShopping || !hero;
  const disableStoreButton = isTreasure || isFighting || isInventory || !hero;

  return (
    <div className="footer-buttons gap-25">
      <Button
        primary
        onClick={play}
        value="Play"
        disabled={disablePlayButton}
      />

      <Button
        primary
        onClick={openInventory}
        value="Inventory"
        disabled={disableInventoryButton}
      />

      <Button
        primary
        onClick={openStore}
        value="Store"
        disabled={disableStoreButton}
      />
      <div> </div>

      <Button primary onClick={() => navigate("/")} value="Home" />
      <Button primary onClick={() => resetGame()} value="Reset" />
    </div>
  );
}

GameMainMenu.propTypes = {};
