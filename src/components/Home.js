import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import { newBook, fetchBooks } from '../redux/books/booksSlice';

const Home = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book.books);
  const handleSubmit = (e) => {
    dispatch(fetchBooks());
    const itemId = uuidv4();
    e.preventDefault();
    const title = e.target[0].value.trim();
    const author = e.target[1].value.trim();
    const categories = e.target[2].options[e.target[2].selectedIndex].text;
    dispatch(newBook({
      item_id: itemId, title, author, category: categories,
    }));
    e.target[0].value = '';
    e.target[1].value = '';
  };

  return (
    <div className="home">
      <div className="container">
        {books.map((book) => (
          <Book
            key={book.Id}
            title={book.title}
            author={book.author}
            Id={book.Id}
            category={book.category}
          />
        ))}
      </div>
      <div className="Line" />
      <div className="footer">
        <h2 className="add-book">ADD NEW BOOK</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="book title" className="panel-bg" required />
          {/* <input type="text" placeholder="author" required /> */}
          <select name="choice" className="choice Lesson-Panel">
            <option value="first">Action</option>
            <option value="second" selected>Fiction</option>
            <option value="third">Economy</option>
          </select>
          <button type="submit" className="Rectangle-2">Add Book</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
