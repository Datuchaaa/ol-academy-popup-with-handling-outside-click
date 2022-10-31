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
      <button onClick={()=>setShowPopup(true)} >Open Popup</button>
      {showPopup && <Popup onClose={handelClosePopup} />}
    </div>
  );
}

export default App;
