import PropTypes from "prop-types";

export default function CardFull({ h }) {
  return (
    <div className="card-container">
      <div className={`card `}>
        <img src={h.src} alt={h.name} />
        <p className="center">
          <code>{h.name}</code>
        </p>
      </div>

      <div className="card-stats">
        <p>HP: {h.hp}</p>
        <p>MP: {h.mp}</p>
        <p>Attack: {h.atk}</p>
        <p>Defense: {h.def}</p>
        <p>Special: {h.special}</p>
      </div>
    </div>
  );
}

CardFull.propTypes = {
  h: PropTypes.object.isRequired,
};
