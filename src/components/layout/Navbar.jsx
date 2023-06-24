import { FaBell, FaCog, FaUserCircle, FaPlus, FaQuestion, FaDoorOpen } from 'react-icons/fa';
import { useContext } from 'react';
import OrderContext from '../../context/OrderContext';
import { Link } from 'react-router-dom';
import OrderInput from '../orders/OrderInput';

function Navbar() {
  const { logOut } = useContext(OrderContext);

  return (
    <nav className='bg-gray-800 border-gray-200 px-4 lg:px-6 py-2.5'>
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex justify-start items-center">
          <Link to="/" className="flex mr-4">
            <img src="https://flowbite.s3.amazonaws.com/logo.svg" className="mr-3 h-8" alt="FlowBite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Flowbite</span>
          </Link>
          <OrderInput />
        </div>
      </div>
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
