import React from 'react';

const ExpenseForm = ({ newExpense, handleInputChange, addExpense }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(); // Prevent page reload
        addExpense();       // Call the function to add expense
      }}
      className="space-y-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newExpense.description}
          onChange={handleInputChange}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={newExpense.category}
          onChange={handleInputChange}
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={newExpense.amount || ''}
          onChange={handleInputChange}
          className="border p-2 rounded w-full"
        />
        <input
          type="date"
          name="date"
          value={newExpense.date}
          onChange={handleInputChange}
          className="border p-2 rounded w-full"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
      >
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
