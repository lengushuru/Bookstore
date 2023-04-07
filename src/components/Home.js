import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import Book from './Book';
import { newBook, fetchBooks } from '../redux/books/booksSlice';

const Home = () => {
  const dispatch = useDispatch();

  // const { books } = useSelector((state) => state.book);

  const books = useSelector((state) => state.book.books);
  console.log(books);

  // dispatch(newBook({
  //   item_id: nanoid(), title: 'The Hobbit', author: 'J.R.R. Tolkien', category: '',
  // }));
  // dispatch(newBook({
  //   item_id: nanoid(), title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', category: '',
  // }));
  // dispatch(newBook({
  //   item_id: nanoid(), title: 'The Silmarillion', author: 'J.R.R. Tolkien', category: '',
  // }));
  // dispatch(newBook({
  //   item_id: nanoid(), title: 'The Chronicles of Narnia', author: 'C.S. Lewis', category: '',
  // }));

  const handleSubmit = (e) => {
    const item_id = nanoid();
    const categories = '';
    e.preventDefault();
    const title = e.target[0].value.trim();
    const author = e.target[1].value.trim();
    dispatch(newBook({
      item_id, title, author, category: categories,
    }));
    e.target[0].value = '';
    e.target[1].value = '';
  };

  return (
    <div className="home">
      <h1>Welcome to Bookstore</h1>
      {books.map((book) => (
        <Book key={book.Id} title={book.title} author={book.author} Id={book.Id} />
      ))}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="title" required />
        <input type="text" placeholder="author" required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default Home;
