import PropTypes from 'prop-types';
import { Link } from "react-router-dom"
import { useState } from "react"

const Nav = ({ activeSection, homeRef, aboutRef, experienceRef, servicesRef, contactRef }) => {

  const scrollToSection = (elementRef) => {

    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  const [links] = useState([
    {name: 'Home', path: '/', ref: homeRef },
    {name: 'About', path:'/about', ref: aboutRef },
    {name: 'Experience', path:'/Experience', ref: experienceRef },
    {name: 'Services', path:'/Services', ref: servicesRef },
    {name: 'Contact', path:'/Contact', ref: contactRef },
  ])

  return (
    <div className="bg-fixed flex gap-8 py-4 px-14 text-xs">
      {
        links.map((link,index) => (
          <Link href={link.path} key={index} onClick={() => scrollToSection(link.ref)} className={`${link.name === activeSection && "text-yellow-500 h-4 border-b-2 border-yellow-500"} h-1 capitalize font-medium hover:text-yellow-500 transition-all`}>{link.name}</Link>
        ))
      }
    </div>
  )
}

Nav.propTypes = {
  activeSection: PropTypes.string.isRequired,
  homeRef: PropTypes.object.isRequired,
  aboutRef: PropTypes.object.isRequired,
  experienceRef: PropTypes.object.isRequired,
  servicesRef: PropTypes.object.isRequired,
  contactRef: PropTypes.object.isRequired,
};

export default Nav