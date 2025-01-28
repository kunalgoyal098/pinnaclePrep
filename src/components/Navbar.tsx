import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 lg:px-[8%] py-4 bg-transparent">
      <motion.div 
        className="flex items-center gap-2 w-full lg:w-auto justify-center lg:justify-start"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img src="/assets/logo.png" alt="PinnaclePrep Logo" className="h-8 sm:h-10" />
        <span className="font-abyssinica text-lg sm:text-xl text-white">PinnaclePrep</span>
      </motion.div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-10 w-full lg:w-auto">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-10">
          {['Home', 'About', 'Services', 'Contact', 'Athee'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white text-sm hover:opacity-80 transition-opacity relative group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {item}
              <motion.span 
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"
                whileHover={{ width: '100%' }}
              />
            </motion.a>
          ))}
        </div>
        <motion.button 
          className="bg-white text-primary px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors w-full sm:w-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Sign up
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar; 