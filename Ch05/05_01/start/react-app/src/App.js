import "./App.css";
import { useState } from "react";
// useref is a hook that allows you to create a reference to a DOM element or a form element

function App() {
  const[title, setTitle] = useState(""); // default title is empty
  const[color, setColor] = useState("#000000"); // default color is black
  const submit = (e) => {
    e.preventDefault();
    alert(`${title}, ${color}`);
    // setTitle("");
    // setColor("#000000");
  };

  return (
    <form onSubmit={submit}>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        type="text"
        placeholder="color title..."
      />
      <input value={color} 
      onChange={(event) => setColor(event.target.value)}
      type="color" />
      <button>ADD</button>
    </form>
  );
}

export default App;

