import React from 'react'
import '../index.scss';
import img1 from './copy.jpeg'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light ">   { /*  bg-light */}
                            <div className="container-fluid">
                                <NavLink to='/' className="navbar-brand" >
                                    <img className='imga' alt='...' src={img1} />
                                    <strong> UBrain PVT.LTD</strong>
                                </NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav navbar-collapse justify-content-end me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink className={({ isActive }) => (isActive ? 'menu_active' : 'nav-link active')} to='/' aria-current="page" >Home</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink className={({ isActive }) => (isActive ? 'menu_active' : 'nav-link active')} to='/service'>Services</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink className={({ isActive }) => (isActive ? 'menu_active' : 'nav-link active')} to='/about'>About</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink className={({ isActive }) => (isActive ? 'menu_active' : 'nav-link active')} to='/contact'>Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar