import isExistAuthor from '../../utils/is-exist-author';
import isExistCategories from '../../utils/is-exist-categories';
import isExistDescription from '../../utils/is-exist-description';
import isExistLanguage from '../../utils/is-exist-language.js';
import isExistPrice from '../../utils/is-exist-price';
import isExistPublishedDate from '../../utils/is-exist-published-date';
import isExistPublisher from '../../utils/is-exist-publisher';
import isExistTitle from '../../utils/is-exist-title';
import ImageContainer from '../utils/image-container';

const DetailBook = ({ book }) => (
  <article>
    <header>
      <ImageContainer book={book} />
      <section>
        <p>Título do livro: {isExistTitle(book)}</p>
        <p>Autor(es): {isExistAuthor(book)}</p>
        <p>Editora: {isExistPublisher(book)}</p>
        <p>Ano de publicação{isExistPublishedDate(book).slice(0, 4)}</p>
        <p>Categoria(s): {isExistCategories(book)}</p>
        <p>Idioma do livro: {isExistLanguage(book)}</p>
      </section>
    </header>

    <p>Resumo: {isExistDescription(book)} </p>

    <footer>
      Valor: {isExistPrice(book)}
      <section>
        <button type='button'>Favoritar</button>
        <button type='button'>Comprar</button>
      </section>
    </footer>
  </article>
);

export default DetailBook;
