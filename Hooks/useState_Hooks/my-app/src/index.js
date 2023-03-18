import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';athei
import reportWebVitals from './reportWebVitals';

function App() {
  // status is the variable name and useState is the function used to set the value of the variable not delivered default         
  const [status,setStatus] = useState("Not Delivered");

  return (
    <div className="App">
      <h1>The Package id: {status}</h1>  
      {/* setStatus is the function used to set/change the value of the variable default value "Not Delivered" */}
      <button onClick={()=>setStatus("Delivered")}>Deliver</button>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App  />
  </React.StrictMode>
);

