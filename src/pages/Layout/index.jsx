import './layout.css'
import { Link, NavLink, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav className="navbar">
                <Link to="/"><h1 className="logo">Colors.io</h1></Link>
                <ul className="navlinks">
                    <li><Link to="/colors"><h2 className='link'>Colors List</h2></Link></li>
                    <li><Link to="/colors/new"><h2 className='link'>Create New Color</h2></Link></li>
                </ul>
            </nav>
            <Outlet />
            <footer className="footer">
                <h1>Made by Erhan Ulusal</h1>
            </footer>
        </>
    )
}

export default Layout;
