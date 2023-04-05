import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
  isLoading: false,
};

const BooksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const id = `item${state.books.length + 1}`;
      const newstate = { ...action.payload, item_id: id };
      return (

        { ...state, books: [...state.books, newstate] });
    },
    removeBook: (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.item_id !== action.payload),
    }),
  },
});

export const { addBook, removeBook } = BooksSlice.actions;

export default BooksSlice.reducer;
