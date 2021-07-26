import Loading from '../../../utils/loading';

const booksAuthorTitle = (books) => {
  if (books.length === 0) return <Loading />;

  return books[0].volumeInfo.authors[0];
};

export default booksAuthorTitle;
