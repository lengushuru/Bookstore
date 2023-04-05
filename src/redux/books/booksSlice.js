import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  isLoading:false,
}

const BooksSlice = createSlice({
  name:'book',
  initialState,
  reducers:{
    addBook:(state,action)=>{
      state.books = [...state.books,action.payload]
    },
    removeBook:(state,action)=>{
    state.books = state.books.filter((book)=>{return book.id !==action.payload})
    }
  }
})

export const {addBook,removeBook} = BooksSlice.actions

export default BooksSlice.reducer