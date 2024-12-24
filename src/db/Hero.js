import hero1 from "../assets/heroes/h1.jpg";
import hero2 from "../assets/heroes/h2.jpg";
import hero3 from "../assets/heroes/h3.jpg";

import { HERO } from "../helper/constant";

export const heroesDB = [
  {
    name: "Louise",
    src: hero1,
    hp: 90,
    mp: 70,
    atk: 17,
    def: 30,
    special: 0,
    type: HERO,
  },
  {
    name: "Luna",
    src: hero2,
    hp: 100,
    mp: 50,
    atk: 12,
    def: 45,
    special: 0,
    type: HERO,
  },
  {
    name: "James",
    src: hero3,
    hp: 15,
    mp: 15,
    atk: 3,
    def: 2,
    special: 0,
    type: HERO,
  },
];
