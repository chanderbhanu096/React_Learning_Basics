import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>  <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App  />
  </React.StrictMode>
);

