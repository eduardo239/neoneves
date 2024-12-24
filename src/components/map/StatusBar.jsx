import {
  GiBroadsword,
  GiCheckedShield,
  GiGoldBar,
  GiHealthPotion,
  GiMagicPotion,
  GiPerson,
} from "react-icons/gi";

import PropTypes from "prop-types";

export default function StatusBar({ character }) {
  if (character)
    return (
      <div className="status-grid">
        <span style={{ color: "#1BBA3B" }}>
          Name: <GiPerson />
          {character.name}
        </span>
        <span style={{ color: "#F03C4C" }}>
          HP:
          <GiHealthPotion /> {character.hp}
        </span>
        <span style={{ color: "#388CE0" }}>
          MP: <GiMagicPotion />
          {character.mp}
        </span>
        <span style={{ color: "#F09624" }}>
          Attack: <GiBroadsword />
          {character.atk}
        </span>
        <span style={{ color: "#884ED9" }}>
          Defense: <GiCheckedShield />
          {character.def}
        </span>
        <span style={{ color: "gold" }}>
          Gold: <GiGoldBar />
          {character.gold}
        </span>
      </div>
    );
}
StatusBar.propTypes = {
  character: PropTypes.object.isRequired,
};
