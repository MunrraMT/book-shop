import formatPrice from '../../utils/format-price';

const isExistAuthor = (bookActual) => {
  if (bookActual.volumeInfo.authors[0] === undefined) {
    return 'Sem autor';
  }

  return bookActual.volumeInfo.authors[0];
};

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

const isExistTitle = (bookActual) => {
  if (bookActual.volumeInfo.title === undefined) {
    return 'Sem título';
  }

  return bookActual.volumeInfo.title;
};

export { isExistAuthor, isExistPrice, isExistThumbnail, isExistTitle };
