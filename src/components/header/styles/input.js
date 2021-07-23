import styled from 'styled-components';

const Input = styled.input`
  height: 2.25rem;
  width: 70vw;
  margin-bottom: 0.75rem;
  background-color: #44475a;
  padding: 0.5rem;
  text-indent: 0.5rem;
  border: none;
  color: #f8f8f2;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;

  &:focus + span,
  &:focus {
    border: 2px solid blue;
  }

  &:focus {
    outline: none;
    border-right: none;
  }

  &:focus + span {
    border-left: none;
  }
`;

export default Input;
