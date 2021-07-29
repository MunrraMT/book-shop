const isExistAuthor = (bookActual) =>
  bookActual.volumeInfo.authors || 'Sem autor';

export default isExistAuthor;
