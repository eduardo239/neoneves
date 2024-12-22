import { useEffect, useState } from "react";

import PropTypes from "prop-types";
import cardBack from "../../assets/cards/bg1.jpg";
import calculateSelectedCards from "./calculate";

export default function Deck({ cards, isFront = true }) {
  const [selectedCards, setSelectedCards] = useState([]);
  const [canSelect, setCanSelect] = useState(true);

  useEffect(() => {
    if (selectedCards.length <= 3) {
      setCanSelect(true);
    } else {
      setCanSelect(false);
    }
  }, [selectedCards]);

  const handleSelectCard = (card) => {
    if (!canSelect && !selectedCards.includes(card)) return;
    setSelectedCards((prevSelectedCards) => {
      if (prevSelectedCards.includes(card)) {
        return prevSelectedCards.filter((_card) => _card !== card);
      } else {
        return [...prevSelectedCards, card];
      }
    });
  };

  useEffect(() => {
    calculateSelectedCards(selectedCards);
  }, [selectedCards]);

  const loopForCards = () => {
    return cards.map((_card, i) => {
      return (
        <div key={i}>
          <div
            className={`card ${
              !canSelect && !selectedCards.includes(_card) ? "disabled" : ""
            } ${selectedCards.includes(_card) ? "selected" : ""}`}
            onClick={() => handleSelectCard(_card)}
          >
            <img
              src={isFront ? _card.src : cardBack}
              alt="cards deck pick one"
            />
            <p style={{ textAlign: "center" }}>
              <span
                style={
                  _card.suit === "hearts"
                    ? { color: "orange" }
                    : _card.suit === "spades"
                    ? { color: "yellow" }
                    : _card.suit === "diamonds"
                    ? { color: "lightgreen" }
                    : _card.suit === "clubs"
                    ? { color: "lightblue" }
                    : {}
                }
              >
                {_card.suit}#{_card.value}
              </span>
            </p>
          </div>
        </div>
      );
    });
  };

  if (cards && cards.length > 0)
    return (
      <>
        <div className="deck ">{loopForCards()}</div>{" "}
        <div className="center">
          <span>Total: {100}</span>
        </div>
      </>
    );
  else return <div>Deck is empty</div>;
}

Deck.propTypes = {
  cards: PropTypes.array.isRequired,
  isFront: PropTypes.bool,
};
