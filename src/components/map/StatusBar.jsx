import { useGameContext } from "../../context/GameContext";

export default function StatusBar() {
  const { hero } = useGameContext();

  if (hero)
    return (
      <div className="status-grid">
        <span>Name: {hero.name}</span>
        <span>HP: {hero.hp}</span>
        <span>MP: {hero.mp}</span>
        <span>Attack: {hero.atk}</span>
        <span>Defense: {hero.def}</span>
        <span>Gold: {hero.gold}</span>
      </div>
    );
  else return null;
}
