// App.jsx
import React, { useState } from 'react';
import ExpenseForm from './Components/ExpenseForm';
import ExpenseTable from './Components/ExpenseTable';
import SearchBar from './Components/SearchBar';

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: '1', description: "friday's Lunch", category: 'Food', amount: 400, date: '2024-07-28' },
    { id: '2', description: 'Power Tokens', category: 'Utilities', amount: 2000, date: '2024-07-27' },
    { id: '3', description: 'Buy clothes', category: 'Clothes', amount: 5000, date: '2024-07-26' },
    { id: '4', description: 'Buy shoes', category: 'Personal', amount: 5000, date: '2024-07-25' },
    { id: '5', description: 'Buy book', category: 'Growth', amount: 10000, date: '2024-07-24' },
  ]);

  const [newExpense, setNewExpense] = useState({
    description: '',
    category: '',
    amount: '',
    date: '',
  });

  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense({
      ...newExpense,
      [name]: name === 'amount' ? parseFloat(value) || '' : value,
    });
  };

  const addExpense = () => {
    const { description, category, amount, date } = newExpense;
    if (!description || !category || !amount || !date) return;

    const newItem = {
      id: crypto.randomUUID(),
      ...newExpense,
    };
    setExpenses([...expenses, newItem]);
    setNewExpense({ description: '', category: '', amount: '', date: '' });
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-6">
          <h1 className="text-3xl font-bold">Expense Tracker</h1>
          
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="col-span-1">
            <h2 className="font-semibold mb-2">Add Expense</h2>
            <ExpenseForm
              newExpense={newExpense}
              handleInputChange={handleInputChange}
              addExpense={addExpense}
            />
          </div>

          <div className="col-span-3">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <ExpenseTable filteredExpenses={filteredExpenses} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
