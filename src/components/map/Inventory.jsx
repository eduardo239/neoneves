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

  if (inventory.length > 0)
    return (
      <div className="h-100 flex-center-center flex-column">
        <div className="flex gap-25">{loopForItems()}</div>
      </div>
    );
  else
    return (
      <div className="h-100 flex-center-center flex-column">
        <h2 className="text-center">No items in inventory</h2>
      </div>
    );
}
