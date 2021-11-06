import { createSelector } from 'reselect';

const bookListStateSelector = (state) => state.booksReducer.bookListReducer;

export const bookListSelector = createSelector(
  bookListStateSelector,
  (state) => state.booksList
);
export const loadingSelector = createSelector(
  bookListStateSelector,
  (state) => state.loading
);
export const currentPageSelector = createSelector(
  bookListStateSelector,
  (state) => state.currentPage
);
export const postPerPageSelector = createSelector(
  bookListStateSelector,
  (state) => state.postPerPage
);
export const errorSelector = createSelector(
  bookListStateSelector,
  (state) => state.error
);
