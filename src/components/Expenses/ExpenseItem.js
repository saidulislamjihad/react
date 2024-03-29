import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";
import './ExpenseItem.css'

function ExpenseItem(props) {
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2 className='expense-item-name'>
                    {props.title}
                </h2>
                <p className='expense-item__price'>
                    $ {props.amount}
                </p>
            </div>
        </Card>
    )
}

export default ExpenseItem;