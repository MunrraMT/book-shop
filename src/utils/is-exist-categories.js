const isExistCategories = (bookActual) =>
  bookActual.volumeInfo.categories || 'Sem categoria';

export default isExistCategories;
