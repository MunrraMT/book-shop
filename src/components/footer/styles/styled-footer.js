import styled from 'styled-components';
import Li from './li';
import Ul from './ul';

const StyledFooter = styled.footer`
  background-color: var(--color-background-dark);
  width: 100vw;
  height: 5rem;

  position: fixed;
  bottom: 0;
  left: 0;
`;

StyledFooter.Ul = Ul;
StyledFooter.Li = Li;

export default StyledFooter;
