import React, { useState } from "react";

function FormulaireVehicule({ form, onChange, onSubmit }) {
  const [errors, setErrors] = useState({});

  // Validation simple à la volée
  const handleBlur = (e) => {
    const { name, value } = e.target;
    let newErrors = { ...errors };
    if (name === "annee" && value && !/^[0-9]{4}$/.test(value)) {
      newErrors.annee = "L'année doit être un nombre sur 4 chiffres.";
    } else if (name === "annee") {
      delete newErrors.annee;
    }
    if (name === "nbPortes" && value && !/^[0-9]+$/.test(value)) {
      newErrors.nbPortes = "Le nombre de portes doit être un nombre entier.";
    } else if (name === "nbPortes") {
      delete newErrors.nbPortes;
    }
    if (name === "capacite" && value && !/^[0-9]+$/.test(value)) {
      newErrors.capacite = "La capacité doit être un nombre entier.";
    } else if (name === "capacite") {
      delete newErrors.capacite;
    }
    if (name === "cylindree" && value && !/^[0-9]+$/.test(value)) {
      newErrors.cylindree = "La cylindrée doit être un nombre entier.";
    } else if (name === "cylindree") {
      delete newErrors.cylindree;
    }
    setErrors(newErrors);
  };

  // Empêche la soumission si erreur
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length > 0) return;
    onSubmit(e);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-vehicule">
        <select name="type" value={form.type} onChange={onChange}>
          <option value="voiture">Voiture</option>
          <option value="camion">Camion</option>
          <option value="moto">Moto</option>
        </select>
        <input
          name="marque"
          placeholder="Marque"
          value={form.marque}
          onChange={onChange}
          required
        />
        <input
          name="annee"
          placeholder="Année"
          value={form.annee}
          onChange={onChange}
          onBlur={handleBlur}
          required
        />
        <input
          name="couleur"
          placeholder="Couleur"
          value={form.couleur}
          onChange={onChange}
          required
        />
        {form.type === "voiture" && (
          <React.Fragment>
            <input
              name="nbPortes"
              placeholder="Nb Portes"
              value={form.nbPortes}
              onChange={onChange}
              onBlur={handleBlur}
              required
            />
          </React.Fragment>
        )}
        {form.type === "camion" && (
          <React.Fragment>
            <input
              name="capacite"
              placeholder="Capacité (tonnes)"
              value={form.capacite}
              onChange={onChange}
              onBlur={handleBlur}
              required
            />
          </React.Fragment>
        )}
        {form.type === "moto" && (
          <React.Fragment>
            <input
              name="cylindree"
              placeholder="Cylindrée (cc)"
              value={form.cylindree}
              onChange={onChange}
              onBlur={handleBlur}
              required
            />
          </React.Fragment>
        )}
        <button type="submit">Ajouter</button>
      </form>
      {/* Affichage des erreurs sous le formulaire, hors du flex */}
      {Object.values(errors).length > 0 && (
        <div className="form-error-list">
          {Object.values(errors).map((err, idx) => (
            <div className="form-error" key={idx}>
              {err}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default FormulaireVehicule;
