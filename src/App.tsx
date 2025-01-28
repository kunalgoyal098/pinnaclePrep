import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import CollegeStats from './components/CollegeStats';
import LowRank from './components/LowRank';
import ChatWithAthee from './components/ChatWithAthee';
import ApplyNow from './components/ApplyNow';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Testimonials />
      <Services />
      <CollegeStats />
      <LowRank />
      <ChatWithAthee />
      <ApplyNow />
      <Footer />
      <FloatingButton />
    </div>
  );
}

export default App;