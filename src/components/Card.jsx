import PropTypes from "prop-types";

export default function Cardxxx({ character }) {
  if (character)
    return (
      <div className="card-container">
        <div className="card">
          <img src={character.src} alt={character.name} />
        </div>

        <div>
          <p>hp: {character.hp}</p>
          <p>mp: {character.mp}</p>
          <p>atk: {character.atk}</p>
          <p>def: {character.def}</p>
          <p>special: {character.special}</p>
        </div>
      </div>
    );
}

Cardxxx.propTypes = {
  character: PropTypes.object,
};
