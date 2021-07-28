import LazyLoad from 'react-lazyload';
import {
  isExistAuthor,
  isExistPrice,
  isExistThumbnail,
  isExistTitle
} from '../../utils/books-is-valid';
import randomNumber from '../../utils/random-number';
import showAuthorsNames from '../books-by-author/logic/show-author-names';
import Loading from '../utils/loading/loading';
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
          <LazyLoad
            key={randomNumber()}
            once
            scroll
            debounce={200}
            offset={100}
            height={50}
            placeholder={<Loading />}
          >
            <StyledBookFormated.Img
              key={randomNumber()}
              height='192'
              width='128'
              src={`${isExistThumbnail(book)}`}
              alt={`capa do livro, ${isExistTitle(book)}`}
            />
          </LazyLoad>
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
