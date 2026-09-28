import { rebuilds } from '../data/rebuilds'
import FooterBottom from '../components/FooterBottom'

function GaragePage() {
  return (
    <>
      <main className="garage">
        <p className="garage-kicker">Collection</p>
        <h1>Garage</h1>
        <p className="garage-intro">
          The cars currently in the garage.
        </p>

        <div className="search-box">
        <img src="/images/searchicon.png" alt="search-icon" className="search-icon"/>
        <input type="search" placeholder="Search Cars" className="garage-search"/>
        </div>

        <div className="garage-filters">
           <button className="button is-active">All brands</button> 
           <button className="button is-active">Audi</button>
           <button className="button is-active">Aston Martin</button>
           <button className="button is-active">BMW</button>
           <button className="button is-active">Bugatti</button>
           <button className="button is-active">Ferrari</button>
           <button className="button is-active">Lamborghini</button>
           <button className="button is-active">McLaren</button>
           <button className="button is-active">Porsche</button>
           <button className="button is-active">Range Rover</button>
           <button className="button is-active">Rolls-Royce</button>
        </div>

        <ul className="garage-list">
          <li className="garage-card">
            <img src="/images/812.jpg" alt="f812" className="garage-card-image"/>
            <div className="garage-card-body">
              <div className="garage-card-meta">
                <span className="badge">Completed</span>
                <span className="damage">Wrecked</span>
              </div>
              <h2>Ferrari 812</h2>
              <p>2019 Ferrari 812</p>
            </div>
          </li>
        </ul>

      </main>
      
      <footer className="site-footer">
        <FooterBottom />
      </footer>
    </>
  )
}

export default GaragePage
