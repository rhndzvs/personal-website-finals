import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import 'boxicons/css/boxicons.min.css';

const Home = () => {
  useScrollReveal();

  return (
    <section className="home" id="home">
      <div className="home-content" data-scroll-reveal data-origin="left">
        <h3>Hello, It's Me</h3>
        <h1>Rhundei Zen</h1>
        <p>I'm a passionate IT student specializing in Mobile and Internet Technologies.
          I love creating beautiful and functional web experiences.</p>

        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-facebook'></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-twitter'></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-instagram-alt'></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-linkedin'></i>
          </a>
        </div>

        <Link to="/about" className="btn">More About Me</Link>
      </div>

      <div className="profession-container" data-scroll-reveal data-origin="right">
        <div className="profession-box">
          <div className="profession" style={{ '--i': 0 }}>
            <i className='bx bx-code-alt'></i>
            <h3>Web Developer</h3>
          </div>
          <div className="profession" style={{ '--i': 1 }}>
            <i className='bx bx-mobile-alt'></i>
            <h3>App Developer</h3>
          </div>
          <div className="profession" style={{ '--i': 2 }}>
            <i className='bx bx-palette'></i>
            <h3>Web Designer</h3>
          </div>
          <div className="profession" style={{ '--i': 3 }}>
            <i className='bx bx-camera'></i>
            <h3>Photographer</h3>
          </div>
          <div className="circle"></div>
        </div>
        <div className="overlay"></div>
      </div>
    </section>
  );
};

export default Home; 