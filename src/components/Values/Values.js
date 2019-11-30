import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';
import Value from './Value';

const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const Values = ({ budget, expenses, balance }) => (
  <Container>
    <Value label="Budget" value={budget} isPositive />
    <Value label="Expenses" value={expenses} />
    <Value label="Balance" value={balance} isPositive={balance >= 0} />
  </Container>
);
Values.propTypes = {
  budget: T.number.isRequired,
  expenses: T.number.isRequired,
  balance: T.number.isRequired,
};
export default Values;
