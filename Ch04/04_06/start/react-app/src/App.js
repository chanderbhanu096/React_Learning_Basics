import "./App.css";
import { useState, useEffect } from "react";
// useEffect is a hook that allows you to run code when the state of a component changes  (or when the component mounts or unmounts)
// useState is a hook that allows you to create a state variable in a functional component

function App() {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");

  useEffect(() => {
    console.log(`It's ${emotion} around here!`);
  }, [emotion]);
  // this is also possible you can have multiple useEffects in a component
  //   useEffect(() => { console.log(`It's ${emotion} around here!`); }, [emotion, secondary]);
  
  useEffect(() => {
    console.log(`It's ${secondary} around here!`);
  }, [secondary]);

  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>
        Sad
      </button>
      <button
        onClick={() => setEmotion("excited")}
      >
        Excited
      </button>
     <h1>Current secondary emotion is {secondary}</h1>
      <button onClick={() => setSecondary ("sleepy")}>
        Sleepy
      </button>

    </div>
  );
}

export default App;
