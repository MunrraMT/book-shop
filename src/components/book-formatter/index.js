import LazyLoad from 'react-lazyload';
import {
  isExistAuthor,
  isExistPrice,
  isExistThumbnail,
  isExistTitle
} from '../../utils/books-is-valid';
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
    <StyledBookFormated search={search} key={book.id}>
      <StyledBookFormated.Link href={`/detail/${book.id}`}>
        <StyledBookFormated.Figure>
          <LazyLoad
            once
            scroll
            debounce={200}
            offset={100}
            key={book.id}
            height={50}
            placeholder={<Loading />}
          >
            <StyledBookFormated.Img
              height='192'
              width='128'
              src={`${isExistThumbnail(book)}`}
              alt={`capa do livro, ${isExistTitle(book)}`}
            />
          </LazyLoad>
          <StyledBookFormated.FigCaption>
            {isExistTitle(book)}
          </StyledBookFormated.FigCaption>
          <StyledBookFormated.Author>{author()}</StyledBookFormated.Author>
          <StyledBookFormated.Price>
            {isExistPrice(book)}
          </StyledBookFormated.Price>
        </StyledBookFormated.Figure>
      </StyledBookFormated.Link>
    </StyledBookFormated>
  );
};

export default BookFormatter;
