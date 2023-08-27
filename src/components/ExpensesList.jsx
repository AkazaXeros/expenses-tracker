import { formatCurrency } from '../utils/number';

const ExpensesList = ({ products, onDelete, selectedOption }) => {
  const filteredProducts = products.filter((product) =>
    product.category.includes(selectedOption)
  );

  const totalPrice = filteredProducts.reduce(
    (acc, product) => acc + parseFloat(product.amount),
    0
  );

  return (
    <section className="expenses-list">
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.map((product, i) => (
              <tr key={i}>
                <td>{product.description}</td>
                <td>${formatCurrency(product.amount)}</td>
                <td>{product.category}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => onDelete(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          {filteredProducts.length > 0 && (
            <tfoot>
              <tr>
                <td>Total</td>
                <td>${formatCurrency(totalPrice)}</td>
                <td></td>
                <td></td>
              </tr>
            </tfoot>
          )}
        </table>
      </div>
    </section>
  );
};

export default ExpensesList;
