const isExistTitle = (bookActual) =>
  bookActual.volumeInfo.title || 'Sem título';

export default isExistTitle;
