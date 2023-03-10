import "./App.css";
import { useState } from "react";
// useref is a hook that allows you to create a reference to a DOM element or a form element

// custom hook
// custom hooks are functions that start with use
// custom hooks are used to share logic between components
function useInputValue(defaultValue = "") {
  const [value, setValue] = 
    useState(defaultValue);
    // useState is a custom hook that returns an array with two elements
    // the first element is the value of the state
  return [
    {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    // second element is a function that allows you to change the value of the state
    () => setValue(defaultValue),
  ];
}


function App() {
  const[titleProps, resetTitle] = useState(""); // default title is empty
  const[colorProps, resetColor] = useState("#000000"); // default color is black
  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value}, ${colorProps.value}`);
    resetTitle("");
    resetColor("#000000");
  };

  return (
    <form onSubmit={submit}>
      <input
      // {...titleProps} is a spread operator that is used to pass all the properties of the titleProps object to the input element
        {...titleProps}
        type="text"
        placeholder="color title..."
      />
      <input 
      // {...colorProps} is a spread operator that is used to pass all the properties of the colorProps object to the input element
      {...colorProps}
      type="color" />
      <button>ADD</button>
    </form>
  );
}

export default App;

