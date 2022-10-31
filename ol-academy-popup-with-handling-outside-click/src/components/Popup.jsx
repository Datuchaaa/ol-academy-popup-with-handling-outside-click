import React, { useEffect } from "react";
import { useRef } from "react";
import "./Popup.css";

const Popup = ({ onClose}) => {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (!popupRef.current?.contains(e.target)) {
        console.log("outside");
        onClose();
      }
    };
    document.addEventListener("click", handleClick);
  });

  return (
    <div className="popup" ref={popupRef}>
      <div className="popup-inner">
        <h1>Popup is opend</h1>
        <p>Hello Popup</p>
        <button onClick={onClose}>Cose</button>
      </div>
    </div>
  );
};

export default Popup;
