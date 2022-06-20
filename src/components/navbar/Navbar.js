import CartWidget from './CartWidget';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='nav-container'>
            <Link to='/' className="nav-title">
                <span className="actual-text">&nbsp;UProtein&nbsp;</span>
                <span className="hover-text" aria-hidden="true">&nbsp;UProtein&nbsp;</span>
            </Link>
            <ul className='nav-list'>
                <li><Link className='nav-item' to='/category/1' >Proteinas</Link></li>
                <li><Link className='nav-item' to='/category/2' >Creatinas</Link></li>
                <li><Link className='nav-item' to='/sobreDe' >Sobre de</Link></li>
                <li><Link className='nav-item' to='/ubicacion' >Ubicacion</Link></li>
            </ul>
            <CartWidget />
        </nav>
    );
}

export default Navbar;