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

const StyledViewerByAuthor = styled.article`
  background-color: var(--color-background-light);
  padding: 1rem;
  padding-top: 0;
  width: 100vw;
`;

StyledViewerByAuthor.Title = ViewerAuthorTitle;
StyledViewerByAuthor.BooksList = ViewerAuthorBooksList;
StyledViewerByAuthor.BookLink = ViewerAuthorBookLink;
StyledViewerByAuthor.BookContainer = ViewerAuthorBookContainer;
StyledViewerByAuthor.BookImg = ViewerAuthorBookImg;
StyledViewerByAuthor.BookTitle = ViewerAuthorBookTitle;
StyledViewerByAuthor.BookAuthor = ViewerAuthorBookAuthor;
StyledViewerByAuthor.BookPrice = ViewerAuthorPrice;
StyledViewerByAuthor.More = ViewerAuthorMore;

export default StyledViewerByAuthor;
