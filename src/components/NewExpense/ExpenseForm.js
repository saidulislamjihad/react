import React, {useState} from "react";

import './ExpenseForm.css'

const ExpenseForm = () => {
    // Process 1
    const [enteredTitle, setEnterTitle] = useState('');
    const [enteredAmount, setEnterAmount] = useState('');
    const [enteredDate, setEnterDate] = useState('');

     // Process 1
    // const [ userInput , setUserInput ] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChange = (event) => {
        // Process 1
        setEnterTitle(event.target.value);

        // Process 2
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });
    }

    const amountChange = (event) => {
        // Process 1
        setEnterAmount(event.target.value);

        // Process 2
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // });
    }
    
    const dateChange = (event) => {
         // Process 1
        setEnterDate(event.target.value);

         // Process 2
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // });
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        }

        console.log(expenseData);

        setEnterTitle('');
        setEnterAmount('');
        setEnterDate('');
    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChange} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChange} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2031-12-31' value={enteredDate} onChange={dateChange} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;