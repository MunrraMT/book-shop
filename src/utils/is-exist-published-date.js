const isExistPublishedDate = (bookActual) =>
  bookActual.volumeInfo.publishedDate || 'Sem data de publicação';

export default isExistPublishedDate;
