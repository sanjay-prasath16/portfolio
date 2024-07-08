import '../../src/App.css'
import { useRef, useState, useEffect } from 'react'
import Home from './Home'

const Mainpage = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const sections = [homeRef, aboutRef, experienceRef, servicesRef, contactRef];
    sections.forEach((section) => observer.observe(section.current));

    return () => {
      sections.forEach((section) => observer.unobserve(section.current));
    };
  }, []);

  const refs = {
    homeRef,
    aboutRef,
    experienceRef,
    servicesRef,
    contactRef,
    activeSection,
  };

  return (
    <>
    <section id='Home' ref={homeRef} className='snap-center h-lvh'><Home activeSection={activeSection} prop={refs} /></section>
    <section id='About' ref={aboutRef} className='snap-center h-lvh'>About</section>
    <section id='Experience' ref={experienceRef} className='snap-center h-lvh'>Experience</section>
    <section id='Services' ref={servicesRef} className='snap-center h-lvh'>Services</section>
    <section id='Contact' ref={contactRef} className='snap-center h-lvh'>Contact</section>
  </>
  )
}

export default Mainpage