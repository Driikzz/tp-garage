import React, { useState } from "react";
import Modal from "./Modal";
import KlaxonModal from "./KlaxonModal";

function Voiture(props) {
  const [open, setOpen] = useState(false);
  const [openKlaxon, setOpenKlaxon] = useState(false);
  return (
    <div className="vehicule-card voiture-card">
      <p><b>Marque :</b> {props.marque} | <b>Année :</b> {props.annee} | <b>Couleur :</b> {props.couleur}</p>
      <p>Nombre de portes : {props.nbPortes}</p>
      <button className="btn-details" onClick={() => setOpen(true)}>Afficher détails</button>
      <button className="btn-klaxon" onClick={() => setOpenKlaxon(true)}>Klaxonner</button>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h3>Détails Voiture</h3>
        <p>Marque : {props.marque}</p>
        <p>Année : {props.annee}</p>
        <p>Couleur : {props.couleur}</p>
        <p>Nombre de portes : {props.nbPortes}</p>
      </Modal>
      <KlaxonModal isOpen={openKlaxon} onClose={() => setOpenKlaxon(false)} klaxon={props.klaxon || "Bip Bip ! (Voiture)"} />
    </div>
  );
}
export default Voiture;
