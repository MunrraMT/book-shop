import { useContext } from 'react';
import BooksByAuthor from '../components/books-by-author';
import BooksBySearch from '../components/books-by-search';
import Header from '../components/header';
import { DataContext } from '../providers/data-context';

const BooksPage = () => {
  const { textSearch } = useContext(DataContext);
  const maxBooks = 4;

  return (
    <>
      <Header />
      <main>
        {textSearch === '' ? (
          <>
            <BooksByAuthor author='jung' maxBooks={maxBooks} />
            <BooksByAuthor author='freud' maxBooks={maxBooks} />
            <BooksByAuthor author='descartes' maxBooks={maxBooks} />
            <BooksByAuthor author='kant' maxBooks={maxBooks} />
          </>
        ) : (
          <BooksBySearch />
        )}
      </main>
    </>
  );
};

export default BooksPage;
