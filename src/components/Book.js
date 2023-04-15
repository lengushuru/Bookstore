import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';

const Book = ({
  title, author, Id, category,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="book">
      <div className="bookinfo">
        <p className="category">{category}</p>
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
            width: '10px',
            hieght: '10px',
            // rotation: 0.25,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'round',
            textSize: '18px',
            pathTransitionDuration: 0.5,
            pathColor: '#0290ff',
            textColor: 'transparent',
            trailColor: '#d6d6d6',
            backgroundColor: '#0290ff',
          })}
        />
        <div>
          <p className="current">{`${45}%`}</p>
          <p className="Completed">Completed</p>
        </div>
      </div>
      <div className="update">
        <p className="Current-Chapter">CURRENT CHAPTER</p>
        <p className="Current-Lesson">Chapter 17</p>
        <button type="button" className="Rectangle-2">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  Id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
