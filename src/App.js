import React from 'react'
import './index.css';

function App() {
  const names = [
    "Khaled",
    "Malak",
    "Sadok",
    "Noura",
    "Farhat",
    "Med",
    "Rached",
    "Amal"
  ];

  const nameArray = names.map((name) => <li>{name}</li>)
  return (
    <div className="arr">
      <h1>List:</h1>
      <ol>{nameArray}</ol>
    </div>
  );
}

export default App;