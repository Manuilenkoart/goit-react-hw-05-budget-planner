const getAllExpenses = state => state.expenses;
const getBudget = state => {
  return state.budget;
};

const getTotalExpenses = state =>
  state.expenses.reduce((total, expense) => total + expense.amount, 0);

export default { getAllExpenses, getBudget, getTotalExpenses };
