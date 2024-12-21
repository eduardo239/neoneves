import PropTypes from "prop-types";
import CardBack from "./CardBack";
import CardFront from "./CardFront";
import CardBuy from "./CardBuy";

export default function CardPack({
  cards,
  front = false,
  use = false,
  buy = false,
  enemySelectedCards,
  heroSelectedCards,
  setHeroSelectedCards,
}) {
  if (front)
    return (
      <div className="flex-center relative">
        {cards.map((card, index) => {
          return (
            <CardFront
              key={index}
              card={card}
              selectedCards={heroSelectedCards}
              setHeroSelectedCards={setHeroSelectedCards}
            />
          );
        })}
      </div>
    );
  else if (buy)
    return (
      <div className="flex-center relative">
        {cards.map((card, index) => {
          return <CardBuy key={index} card={card} buy={true} />;
        })}
      </div>
    );
  else if (use)
    return (
      <div className="flex-center relative">
        {cards.map((card, index) => {
          return <CardBuy key={index} card={card} use={true} />;
        })}
      </div>
    );
  else
    return (
      <div className="flex-center relative">
        {cards.map((card, index) => {
          return (
            <CardBack
              key={index}
              card={card}
              selectedCards={enemySelectedCards}
            />
          );
        })}
      </div>
    );
}

CardPack.propTypes = {
  card: PropTypes.any,
  cards: PropTypes.any,
  front: PropTypes.bool,
  use: PropTypes.bool,
  buy: PropTypes.bool,

  enemySelectedCards: PropTypes.any,
  heroSelectedCards: PropTypes.any,

  setHeroSelectedCards: PropTypes.func,
};
