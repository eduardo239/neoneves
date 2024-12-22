import PropTypes from "prop-types";

export default function ButtonFight({ onClick, type }) {
  if (type === "hit") return <button>Hit</button>;
  if (type === "magic") return <button>Magic</button>;
  if (type === "run") return <button onClick={onClick}>Run</button>;
}

ButtonFight.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
};
