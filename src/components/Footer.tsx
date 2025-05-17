import { Facebook, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-dark text-white py-12 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">PowerDollar</h3>
            <p className="text-gray-300 mb-4">
              Empowering your financial future through renewable energy and blockchain technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-gold transition">Home</a></li>
              <li><a href="#how-it-works" className="text-gray-300 hover:text-gold transition">How it Works</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-gold transition">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-gold transition">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition">Whitepaper</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="flex items-center mb-3">
              <Mail size={18} className="mr-2 text-gold" />
              <a href="mailto:info@powerdollar.com" className="text-gray-300 hover:text-gold transition">
                info@powerdollar.com
              </a>
            </div>
            <p className="text-gray-300">
              123 Green Energy Way<br />
              Renewable City, RC 12345
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray pt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} PowerDollar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
