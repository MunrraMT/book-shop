const isExistPublisher = (bookActual) =>
  bookActual.volumeInfo.publisher || 'Sem editora';

export default isExistPublisher;
