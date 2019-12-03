const getBudget = state => state.budget;
const getAllExpenses = state => state.expenses;

const getTotalExpenses = state =>
  state.expenses.reduce((total, expense) => total + expense.amount, 0);

const currentBalance = state => {
  const budget = getBudget(state);
  const expenses = getTotalExpenses(state);
  return budget - expenses;
};

export default { getAllExpenses, getBudget, getTotalExpenses, currentBalance };
