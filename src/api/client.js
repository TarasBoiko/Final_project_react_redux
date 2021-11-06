import axios from 'axios';

export const fetchBooks = axios.create({
  baseURL: 'https://fakerestapi.azurewebsites.net/api/v1',
});

fetchBooks.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const { message } = error;
    return Promise.reject(message);
  }
);

export default fetchBooks;
