import './App.css';

import { useEffect, useState } from 'react';

import ExpensesFilter from './components/ExpensesFilter';
import ExpensesForm from './components/ExpensesForm';
import ExpensesList from './components/ExpensesList';
import Header from './components/Header';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    const storedData = localStorage.getItem('expenses');
    // console.log(storedData);
    storedData && setProducts(JSON.parse(storedData));
  }, []);

  const onSubmit = (data) => {
    const newState = [...products, { ...data, id: products.length + 1 }];

    setProducts(newState);

    localStorage.setItem('expenses', JSON.stringify(newState));
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const onDelete = (productId) => {
    setProducts(products.filter((p) => p.id !== productId));
  };

  return (
    <>
      <Header />
      <main>
        <ExpensesForm onSubmit={onSubmit}></ExpensesForm>

        <ExpensesFilter
          handleSelectChange={handleSelectChange}
          selectedOption={selectedOption}
        />

        <ExpensesList
          products={products}
          onDelete={onDelete}
          selectedOption={selectedOption}
        />
      </main>

      <footer>©Will {new Date().getFullYear()} All rights reserved.</footer>
    </>
  );
}

export default App;
