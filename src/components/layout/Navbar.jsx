import { FaBell, FaCog, FaDoorOpen, FaQuestion, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import logoSource from '../../assets/logo.svg'
import { auth } from "../../config/firebase"
import OrderInput from '../orders/OrderInput';

function Navbar() {
  const navigate = useNavigate()

  const onLogout = () => {
    console.log("onLogOut hit")
    console.log(auth)
    auth.signOut()
    navigate("/profile")
  }

  return (
    <nav className='bg-[#3379CD] px-4 lg:px-6 py-2.5'>
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex justify-start items-center">
          <Link to="/" className="flex mr-4">
            <img src={logoSource} className="mr-3 h-8" alt="FlowBite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">OrderFlow</span>
          </Link>
        </div>
        <div className="flex justify-between items-center">
          <ul className='flex'>
            <li className='px-3 text-white'>
              <Link to="/">
                <FaBell size={20} />
              </Link>
            </li>
            <li className='px-3 text-white'>
              <Link to="/">
                <FaCog size={20} />
              </Link>
            </li>
            <li className='px-3 text-white'>
              <Link to="/profile">
                <FaUserCircle size={20} />
              </Link>
            </li>
            <li className='px-3 text-white'>
              <Link to="/">
                <FaDoorOpen onClick={onLogout} size={20} />
              </Link>
            </li>
            <li className='px-3 text-white'>
              <Link to="/about">
                <FaQuestion size={20} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
