import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";
import './ExpenseItem.css'

function ExpenseItem(props) {
    
    const [title , setTitle] = useState(props.title)

    const clickHandeler = () => {
        setTitle('Updated!!');
        console.log(title);
    }


    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2 className='expense-item-name'>
                    {title}
                </h2>
                <p className='expense-item__price'>
                    $ {props.amount}
                </p>
            </div>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 btn btn-sm rounded ml-3' onClick={clickHandeler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;