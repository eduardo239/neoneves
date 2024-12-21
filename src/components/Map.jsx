import PropTypes from "prop-types";
import Place from "./Place";

export default function Map({ actualMap, actualPlace }) {
  return (
    <section className="flex">
      {actualMap.map((place, index) => {
        return (
          <Place
            index={index}
            key={index}
            actualPlace={actualPlace}
            type={place.name}
          />
        );
      })}
    </section>
  );
}

Map.propTypes = {
  actualMap: PropTypes.array.isRequired,
  actualPlace: PropTypes.number.isRequired,
};
