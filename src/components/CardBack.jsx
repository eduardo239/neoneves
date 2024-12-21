import PropTypes from "prop-types";
import cardBack from "../assets/jss.png";

export default function CardBack({ card, selectedCards = [] }) {
  return (
    <div className={`card ${selectedCards.includes(card) ? "selected" : ""}`}>
      <img src={cardBack} alt="" />
      <small>
        {card.suit} - {card.value}
      </small>
    </div>
  );
}

CardBack.propTypes = {
  card: PropTypes.any,
  selectedCards: PropTypes.any,
};
