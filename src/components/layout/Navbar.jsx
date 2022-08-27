import { FaBell, FaCog, FaUserCircle, FaPlus } from "react-icons/fa"
import { Link } from "react-router-dom"

function Navbar() {
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
						{/* <a href="/" className="settings"><FaCog size={20} /></a> */}
					</li>
					<li>
						<Link to="/">
							<FaUserCircle size={20} />
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar