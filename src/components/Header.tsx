import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="site-title">
        <span>MA</span> Reworks
      </Link>
      <nav className="site-nav">
        <NavLink to="/garage">Garage</NavLink>
        <NavLink to="/museum">Museum</NavLink>
        <NavLink to="/project">Projects</NavLink>
        <NavLink to="/forum">Forum</NavLink>
        <Link
          to="/#about"
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          About
        </Link>
      </nav>
      <div className="site-auth">
      <Link to="/login" className="auth-login">LogIn</Link>
      <Link to="/register" className="auth-register">Register</Link>
      </div>
    </header>
  )
}

export default Header
