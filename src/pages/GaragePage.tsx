import { useState, type CSSProperties } from 'react'
import { garageCars } from '../data/garage'
import FooterBottom from '../components/FooterBottom'

const brands = [
  'Audi',
  'Aston Martin',
  'BMW',
  'Bugatti',
  'Ferrari',
  'Lamborghini',
  'McLaren',
  'Porsche',
  'Range Rover',
  'Rolls-Royce',
]

function GaragePage() {
  const [brand, setBrand] = useState('all')

  const visibleCars =
    brand === 'all'
      ? garageCars
      : garageCars.filter((car) => car.brand === brand)

  return (
    <>
      <main className="garage">
        <p className="garage-kicker garage-enter">Collection</p>
        <h1 className="garage-enter garage-enter-title">Garage</h1>
        <p className="garage-intro garage-enter garage-enter-intro">
          The cars currently in the garage.
        </p>

        <div className="search-box garage-enter garage-enter-search">
          <img
            src="/images/searchicon.png"
            alt=""
            className="search-icon"
          />
          <input
            type="search"
            placeholder="Search Cars"
            className="garage-search"
          />
        </div>

        <div className="garage-filters garage-enter garage-enter-filters">
          <button
            type="button"
            className={brand === 'all' ? 'button is-active' : 'button'}
            onClick={() => setBrand('all')}
          >
            All brands
          </button>
          {brands.map((name) => (
            <button
              key={name}
              type="button"
              className={brand === name ? 'button is-active' : 'button'}
              onClick={() => setBrand(name)}
            >
              {name}
            </button>
          ))}
        </div>

        <ul className="garage-list">
          {visibleCars.map((car, index) => (
            <li
              key={car.id}
              className="garage-card garage-enter"
              style={{ animationDelay: `${0.45 + index * 0.12}s` }}
            >
              <div className="garage-card-media">
                <img
                  src={car.image}
                  alt={car.title}
                  className="garage-card-image"
                  style={
                    {
                      objectPosition: car.imagePosition,
                      '--image-zoom': String(car.imageZoom ?? 1),
                    } as CSSProperties
                  }
                />
              </div>
              <div className="garage-card-body">
                <div className="garage-card-meta">
                  <span className="badge">{car.status}</span>
                  <span className="damage">{car.damage}</span>
                </div>
                <h2>{car.title}</h2>
                <p>{car.subtitle}</p>
              </div>
            </li>
          ))}
        </ul>
      </main>

      <footer className="site-footer">
        <FooterBottom />
      </footer>
    </>
  )
}

export default GaragePage
