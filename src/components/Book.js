import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();

  return (

    <div className="book">
      <p className="title">{title}</p>
      <p>{author}</p>
      <button type="button" onClick={() => { dispatch(removeBook(id)); }}>Remove</button>
    </div>
  );
};

// propTypes is a property of Book
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
