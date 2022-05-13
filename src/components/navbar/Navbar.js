import CartWidget from './CartWidget';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className='nav-container'>
            <h1 className='nav-title'>Ecommerce</h1>
            <ul className='nav-list'>
                <li className='nav-item'><a href='/#' >Seccion 1</a></li>
                <li className='nav-item'><a href='/#' >Seccion 2</a></li>
                <li className='nav-item'><a href='/#' >Sobre de</a></li>
                <li className='nav-item'><a href='/#' >Ubicacion</a></li>
            </ul>
            <CartWidget></CartWidget>
        </nav>
    );
}

export default Navbar;