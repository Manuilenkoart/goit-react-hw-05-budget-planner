import { combineReducers } from 'redux';
import budgetReducer from './budgetReducer';
import expenseReducers from './expensesReducers';

export default combineReducers({
  budget: budgetReducer,
  expenses: expenseReducers,
});
