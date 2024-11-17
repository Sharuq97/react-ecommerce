import React, {useState} from 'react'
import Header from "./Header"

import "./styles.css"
import ProductCard from './ProductCard'

export default function App() {

  const handleNavButtonClick = () => {
    if (isNavbarOpened){
      setNavBarOpen(false)
    } else {
      setNavBarOpen(true);
    }
  }

  const [isNavbarOpened, setNavBarOpen] = useState(false);

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">E-Shop</a>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleNavButtonClick}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavbarOpened? "show" : "" }`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <Header title="AURA Designs"/>

    <main className="container my-5">
      <h2 className="text-center mb-4">Featured Products</h2>
      <div className="row">
        <div className="col-md-3 mb-4">
          <ProductCard 
            imageUrl="src/images/DarkBlueBlouse1.jpg"
            productName="NavyBlue Blouse"
            price="$50"
          />
        </div>
        <div className="col-md-3 mb-4">
          <ProductCard
            imageUrl="src/images/PinkBlouse1.jpg"
            productName="Pink Blouse with Aari designs"
            price="$60"
          />
        </div>
        <div className="col-md-3 mb-4">
          <ProductCard
            imageUrl="src/images/GreenBlouse1.jpg"
            productName="Green Blouse with peach"
            price="$40"
          />
        </div>
        <div className="col-md-3 mb-4">
          <ProductCard
            imageUrl="src/images/PurpleBlouse1.jpg"
            productName="Purple Blouse with stones"
            price="$45.50"
            />
        </div>
      </div>
    </main>

    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p>&copy; 2023 E-Shop. All rights reserved.</p>
      </div>
    </footer>
    </>
  )
}