import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../cartwidget';
const navbar = ({src}) => (
    <div><nav className="navbar-expand-lg  bg-ligh navbar nav-bar ">
    
        <div className="container-fluid ">
            <Link className="navbar-brand text-primary" to='/'><img alt='FireFly' width='50' height='50' src={src}/>FireFly</Link>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="true" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <CartWidget/>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav mx-auto" >
                    <li className="nav-item">
                        <Link className="nav-link text-primary"  to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-primary" to='/contact'>Contacto</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-primary" to='/catalog'>Catalogo</Link>
                    </li>
                    <li className="nav-item text-primary dropdown">
                        <Link className="nav-link dropdown-toggle text-primary" to='/catalog' role="button" data-bs-toggle="dropdown" aria-expanded="true">
                           Categorias
                        </Link>
                        <ul className="dropdown-menu z-idex-1">
                            <li><Link className="dropdown-item text-primary bg-light" to='/catalog'>Aceite</Link></li>
                            <li><Link className="dropdown-item text-primary bg-light" to='/catalog'>Shampo</Link></li>
                            <li><Link className="dropdown-item text-primary bg-light" to='/catalog'>Acondicionador</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
)

export default navbar