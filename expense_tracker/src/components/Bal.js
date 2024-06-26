import React, { useContext } from 'react';
import { GlobalContext } from './context/Globalstate';

export const Bal = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
        <h4>Your Balance</h4>
        <h1>&#8377; {total}</h1>    
    </>
  );
};

export default Bal; 
