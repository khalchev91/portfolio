import './App.css'
import NavBar from './Sections/NavBar'
import Hero from './Sections/Hero'
import { useEffect, useRef, useState } from 'react'
import Footer from './Sections/Footer';
import About from './Sections/About';
import SkillSection from './Sections/Skills';
import type { CardMember } from "./models/CardMember";

function App() {


  const [activeSection, setActiveSection] = useState('home');

  const appName = 'Software Engineer';

  let data: CardMember[] = [
    { id: 1, cardName: 'React' },
    { id: 2, cardName: 'Next.js' },
    { id: 3, cardName: 'TypeScript' },
    { id: 4, cardName: 'Tailwind CSS' },
    { id: 5, cardName: 'Node.js' },
    { id: 6, cardName: 'Express.js' },
    { id: 7, cardName: 'C#' },
  ]


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
        <section ref={sectionRefs.about} id="about" className="py-24 px-8 bg-surface-container-low">
          <About />
        </section>
        <section ref={sectionRefs.skills} id="skills" className="py-24 px-8 bg-surface">
          <SkillSection items={data} speed={60} gap={10} />
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
