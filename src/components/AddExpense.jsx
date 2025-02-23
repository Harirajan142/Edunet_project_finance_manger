import React, { useState } from 'react'

const AddExpense = () => {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    console.log('Expense added:', { name, amount })
  }

  return (
    <div>
      <h1>Add Expense</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Amount:</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  )
}

export default AddExpense
