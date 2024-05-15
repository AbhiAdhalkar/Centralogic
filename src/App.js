import './App.css';
import { useState } from 'react';
import porsche1 from "./images/porsche1.jpg"

function App() {
  const [car, setCar] = useState({
    brand: "Mercedes",
    model: "S-class",
    color: "Grey",
    year: "1995"
  });

  const handleClick = () => {
    setCar({
      brand: "Porsche",
      model: "718 Boxster",
      color: "Racing Yellow",
      year: "2018"
    });
  };

  return (
    <div className="App">
      <div className='box'>
        <h1> I like {car.brand} in cars!!!</h1>
        <p><h2>it is {car.color} {car.model} of {car.year}</h2></p>
        Please click the button for Change<br></br>
        <button className='button1' type='button' onClick={handleClick}>Click here</button>
      </div>
    </div>
  );
}

export default App;
