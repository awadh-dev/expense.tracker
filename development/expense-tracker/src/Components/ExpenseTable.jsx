import React from 'react';

const ExpenseTable = ({ filteredExpenses }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-black text-white">
          <tr>
            <th className="py-3 px-4 border border-gray-300 text-left">#</th>
            <th className="py-3 px-4 border border-gray-300 text-left">Expense</th>
            <th className="py-3 px-4 border border-gray-300 text-left">Description</th>
            <th className="py-3 px-4 border border-gray-300 text-left">Category</th>
            <th className="py-3 px-4 border border-gray-300 text-left">Amount</th>
            <th className="py-3 px-4 border border-gray-300 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.map((expense, index) => (
            <tr key={expense.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border border-gray-300">{index + 1}</td>
              <td className="py-2 px-4 border border-gray-300">{expense.description.split(' ')[0]}</td>
              <td className="py-2 px-4 border border-gray-300">{expense.description}</td>
              <td className="py-2 px-4 border border-gray-300 capitalize">{expense.category}</td>
              <td className="py-2 px-4 border border-gray-300">Ksh {expense.amount.toLocaleString()}</td>
              <td className="py-2 px-4 border border-gray-300">{expense.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
