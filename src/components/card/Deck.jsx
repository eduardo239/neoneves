import PropTypes from "prop-types";
import { cardsDB } from "../../db/Cards";
import { useState } from "react";

export default function Deck({ cards }) {
  const [selectedCards, setSelectedCards] = useState([]);

  const handleCardClick = (card) => {
    setSelectedCards((prevSelectedCards) => {
      if (prevSelectedCards.includes(card)) {
        return prevSelectedCards.filter((c) => c !== card);
      } else {
        return [...prevSelectedCards, card];
      }
    });
  };

  const loopForCards = () => {
    return cards.map((c, i) => {
      return (
        <div key={i}>
          <div
            className={`card ${selectedCards.includes(c) ? "selected" : ""}`}
            onClick={() => handleCardClick(c)}
          >
            <img src={cardsDB[0].src} alt="cards deck pick one" />
            <p style={{ textAlign: "center" }}>
              <span
                style={
                  c.suit === "hearts"
                    ? { color: "orange" }
                    : c.suit === "spades"
                    ? { color: "yellow" }
                    : c.suit === "diamonds"
                    ? { color: "lightgreen" }
                    : c.suit === "clubs"
                    ? { color: "lightblue" }
                    : {}
                }
              >
                {c.suit}#{c.value}
              </span>
            </p>
          </div>
        </div>
      );
    });
  };

  if (cards && cards.length > 0)
    return <div className="deck ">{loopForCards()}</div>;
  else return <div>Deck is empty</div>;
}

Deck.propTypes = {
  cards: PropTypes.array.isRequired,
};
