import { useEffect, useState } from "react";

import PropTypes from "prop-types";
import cardBack from "../../assets/cards/bg1.jpg";
import { calculateSelectedCards, calculateHandRanking } from "./calculate";
import { useGameContext } from "../../context/GameContext";

export default function Deck({ cards, isFront = true }) {
  const [canSelect, setCanSelect] = useState(true);
  const [HRMessage, setHRMessage] = useState("");

  const {
    handRanking,
    setHandRanking,
    heroSelectedCards,
    setHeroSelectedCards,
  } = useGameContext();

  useEffect(() => {
    if (heroSelectedCards.length <= 3) {
      setCanSelect(true);
    } else {
      setCanSelect(false);
    }
  }, [heroSelectedCards]);

  const handleSelectCard = (card) => {
    if (!canSelect && !heroSelectedCards.includes(card)) return;
    setHeroSelectedCards((prevSelectedCards) => {
      if (prevSelectedCards.includes(card)) {
        return prevSelectedCards.filter((_card) => _card !== card);
      } else {
        return [...prevSelectedCards, card];
      }
    });
  };

  useEffect(() => {
    const _handRanking = calculateSelectedCards(heroSelectedCards);
    setHandRanking(_handRanking);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heroSelectedCards]);

  useEffect(() => {
    if (heroSelectedCards) calculateHandRanking(handRanking, setHRMessage);
  }, [heroSelectedCards, handRanking, canSelect]);

  const loopForCards = () => {
    return cards.map((_card, i) => {
      return (
        <div key={i}>
          <div
            className={`${isFront ? "card card-animated " : "card-back"} ${
              !canSelect && !heroSelectedCards.includes(_card) ? "disabled" : ""
            } ${heroSelectedCards.includes(_card) ? "selected" : ""}`}
            onClick={isFront ? () => handleSelectCard(_card) : null}
          >
            <img
              src={isFront ? _card.src : cardBack}
              alt="cards deck pick one"
            />
            <p className="card-value">
              <span
                className={`${
                  _card.suit === "hearts"
                    ? "hearts"
                    : _card.suit === "spades"
                    ? "spades"
                    : _card.suit === "diamonds"
                    ? "diamonds"
                    : _card.suit === "clubs"
                    ? "clubs"
                    : ""
                }`}
              >
                <small>
                  {_card.suit}#{_card.value}
                </small>
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
        <div className="deck ">{loopForCards()}</div>
        {isFront && (
          <div className="center bg-primary">
            <h5>Hand Ranking: {HRMessage}</h5>
          </div>
        )}
      </>
    );
  else return <div>Deck is empty</div>;
}

Deck.propTypes = {
  cards: PropTypes.array.isRequired,
  isFront: PropTypes.bool,
};
