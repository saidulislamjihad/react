import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem'

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
