function Navbar() {
    return (
        <nav className="nav bg-gray-800 text-white">
            <ul className="flex items-center justify-between p-4">
                {/* Logo and Portfolio */}
                <div className="flex items-center space-x-2">
                    {/* Replace the src with your logo path */}
                    <img src="/logo.png" alt="Logo" className="h-8 w-8" />
                    <span className="text-lg font-bold">Portfolio</span>
                
                {/* Navigation Links */}

                    <li className="flex space-x-6">
                    <a href="/" className="hover:text-gray-400">Home</a>
                    <a href="#about" className="hover:text-gray-400">About</a>
                    <a href="#services" className="hover:text-gray-400">Services</a>
                    <a href="#projects" className="hover:text-gray-400">Projects</a>
                    </li>
                </div>
            </ul>
        </nav>
    );
}
export default Navbar