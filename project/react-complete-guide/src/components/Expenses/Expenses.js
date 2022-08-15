import React from "react";
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {

    const [filteredYear, setfilteredYear] = useState('2022');

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    const items = filteredExpenses.map(
        (item) => {
            return <ExpenseItem key={item.title} title={item.title} amount={item.amount} date={item.date}/> }
    );

    const filterChangeHandler = selectedYear => {
        console.log(selectedYear);
        setfilteredYear(selectedYear);
    };

    return (
        <div>
            <Card className="expenses" >
                <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                {items}
            </Card>
        </div>
    )
};

export default Expenses;