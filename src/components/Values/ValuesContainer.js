import { connect } from 'react-redux';
import Values from './Values';
import budgetSelectors from '../../redux/budgetSelectors';

const mapStateToProps = state => {
  return {
    budget: budgetSelectors.getBudget(state),
    expenses: budgetSelectors.getTotalExpenses(state),
    balance:
      budgetSelectors.getBudget(state) -
      budgetSelectors.getTotalExpenses(state),
  };
};

export default connect(mapStateToProps)(Values);
