import PropTypes from "prop-types";

export default function Place({ index, place, actualPlace }) {
  return (
    <div
      key={index}
      className={`place ${
        actualPlace === index ? "active" : actualPlace > index ? "visited" : ""
      }`}
    >
      <div
        className={`place-content ${
          place.name === "enemy"
            ? "enemy"
            : place.name === "treasure"
            ? "treasure"
            : place.name === "boss"
            ? "boss"
            : ""
        }`}
      >
        <h3>{index}</h3>
        <span>{place.name}</span>
      </div>
    </div>
  );
}
Place.propTypes = {
  index: PropTypes.number,
  place: PropTypes.object,
  actualPlace: PropTypes.number,
};
