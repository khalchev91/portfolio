import './App.css'
import NavBar from './Sections/NavBar'
import Hero from './Sections/Hero'
import { useEffect, useRef, useState } from 'react'
import Footer from './Sections/Footer';
import About from './Sections/About';

function App() {


  const [activeSection, setActiveSection] = useState('home');

  const appName = 'Software Engineer';

  const sectionRefs = {
    about: useRef(null),
    skills: useRef(null),
    personal: useRef(null),
    professional: useRef(null),
    contact: useRef(null),
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    });

    // Observe each section
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    // Cleanup
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <NavBar appName={appName} />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section ref={sectionRefs.about} id="about"  className="py-24 px-8 bg-surface-container-low">
          <About/>
        </section>
        <section ref={sectionRefs.skills} id="skills">

        </section>
        <section ref={sectionRefs.personal} id="personal">

        </section>
        <section ref={sectionRefs.professional} id="professional">

        </section>
        <section ref={sectionRefs.contact} id="contact">

        </section>
      </main>
      <footer className="bg-slate-950 w-full py-12 px-8 tonal-shift bg-emerald-900/10">
        <Footer />
      </footer>
    </>
  )
}

export default App
