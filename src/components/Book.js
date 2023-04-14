import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';

const Book = ({ title, author, Id }) => {
  const dispatch = useDispatch();

  return (
    <div className="book">
      <div className="bookinfo">
        <p className="category">category</p>
        <p className="title">{title}</p>
        <p className="author">{author}</p>
        <div className="buttons">
          <button className="button comment" type="button" onClick={() => { dispatch(deleteBook(Id)); }}>Comments</button>
          |
          <button className="button" type="button" onClick={() => { dispatch(deleteBook(Id)); }}>Remove</button>
          |
          <button className="button" type="button" onClick={() => { dispatch(deleteBook(Id)); }}>Edit</button>
        </div>
      </div>
      <div className="progress">
        <CircularProgressbar
          value={45}
          text={`${45}%`}
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.25,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'butt',

            // Text size
            textSize: '18px',

            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: `rgba(62, 152, 199, ${45 / 100})`,
            textColor: '#f88',
            trailColor: '#d6d6d6',
            backgroundColor: '#4386bf',
          })}
        />
      </div>
      <div className="update">
        <p className="Current-Chapter">CURRENT CHAPTER</p>
        <p className="Current-Lesson">Chapter 17</p>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  Id: PropTypes.string.isRequired,
};

export default Book;
