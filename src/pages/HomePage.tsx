import { Link } from 'react-router-dom'
import { FaInstagram, FaGithub } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import FooterBottom from '../components/FooterBottom'

function HomePage() {
  return (
    <>
      <section className="home">
        <div className="home-background" />
        <div className="home-contraste" />
        <div className="home-content">
          <h1>
            <span>MA</span> Reworks
          </h1>
          <p className="headline">Wrecked. Rebuilt. Reborn.</p>
          <p className="description">
            Follow every phase of car rebuild projects — from salvage auction to
            the open road. No long videos, just clear progress.
          </p>
          <Link to="/project" className="explore-button">
            Explore Projects
            <span className="arrow">→</span>
          </Link>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About</h2>
        <p className="about-tagline">
          A project where <span>code</span> meets cars.
        </p>
      </section>

      <section className="about-bio">
        <div className="about-text">
          <div className="about-copy">
            <p>
              I'm a Computer Engineering student finishing my degree, with a
              passion for cars and building things from the ground up.
            </p>
          </div>
          <div className="about-copy2">
            <p>
              MA Reworks started as a personal project inspired by Mat Armstrong's
              car rebuilds. I wanted to create a place where each build could be
              experienced without restrictions — documenting the damage, the
              decisions, the repairs and the transformation and all the details about the cars.
            </p>
          </div>
          <div className="about-highlight">
            <p>Built as a university project.</p>
            <p>Driven by curiosity.</p>
            <p>Inspired by the rebuild.</p>
          </div>
        </div>
        <img
          className="about-photo"
          src="/images/workstation.png"
          alt="Imagem de ambiente de trabalho"
        />
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <p className="footer-title">
              <span>MA</span> Reworks
            </p>
            <p className="footer-tag">BUILDS / POWER / STORIES </p>
          </div>

          <div className="footer-nav">
            <p className="footer-heading">Navigation</p>
            <Link to="/" className="footer-link">
              Home
            </Link>
            <Link to="/garage" className="footer-link">
              Garage
            </Link>
            <Link to="/museum" className="footer-link">
              Museum
            </Link>
            <Link to="/project" className="footer-link">
              Projects
            </Link>
          </div>

          <div className="footer-connect">
            <p className="footer-heading">Connect</p>
            <a
              href="https://www.instagram.com/ruiii.sousa/"
              className="footer-connect-link"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram aria-hidden="true" />
              <span>Instagram</span>
            </a>
            <a
              href="https://github.com/Ruiii-wdev"
              className="footer-connect-link"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub aria-hidden="true" />
              <span>GitHub</span>
            </a>
            <a href="mailto:ruisousa.wdev@gmail.com" className="footer-connect-link">
              <FiMail aria-hidden="true" />
              <span>Email</span>
            </a>
          </div>

          <p className="footer-quote">
            "If it was built by a man it can be repaired by a man."
          </p>
        </div>
        
        <FooterBottom />
      </footer>
    </>
  )
}

export default HomePage
