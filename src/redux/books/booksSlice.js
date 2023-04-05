import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  isLoading: false,
};

const BooksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.books = [...state.books, action.payload];
    },
    removeBook: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = BooksSlice.actions;

export default BooksSlice.reducer;
