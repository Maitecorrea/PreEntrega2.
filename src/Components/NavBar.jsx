import opencart from '../opencart.png'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (<>
        <header class="header_area">
            <div class="main_menu">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container ">
                        <Link to='/' className=""><div className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                            <img src={opencart} className='mx-4' alt="" width={400} height={60} />
                        </div></Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <div class="collapse navbar-collapse offset d-flex flex-wrap align-items-center justify-content-center justify-content-md-between" id="navbarSupportedContent">
                            <ul class="nav navbar-nav menu_nav ml-auto mr-auto align-center">
                                <li className="px-4 nav-item">
                                    <Link to='/' className=" nav-link">Inicio</Link>
                                </li>
                                <li class="nav-item submenu dropdown">
                                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                                        aria-expanded="false">Categorías De Compra</a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <Link to='/category/decor' className="nav-link">Decoración</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to='/category/entertainment' className="nav-link">Entretenimiento</Link>
                                        </li>                                        
                                        <li class="nav-item">
                                            <Link to='/category/video-games' className="nav-link">Video Juegos</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to='/category/tecnology' className="nav-link">Tecnología</Link>
                                        </li>                                
                                    </ul>
                                </li>
                            </ul>

                            <ul class="nav-shop">
                                <Link to='/shop/:id' className="button dark-single">
                                    <div >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                        </svg> Compra Ahora!
                                    </div>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        {/* <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <Link to='/' className=""><div className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <img src={opencart} className='mx-4' alt="" width={60} height={60} />
            </div></Link>

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 ">
                <li className="px-4">
                    <Link to='/' className="nav-link px-2 link-dark">Home</Link>
                </li>
                <li className="px-4">
                    <Link to='/' className="nav-link px-2 link-dark">Catálogo</Link>
                </li>
                <li className="px-4">
                    <Link to='/category/Play-game' className="nav-link px-2 link-dark">Category Decoration</Link>
                </li>
                <li className="px-4">
                    <Link to='/item/:id' className="nav-link px-2 link-dark">Detalles</Link>
                </li>
                <li class="nav-item submenu dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                        aria-expanded="false">Pages</a>
                    <ul class="dropdown-menu">
                        <li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>
                        <li class="nav-item"><a class="nav-link" href="register.html">Register</a></li>
                        <li class="nav-item"><a class="nav-link" href="tracking-order.html">Tracking</a></li>
                    </ul>
                </li>

            </ul>

            <div className="col-md-3 text-end px-4">
                <Link to='/shop/:id' className="button dark-single">
                    <div >
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                        </svg> Compra Ahora!
                    </div>
                </Link>
            </div>
        </header> */}
    </>);
}

export default NavBar;