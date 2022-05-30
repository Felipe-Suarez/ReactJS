import CartWidget from './CartWidget';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='nav-container'>
            <Link className='nav-title' to='/'><h1>Ecommerce</h1></Link>
            <ul className='nav-list'>
                <li className='nav-item'><Link to='/category/1' >Seccion 1</Link></li>
                <li className='nav-item'><Link to='/category/2' >Seccion 2</Link></li>
                <li className='nav-item'><Link to='/sobreDe' >Sobre de</Link></li>
                <li className='nav-item'><Link to='/ubicacion' >Ubicacion</Link></li>
            </ul>
            <CartWidget />
        </nav>
    );
}

export default Navbar;