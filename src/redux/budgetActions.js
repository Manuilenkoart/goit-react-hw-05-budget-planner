import shortid from 'shortid';
import { ADD_BUDGET, ADD_EXPENSE, REMOVE_EXPENSE } from './budgetTypes';

const addBudget = amount => {
  return {
    type: ADD_BUDGET,
    payload: {
      amount: Number(amount),
    },
  };
};

const addExpense = ({ name, amount }) => {
  return {
    type: ADD_EXPENSE,
    payload: {
      expenses: {
        id: shortid.generate(),
        name,
        amount: Number(amount),
      },
    },
  };
};
const removeExpense = id => {
  return {
    type: REMOVE_EXPENSE,
    payload: {
      id,
    },
  };
};
export default {
  addBudget,
  addExpense,
  removeExpense,
};
