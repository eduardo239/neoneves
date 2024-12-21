import PropTypes from "prop-types";
// import { useEffect } from "react";
// import { useGameContext } from "../../context/GameContext";

export default function Place({ index, place, actualPlace }) {
  // const { setIsFighting, map } = useGameContext();

  return (
    <div
      key={index}
      className={`place ${
        actualPlace === index ? "active" : actualPlace > index ? "visited" : ""
      }`}
    >
      <h3>{index}</h3>
      <span>{place.name}</span>
    </div>
  );
}
Place.propTypes = {
  index: PropTypes.number,
  place: PropTypes.object,
  actualPlace: PropTypes.number,
};
