import PropTypes from "prop-types";

export default function CardBuy({
  card,
  selectCard,
  use = false,
  buy = false,
}) {
  return (
    <div className={`card `} onClick={() => selectCard(card)}>
      <img src={card.src} alt="" />
      <small>
        {card.suit} - {card.value}
      </small>
      <div>
        {use && <button>Use</button>}
        {buy && <button>Buy</button>}
      </div>
    </div>
  );
}

CardBuy.propTypes = {
  card: PropTypes.any,
  selectCard: PropTypes.func,
  use: PropTypes.bool,
  buy: PropTypes.bool,
};
