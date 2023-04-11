import { useState } from "react";
import "./Global.styles.scss";
import data from "../../utils/constant/indonesia";

const Global = () => {
  const [globals, setGlobals] = useState(data.indonesia);

  const renderedCard = globals.map((global, index) => {
    let totalStyle = "";

    if (global.status === "Positif") {
      totalStyle += "card__subtitle--postitive";
    } else if (global.status === "Sembuh") {
      totalStyle += "card__subtitle--recovered";
    } else {
      totalStyle += "card__subtitle--death";
    }

    return (
      <div className="card" key={index}>
        <h3 className="card__title">{global.status}</h3>
        <p className={totalStyle}>{global.total}</p>
      </div>
    );
  });

  return (
    <section>
      <div className="global">
        <h1 className="global__title">Global</h1>
        <p className="global__subtitle">Data Covid Berdasarkan Global</p>
        <div className="global__container">{renderedCard}</div>
      </div>
    </section>
  );
};

export default Global;
