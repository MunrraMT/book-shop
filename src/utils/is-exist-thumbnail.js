const isExistThumbnail = (bookActual) => {
  if (bookActual.volumeInfo.imageLinks === undefined) {
    return '/no-image.webp';
  }

  return bookActual.volumeInfo.imageLinks.thumbnail;
};

export default isExistThumbnail;
