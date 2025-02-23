import React, { useState } from 'react'
import { LinearProgress, CircularProgress, Button, Modal, Box, Alert } from '@mui/material'
import './Dashboard.css' 

const Dashboard = ({ username }) => {
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)
  const [limit, setLimit] = useState(1000)
  const [transactions, setTransactions] = useState([])
  const [isIncomeModalOpen, setIsIncomeModalOpen] = useState(false)
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false)
  const [isLimitModalOpen, setIsLimitModalOpen] = useState(false)
  const [transactionType, setTransactionType] = useState('')
  const [transactionPurpose, setTransactionPurpose] = useState('')
  const [transactionAmount, setTransactionAmount] = useState('')

  const handleAddTransaction = (type) => {
    const amount = parseFloat(transactionAmount)
    if (type === 'income') {
      setIncome(income + amount)
    } else {
      setExpense(expense + amount)
    }
    setTransactions([...transactions, { type, purpose: transactionPurpose, amount }])
    setTransactionType('')
    setTransactionPurpose('')
    setTransactionAmount('')
    setIsIncomeModalOpen(false)
    setIsExpenseModalOpen(false)
  }

  const handleFilter = (type) => {
    return transactions.filter(transaction => transaction.type === type)
  }

  const handleSetLimit = () => {
    setLimit(parseFloat(transactionAmount))
    setTransactionAmount('')
    setIsLimitModalOpen(false)
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome, {username}!</h1>
        <div className="dashboard-buttons">
          <Button onClick={() => setIsIncomeModalOpen(true)}>Add Income</Button>
          <Button onClick={() => setIsExpenseModalOpen(true)}>Add Expense</Button>
          <Button onClick={() => setIsLimitModalOpen(true)}>Set Transaction Limit</Button>
        </div>
      </div>
      <div className="progress-container">
        <h2>Progress</h2>
        <LinearProgress variant="determinate" value={(expense / limit) * 100} />
        <CircularProgress variant="determinate" value={(expense / limit) * 100} />
      </div>
      {expense > income && (
        <Alert severity="warning">Expenses exceed income!</Alert>
      )}
      <div className="transaction-history">
        <h2>Transaction History</h2>
        <Button onClick={() => handleFilter('income')}>Filter Income</Button>
        <Button onClick={() => handleFilter('expense')}>Filter Expense</Button>
        <ul>
          {transactions.map((transaction, index) => (
            <li key={index}>{transaction.type}: ${transaction.amount} - {transaction.purpose}</li>
          ))}
        </ul>
      </div>
      <Modal open={isIncomeModalOpen || isExpenseModalOpen} onClose={() => { setIsIncomeModalOpen(false); setIsExpenseModalOpen(false); }}>
        <Box>
          <h2>{isIncomeModalOpen ? 'Add Income' : 'Add Expense'}</h2>
          <form onSubmit={(e) => { e.preventDefault(); handleAddTransaction(isIncomeModalOpen ? 'income' : 'expense'); }}>
            <div>
              <label>Type:</label>
              <select value={transactionType} onChange={(e) => setTransactionType(e.target.value)}>
                <option value="cash">Cash</option>
                <option value="online">Online</option>
              </select>
            </div>
            <div>
              <label>Purpose:</label>
              <input type="text" value={transactionPurpose} onChange={(e) => setTransactionPurpose(e.target.value)} />
            </div>
            <div>
              <label>Amount:</label>
              <input type="number" value={transactionAmount} onChange={(e) => setTransactionAmount(e.target.value)} />
            </div>
            <Button type="submit">Add</Button>
          </form>
        </Box>
      </Modal>
      <Modal open={isLimitModalOpen} onClose={() => setIsLimitModalOpen(false)}>
        <Box>
          <h2>Set Transaction Limit</h2>
          <form onSubmit={(e) => { e.preventDefault(); handleSetLimit(); }}>
            <div>
              <label>Amount:</label>
              <input type="number" value={transactionAmount} onChange={(e) => setTransactionAmount(e.target.value)} />
            </div>
            <Button type="submit">Set Limit</Button>
          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default Dashboard
