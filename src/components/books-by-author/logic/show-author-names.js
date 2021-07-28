import { isExistAuthor } from '../../../utils/books-is-valid';
import randomNumber from '../../../utils/random-number';

const showAuthorsNames = (book) =>
  isExistAuthor(book).map((nome) => <p key={randomNumber()}>{nome}</p>);

export default showAuthorsNames;
