import PropTypes from 'prop-types';
import { Link, useLocation } from "react-router-dom"
import { useState } from "react"

const Nav = ({ homeRef, aboutRef, experienceRef, servicesRef, contactRef }) => {
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

  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className="flex gap-8 py-4 px-14 text-xs">
      {
        links.map((link,index) => (
          <Link href={link.path} key={index} onClick={() => scrollToSection(link.ref)} className={`${link.path === pathname && "text-yellow-500 h-4 border-b-2 border-yellow-500"} h-1 capitalize font-medium hover:text-yellow-500 transition-all`}>{link.name}</Link>
        ))
      }
    </div>
  )
}

Nav.propTypes = {
  homeRef: PropTypes.object.isRequired,
  aboutRef: PropTypes.object.isRequired,
  experienceRef: PropTypes.object.isRequired,
  servicesRef: PropTypes.object.isRequired,
  contactRef: PropTypes.object.isRequired,
};

export default Nav