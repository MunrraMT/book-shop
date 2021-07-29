import isExistAuthor from '../../../utils/is-exist-author';
import randomNumber from '../../../utils/random-number';

const showAuthorsNames = (book) =>
  isExistAuthor(book).map((nome) => <p key={randomNumber()}>{nome}</p>);

export default showAuthorsNames;
