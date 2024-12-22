import { useEffect, useState } from "react";
import { useGameContext } from "../../context/GameContext";
import { getRandomUniqueCards } from "../../helper";

import CardSimple from "../card/CardSimple";
import { v4 as uuidv4 } from "uuid";

export default function Treasure() {
  const { isTreasure } = useGameContext();
  const [randomItems, setRandomItems] = useState([]);

  useEffect(() => {
    if (isTreasure) {
      const randomCards = getRandomUniqueCards(3, "items");
      for (let i = 0; i < randomCards.length; i++) {
        // copy add and add new id
        randomCards[i] = { ...randomCards[i], id: uuidv4() };
        //
        // randomCards[i].id = uuidv4();
      }
      setRandomItems(randomCards);
    }
  }, [isTreasure]);

  const loopForItems = () => {
    return randomItems.map((h, i) => {
      return (
        <div key={i}>
          <CardSimple item={h} mode="get" />
        </div>
      );
    });
  };

  return (
    <div className="h-100 flex-center-center flex-column">
      <h2 className="text-center">Treasure</h2>
      <div className="flex gap-25">{loopForItems()}</div>
    </div>
  );
}
