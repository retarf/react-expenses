import './ExpensesFilter.css';

const ExpensesFilter = (props) => {


    const YearArray = [2022, 2021, 2020, 2019]
    const YearOptions = YearArray.map(i => {
           return <option key={i} value={i}>{i}</option>
    });

    const selectHandler = (event) => {
        props.onFilterChange(event.target.value);
    };

    //<select value={filteredYear} onChange={selectHandler}>

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={selectHandler}>
            {YearOptions}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;