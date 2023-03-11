import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://api.github.com/users/moonhighway")
      .then((res) => res.json())
      // setData is a function that allows you to change the value of the data state
      .then(data => setData(data));
      // data is the value of the data state
    },[]);
    if(!data) {
      return <div>Loading...</div>
    // the second argument of useEffect is an array of dependencies
    }else{
      return <pre>{JSON.stringify(data)}</pre>
    }
  return <h1> DATA</h1>;
};

export default App;
