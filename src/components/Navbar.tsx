import { Menu } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 px-6 md:px-12 relative z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-gold font-bold text-2xl">PowerDollar</div>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="text-white space-x-6">
            <a href="#" className="hover:text-gold transition">Home</a>
            <a href="#how-it-works" className="hover:text-gold transition">How it Works</a>
            <a href="#about" className="hover:text-gold transition">About</a>
            <a href="#contact" className="hover:text-gold transition">Contact</a>
          </div>
          <button className="bg-gold hover:bg-gold-dark text-gray-dark font-medium px-5 py-2 rounded-full transition">
            Join Our Community
          </button>
        </div>
        
        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu size={24} />
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-dark absolute top-16 left-0 right-0 p-4 z-20">
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-gold transition py-2">Home</a>
            <a href="#how-it-works" className="hover:text-gold transition py-2">How it Works</a>
            <a href="#about" className="hover:text-gold transition py-2">About</a>
            <a href="#contact" className="hover:text-gold transition py-2">Contact</a>
            <button className="bg-gold hover:bg-gold-vibrant text-gray-dark font-medium px-5 py-2 rounded-full transition mt-2">
              Join Our Community
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
