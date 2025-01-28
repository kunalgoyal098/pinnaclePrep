import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const services = [
    {
      title: "Customized Counselling Service",
      image: "/assets/services/counselling.png",
      description: "Personalized guidance tailored to your academic profile and career goals",
      isCustomDescription: true
    },
    {
      title: "One to One Mentorship With IITians",
      image: "/assets/services/mentorship.png",
      description: "Direct mentoring sessions with experienced IITians",
      isCustomDescription: true
    },
    {
      title: "Collage Predictor WIth AI ChatBot Athee",
      image: "/assets/services/chatbot.png",
      description: "AI-powered college predictions and instant query resolution",
      isCustomDescription: false
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      // Cards animation
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          },
          y: 100,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: 'power3.out'
        });

        // Hover animation setup
        card && gsap.to(card, {
          y: '-10px',
          duration: 0.4,
          paused: true,
          ease: 'power2.out'
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-24 px-4 sm:px-6 lg:px-[8%] bg-[#FFF5FF] relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-100/50 to-transparent rounded-full -z-10 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-100/50 to-transparent rounded-full -z-10 blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div ref={headerRef} className="text-center mb-20">
        <h2 className="text-[#302E43] font-zilla text-6xl font-medium">
          Our Services
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            ref={el => cardsRef.current[index] = el}
            className="bg-white rounded-[32px] p-8 flex flex-col items-center shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -10 }}
          >
            <div className="w-full aspect-square mb-8 overflow-hidden rounded-[24px]">
              <motion.img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <h3 className="text-[#3E005B] font-georgia text-2xl font-bold text-center mb-4 leading-tight">
              {service.title}
            </h3>

            <p className={`text-center ${
              service.isCustomDescription 
                ? "text-[#302E43] font-zilla text-lg" 
                : "text-[#3E005B] font-georgia text-lg"
            }`}>
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services; 