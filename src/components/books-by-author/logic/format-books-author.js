import Loading from '../../utils/loading/loading';
import BookFormatter from '../../book-formatter';
import randomNumber from '../../../utils/random-number';

const formatBooksAuthor = (books) => {
  if (books.length === 0) return <Loading key={randomNumber()} />;

  const booksList = books.map((book) => (
    <BookFormatter
      key={randomNumber()}
      book={book}
      formattingTemplate='author'
    />
  ));

  return booksList;
};

export default formatBooksAuthor;
