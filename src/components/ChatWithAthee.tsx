import { motion } from 'framer-motion';

const ChatWithAthee = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-[8%] bg-[#1E1E2F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-white">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <img src="/assets/robot-icon.png" alt="Robot Icon" className="w-12 h-12" />
              </div>
              
              <h2 className="text-5xl font-zilla mb-6">
                Predict Your<br />
                Rank and<br />
                Collage With<br />
                Athee
              </h2>

              <div className="space-y-4 mb-8">
                <p className="text-lg opacity-90">
                  Athee Is India's First <span className="text-[#FF731D]">AI ChatBot</span>
                </p>
                <p className="text-lg opacity-80">
                  Dedicated To Help
                </p>
                <p className="text-lg opacity-80">
                  Students In Their Collage Journey
                </p>
              </div>

              <div className="flex items-center gap-4">
                <motion.div
                  className="text-3xl font-zilla"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Talk To Athee
                </motion.div>
                <motion.img 
                  src="/assets/athee-bot.png" 
                  alt="Athee Bot"
                  className="w-16 h-16"
                  initial={{ rotate: 0 }}
                  animate={{ 
                    rotate: [0, -10, 10, -10, 0],
                    y: [0, -5, 0, -5, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Right Content - Chat Interface */}
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img 
                src="/assets/chat-interface.png" 
                alt="Chat Interface" 
                className="w-full h-auto rounded-3xl"
              />
              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-[#FF731D] rounded-lg"
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#6B21A8] rounded-lg"
                animate={{
                  rotate: -360,
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Gift Button - floating */}
      </div>
    </section>
  );
};

export default ChatWithAthee; 