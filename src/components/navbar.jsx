import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <div>
                    <img src="/logo.png" alt="Logo"/>
                    <span>Portfolio</span>
                    <li>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/blog">Blog</Link>
                    </li>
                </div>
            </ul>
        </nav>
    );
}

export default Navbar;