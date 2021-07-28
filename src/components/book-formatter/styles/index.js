import styled from 'styled-components';
import BookAuthor from './book-author';
import BookFigure from './book-figure';
import BookImg from './book-img';
import BookLink from './book-link';
import BookPrice from './book-price';
import BookFigCaption from './book-title';

const StyledBookFormated = styled.li`
  background-color: var(--color-background-light);
  box-shadow: 2rem 2rem 1rem solid black;
  width: 9.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  border-radius: ${(props) => (props.search ? '1rem' : '0rem')};

  img {
    border-top-left-radius: ${(props) => (props.search ? '0.5rem' : '0rem')};
    border-top-right-radius: ${(props) => (props.search ? '0.5rem' : '0rem')};
  }

  &:hover {
    box-shadow: ${(props) =>
      props.search
        ? 'inset 0 0 0.5rem var(--color-focus),0 0 2rem var(--color-focus-dark)'
        : 'none'};
  }

  & a:hover figure,
  & a:focus figure {
    outline: ${(props) =>
      props.search ? 'none' : '2px solid var(--color-focus)'};
    outline-offset: ${(props) => (props.search ? 'none' : '4px')};
  }
`;

StyledBookFormated.Author = BookAuthor;
StyledBookFormated.Figure = BookFigure;
StyledBookFormated.Img = BookImg;
StyledBookFormated.Price = BookPrice;
StyledBookFormated.FigCaption = BookFigCaption;
StyledBookFormated.Link = BookLink;

export default StyledBookFormated;
