import PropTypes from "prop-types";

export default function Placexx({ index, actualPlace, type }) {
  if (type)
    return (
      <div
        className={`place ${
          actualPlace === index
            ? "active"
            : actualPlace > index
            ? "visited"
            : ""
        }`}
      >
        <h3>{index}</h3>

        <p>
          <span
            className={`place-type ${
              type === "enemy"
                ? "enemy"
                : type === "empty"
                ? "empty"
                : type === "treasure"
                ? "treasure"
                : "boss"
            }`}
          >
            {type}
          </span>
        </p>
      </div>
    );
}

Placexx.propTypes = {
  index: PropTypes.number.isRequired,
  actualPlace: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};
