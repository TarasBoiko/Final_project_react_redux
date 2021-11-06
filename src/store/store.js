import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import bookListReducer from '../pages/Books/reducers/bookList.reducer';
import bookItemReducer from '../pages/Books/reducers/bookItem.reducer';

const store = configureStore({
  reducer: {
    booksReducer: combineReducers({ bookListReducer, bookItemReducer }),
  },
});

export default store;
