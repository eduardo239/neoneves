import { useGameContext } from "../../context/GameContext";
import {
  GiBroadsword,
  GiCheckedShield,
  GiGoldBar,
  GiHealthPotion,
  GiMagicPotion,
  GiPerson,
} from "react-icons/gi";

export default function StatusBar() {
  const { hero } = useGameContext();

  if (hero)
    return (
      <div className="status-grid">
        <span style={{ color: "#1BBA3B" }}>
          Name: <GiPerson />
          {hero.name}
        </span>
        <span style={{ color: "#F03C4C" }}>
          HP:
          <GiHealthPotion /> {hero.hp}
        </span>
        <span style={{ color: "#388CE0" }}>
          MP: <GiMagicPotion />
          {hero.mp}
        </span>
        <span style={{ color: "#F09624" }}>
          Attack: <GiBroadsword />
          {hero.atk}
        </span>
        <span style={{ color: "#884ED9" }}>
          Defense: <GiCheckedShield />
          {hero.def}
        </span>
        <span style={{ color: "gold" }}>
          Gold: <GiGoldBar />
          {hero.gold}
        </span>
      </div>
    );
  else return null;
}
