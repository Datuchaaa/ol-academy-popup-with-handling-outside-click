import React, { useEffect } from "react";
import { useRef } from "react";
import "./Popup.css";
// import { Button } from "bootstrap";

const Popup = ({ onClose }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (popupRef.current !== null) {
        if (!popupRef.current?.contains(e.target)) {
          console.log("outside");
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
        <h1>Popup is opend</h1>
        <p>Hello Popup</p>
        <button className="close-btn" onClick={onClose}>
          Cose
        </button>
      </div>
    </div>
  );
};

export default Popup;
