import { useEffect, useState } from "react";
import { useGameContext } from "../../context/GameContext";
import { getRandomUniqueCards } from "../../helper";

import CardSimple from "../card/CardSimple";

export default function Store() {
  const { isShopping } = useGameContext();
  const [randomItems, setRandomItems] = useState([]);

  useEffect(() => {
    if (isShopping) {
      const randomCards = getRandomUniqueCards(3, "items");
      setRandomItems(randomCards);
    }
  }, [isShopping]);

  const loopForItems = () => {
    return randomItems.map((h, i) => {
      return (
        <div key={i}>
          <CardSimple item={h} mode="buy" />
        </div>
      );
    });
  };

  return (
    <div className="centered">
      <h2 className="text-center">Store</h2>
      <div className="flex gap-25">{loopForItems()}</div>
    </div>
  );
}
