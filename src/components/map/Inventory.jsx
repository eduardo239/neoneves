import { useGameContext } from "../../context/GameContext";

import CardSimple from "../card/CardSimple";

export default function Inventory() {
  const { inventory } = useGameContext();

  const loopForItems = () => {
    return inventory.map((h, i) => {
      return (
        <div key={i}>
          <CardSimple item={h} mode="use" />
        </div>
      );
    });
  };

  return (
    <div className="centered">
      {inventory.length > 0 ? (
        <div className="flex gap-25">{loopForItems()}</div>
      ) : (
        <h2 className="text-center">No items in inventory</h2>
      )}
    </div>
  );
}
