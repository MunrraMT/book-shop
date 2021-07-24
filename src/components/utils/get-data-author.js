import getFetch from './fetch';

const getDataAuthor = async (author, maxResults) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}&maxResults=${maxResults}&langRestric=pt-BR&orderBy=relevance`;
  const data = await getFetch(url);
  const books = await data.items;

  return books;
};

export default getDataAuthor;
