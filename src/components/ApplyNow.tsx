import { motion } from 'framer-motion';

const PlusIcon = () => (
  <svg 
    width="48" 
    height="48" 
    viewBox="0 0 48 48" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#6B21A8]"
  >
    <path 
      d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM32 26H26V32C26 33.1 25.1 34 24 34C22.9 34 22 33.1 22 32V26H16C14.9 26 14 25.1 14 24C14 22.9 14.9 22 16 22H22V16C22 14.9 22.9 14 24 14C25.1 14 26 14.9 26 16V22H32C33.1 22 34 22.9 34 24C34 25.1 33.1 26 32 26Z" 
      fill="currentColor"
    />
  </svg>
);

const cards = [
  {
    title: "Apply Now",
    description: "Unlock Your Engineering Destiny: PinnaclePrep's Personalized Mentorship and Proven Strategies E...",
    buttonText: "Join the Journey",
    borderColor: "border-purple-500/30"
  },
  {
    title: "Apply Now",
    description: "Unlock Your Engineering Destiny: PinnaclePrep's Personalized Mentorship and Proven Strategies E...",
    buttonText: "Join the Journey",
    borderColor: "border-blue-500/30"
  },
  {
    title: "Discover Your Potential",
    description: "Elevate Your Engineering Ambitions with PinnaclePrep's Personalized G...",
    buttonText: "Explore Pathways",
    borderColor: "border-orange-500/30",
    hasGift: true
  }
];

const ApplyNow = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-[8%] bg-[#1E1E2F]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={`relative border-2 ${card.borderColor} rounded-3xl p-8 text-white backdrop-blur-sm bg-white/5 hover:bg-white/10`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              {/* Gift Image Overlay */}
              {card.hasGift && (
                <div className="absolute -top-6 -right-6 w-40 h-40">
                  <img 
                    src="/assets/gift-box.png" 
                    alt="Gift Box" 
                    className="w-32 h-32 object-contain"
                  />
                </div>
              )}

              {/* Card Icon */}
              <div className="mb-6">
                <PlusIcon />
              </div>

              {/* Card Content */}
              <h3 className="text-2xl font-zilla mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                {card.title}
              </h3>
              
              <p className="text-white/70 font-fredoka text-sm mb-8 leading-relaxed">
                {card.description}
              </p>

              <motion.button
                className="border border-white/30 px-6 py-2.5 rounded-full text-sm font-fredoka hover:bg-white/10 transition-all duration-300 hover:border-white/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {card.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplyNow; 