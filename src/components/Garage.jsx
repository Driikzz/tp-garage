import React from "react";
import Voiture from "./Voiture";
import Camion from "./Camion";
import Moto from "./Moto";

function Garage({ vehicules, filtreType }) {
  if (vehicules.length === 0) {
    if (filtreType === "moto") {
      return <p className="garage-empty">Il n'y a pas de moto dans le garage.</p>;
    }
    if (filtreType === "camion") {
      return <p className="garage-empty">Il n'y a pas de camion dans le garage.</p>;
    }
    if (filtreType === "voiture") {
      return <p className="garage-empty">Il n'y a pas de voiture dans le garage.</p>;
    }
    return <p className="garage-empty">Le garage est vide.</p>;
  }
  return (
    <div className="garage-container">
      <h2>Garage</h2>
      <div className="vehicules-list">
        {vehicules.map((v, i) => {
          if (v.type === "voiture") return <Voiture key={i} {...v} klaxon={v.klaxon} />;
          if (v.type === "camion") return <Camion key={i} {...v} klaxon={v.klaxon} />;
          if (v.type === "moto") return <Moto key={i} {...v} klaxon={v.klaxon} />;
          return null;
        })}
      </div>
    </div>
  );
}
export default Garage;
