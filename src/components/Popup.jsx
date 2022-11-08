import React, { useEffect, useRef } from "react";
import "./Popup.css";

const Popup = ({ onClose }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (popupRef.current !== null) {
        if (!popupRef.current?.contains(e.target)) {
          onClose();
        }
      }
    };
    document.addEventListener("click", handleClick);
    return function clear() {
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <div className="popup">
      <div className="popup-inner" ref={popupRef}>
        <h1>Popup is Opened</h1>
        <p>Hello Popup</p>
        <button className="close-btn" onClick={onClose}>
          Cose
        </button>
      </div>
    </div>
  );
};

export default Popup;
