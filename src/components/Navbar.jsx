import { FaBell, FaCog, FaUserCircle } from "react-icons/fa"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="navigation">
            <a href="/" className="brand-name">Orderflow</a>
            <div className="navigation-menu">
                <ul>
                    <li>
                        <a href="/" className="notification"><FaBell size={10} /></a>
                    </li>
                    <li>
                        <a href="/" className="settings">Settings</a>
                    </li>
                    <li>
                        <a href="/" className="profile">Profile</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar