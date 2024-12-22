import PropTypes from "prop-types";

import { useGameContext } from "../../context/GameContext";
import { v4 as uuidv4 } from "uuid";

export default function CardSimple({ item, mode }) {
  const { hero, setHero, inventory, setInventory, setIsTreasure, setMessage } =
    useGameContext();

  const handleSelectHero = (card) => {
    if (mode === "hero") {
      //
      const _hero = { gold: 100, exp: 0, nextLevel: 100, level: 1, ...card };
      const itemCopy = { ..._hero, id: uuidv4() };
      setHero(itemCopy);
    } else if (mode === "item") {
      //
      setInventory([...inventory, card]);
      setIsTreasure(false);
    } else return;
  };

  const handleUse = () => {
    const _inventory = inventory.filter((i) => i.id !== item.id);
    setInventory(_inventory);

    switch (item.type) {
      case "cure":
        setHero({ ...hero, hp: hero.hp + item.value });
        setMessage("Cure used, added " + item.value + " HP");
        break;
      case "mana":
        setHero({ ...hero, mp: hero.mp + item.value });
        setMessage("Mana used, added " + item.value + " MP");
        break;
      default:
        setMessage("Item not found");
        break;
    }
  };

  const handleBuy = () => {
    const itemPrice = item.price;
    const heroGold = hero.gold;

    if (heroGold >= itemPrice) {
      const itemCopy = { ...item, id: uuidv4() };

      setHero({ ...hero, gold: heroGold - itemPrice });
      setInventory([...inventory, itemCopy]);
      setMessage("Item bought");
    } else {
      setMessage("Not enough gold !");
    }
  };

  const handleGetitem = (card) => {
    const itemCopy = { ...card, id: uuidv4() };
    setInventory([...inventory, itemCopy]);
    setIsTreasure(false);
  };

  return (
    <div className="card-simple-container">
      <div
        className={`card ${
          hero && mode === "hero" && hero.id === item.id ? "selected" : ""
        }`}
      >
        <img src={item.src} alt={item.name} />
        <div className="center">
          <p>{item.name}</p>
          {(mode === "use" || mode === "get" || mode === "buy") && (
            <p className={`${item.type === "cure" ? "secondary" : "primary"}`}>
              {item.type}
            </p>
          )}
        </div>

        {mode === "hero" && (
          <div className="card-footer">
            <button onClick={() => handleSelectHero(item)}>Select</button>
          </div>
        )}
        {mode === "use" && (
          <div className="card-footer">
            <button onClick={handleUse}>Use</button>
          </div>
        )}
        {mode === "buy" && (
          <div className="card-footer">
            <h4 className="text-center secondary">${item.price}</h4>

            <button onClick={handleBuy}>Buy</button>
          </div>
        )}

        {mode === "get" && (
          <div className="card-footer">
            <button onClick={() => handleGetitem(item)}>Get</button>
          </div>
        )}
      </div>
    </div>
  );
}

CardSimple.propTypes = {
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  mode: PropTypes.string,
  type: PropTypes.string,
};
