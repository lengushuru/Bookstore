import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';

const Book = ({ title, author, Id }) => {
  const dispatch = useDispatch();

  return (

    <div className="book">
      <p className="title">{title}</p>
      <p>{author}</p>
      <button type="button" onClick={() => { dispatch(deleteBook(Id)); }}>Remove</button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  Id: PropTypes.string.isRequired,
};

export default Book;
