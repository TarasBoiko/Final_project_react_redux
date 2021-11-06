import fetchBooks from './client';

export const getBooks = () => {
  return fetchBooks.get('/Books');
};

export const getBookDetails = (id) => {
  return fetchBooks.get(`/Books/${id}`);
};
