import Book from './Book';

const Home = () => (
  <div className="home">
    <h1>Welcome to Bookstore</h1>
    <Book title="river-between" author="ngugi" id={1} />
    <form>
      <input type="text" placeholder="title" />
      <input type="text" placeholder="author" />
      <button type="submit">Add Book</button>
    </form>
  </div>
);

export default Home;
