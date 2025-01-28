import { motion } from 'framer-motion';

const FloatingGiftButton = () => {
  return (
    <motion.button
      className="fixed bottom-6 right-6 z-[999] bg-gradient-to-r from-[#FF731D] to-[#6B21A8] text-white px-6 py-3 rounded-full font-zilla hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      Claim Your Gift for Two year Journey
    </motion.button>
  );
};

export default FloatingGiftButton;