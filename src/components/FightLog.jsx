import PropTypes from "prop-types";
import { useGameContext } from "../context/GameContext";

export default function FightLog() {
  const { turn, fightQueue } = useGameContext();

  if (fightQueue.length > 0)
    return (
      <div
        className="flex-center"
        style={{
          gap: "1rem",
          marginTop: "2rem",
          marginBottom: "2rem",
          background: "rgba(0,0,0,0.4)",
          padding: "1rem",
        }}
      >
        <code>Turn: {turn}</code>
        {fightQueue.map((card, index) => {
          return (
            <code
              className={`${card.type === "hero" ? "primary" : ""}`}
              key={index}
            >
              {index + 1}#{card.name}
            </code>
          );
        })}
      </div>
    );
}

FightLog.propTypes = {
  turn: PropTypes.number.isRequired,
  fightQueue: PropTypes.array.isRequired,
};
