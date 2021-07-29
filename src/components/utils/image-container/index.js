import LazyLoad from 'react-lazyload';
import isExistThumbnail from '../../../utils/is-exist-thumbnail';
import isExistTitle from '../../../utils/is-exist-title';
import randomNumber from '../../../utils/random-number';
import Loading from '../loading';

const ImageContainer = ({ book }) => (
  <LazyLoad
    key={randomNumber()}
    once
    scroll
    debounce={200}
    offset={100}
    height={50}
    placeholder={<Loading />}
  >
    <img
      key={randomNumber()}
      height='192'
      width='128'
      src={`${isExistThumbnail(book)}`}
      alt={`capa do livro, ${isExistTitle(book)}`}
    />
  </LazyLoad>
);

export default ImageContainer;
