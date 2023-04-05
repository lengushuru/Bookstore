import PropTypes from 'prop-types';

const Book = ({ title, author, id }) => (
  <div className="book">
    <p className="title">{title}</p>
    <p>{author}</p>
    <button type="button" id={id}>Remove</button>
  </div>
);

// propTypes is a property of Book
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Book;
