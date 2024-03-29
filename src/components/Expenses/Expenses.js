import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter"

function Expenses(props) {

    const [ filteredYear, setFilteredYear ] = useState('2020');

    const filterChangeHandler = selectedYear =>{
        setFilteredYear(selectedYear);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler} />
            {props.items.map((expense) => (
               <ExpenseItem
                  key={expense.id}
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date}
               /> 
            ))}
        </Card>
    )
}

export default Expenses;