import e1 from "../assets/enemies/e1.jpg";
import e2 from "../assets/enemies/e2.jpg";
import e3 from "../assets/enemies/e3.jpg";
import e4 from "../assets/enemies/e4.jpg";

import { ENEMY } from "../helper/constant";

export const enemyDB = [
  {
    id: 1,
    name: "Neon Reaper",
    src: e1,
    hp: 50,
    mp: 0,
    atk: 5,
    def: 0,
    special: 0,
    type: ENEMY,
  },
  {
    id: 2,
    name: "Vox Siren",
    src: e2,
    hp: 60,
    mp: 20,
    atk: 7,
    def: 2,
    special: 0,
    type: ENEMY,
  },
  {
    id: 3,
    name: "Shade Viper",
    src: e3,
    hp: 70,
    mp: 30,
    atk: 9,
    def: 4,
    special: 0,
    type: ENEMY,
  },
  {
    id: 4,
    name: "Boss Torque",
    src: e4,
    hp: 70,
    mp: 30,
    atk: 9,
    def: 4,
    special: 0,
    type: ENEMY,
  },
];
