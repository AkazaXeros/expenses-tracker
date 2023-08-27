const ExpensesFilter = ({ selectedOption, handleSelectChange }) => {
  return (
    <div className="mb-3">
      <select
        value={selectedOption}
        onChange={handleSelectChange}
        name="all-category-select"
        id="all-category"
        className="form-select"
        aria-label="Default select example"
      >
        <option value="">All categories</option>
        <option value="Grocery">Grocery</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
      </select>
    </div>
  );
};

export default ExpensesFilter;
