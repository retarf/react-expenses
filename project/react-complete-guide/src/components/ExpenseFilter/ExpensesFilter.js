import './ExpensesFilter.css';
import {useState} from "react";

const ExpensesFilter = () => {

    const [enteredYear, setEnteredYear] = useState('');

    const YearArray = [2022, 2021, 2020, 2019]
    const YearOptions = YearArray.map(i => {
           return <option key={i} value={i}>{i}</option>
    });

    const selectHandler = (event) => {
        event.preventDefault();

        setEnteredYear(event.target.value);
        const yearData = {
            year: event.target.value
        };
        console.log(yearData);

        setEnteredYear(event.target.value);
    };


  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={enteredYear} onChange={selectHandler}>
            {YearOptions}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;