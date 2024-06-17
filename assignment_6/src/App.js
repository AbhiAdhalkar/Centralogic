import React from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import UseMemo from './Components/UseMemo';
import Form from './Components/Form';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Routes>
            <Route path='/' element={<UseMemo />}/>
            <Route path='/Form' element={<Form/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
