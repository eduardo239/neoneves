import PropTypes from "prop-types";
import { useGameContext } from "../../context/GameContext";

export default function CardSimple({ h }) {
  const { hero, setHero } = useGameContext();

  const handleSelectHero = (hero) => {
    setHero(hero);
  };

  return (
    <div className="card-simple-container">
      <div
        className={`card ${hero && hero.id === h.id ? "selected" : ""}`}
        onClick={() => handleSelectHero(h)}
      >
        <img src={h.src} alt={h.name} />
        <p className="center">
          <code>{h.name}</code>
        </p>
      </div>
    </div>
  );
}

CardSimple.propTypes = {
  h: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};
