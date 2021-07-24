import styled from 'styled-components';

const ViewerAuthorBookLink = styled.a`
  text-decoration: none;
  margin: 0.5rem;
  padding: 0.25rem;

  &:hover,
  &:focus figure {
    outline: 2px solid var(--color-focus);
  }
`;

export default ViewerAuthorBookLink;
