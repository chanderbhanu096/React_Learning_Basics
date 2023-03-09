import "./App.css";
import { useState, useReducer } from "react";


function App() {
  // const[checked, setChecked] = useState(false);
  const[checked, setChecked] = useReducer((checked) => !checked,false);


  return (
    <div className="App">
      <input type = "checkbox"  
      value={checked} 
      // onChange is a special prop that is used to handle changes to the input element
      // ((checked) => !checked)} is changing the state of the checked variable from true to false or false to true
      onChange={ setChecked} /> 
      <label>{checked ? "checked":"unchecked"}</label>
    </div>) } 
export default App;
