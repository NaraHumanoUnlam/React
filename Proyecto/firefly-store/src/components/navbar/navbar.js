import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../cartwidget';
const navbar = ({src}) => (
    <div><nav className="navbar navbar-expand-lg navbar-yellow-300 bg-ligh">
        <div className="container-fluid ">
            <Link className="navbar-brand" to='/'><img alt='FireFly' width='50' height='50' src={src}/>FireFly</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="true" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav mx-auto" >
                    <li className="nav-item">
                        <Link className="nav-link active"  to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/contact'>Contacto</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/catalog'>Catalogo</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to='/catalog' role="button" data-bs-toggle="dropdown" aria-expanded="true">
                           Categorias
                        </Link>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to='/catalog'>Aceite</Link></li>
                            <li><Link className="dropdown-item" to='/catalog'>Shampo</Link></li>
                            <li><Link className="dropdown-item" to='/catalog'>Acondicionador</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    <CartWidget/>
    </nav>
    </div>
)

export default navbar