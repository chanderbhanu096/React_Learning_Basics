import './App.css';

// const cities = ["Tokyo","London", "Paris", "New York"];
// console.log(cities[0]);
// OR 
const [first,second, third] = ["Tokyo","London", "Paris", "New York"];
console.log(first);
console.log(second);
console.log(third);

function App({library}) {
  return (
    <div className="App">
      <h1>Hello from {library}</h1>
    </div>
  );
}

export default App;
