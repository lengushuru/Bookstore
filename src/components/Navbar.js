import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <p>Bookstore</p>
    <div className="links">
      <Link to="/">Library</Link>
      <Link to="/categories">Categories</Link>
    </div>
  </nav>
);

export default Navbar;
