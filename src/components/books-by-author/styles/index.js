import styled from 'styled-components';
import BooksByAuthorUL from './books-by-author-list';
import BooksByAuthorMore from './books-by-author-more';
import BooksByAuthorTitle from './books-by-author-title';

const StyledBooksByAuthor = styled.article`
  background-color: var(--color-background-light);
  padding: 1rem;
  padding-top: 0;
  width: calc(100vw - 2rem);
  border-radius: 1rem;

  margin: 0 auto;
  margin-bottom: 2rem;

  &:first-child {
    margin-top: 2rem;
  }

  &:last-child {
    margin-bottom: 6rem;
  }
`;

StyledBooksByAuthor.Title = BooksByAuthorTitle;
StyledBooksByAuthor.Ul = BooksByAuthorUL;
StyledBooksByAuthor.More = BooksByAuthorMore;

export default StyledBooksByAuthor;
