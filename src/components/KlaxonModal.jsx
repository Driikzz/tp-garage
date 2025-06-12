import React from "react";
import { createPortal } from "react-dom";

function KlaxonModal({ isOpen, onClose, klaxon }) {
  if (!isOpen) return null;
  return createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" type="button" onClick={onClose} aria-label="Fermer">×</button>
        <h3>Klaxon</h3>
        <p style={{fontSize: '1.5em', textAlign: 'center'}}>{klaxon}</p>
      </div>
    </div>,
    document.body
  );
}

export default KlaxonModal;
