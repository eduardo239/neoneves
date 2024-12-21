import { useGameContext } from "../../context/GameContext";
import Place from "./Place";

export default function Map() {
  const { map, actualPlace } = useGameContext();

  return (
    <div className="map-grid">
      {map.map((place, index) => {
        return (
          <Place
            key={index}
            index={index}
            place={place}
            actualPlace={actualPlace}
          />
        );
      })}
    </div>
  );
}
