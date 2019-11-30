import { connect } from 'react-redux';
import ExpensesTable from './ExpensesTable';
import budgetSelectors from '../../redux/budgetSelectors';
import budgetActions from '../../redux/budgetActions';

const mapStateToProps = state => {
  return {
    items: budgetSelectors.getAllExpenses(state),
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onRemove: id => dispatch(budgetActions.removeExpense(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
