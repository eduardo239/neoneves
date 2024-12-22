import { cardsDB } from "../db/Cards";
import { dbEnemies } from "../db/Enemy";
import { itemsDB } from "../db/Item";
import { typeDB } from "../db/Type";

const _boss = [{ name: "boss" }];

export const selectRandomItemsFromList2 = (quantity = 3, list = []) => {
  let _randomItems = [];
  for (let i = 0; i < quantity; i++) {
    let _randomItem = list[Math.floor(Math.random() * list.length)];
    _randomItems.push(_randomItem);
  }
  return _randomItems;
};

export const getRandomCards2 = (qty = 9) => {
  // get 9 random cards from cardsDB
  let _randomCards = [];
  for (let i = 0; i < qty; i++) {
    let _randomCard = cardsDB[Math.floor(Math.random() * cardsDB.length)];
    _randomCards.push(_randomCard);
  }
  return _randomCards;
};

export const rollDice = (setDice, setActualPlace, actualPlace, map) => {
  let dice = Math.floor(Math.random() * 6) + 1;
  setDice(dice);

  if (actualPlace + dice >= map.length) {
    setActualPlace(map.length - 1);
    return;
  }
  setActualPlace(actualPlace + dice);
};

export const generateMap = (mapSize = 20, setMap) => {
  const _map = [];
  for (let i = 0; i < mapSize; i++) {
    let _placeType = typeDB[Math.floor(Math.random() * typeDB.length)];
    _map.push(_placeType);
  }
  _map.unshift(typeDB[0]);
  _map.push(_boss[0]);
  setMap(_map);
};

export const getTreasure = (setInventory, inventory) => {
  let _randomItem = itemsDB[Math.floor(Math.random() * itemsDB.length)];
  setInventory([...inventory, _randomItem]);
};

export const checkPlace = (
  map,
  actualPlace,
  hero,
  setEnemy,
  setEnemyCards,
  setHeroCards,
  setIsFighting,
  setFightQueue
) => {
  const _queue = [];
  const _e = dbEnemies.length;
  let _enRandomCards = [];
  let _heRandomCards = [];
  let _placeType = map[actualPlace].name;
  let _enemy = null;

  if (_placeType) {
    switch (_placeType) {
      case "enemy":
        setIsFighting(true);
        // who starts
        _enemy = dbEnemies[Math.floor(Math.random() * _e)];
        // _enemy2 = new Character(
        //   _enemy.name,
        //   _enemy.hp,
        //   _enemy.mp,
        //   _enemy.atk,
        //   _enemy.def,
        //   _enemy.special,
        //   "enemy",
        //   _enemy.src
        // );

        setEnemy([_enemy]);

        // generate queue
        _queue.push(hero);
        _queue.push(_enemy);

        // get 7 random cards
        _enRandomCards = getRandomCards2(4);
        setEnemyCards(_enRandomCards);
        //
        _heRandomCards = getRandomCards2(4);
        setHeroCards(_heRandomCards);

        //
        setFightQueue(_queue);

        break;
      case "treasure":
        //
        break;
      case "empty":
        //
        break;
      case "boss":
        //
        break;
    }
  }
};

//

export const selectRandomItemsFromList = (list, maxItems = 3) => {
  const numberOfItems = Math.floor(Math.random() * maxItems) + 1;
  const shuffledList = list.sort(() => 0.5 - Math.random());
  return shuffledList.slice(0, numberOfItems);
};
