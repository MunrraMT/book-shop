import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookFormatter from '../components/book-formatter';
import Loading from '../components/utils/loading/loading';
import randomNumber from '../utils/random-number';

const DetailsBookPage = () => {
  const [book, setBook] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then((response) => response.json())
      .then((data) => setBook(data));
  }, []);

  return book.length === 0 ? (
    <Loading key={randomNumber()} dark />
  ) : (
    <BookFormatter
      key={randomNumber()}
      search
      dark
      book={book}
      formattingTemplate='search'
    />
  );
};

export default DetailsBookPage;
