import "./App.css";
import { useState, useEffect } from "react";

// username is passed with curly braces because it is a prop        
// curley usenrname is a prop why curly braces are used for props  
function GithubUser({id,username}) { 
    return(
      <div>
        <h1>{username}</h1>
        <h2>{id}</h2>
      </div>
    )
}
function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://api.github.com/users/moonhighway")
      .then((res) => res.json())
      // setData is a function that allows you to change the value of the data state
      .then(data => setData(data));
    },[]);
    if(data) {
      return <GithubUser 
      username={data.name}
      id = {data.id}
      />
      
    // the second argument of useEffect is an array of dependencies
    }
    return <div>Loading...</div>;
    
    }
  

export default App;
