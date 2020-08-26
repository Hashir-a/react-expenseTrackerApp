import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpanses from './components/IncomeExpenses';
import TransactionsList from './components/TransactionsList';
import AddTransaction from './components/AddTransaction';
import './App.css';
import {GlobalProvider} from './context/GlobalState';
function App() {
  return (
      <GlobalProvider>
        <div className = "container" className ="corner">
          <Header/>
          <Balance/>
          <IncomeExpanses/>
          <TransactionsList/>
          <AddTransaction/>
        </div>
      </GlobalProvider>
  );
}

export default App;
