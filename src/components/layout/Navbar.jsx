import { FaBell, FaCog, FaUserCircle, FaPlus, FaQuestion, FaDoorOpen } from 'react-icons/fa';
import { useContext } from 'react';
import OrderContext from '../../context/OrderContext';
import { Link } from 'react-router-dom';

function Navbar() {
  const { logOut } = useContext(OrderContext);

  return (
    <nav className="navigation">
      <Link to="/">
        <h1>Orderflow</h1>
      </Link>
      <div className="navigation-menu">
        <ul>
          <li>
            <Link to="/create">
              <FaPlus size={20} />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaBell size={20} />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaCog size={20} />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaUserCircle size={20} />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaDoorOpen onClick={logOut} size={20} />
            </Link>
          </li>
          <li>
            <Link to="/about">
              <FaQuestion size={20} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
