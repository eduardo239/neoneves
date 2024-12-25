import PropTypes from "prop-types";
export default function HitLog({ data }) {
  console.log(data);
  return (
    <div>
      <h3>Information</h3>

      <p>Hero HandRanking: {data.handRanking}</p>

      <p>Hero Total Damage: {data.heroTotalValue}</p>
      <p>Enemy Total Damage: {data.enemyTotalValue}</p>

      <p>
        {data.heroTotalValue > data.enemyTotalValue
          ? "Hero wins"
          : "Enemy wins"}
      </p>
    </div>
  );
}

HitLog.propTypes = {
  data: PropTypes.object,
};
