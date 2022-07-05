import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

function Expenses(props) {
    const expenses = props.expenses.map(
        (expense) => {
            return <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>
        }
    )
    return (
        <Card className="expenses" >
            {expenses}
        </Card>
    )
};

export default Expenses;