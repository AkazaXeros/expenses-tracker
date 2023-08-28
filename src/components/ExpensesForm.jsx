import { useForm } from 'react-hook-form';

const ExpensesForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
    watch
  } = useForm({
    mode: 'onChange'
  }); // Nested destructuring

  return (
    <div className="mb-5">
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
        className="main-form"
      >
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register('description', { 
              required: 'The description field is required.', 
              minLength: {
                value: 3,
                message: 'The description must have at least 3 characters.'
              } 
            })}
            id="description"
            type="text"
            className="form-control"
          />

          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register('amount', { required: 'The amount field is required.', valueAsNumber: true, 
            validate: (value) => {
              const isPositive = !isNaN(parseInt(value)) && parseInt(value) >= 0;
              return isPositive ? true : "The amount field must be positive";
            }
            })}
            id="amount"
            type="number"
            min={0}
            step="any"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>

          <select
            id="category"
            className="form-select"
            aria-label="Default select example"
            {...register('category')}
          >
            <option value="None">None</option>
            <option value="Grocery">Grocery</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </div>

        <button disabled={!isValid} className="btn btn-primary" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default ExpensesForm;
