import React, { useState } from "react";
import Modal from "./Modal";
import KlaxonModal from "./KlaxonModal";

function Camion(props) {
  const [open, setOpen] = useState(false);
  const [openKlaxon, setOpenKlaxon] = useState(false);
  return (
    <div className="vehicule-card camion-card">
      <p><b>Marque :</b> {props.marque} | <b>Année :</b> {props.annee} | <b>Couleur :</b> {props.couleur}</p>
      <p>Capacité : {props.capacite} tonnes</p>
      <button className="btn-details" onClick={() => setOpen(true)}>Afficher détails</button>
      <button className="btn-klaxon" onClick={() => setOpenKlaxon(true)}>Klaxonner</button>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h3>Détails Camion</h3>
        <p>Marque : {props.marque}</p>
        <p>Année : {props.annee}</p>
        <p>Couleur : {props.couleur}</p>
        <p>Capacité : {props.capacite} tonnes</p>
      </Modal>
      <KlaxonModal isOpen={openKlaxon} onClose={() => setOpenKlaxon(false)} klaxon={props.klaxon || "POUET POUET ! (Camion)"} />
    </div>
  );
}
export default Camion;
