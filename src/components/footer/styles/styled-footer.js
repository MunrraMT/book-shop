import styled from 'styled-components';
import FooterCount from './footer-count';
import FooterItem from './footer-item';
import FooterList from './footer-list';

const StyledFooter = styled.footer`
  background-color: var(--color-background-dark);
  width: 100vw;
  height: 5rem;

  position: fixed;
  bottom: 0;
  left: 0;
`;

StyledFooter.List = FooterList;
StyledFooter.Item = FooterItem;
StyledFooter.Count = FooterCount;

export default StyledFooter;
