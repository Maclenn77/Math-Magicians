import {
  Link,
} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav>
    <h1><Link to="/">Math Magicians</Link></h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/calc">Calculator</Link>
      </li>
      <li>
        <Link to="/quote">Quote</Link>
      </li>
      <li>
        <Link to="/mayan">Mayan</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
