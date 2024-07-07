import '../../src/App.css'
import { useRef } from 'react'
import Home from './Home'

const Mainpage = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const refs = {
    homeRef,
    aboutRef,
    experienceRef,
    servicesRef,
    contactRef,
  };

  return (
    <>
    <section ref={homeRef} className='snap-center h-lvh'><Home prop={refs} /></section>
    <section ref={aboutRef} className='snap-center h-lvh'>About</section>
    <section ref={experienceRef} className='snap-center h-lvh'>Experience</section>
    <section ref={servicesRef} className='snap-center h-lvh'>Services</section>
    <section ref={contactRef} className='snap-center h-lvh'>Contact</section>
  </>
  )
}

export default Mainpage