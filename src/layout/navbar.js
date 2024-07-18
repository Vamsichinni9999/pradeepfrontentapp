import React from 'react';

function Navbar() {
  const Mystyle={
    position:'block',
     
    
  }
  return (
    <div style={Mystyle}>
    <nav   className="navbar navbar-expand-lg bg-warning p-2 m-1 rounded-3  ">
      <div className="container-fluid ">
        <a className="navbar-brand "  href="www.facebook.com"><img className='img img-cover rounded' src='https://th.bing.com/th/id/OIP.a9D49yunB3aSNAu62ZmE2gHaHa?rs=1&pid=ImgDetMain' alt='icon' height={50} width={60}></img></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">

            <li className="nav-item ">
              <a className="nav-link active text-dark " aria-current="page" href="www.instagram.com">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="www.google.com">ABOUT</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-dark " href="www.instagram.com" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                SERVICES
              </a>
              <ul className="dropdown-menu P-3">
                <li><a className="dropdown-item" href="www.instagram.com">Free home delivery</a></li>
                <li><a className="dropdown-item" href="www.instagram.com"> Online payment</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="www.instagram.com">SECURITY</a></li>
              </ul>
            </li>
            <li>
              <h1 className='px-5 mx-5'>FoodCourt...<img className='rounded-5' src='https://th.bing.com/th/id/OIP.vMlrX006h_x3ZQ9rmRupRwHaHa?w=512&h=512&rs=1&pid=ImgDetMain' height={50} width={60} alt='image'></img></h1>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-dark" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;