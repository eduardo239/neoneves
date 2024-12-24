import PropTypes from "prop-types";

export default function CardFull({ character }) {
  if (character?.type === "hero")
    return (
      <div className={`card card-character`}>
        <img src={character.src} alt={character.name} />
        <p className="center">
          <code>{character.name}</code>
        </p>
      </div>
    );
  else if (character?.type === "enemy")
    return (
      <div className={`card card-character`}>
        <img src={character.src} alt={character.name} />
        <p className="center">
          <code>{character.name}</code>
        </p>
      </div>
    );
}

CardFull.propTypes = {
  character: PropTypes.object.isRequired,
};
