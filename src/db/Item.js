import p1 from "../assets/items/po1.jpg";
import p2 from "../assets/items/po2.jpg";

export const itemsDB = [
  {
    name: "Potion Small",
    src: p1,
    effect: "+30 HP",
    value: 30,
    price: 10,
    type: "cure",
  },
  {
    name: "Potion Big",
    src: p2,
    effect: "+50 HP",
    value: 50,
    price: 20,
    type: "cure",
  },

  {
    name: "Mana Big",
    src: p1,
    effect: "+50 MP",
    value: 50,
    price: 20,
    type: "mana",
  },
];
