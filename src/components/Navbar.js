import { Link } from 'react-router-dom';
import avatar from '../assets/avatar.png';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo-links">
      <p className="logo">Bookstore CMS</p>
      <div className="links">
        <Link to="/" className="nav-book">BOOKS</Link>
        <Link to="/categories" className="nav-categories">CATEGORIES</Link>
      </div>
    </div>
    <div>
      <img src={avatar} className="avatar" alt="login" />
    </div>
  </nav>
);

export default Navbar;
