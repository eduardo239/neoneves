import PropTypes from "prop-types";

export default function MenuFight({ physicalAttack, next, isHeroFighting }) {
  return (
    <div className="flex-center">
      <div className="flex">
        <button disabled={!isHeroFighting} onClick={physicalAttack}>
          Physical Attack
        </button>
        <button onClick={next}>Next</button>
        <button>Items</button>
        <button>Run</button>
      </div>
    </div>
  );
}

MenuFight.propTypes = {
  physicalAttack: PropTypes.func,
  next: PropTypes.func,
  isHeroFighting: PropTypes.bool,
};
