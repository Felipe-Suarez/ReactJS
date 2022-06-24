import CartWidget from './CartWidget';
import './navbar.css';
import { Link } from 'react-router-dom';
import './mediaQuerys.css'
import { CgMenuRound } from 'react-icons/cg'

//modo oscuro
const darkMode = () => {
    document.body.classList.toggle('dark');
}

//menu responsive btn
const menu = (e) => {

    //muestra el menu
    if (e.target.className === 'nav-menu-btn') {
        let menuList = e.target.nextElementSibling;
        menuList.classList.toggle('show');
        if (menuList.classList.contains('show')) {
            document.body.style = 'overflow: hidden';
        } else {
            document.body.style = 'overflow: none';
        }

        //saca el menu
    } else {
        document.querySelector('.nav-list').classList.remove('show');
        document.body.style = 'overflow: none';
    }
}

const Navbar = () => {
    return (
        <nav onClick={(e) => { menu(e) }} className='nav-container'>
            <Link to='/' className="nav-title">
                <span className="actual-text">&nbsp;UProtein&nbsp;</span>
                <span className="hover-text" aria-hidden="true">&nbsp;UProtein&nbsp;</span>
            </Link>
            <span className='nav-menu-btn'><CgMenuRound className='nav-menu-icon' /></span>
            <ul className='nav-list'>
                <li><Link className='nav-item' to='/category/1' >Proteinas</Link></li>
                <li><Link className='nav-item' to='/category/2' >Creatinas</Link></li>
                <li><Link className='nav-item' to='/about' >Sobre de</Link></li>
                <li><Link className='nav-item' to='/ubication' >Ubicacion</Link></li>
            </ul>
            <label className="switch">
                <input onClick={darkMode} type="checkbox"></input>
                <span className="slider"></span>
            </label>
            <CartWidget />
        </nav >
    );
}

export default Navbar;