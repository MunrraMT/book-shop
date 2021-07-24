import { useEffect, useState } from 'react';

const booksAuthorTitle = (author) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}&maxResults=1&langRestric=pt-BR&orderBy=relevance`
    )
      .then((response) => response.json())
      .then(({ items }) => setBooks(items));
  }, []);

  const booksFormated = books.map((book) => book.volumeInfo.authors[0]);

  return booksFormated;
};

export default booksAuthorTitle;
