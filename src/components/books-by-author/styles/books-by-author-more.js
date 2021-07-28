import styled from 'styled-components';

const BooksByAuthorMore = styled.button`
  padding: 0.5rem;
  margin-top: 1rem;
  color: var(--color-text);
  background: none;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;

  display: flex;
  flex-direction: row;

  &:hover {
    color: var(--color-focus);
    outline: 2px solid var(--color-focus);
    border-radius: 1rem;
  }
`;

export default BooksByAuthorMore;
