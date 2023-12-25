import Home from './Home';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Experience from './Experience';

const Main = () => {
  return (
    <main className='bg-theme-black text-theme-white'>
      <Home />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
};

export default Main;
