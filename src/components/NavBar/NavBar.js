

import CartWidget from './CartWidget';
import './NavBar.css';
import { BsSearch } from "react-icons/bs";

function BasicExample() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex flex-column header">
            <div className="container-fluid d-flex justify-content-around nav-top">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">Logo</a>
                <div className='d-flex'>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2 d-none  d-lg-flex" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success me-2" type="submit"><BsSearch /></button>
                    </form>
                    <CartWidget numero={0} />
                </div>

            </div>
            <div className='container-fluid d-flex nav-bot'>

                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-2 mb-lg-0 list-links">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle link-item" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Productos
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Atriles</a></li>
                                <li><a className="dropdown-item" href="#">Escritura</a></li>

                                <li><a className="dropdown-item" href="#">Lapices</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle link-item" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Tecnicas
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Acuarela</a></li>
                                <li><a className="dropdown-item" href="#">Oleo</a></li>

                                <li><a className="dropdown-item" href="#">Acrilico</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link-item " aria-current="page" href="#">Novedades</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link link-item" href="#">Ofertas</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle link-item" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Marcas
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Eureka</a></li>
                                <li><a className="dropdown-item" href="#">Hutton</a></li>

                                <li><a className="dropdown-item" href="#">Newton</a></li>
                            </ul>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default BasicExample;


