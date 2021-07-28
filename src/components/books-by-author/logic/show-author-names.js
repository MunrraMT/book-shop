import { isExistAuthor } from '../../../utils/books-is-valid';

const showAuthorsNames = (book) =>
  isExistAuthor(book).map((nome, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <p key={`${book.id}-${index}`}>{nome}</p>
  ));

export default showAuthorsNames;
