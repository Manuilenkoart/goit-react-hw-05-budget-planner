import { connect } from 'react-redux';
import Values from './Values';
import budgetSelectors from '../../redux/budgetSelectors';

const mapStateToProps = state => {
  return {
    budget: budgetSelectors.getBudget(state),
    expenses: budgetSelectors.getTotalExpenses(state),
    balance: budgetSelectors.currentBalance(state),
  };
};

export default connect(mapStateToProps)(Values);
