
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Shaique Aijaz. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-white">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="hover:text-white">
            LinkedIn
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-white">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;