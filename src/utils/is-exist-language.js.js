const isExistLanguage = (bookActual) =>
  bookActual.volumeInfo.language || 'Sem informação de idioma';

export default isExistLanguage;
