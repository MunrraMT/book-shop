import { useContext } from 'react';
import BooksByAuthor from '../components/books-by-author';
import BooksBySearch from '../components/books-by-search';
import Header from '../components/header';
import { DataContext } from '../providers/data-context';
import randomNumber from '../utils/random-number';

const BooksPage = () => {
  const { textSearch } = useContext(DataContext);
  const maxBooks = 4;

  return (
    <>
      <Header />
      <main>
        {textSearch === '' ? (
          <>
            <BooksByAuthor
              key={randomNumber()}
              author='jung'
              maxBooks={maxBooks}
            />
            <BooksByAuthor
              key={randomNumber()}
              author='freud'
              maxBooks={maxBooks}
            />
            <BooksByAuthor
              key={randomNumber()}
              author='descartes'
              maxBooks={maxBooks}
            />
            <BooksByAuthor
              key={randomNumber()}
              author='kant'
              maxBooks={maxBooks}
            />
          </>
        ) : (
          <BooksBySearch />
        )}
      </main>
    </>
  );
};

export default BooksPage;
