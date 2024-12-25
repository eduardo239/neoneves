import PropTypes from "prop-types";

export default function Button({
  primary,
  full = false,
  onClick,
  value = "default_button",
  disabled = false,
  ...props
}) {
  return (
    <button
      className={`${primary ? "button-primary" : ""} ${
        !disabled ? " active" : ""
      } ${full ? "button-full" : ""}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {value}
    </button>
  );
}

Button.propTypes = {
  primary: PropTypes.bool,
  onClick: PropTypes.func,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  full: PropTypes.bool,
};
