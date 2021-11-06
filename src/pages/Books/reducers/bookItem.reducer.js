import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { getBookDetails } from '../../../api/books';

export const baseURL = 'https://fakerestapi.azurewebsites.net/api/v1';

export const fetchBook = createAsyncThunk('book/fetchBook', async (bookId) => {
  try {
    const { data } = await axios.get(`${baseURL}/books/${bookId}`);

    return data;
  } catch (error) {
    return error;
  }
});

const initialState = {
  data: {},
  loading: true,
  error: false,
};

const bookItemSlice = createSlice({
  name: 'bookItemSlice',
  initialState,
  extraReducers: {
    [fetchBook.pending]: (state) => {
      state.error = false;
      state.loading = true;
    },
    [fetchBook.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [fetchBook.rejected]: (state) => {
      state.loading = false;
      state.error = 'true';
    },
  },
});

export default bookItemSlice.reducer;
