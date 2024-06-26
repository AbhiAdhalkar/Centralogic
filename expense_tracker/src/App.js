import React from 'react';
import './App.css';
import Header from './components/Header';
import Bal from './components/Bal';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './components/context/Globalstate';

function App() {
  return (
    <GlobalProvider >
      <Header />
      <div className='container'>
        <Bal/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
    
  );
}

export default App;
