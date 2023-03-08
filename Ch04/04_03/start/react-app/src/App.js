import "./App.css";
import { useState } from "react";

function App({propvariable}) {
  // emotion is for the intial value of state
  // setEmotion is for the function that will update the state of the emotion
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");
  return (
    <div className="App">
      <h1>Hello from {emotion}</h1>
      {/* state being changed */}
      <button onClick={() => setEmotion("sad")}>sad</button>
      <button onClick={() => setEmotion("happy")}>happy</button>
    </div>
  );
}

export default App;
