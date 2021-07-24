import styled from 'styled-components';
import ViewerAuthorMore from './viewer-author-more';
import ViewerAuthorBookAuthor from './viewer-author-book-author';
import ViewerAuthorBookContainer from './viewer-author-book-container';
import ViewerAuthorBookImg from './viewer-author-book-img';
import ViewerAuthorPrice from './viewer-author-book-price';
import ViewerAuthorBookTitle from './viewer-author-book-title';
import ViewerAuthorBooksList from './viewer-author-books-list';
import ViewerAuthorTitle from './viewer-author-title';
import ViewerAuthorBookLink from './viewer-author-book-link';
import ViewerAuthorBookItem from './viewer-author-book-item';

const StyledViewerByAuthor = styled.article`
  background-color: var(--color-background-light);
  padding: 1rem;
  padding-top: 0;
  width: calc(100vw - 2rem);
  border-radius: 1rem;

  margin: 0 auto;
  margin-bottom: 2rem;

  &:last-of-type {
    margin-bottom: 5rem;
  }
`;

StyledViewerByAuthor.Title = ViewerAuthorTitle;
StyledViewerByAuthor.BooksList = ViewerAuthorBooksList;
StyledViewerByAuthor.BookLink = ViewerAuthorBookLink;
StyledViewerByAuthor.BookContainer = ViewerAuthorBookContainer;
StyledViewerByAuthor.BookImg = ViewerAuthorBookImg;
StyledViewerByAuthor.BookTitle = ViewerAuthorBookTitle;
StyledViewerByAuthor.BookAuthor = ViewerAuthorBookAuthor;
StyledViewerByAuthor.BookPrice = ViewerAuthorPrice;
StyledViewerByAuthor.Item = ViewerAuthorBookItem;
StyledViewerByAuthor.More = ViewerAuthorMore;

export default StyledViewerByAuthor;
