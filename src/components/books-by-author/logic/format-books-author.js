import Loading from '../../utils/loading/loading';
import BookFormatter from '../../book-formatter';

const formatBooksAuthor = (books) => {
  if (books.length === 0) return <Loading />;

  const booksList = books.map((book) => (
    <BookFormatter book={book} formattingTemplate='author' />
  ));

  return booksList;
};

export default formatBooksAuthor;
