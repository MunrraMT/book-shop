import formatPrice from './format-price';

const isExistAuthor = (bookActual) =>
  bookActual.volumeInfo.authors || 'Sem autor';

const isExistPrice = (bookActual) => {
  if (bookActual.saleInfo.listPrice === undefined) {
    return 'Não informado';
  }

  return formatPrice(bookActual.saleInfo.listPrice.amount);
};

const isExistThumbnail = (bookActual) => {
  if (bookActual.volumeInfo.imageLinks === undefined) {
    return './no-image.webp';
  }

  return bookActual.volumeInfo.imageLinks.thumbnail;
};

const isExistTitle = (bookActual) =>
  bookActual.volumeInfo.title || 'Sem título';

export { isExistAuthor, isExistPrice, isExistThumbnail, isExistTitle };
