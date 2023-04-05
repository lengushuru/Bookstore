import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { addBook } from '../redux/books/booksSlice';

const Home = () => {
  const books = useSelector((state) => state.book.books);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const author = e.target[1].value;
    dispatch(addBook({ title, author }));
    e.target[0].value = '';
    e.target[1].value = '';
  };

  return (
    <div className="home">
      <h1>Welcome to Bookstore</h1>
      {books.map((book) => (
        <Book key={book.item_id} title={book.title} author={book.author} id={book.item_id} />
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
