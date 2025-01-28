import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Counter = ({ from, to }: { from: number; to: number }) => {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef);
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      let startTimestamp: number;
      const duration = 2000; // 2 seconds

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        setCount(Math.floor(progress * (to - from) + from));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  }, [inView, from, to]);

  return <span ref={nodeRef}>{count}</span>;
};

const CollegeStats = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const leftContentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate left content
      gsap.from(leftContentRef.current, {
        scrollTrigger: {
          trigger: leftContentRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      // Animate right content
      gsap.from('.college-logos', {
        scrollTrigger: {
          trigger: '.college-logos',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      // Animate bottom text
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-[8%] bg-[#FFF5FF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div ref={leftContentRef} className="flex-1 text-left">
            <div className="flex items-center gap-2 mb-4">
              <img src="/assets/logo-small.png" alt="Small Logo" className="w-[57px] h-[56px]" />
              <p className="text-gray-600">Get the Best collage with PinnaclePrep</p>
            </div>
            
            <h2 className="text-[#DADAE5] font-zilla text-5xl font-medium mb-6">
              Get Into Your<br />Dream Collage
            </h2>
            
            <p className="text-gray-600 max-w-xl">
              Embark on Your Collage Journey with No Regret: PinnaclePrep's Proven Counselling Service and Personalized Mentorship Unlock Your rank's Full Potential
            </p>
          </div>

          {/* Right Content - College Logos */}
          <div className="flex-1 college-logos bg-[#1E1E2F] rounded-3xl p-8 relative">
            <img
              src="/assets/college-logos-grid.png"
              alt="College logos"
              className="w-full h-auto"
            />
            
            {/* Bottom text overlay */}
            <div 
              ref={textRef}
              className="text-center text-white absolute bottom-8 left-0 right-0 px-4"
            >
              <motion.h3 
                className="text-2xl sm:text-3xl font-fredoka leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                We helps over{' '}
                <span className="text-accent inline-flex items-center">
                  <Counter from={0} to={40000} />+ Students
                </span>
                {' '}to get into their<br />dream engineering college
              </motion.h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeStats; 