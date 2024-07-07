import Navbar from '../components/Nav'
import PropTypes from 'prop-types';

const Home = ({ prop }) => {
  const { homeRef, aboutRef, experienceRef, servicesRef, contactRef } = prop;

  return (
    <header className="h-full flex justify-between">
      <div className="font-black py-3 pl-5">SANJAY.</div>
      <Navbar homeRef={homeRef} aboutRef={aboutRef} experienceRef={experienceRef} servicesRef={servicesRef} contactRef={contactRef} />
    </header>
  );
};

Home.propTypes = {
  prop: PropTypes.shape({
    homeRef: PropTypes.object.isRequired,
    aboutRef: PropTypes.object.isRequired,
    experienceRef: PropTypes.object.isRequired,
    servicesRef: PropTypes.object.isRequired,
    contactRef: PropTypes.object.isRequired,
  }).isRequired,
}

export default Home