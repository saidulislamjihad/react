import React from 'react';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

function App() {
  // return React.createElement('div', {}, React.createElement(Expenses));

  return (
    <div>
      <NewExpense />
      <Expenses />
    </div>
  );
}

export default App;
