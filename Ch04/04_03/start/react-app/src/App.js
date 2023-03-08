import "./App.css";
import { useState } from "react";

function App({propvariable}) {
  const what = useState("hello");
  const [emotion, setEmotion] = useState("happy");
  console.log(what);
  return (
    <div className="App">
      <h1>Hello from {propvariable}</h1>
    </div>
  );
}

export default App;
