import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBooks } from '../../../api/books';

export const fetchBooks = createAsyncThunk('book/fetchBooks', async () => {
  try {
    const data = await getBooks();

    return data;
  } catch (error) {
    return error;
  }
});

const bookSlice = createSlice({
  name: 'bookList',
  initialState: {
    booksList: [],
    currentPage: 1,
    postPerPage: 5,
    loading: true,
    error: false,
  },

  reducers: {
    changeCurrentPage: (state, action) => {
      state.currentPage = action.payload;
      return state;
    },
  },
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.loading = false;
      state.booksList = action.payload;
    },
    [fetchBooks.rejected]: (state) => {
      state.error = 'true';
      state.loading = false;
    },
  },
});

console.log(bookSlice);

export const actions = bookSlice.actions;

export default bookSlice.reducer;
