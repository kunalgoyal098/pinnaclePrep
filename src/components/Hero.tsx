import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <>
      <section id="hero" className="min-h-[90vh] px-4 sm:px-6 lg:px-[8%] flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 py-6 sm:py-8 lg:py-0">
        <motion.div 
          className="flex-1 text-white text-center lg:text-left order-2 lg:order-1 max-w-3xl mx-auto lg:mx-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-zilla text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 sm:mb-6 font-semibold">
            Personalized Jossa & other Counselling Starting at 499/-
          </h1>
          <p className="font-fredoka text-sm sm:text-base opacity-85 leading-relaxed mb-6 sm:mb-8 max-w-[95%] sm:max-w-[90%] mx-auto lg:mx-0">
            Prepare for the Journey Ahead: PinnaclePrep Offers Comprehensive Counselling for IIT, NIT, IIIT, GFTI, SFIT and beyond
          </p>
          <motion.a 
            href="#get-started" 
            className="font-fredoka bg-accent text-primary px-6 sm:px-8 py-2.5 sm:py-3 rounded-md inline-block text-center min-w-[140px] sm:min-w-[150px] font-medium hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Start
          </motion.a>
        </motion.div>

        <motion.div 
          className="flex-1 flex justify-center order-1 lg:order-2 w-full sm:w-[80%] lg:w-full mx-auto"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="/assets/hero-image.png" 
            alt="Students celebrating" 
            className="max-w-full h-auto object-contain w-full"
          />
        </motion.div>
      </section>
      <motion.div 
        className="text-center text-white py-6 sm:py-8 opacity-90 font-fredoka text-sm sm:text-base"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        Explore Our Services
      </motion.div>
    </>
  );
};

export default Hero; 