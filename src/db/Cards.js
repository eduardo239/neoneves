// clubs (♣), diamonds (♦), hearts (♥) and spades (♠)

import s2 from "../assets/cards/s2.jpg";
import s3 from "../assets/cards/s3.jpg";
import s4 from "../assets/cards/s4.jpg";
import s5 from "../assets/cards/s5.jpg";
import s6 from "../assets/cards/s6.jpg";
import s7 from "../assets/cards/s7.jpg";
import s8 from "../assets/cards/s8.jpg";
import s9 from "../assets/cards/s9.jpg";
import s10 from "../assets/cards/s10.jpg";
import s11 from "../assets/cards/s11.jpg";
import s12 from "../assets/cards/s12.jpg";
import s13 from "../assets/cards/s13.jpg";
import s14 from "../assets/cards/s14.jpg";

import h2 from "../assets/cards/h2.jpg";
import h3 from "../assets/cards/h3.jpg";
import h4 from "../assets/cards/h4.jpg";
import h5 from "../assets/cards/h5.jpg";
import h6 from "../assets/cards/h6.jpg";
import h7 from "../assets/cards/h7.jpg";
import h8 from "../assets/cards/h8.jpg";
import h9 from "../assets/cards/h9.jpg";
import h10 from "../assets/cards/h10.jpg";
import h11 from "../assets/cards/h11.jpg";
import h12 from "../assets/cards/h12.jpg";
import h13 from "../assets/cards/h13.jpg";
import h14 from "../assets/cards/h14.jpg";

import c2 from "../assets/cards/c2.jpg";
import c3 from "../assets/cards/c3.jpg";
import c4 from "../assets/cards/c4.jpg";
import c5 from "../assets/cards/c5.jpg";
import c6 from "../assets/cards/c6.jpg";
import c7 from "../assets/cards/c7.jpg";
import c8 from "../assets/cards/c8.jpg";
import c9 from "../assets/cards/c9.jpg";
import c10 from "../assets/cards/c10.jpg";
import c11 from "../assets/cards/c11.jpg";
import c12 from "../assets/cards/c12.jpg";
import c13 from "../assets/cards/c13.jpg";
import c14 from "../assets/cards/c14.jpg";

import d2 from "../assets/cards/d2.jpg";
import d3 from "../assets/cards/d3.jpg";
import d4 from "../assets/cards/d4.jpg";
import d5 from "../assets/cards/d5.jpg";
import d6 from "../assets/cards/d6.jpg";
import d7 from "../assets/cards/d7.jpg";
import d8 from "../assets/cards/d8.jpg";
import d9 from "../assets/cards/d9.jpg";
import d10 from "../assets/cards/d10.jpg";
import d11 from "../assets/cards/d11.jpg";
import d12 from "../assets/cards/d12.jpg";
import d13 from "../assets/cards/d13.jpg";
import d14 from "../assets/cards/d14.jpg";

export const cardsDB = [
  { id: 1, suit: "spades", value: 2, src: s2 },
  { id: 2, suit: "spades", value: 3, src: s3 },
  { id: 3, suit: "spades", value: 4, src: s4 },
  { id: 4, suit: "spades", value: 5, src: s5 },
  { id: 5, suit: "spades", value: 6, src: s6 },
  { id: 6, suit: "spades", value: 7, src: s7 },
  { id: 7, suit: "spades", value: 8, src: s8 },
  { id: 8, suit: "spades", value: 9, src: s9 },
  { id: 9, suit: "spades", value: 10, src: s10 },
  { id: 10, suit: "spades", value: 11, src: s11 },
  { id: 11, suit: "spades", value: 12, src: s12 },
  { id: 12, suit: "spades", value: 13, src: s13 },
  { id: 13, suit: "spades", value: 14, src: s14 },

  { id: 14, suit: "hearts", value: 2, src: h2 },
  { id: 15, suit: "hearts", value: 3, src: h3 },
  { id: 16, suit: "hearts", value: 4, src: h4 },
  { id: 17, suit: "hearts", value: 5, src: h5 },
  { id: 18, suit: "hearts", value: 6, src: h6 },
  { id: 19, suit: "hearts", value: 7, src: h7 },
  { id: 20, suit: "hearts", value: 8, src: h8 },
  { id: 21, suit: "hearts", value: 9, src: h9 },
  { id: 22, suit: "hearts", value: 10, src: h10 },
  { id: 23, suit: "hearts", value: 11, src: h11 },
  { id: 24, suit: "hearts", value: 12, src: h12 },
  { id: 25, suit: "hearts", value: 13, src: h13 },
  { id: 26, suit: "hearts", value: 14, src: h14 },

  { id: 27, suit: "diamonds", value: 2, src: d2 },
  { id: 28, suit: "diamonds", value: 3, src: d3 },
  { id: 29, suit: "diamonds", value: 4, src: d4 },
  { id: 30, suit: "diamonds", value: 5, src: d5 },
  { id: 31, suit: "diamonds", value: 6, src: d6 },
  { id: 32, suit: "diamonds", value: 7, src: d7 },
  { id: 33, suit: "diamonds", value: 8, src: d8 },
  { id: 34, suit: "diamonds", value: 9, src: d9 },
  { id: 35, suit: "diamonds", value: 10, src: d10 },
  { id: 36, suit: "diamonds", value: 11, src: d11 },
  { id: 37, suit: "diamonds", value: 12, src: d12 },
  { id: 38, suit: "diamonds", value: 13, src: d13 },
  { id: 39, suit: "diamonds", value: 14, src: d14 },

  { id: 40, suit: "clubs", value: 2, src: c2 },
  { id: 41, suit: "clubs", value: 3, src: c3 },
  { id: 42, suit: "clubs", value: 4, src: c4 },
  { id: 43, suit: "clubs", value: 5, src: c5 },
  { id: 44, suit: "clubs", value: 6, src: c6 },
  { id: 45, suit: "clubs", value: 7, src: c7 },
  { id: 46, suit: "clubs", value: 8, src: c8 },
  { id: 47, suit: "clubs", value: 9, src: c9 },
  { id: 48, suit: "clubs", value: 10, src: c10 },
  { id: 49, suit: "clubs", value: 11, src: c11 },
  { id: 50, suit: "clubs", value: 12, src: c12 },
  { id: 51, suit: "clubs", value: 13, src: c13 },
  { id: 52, suit: "clubs", value: 14, src: c14 },
];
