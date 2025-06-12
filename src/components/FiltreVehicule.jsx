import React from "react";

function FiltreVehicule({ filtre, onChange }) {
  return (
    <div className="filtre-vehicule">
      <label>
        Type :
        <select name="type" value={filtre.type} onChange={onChange}>
          <option value="">Tous</option>
          <option value="voiture">Voiture</option>
          <option value="camion">Camion</option>
          <option value="moto">Moto</option>
        </select>
      </label>
      <label>
        Marque :
        <input name="marque" value={filtre.marque} onChange={onChange} placeholder="Toutes" />
      </label>
      <label>
        Couleur :
        <input name="couleur" value={filtre.couleur} onChange={onChange} placeholder="Toutes" />
      </label>
      <label>
        Année :
        <input name="annee" value={filtre.annee} onChange={onChange} placeholder="Toutes" />
      </label>
    </div>
  );
}

export default FiltreVehicule;
