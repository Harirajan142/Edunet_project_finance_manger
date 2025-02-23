import React from 'react'
import { Link } from 'react-router-dom'

const ExpenseList = () => {
  
  const expenses = [
    { id: 1, name: 'Groceries', amount: 50 },
    { id: 2, name: 'Rent', amount: 500 },
    { id: 3, name: 'Utilities', amount: 100 },
  ]

  return (
    <div>
      <h1>Expense List</h1>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>
            {expense.name}: ${expense.amount}
            <Link to={`/edit/${expense.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ExpenseList
