import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
    const items = props.expenses.map(
        (item) => {
            return <ExpenseItem key={item.title} title={item.title} amount={item.amount} date={item.date}/> }
    )
    return (
        <Card className="expenses" >
            {items}
        </Card>
    )
};

export default Expenses;