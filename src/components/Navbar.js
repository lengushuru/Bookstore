import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <p className="logo">Bookstore_CMS</p>
    <div className="links">
      <Link to="/" className="nav-book">BOOKS</Link>
      <Link to="/categories" className="nav-categories">CATEGORIES</Link>
    </div>
  </nav>
);

export default Navbar;
