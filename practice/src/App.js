import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleClick = () => {
    setSubmittedName(name);
  };

  return (
    <>
      <div>
        <h2>Hello {submittedName}</h2>
        <input className='inputfield' type='text'
          placeholder='Enter your name' value={name}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Submit</button>
      </div>
    </>
  );
}

export default App;
