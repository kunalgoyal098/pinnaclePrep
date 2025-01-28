import { motion } from 'framer-motion';

const mentors = [
  {
    image: "/assets/mentors/mentor1.png",
    title: "Achieve Your Goals",
    description: "Reach New Heights with PinnaclePrep's Personalized Guidance and Support for E..."
  },
  {
    image: "/assets/mentors/mentor2.png",
    title: "Discover Your Path",
    description: "Unlock Your Full Potential: PinnaclePrep's Personalized Mentorship Guides You to..."
  },
  {
    image: "/assets/mentors/mentor3.png",
    title: "Conquer Your Goals",
    description: "Empower Your Engineering Dreams with PinnaclePrep's Tailored Counseling an..."
  }
];

const LowRank = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-[8%] bg-[#FFF5FF]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-[#302E43] font-zilla text-5xl font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Worrying about low Rank
          </motion.h2>
          <motion.div
            className="max-w-3xl mx-auto space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-gray-600 text-xl font-fredoka">
              Book A One to One Session with Our Mentors From Top IITs
            </p>
            <p className="text-gray-600 text-lg font-fredoka">
              They Will Provide You Guidance Till Your First Step Into collage
            </p>
          </motion.div>
        </div>

        {/* Mentor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mentors.map((mentor, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-3xl ${
                index === 1 ? 'bg-[#1E1E2F] text-white' : 'bg-white'
              } shadow-lg`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="flex flex-col items-center text-center">
                <img 
                  src={mentor.image} 
                  alt={mentor.title}
                  className="w-24 h-24 rounded-full mb-6 object-cover"
                />
                <h3 className={`text-2xl font-zilla font-medium mb-4 ${
                  index === 1 ? 'text-white' : 'text-[#302E43]'
                }`}>
                  {mentor.title}
                </h3>
                <p className={`font-fredoka ${
                  index === 1 ? 'text-white/80' : 'text-gray-600'
                }`}>
                  {mentor.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <motion.button
            className="bg-[#9D5C9C] text-white px-8 py-3 rounded-full font-fredoka text-lg hover:bg-opacity-90 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            BOOK A SESSION
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default LowRank; 