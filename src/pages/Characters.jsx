import { useNavigate } from "react-router-dom";
import { heroesDB } from "../db/Hero.js";
import { v4 as uuidv4 } from "uuid";
import { useGameContext } from "../context/GameContext.jsx";

import CardSimple from "../components/card/CardSimple.jsx";
import StatusBar from "../components/map/StatusBar.jsx";
// import TopMenu from "../components/ui/TopMenu.jsx";
import Button from "../components/ui/Button.jsx";

export default function Characters() {
  const { hero } = useGameContext();

  const navigate = useNavigate();

  const loopForHeroes = () => {
    return heroesDB.map((h) => {
      const heroCopy = { ...h, id: uuidv4() };
      return (
        <div key={heroCopy.id}>
          <CardSimple item={heroCopy} mode="hero" />
        </div>
      );
    });
  };

  return (
    <div className="container">
      <div className="top">{/* <TopMenu /> */}</div>

      <div className="middle">
        <div className="centered">
          <h2>Heroes</h2>
          <div className="flex gap-25">{loopForHeroes()}</div>
        </div>
      </div>

      <div className="bottom">
        {hero && <StatusBar character={hero} />}

        <div className="footer-buttons">
          <Button primary onClick={() => navigate("/")} value="Back" />
          <Button primary onClick={() => navigate("/game")} value="Next" />
        </div>
      </div>
    </div>
  );
}
