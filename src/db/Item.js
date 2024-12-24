import p1 from "../assets/items/po1.jpg";
import p2 from "../assets/items/po2.jpg";

import { CURE, DEFENSE, MANA } from "../helper/constant";

// restore, hp, def, mp
// increase atk

export const itemsDB = [
  {
    name: "Cure Big",
    src: p2,
    effect: "+50 HP",
    value: 50,
    price: 20,
    type: CURE,
  },
  {
    name: "Cure Small",
    src: p1,
    effect: "+30 HP",
    value: 30,
    price: 10,
    type: CURE,
  },

  {
    name: "Mana Big",
    src: p1,
    effect: "+50 MP",
    value: 50,
    price: 20,
    type: MANA,
  },
  {
    name: "Mana Small",
    src: p2,
    effect: "+30 MP",
    value: 30,
    price: 10,
    type: MANA,
  },

  {
    name: "Defense Big",
    src: p1,
    effect: "+50 DEF",
    value: 50,
    price: 20,
    type: DEFENSE,
  },
  {
    name: "Defense Small",
    src: p2,
    effect: "+30 DEF",
    value: 30,
    price: 10,
    type: DEFENSE,
  },
];
