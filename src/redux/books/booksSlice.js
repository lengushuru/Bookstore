import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBooks = createAsyncThunk('book/fetchBooks', async () => {
  const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/tfn9nyLdsA3a9Lmk93em/books');
  const bookList = Object.entries(response.data).map(([key, value]) => {
    const { title, category, author } = value[0];
    return {
      Id: key,
      title,
      author,
      category,
    };
  });
  return bookList;
});

export const newBook = createAsyncThunk('book/addBook', async (book) => {
  try {
    await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/tfn9nyLdsA3a9Lmk93em/books', book);
    fetchBooks();
    return book;
  } catch {
    return 'error adding new book';
  }
});

export const deleteBook = createAsyncThunk('book/removeBook', async (id) => {
  await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/tfn9nyLdsA3a9Lmk93em/books/${id}`);
  return id;
});

const initialState = {
  books: [],
  isLoading: false,
  error: null,
};

const BooksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBooks.pending, (state) => ({ ...state, isLoading: true }));
    builder.addCase(fetchBooks.fulfilled, (state, action) => ({
      ...state,
      isLoading: true,
      books: [...action.payload],
    }));
    builder.addCase(fetchBooks.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }));
    builder.addCase(newBook.fulfilled, (state, { payload }) => {
      const newstate = { ...payload };
      return (

        { ...state, books: [...state.books, newstate] });
    });
    builder.addCase(newBook.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }));
    builder.addCase(deleteBook.fulfilled, (state, { payload }) => {
      const deletedBookId = payload;
      return ({
        ...state,
        isLoading: false,
        books: [...state.books.filter((book) => book.Id !== deletedBookId)],
      });
    });
  },
});
export default BooksSlice.reducer;
