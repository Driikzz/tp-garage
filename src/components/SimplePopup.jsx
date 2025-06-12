import React from "react";

function SimplePopup({ open, message, onClose }) {
  if (!open) return null;
  return (
    <div className="simple-popup-overlay">
      <div className="simple-popup-content">
        <span>{message}</span>
        <button className="simple-popup-close" onClick={onClose}>OK</button>
      </div>
    </div>
  );
}

export default SimplePopup;
