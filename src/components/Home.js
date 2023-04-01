const Home = () => (
  <div className="home">
    <h1>Welcome to Bookstore</h1>
  <ul>
    <li>bookname - author</li>
  </ul>
  <form>
    <input type="text" placeholder="title" />
    <input type="text" placeholder="author" />
    <button type="submit">Add Book</button>
  </form>
  </div>
);

export default Home;
