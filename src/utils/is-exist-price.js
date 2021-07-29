import formatPrice from './format-price';

const isExistPrice = (bookActual) => {
  if (bookActual.saleInfo.listPrice === undefined) {
    return 'Não informado';
  }

  return formatPrice(bookActual.saleInfo.listPrice.amount);
};

export default isExistPrice;
