import randomNumber from '../../../utils/random-number';
import Loading from '../../utils/loading/loading';

const authorAsTitle = (books) => {
  if (books.length === 0) return <Loading key={randomNumber()} />;

  return books[0].volumeInfo.authors[0];
};

export default authorAsTitle;
