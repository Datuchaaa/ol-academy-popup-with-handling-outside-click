import { useState } from "react";
import "./App.css";
import Popup from "./components/Popup";
function App() {
  const [showPopup, setShowPopup] = useState(false);
  const handelClosePopup = () => {
    setShowPopup(false);
    // console.log("Sdasdadasd")
  };

  return (
    <div className="App">
      <button className="open-btn" onClick={()=>setShowPopup(true)} ><h1>OPEN POPUP</h1></button>
      {showPopup && <Popup onClose={handelClosePopup} />}
    </div>
  );
}

export default App;
