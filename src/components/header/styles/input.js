import styled from 'styled-components';

const Input = styled.input`
  background-color: #44475a;
  padding: 0.5rem;
  margin-bottom: 0.75rem;
  margin-top: 0.75rem;
  text-indent: 0.5rem;
  width: 70vw;
  border: none;
  color: #f8f8f2;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;

  &:focus + span,
  &:focus {
    border: 2px solid blue;
    margin-bottom: calc(0.75rem - 2px);
    margin-top: calc(0.75rem - 2px);
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
