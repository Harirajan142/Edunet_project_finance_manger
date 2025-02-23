import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const EditExpense = () => {
  const { id } = useParams()
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')

  useEffect(() => {
    const expense = { id, name: 'Groceries', amount: 50 }
    setName(expense.name)
    setAmount(expense.amount)
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Expense edited:', { id, name, amount })
  }

  return (
    <div>
      <h1>Edit Expense</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Amount:</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <button type="submit">Edit Expense</button>
      </form>
    </div>
  )
}

export default EditExpense
