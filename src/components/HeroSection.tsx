import { DollarSign, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div
      className="relative z-0 min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ 
        backgroundImage: "url('src/assets/BGimg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="bg-gray-900/80 min-h-screen"> {/* Optional dark overlay for readability */}
        <div className="container mx-auto px-6 md:px-12 py-12 md:py-20 relative">
          {/* Background elements */}
          <div className="absolute top-0 right-0 opacity-20 md:opacity-30">
            {/* <div className="relative">
              <DollarSign className="text-gold w-40 h-40 md:w-56 md:h-56 absolute -top-4 right-8" />
              <Zap className="text-gold-dark w-32 h-32 md:w-48 md:h-48 absolute top-20 right-40" />
            </div> */}
          </div>

          <div className="flex flex-col md:flex-row items-center min-h-[calc(100vh-6rem)]">
            <motion.div 
              className="md:w-7/12 mb-10 md:mb-0 text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-gold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                Empowering Your Every Trade — Where Strategy Meets Strength.
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl mb-8 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                We're not just tokenizing solar, energy, and crypto WEN and KWh tokens to another blockchain. We're creating a stable foundation that combines renewables with lean trading for long-term growth based on actual resource needs.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                <button className="bg-gold hover:bg-gold-dark text-gray-dark font-medium px-6 py-3 rounded-full transition text-lg">
                  Learn More
                </button>
                <button className="bg-transparent border-2 border-white hover:border-gold hover:text-gold text-white font-medium px-6 py-3 rounded-full transition text-lg">
                  Get Started
                </button>
              </motion.div>
            </motion.div>

            <motion.div 
              className="md:w-5/12 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              {/* Optional: Add image/animation/illustration here */}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
