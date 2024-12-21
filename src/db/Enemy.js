import enemySrc1 from "../assets/Leonardo_Anime_XL_A_powerful_dragonborn_paladin_clad_in_gleami_3.jpg";
import enemySrc2 from "../assets/Leonardo_Anime_XL_Firebreathing_dragon_soaring_above_a_medieva_3.jpg";
import enemySrc3 from "../assets/Leonardo_Anime_XL_A_beautiful_fae_queen_with_translucent_wings_0.jpg";

export const dbEnemies = [
  {
    id: 1,
    name: "Skeleton_1",
    src: enemySrc1,
    hp: 50,
    mp: 0,
    atk: 5,
    def: 0,
    special: 0,
    type: "enemy",
  },
  {
    id: 2,
    name: "Skeleton_2",
    src: enemySrc2,
    hp: 60,
    mp: 20,
    atk: 7,
    def: 2,
    special: 0,
    type: "enemy",
  },
  {
    id: 3,
    name: "Skeleton_3",
    src: enemySrc3,
    hp: 70,
    mp: 30,
    atk: 9,
    def: 4,
    special: 0,
    type: "enemy",
  },
];
