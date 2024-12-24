import { cardsDB } from "../db/Cards";
import { enemyDB } from "../db/Enemy";
import { itemsDB } from "../db/Item";

export const generateRandomNumber = (min = 1, max = 6) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const getRandomUniqueCards = (num, type = "cards") => {
  let shuffled;
  if (type === "cards") {
    shuffled = cardsDB.sort(() => 0.5 - Math.random());
  } else if (type === "items") {
    shuffled = itemsDB.sort(() => 0.5 - Math.random());
  }
  return shuffled.slice(0, num);
};

export const getRandomEnemy = () => {
  return enemyDB[Math.floor(Math.random() * enemyDB.length)];
};
