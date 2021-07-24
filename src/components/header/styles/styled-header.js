import styled from 'styled-components';
import HeaderForm from './header-form';
import ByGoogle from './header-google';
import HeaderInput from './header-input';
import HeaderLabel from './header-label';
import HeaderSpan from './header-span';
import HeaderTitle from './header-title';

const StyledHeader = styled.header`
  background-color: var(--color-background-dark);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

StyledHeader.Title = HeaderTitle;
StyledHeader.Label = HeaderLabel;
StyledHeader.Input = HeaderInput;
StyledHeader.Span = HeaderSpan;
StyledHeader.Form = HeaderForm;
StyledHeader.ByGoogle = ByGoogle;

export default StyledHeader;
