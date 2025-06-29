function Navbar() {
    return (
        <nav className="bg-gray-800 text-white">
            <ul className="flex items-center justify-between p-4 w-full">
                {/* Left section: Logo and title */}
                <div className="flex items-center space-x-2">
                    <img src="/logo.png" alt="Logo" className="h-8 w-8" />
                    <span className="text-lg font-bold">Portfolio</span>
                </div>

                {/* Right section: Navigation links */}
                <li className="flex space-x-6 list-none">
                    <a href="/" className="hover:text-gray-400">Home</a>
                    <a href="#about" className="hover:text-gray-400">About</a>
                    <a href="#services" className="hover:text-gray-400">Services</a>
                    <a href="#projects" className="hover:text-gray-400">Projects</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;