import styled from 'styled-components';

const StyledBooksBySearch = styled.ul`
  padding: 2rem;

  display: grid;
  grid-template-columns: repeat(auto-fill, 8rem);
  gap: 2rem;
  place-content: center;
`;

export default StyledBooksBySearch;
