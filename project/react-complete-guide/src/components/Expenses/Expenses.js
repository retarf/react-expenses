import React from "react";
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
    const items = props.expenses.map(
        (item) => {
            return <ExpenseItem key={item.title} title={item.title} amount={item.amount} date={item.date}/> }
    );

    const [filteredYear, setfilteredYear] = useState('2022');

    const filterChangeHandler = selectedYear => {
        console.log(selectedYear);
        setfilteredYear(selectedYear);
    };

    return (
        <div>
            <Card className="expenses" >
                <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler} />
                {items}
            </Card>
        </div>
    )
};

export default Expenses;