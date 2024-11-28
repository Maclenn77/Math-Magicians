import {
  Link,
} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav>
    <h1><Link to="/">Mayan Calculator</Link></h1>
    <ul>
      <li>
        <Link to="/">Mayan Calc</Link>
      </li>
      <li>
        <Link to="/calc">Decimal Calc</Link>
      </li>
      <li>
        <Link to="/quote">Quote</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
