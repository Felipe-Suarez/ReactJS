import CartWidget from './CartWidget';
import './navbar.css';
import { Link } from 'react-router-dom';
import './mediaQuerys.css'
import { CgMenuRound } from 'react-icons/cg'

const darkMode = () => {
    document.body.classList.toggle('dark');
}

const menu = (e) => {
    let menu = e.target.previousElementSibling;
    menu.classList.toggle('show');
    if (menu.classList.contains('show')) {
        document.body.style = 'overflow: hidden'

    } else {
        document.body.style = 'overflow: unset'
    }
}

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
                <li><Link className='nav-item' to='/about' >Sobre de</Link></li>
                <li><Link className='nav-item' to='/ubication' >Ubicacion</Link></li>
            </ul>
            <span onClick={(e) => menu(e)} className='nav-menu-btn'><CgMenuRound className='nav-menu-icon' /></span>
            <label className="switch">
                <input onClick={darkMode} type="checkbox"></input>
                <span className="slider"></span>
            </label>
            <CartWidget />
        </nav >
    );
}

export default Navbar;