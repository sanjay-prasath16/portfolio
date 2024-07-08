import Navbar from '../components/Nav'
import PropTypes from 'prop-types';

const Home = ({ prop }) => {
  const { activeSection, homeRef, aboutRef, experienceRef, servicesRef, contactRef } = prop;

  return (
    <header className="w-full z-10 h-full flex justify-between fixed">
      <div className="font-black py-3 pl-5">SANJAY.</div>
      <Navbar activeSection={activeSection} homeRef={homeRef} aboutRef={aboutRef} experienceRef={experienceRef} servicesRef={servicesRef} contactRef={contactRef} />
    </header>
  );
};

Home.propTypes = {
  prop: PropTypes.shape({
    activeSection: PropTypes.string.isRequired,
    homeRef: PropTypes.object.isRequired,
    aboutRef: PropTypes.object.isRequired,
    experienceRef: PropTypes.object.isRequired,
    servicesRef: PropTypes.object.isRequired,
    contactRef: PropTypes.object.isRequired,
  }).isRequired,
}

export default Home