import { ADD_EXPENSE, REMOVE_EXPENSE } from '../budgetTypes';

const expenseReducers = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_EXPENSE:
      return [...state, payload.expenses];

    case REMOVE_EXPENSE:
      return state.filter(expense => expense.id !== payload.id);

    default:
      return state;
  }
};
export default expenseReducers;
