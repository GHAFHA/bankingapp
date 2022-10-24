import React, {useState} from 'react';
import './App.css';

function App() {

  //useState for set number
  const [number, setNumber] = useState(0);

  return (
    <div className='container'>
    <div className="App">
      <span> You clicked {number} times </span>
      <button onClick={() => setNumber((prev) => prev + 1) }>
        Increase
      </button>
      <button onClick={() => setNumber((prev) => prev - 1)}>Decrease</button>
     
    </div>
    </div>
  );
}

export default App;
