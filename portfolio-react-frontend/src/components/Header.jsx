function Header() {
    return (
      <header className="bg-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-xl font-bold">My Portfolio</h1>
          <nav className="space-x-4">
            <a href="#hero" className="text-gray-700 hover:text-black">Home</a>
            <a href="#about" className="text-gray-700 hover:text-black">About</a>
            <a href="#projects" className="text-gray-700 hover:text-black">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-black">Contact</a>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Header;