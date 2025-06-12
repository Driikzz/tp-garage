import React, { useState } from "react";
import Garage from "./components/Garage";
import FormulaireVehicule from "./components/FormulaireVehicule";
import FiltreVehicule from "./components/FiltreVehicule";
import SimplePopup from "./components/SimplePopup";
import "./App.css";

function App() {
  // Liste des véhicules dans le garage
  const [vehicules, setVehicules] = useState([
  ]);

  // Etat pour le formulaire
  const [form, setForm] = useState({
    type: "voiture",
    marque: "",
    annee: "",
    couleur: "",
    nbPortes: "",
    capacite: "",
    cylindree: ""
  });

  // Etat pour le filtre
  const [filtre, setFiltre] = useState({ type: "", marque: "", couleur: "", annee: "" });

  // Etat pour le popup
  const [popup, setPopup] = useState({ open: false, message: "" });

  // Gestion du formulaire contrôlé
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Gestion du filtre contrôlé
  const handleFiltreChange = (e) => {
    setFiltre({ ...filtre, [e.target.name]: e.target.value });
  };

  // Ajout d'un véhicule
  const handleSubmit = (e) => {
    e.preventDefault();
    let newVehicule = {
      type: form.type,
      marque: form.marque,
      annee: form.annee,
      couleur: form.couleur
    };
    if (form.type === "voiture") newVehicule.nbPortes = form.nbPortes;
    if (form.type === "camion") newVehicule.capacite = form.capacite;
    if (form.type === "moto") newVehicule.cylindree = form.cylindree;

    // Vérification simple (exemple : pas de champ vide)
    if (!form.marque || !form.annee || !form.couleur ||
      (form.type === "voiture" && !form.nbPortes) ||
      (form.type === "camion" && !form.capacite) ||
      (form.type === "moto" && !form.cylindree)) {
      setPopup({ open: true, message: "Merci de remplir tous les champs obligatoires." });
      return;
    }

    setVehicules([...vehicules, newVehicule]);
    setPopup({ open: true, message: "Véhicule ajouté !" });
    setForm({
      type: "voiture",
      marque: "",
      annee: "",
      couleur: "",
      nbPortes: "",
      capacite: "",
      cylindree: ""
    });
  };

  // Filtrage des véhicules
  const vehiculesFiltres = vehicules.filter(v => {
    if (filtre.type && v.type !== filtre.type) return false;
    if (filtre.marque && !v.marque.toLowerCase().includes(filtre.marque.toLowerCase())) return false;
    if (filtre.couleur && !v.couleur.toLowerCase().includes(filtre.couleur.toLowerCase())) return false;
    if (filtre.annee && String(v.annee) !== filtre.annee) return false;
    return true;
  });

  return (
    <div>
      <h1>Gestion du Garage</h1>
      <FormulaireVehicule form={form} onChange={handleChange} onSubmit={handleSubmit} />
      <FiltreVehicule filtre={filtre} onChange={handleFiltreChange} />
      <Garage vehicules={vehiculesFiltres} filtreType={filtre.type} />
      <SimplePopup open={popup.open} message={popup.message} onClose={() => setPopup({ open: false, message: "" })} />
    </div>
  );
}

export default App;
