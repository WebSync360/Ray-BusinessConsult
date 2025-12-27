import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Problem from '../sections/Problem';
import Solution from '../sections/Solution';
import Testimonial from '../sections/Testimonial';
import CTA from '../sections/CTA';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Problem />
        <Solution />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;