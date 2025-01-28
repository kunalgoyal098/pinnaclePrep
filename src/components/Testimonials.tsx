import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const byIitiansRef = useRef(null);

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
      });

      // Floating animation for cards
      cardsRef.current.forEach((card, index) => {
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top center',
            end: 'bottom top',
            toggleActions: 'play none none reverse'
          },
          y: '-10px',
          duration: 2,
          delay: index * 0.1,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut'
        });
      });

      // By IItians animation
      gsap.from(byIitiansRef.current, {
        scrollTrigger: {
          trigger: byIitiansRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const testimonials = [
    {
      name: "Neeraj Meena",
      image: "/assets/testimonials/neeraj.png",
      rating: 4,
      text: "PinnaclePrep helps me to find a friend like Abhishek Choudhary and indu in IIT madras"
    },
    {
      name: "Abhishek Choudhary",
      image: "/assets/testimonials/abhishek.png",
      rating: 5,
      text: "PinnaclePrep helps me to get into IIT Madras where i am able to find a lot of FOKI"
    },
    {
      name: "Jitendra pawar",
      image: "/assets/testimonials/jitendra.png",
      rating: 3,
      text: "There service are good but they took away me from Muskan"
    }
  ];

  return (
    <section ref={sectionRef} id="testimonials" className="py-24 px-4 sm:px-6 lg:px-[8%] bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div 
        className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-100 to-transparent rounded-full -z-10 blur-3xl"
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
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-100 to-transparent rounded-full -z-10 blur-3xl"
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

      <div ref={headerRef} className="text-center mb-16">
        <p className="text-[#FF731D] font-fredoka text-lg tracking-wider uppercase">
          TESTIMONIALS
        </p>
        <h2 className="text-[#6B21A8] font-zilla text-5xl font-medium mt-3">
          What aspirants say about us.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            ref={el => cardsRef.current[index] = el}
            className="rounded-[40px] border border-[#FF731D] p-10 flex flex-col items-center bg-white shadow-lg hover:shadow-2xl transition-all duration-300 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100 via-orange-100 to-purple-100 opacity-0 group-hover:opacity-20 rounded-[40px] transition-opacity duration-300" />
            
            <div className="relative">
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mb-6 object-cover ring-4 ring-purple-100"
              />
            </div>

            <h3 className="text-[#6B21A8] font-zilla text-2xl font-medium mb-3">
              {testimonial.name}
            </h3>

            <div className="flex gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <motion.svg
                  key={i}
                  className={`w-6 h-6 ${
                    i < testimonial.rating ? 'text-[#FF731D]' : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.3 }
                  }}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </motion.svg>
              ))}
            </div>

            <p className="text-center text-gray-600 font-fredoka text-base leading-relaxed">
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>
      
      <div ref={byIitiansRef} className="text-right mt-12 pr-8">
        <span className="text-[#6B21A8] text-2xl tracking-wide font-fredoka">By IItians</span>
      </div>
    </section>
  );
};

export default Testimonials; 