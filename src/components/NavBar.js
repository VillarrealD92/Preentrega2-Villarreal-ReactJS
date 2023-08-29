import React from 'react';
import CartWidget from './CartWidget';
import logo from '../assets/logo.png';



function NavBar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark text-light">
        <div className="container d-flex justify-content-between align-items-center"> 
          <a className="navbar-brand" href="/">
            <div className='d-flex align-items-center'>
                <img src={logo} alt="Logo_MundoCan" className='logoprincipal mx-2' />
                <h2 className='text-light ml-2'>MundoCan</h2>
            </div>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto ">
              <li className="nav-item">
                <a className="nav-link text-center " href="/#"> 
                  <i className="bi bi-cone-striped d-block"></i> Adiestramiento
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-center" href="/#">
                  <i className="bi bi-house-heart d-block"></i> Guarderias
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-center" href="/#">
                  <i className="bi bi-person-heart d-block"></i> Paseos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-center" href="/#">
                  <i className="bi bi-airplane d-block"></i> Traslados
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-center" href="/#">
                  <i className="bi bi-heart-pulse d-block"></i> Veterinarias
                </a>
              </li>
            </ul>
          </div>
          <CartWidget />
        </div>
      </nav>
    );
  }
  export default NavBar;