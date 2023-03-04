

import CartWidget from './CartWidget';
import './NavBar.css';
import { BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom';

function BasicExample() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex flex-column header">
            <div className="container-fluid d-flex justify-content-around nav-top">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link to="/" className="navbar-brand" href=''><img src='https://dewey.tailorbrands.com/production/brand_version_mockup_image/294/8173245294_560c45c2-21db-48fe-a853-e0118098f6b4.png?cb=1677792952' className='img-logo' /></Link>
                <div className='d-flex'>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2 d-none  d-lg-flex" type="search" placeholder="Buscar" aria-label="Search" />
                        <button className="btn btn-outline-success me-2" type="submit"><BsSearch /></button>
                    </form>
                    <CartWidget numero={0} />
                </div>

            </div>
            <div className='container-fluid d-flex nav-bot'>

                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-2 mb-lg-0 list-links">

                        <li className="nav-item dropdown">

                            <p className="nav-link dropdown-toggle link-item" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                PRODUCTOS
                            </p>
                            <ul className="dropdown-menu">
                                <li><Link to='/' className="dropdown-item">Catalogo de productos</Link></li>
                                <li><hr className='dropdown-divider' /></li>
                                <li><p className="dropdown-item">Atriles</p></li>
                                <li><p className="dropdown-item">Escritura</p></li>

                                <li><p className="dropdown-item">Lapices</p></li>
                            </ul>
                        </li>



                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle link-item" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                TECNICAS
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item">Acuarela</a></li>
                                <li><a className="dropdown-item">Oleo</a></li>

                                <li><a className="dropdown-item">Acrilico</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link link-item " aria-current="page" >NOVEDADES</Link>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link link-item">OFERTAS</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle link-item" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                MARCAS
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item">Eureka</a></li>
                                <li><a className="dropdown-item">Hutton</a></li>

                                <li><a className="dropdown-item">Newton</a></li>
                            </ul>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default BasicExample;


