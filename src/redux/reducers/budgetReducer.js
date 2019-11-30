import { ADD_BUDGET } from '../budgetTypes';

const budgetReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case ADD_BUDGET:
      return payload.amount;

    default:
      return state;
  }
};

export default budgetReducer;
