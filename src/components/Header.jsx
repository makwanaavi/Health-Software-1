import { FiActivity } from 'react-icons/fi';
import { FiX } from 'react-icons/fi'; // Import the close (X) icon

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="bg-gradient-to-r from-white via-blue-50 to-white shadow-sm sticky top-0 z-50 py-4 px-4 sm:px-6 md:px-12 lg:px-24 transition-all duration-300">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <FiActivity className="text-blue-600 text-3xl drop-shadow-md" />
          <span className="text-2xl font-semibold text-blue-600">HealthAI</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="hover:text-blue-600 transition-all duration-200 font-medium">Features</a>
          <a href="#dashboard" className="hover:text-blue-600 transition-all duration-200 font-medium">Dashboard</a>
          <a href="#testimonials" className="hover:text-blue-600 transition-all duration-200 font-medium">Testimonials</a>
          <a href="#integrations" className="hover:text-blue-600 transition-all duration-200 font-medium">Integrations</a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex space-x-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg">
            Sign In
          </button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          className="md:hidden text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Slide-in Menu */}
      <div className={`fixed top-0 right-0 w-3/4 h-full bbg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg transition-transform duration-300 ease-in-out transform md:hidden z-40 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col space-y-4 p-6 pt-20">
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-2xl text-gray-600"
            onClick={() => setIsMenuOpen(false)}
          >
            <FiX />
          </button>

          <a href="#features" className="block hover:text-blue-600 transition-all duration-200 font-medium">Features</a>
          <a href="#dashboard" className="block hover:text-blue-600 transition-all duration-200 font-medium">Dashboard</a>
          <a href="#testimonials" className="block hover:text-blue-600 transition-all duration-200 font-medium">Testimonials</a>
          <a href="#integrations" className="block hover:text-blue-600 transition-all duration-200 font-medium">Integrations</a>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium w-full mt-4 shadow-md">
            Book a Demo
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
