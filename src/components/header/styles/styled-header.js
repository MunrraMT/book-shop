import styled from 'styled-components';
import Form from './form';
import Input from './input';
import Label from './label';
import Span from './span';
import Title from './title';

const StyledHeader = styled.header`
  background-color: #282a36;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

StyledHeader.Title = Title;
StyledHeader.Label = Label;
StyledHeader.Input = Input;
StyledHeader.Span = Span;
StyledHeader.Form = Form;

export default StyledHeader;
