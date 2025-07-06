function Navbar() {
    return (
        <nav>
            <ul>
                {/* Left section: Logo and title */}
                <div>
                    <img src="/logo.png" alt="Logo"/>
                    <span>Portfolio</span>
                

                {/* Right section: Navigation links */}
                <li>
                    <a href="/" >Home</a>   
                    <a href="/about">About</a>
                    <a href="/services">Services</a>
                    <a href="/projects">Projects</a>
                    <a href="/blog">Blog</a>
                </li>
                </div>
                </ul>
        </nav>
    );
}

export default Navbar;