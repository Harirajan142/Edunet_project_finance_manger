const TRANSACTION_LIMIT = 5000;

function updateTotals() {
  const incomeElements = document.querySelectorAll('.transaction-income .transaction-amount');
  const expenseElements = document.querySelectorAll('.transaction-expense .transaction-amount');
  
  let totalIncome = 0;
  let totalExpenses = 0;

  incomeElements.forEach(element => {
    totalIncome += parseFloat(element.textContent.replace('$', ''));
  });

  expenseElements.forEach(element => {
    totalExpenses += parseFloat(element.textContent.replace('$', '').replace('-', ''));
  });

  const total = totalIncome + totalExpenses;
  const incomePercentage = (totalIncome / total) * 100;
  const expensePercentage = (totalExpenses / total) * 100;

  const incomeTotal = document.querySelector('.total-income');
  const expenseTotal = document.querySelector('.total-expenses');
  const percentageText = document.querySelector('.percentage-text');

  incomeTotal.textContent = `Total Income: $${totalIncome.toFixed(2)} (${incomePercentage.toFixed(2)}%)`;
  expenseTotal.textContent = `Total Expenses: $${totalExpenses.toFixed(2)} (${expensePercentage.toFixed(2)}%)`;
  percentageText.textContent = `Income: ${incomePercentage.toFixed(2)}% | Expenses: ${expensePercentage.toFixed(2)}%`;

  checkTransactionLimit(totalExpenses);
}

function checkTransactionLimit(totalExpenses) {
  if (totalExpenses > TRANSACTION_LIMIT) {
    alert('Warning: The transaction limit is exceeded!');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateTotals();
  console.log('DOM fully loaded and parsed');
});
