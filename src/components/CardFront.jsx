import PropTypes from "prop-types";

export default function CardFront({
  card,
  selectedCards = [],
  setHeroSelectedCards,
}) {
  const toggleCardSelection = (card) => {
    const isSelected = selectedCards.includes(card);
    const newSelectedCards = isSelected
      ? selectedCards.filter((c) => c !== card)
      : [...selectedCards, card];
    setHeroSelectedCards(newSelectedCards);
  };

  return (
    <div
      className={`card ${selectedCards.includes(card) ? "selected" : ""}`}
      onClick={() => toggleCardSelection(card)}
    >
      <img src={card.src} alt="" />
      <small>
        {card.suit} - {card.value}
      </small>
    </div>
  );
}

CardFront.propTypes = {
  card: PropTypes.any,
  cards: PropTypes.any,
  selectedCards: PropTypes.any,
  setHeroSelectedCards: PropTypes.any,
};
