const isExistDescription = (bookActual) =>
  bookActual.volumeInfo.description || 'Sem descrição';

export default isExistDescription;
