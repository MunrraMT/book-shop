import {
  isExistAuthor,
  isExistPrice,
  isExistTitle
} from '../../utils/books-is-valid';
import randomNumber from '../../utils/random-number';
import ImageContainer from '../utils/image-container';
import showAuthorsNames from '../books-by-author/logic/show-author-names';
import StyledBookFormated from './styles';

const BookFormatter = ({ book, formattingTemplate, search }) => {
  const author = () => {
    if (formattingTemplate === 'author') return showAuthorsNames(book);
    if (formattingTemplate === 'search') return isExistAuthor(book);
    return 'Sem autor';
  };

  return (
    <StyledBookFormated search={search} key={randomNumber()}>
      <StyledBookFormated.Link key={randomNumber()} href={`/detail/${book.id}`}>
        <StyledBookFormated.Figure key={randomNumber()}>
          <ImageContainer book={book} />
          <StyledBookFormated.FigCaption key={randomNumber()}>
            {isExistTitle(book)}
          </StyledBookFormated.FigCaption>
          <StyledBookFormated.Author key={randomNumber()}>
            {author()}
          </StyledBookFormated.Author>
          <StyledBookFormated.Price key={randomNumber()}>
            {isExistPrice(book)}
          </StyledBookFormated.Price>
        </StyledBookFormated.Figure>
      </StyledBookFormated.Link>
    </StyledBookFormated>
  );
};

export default BookFormatter;
