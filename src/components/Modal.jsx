import React from "react";
import { createPortal } from "react-dom";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" type="button" onClick={onClose} aria-label="Fermer">×</button>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default Modal;
