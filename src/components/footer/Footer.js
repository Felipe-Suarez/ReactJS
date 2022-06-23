import './footer.css';
import { AiFillYoutube, AiFillInstagram } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import BtnSend from './BtnSend';
import InputText from './InputText';

const Footer = () => {
    return (
        <div className="footer">
            <div className='footer-container'>
                <div className='footer-social-container'>
                    <h4 className='footer-subtitle'>Seguinos en nuestras redes!</h4>
                    <ul className='footer-list'>
                        <li>
                            <a className='social-link' href='https://www.youtube.com/' target='_blank'><AiFillYoutube className='social-icon' /></a>
                        </li>
                        <li>
                            <a className='social-link' href='https://www.instagram.com/?hl=es' target='_blank'><AiFillInstagram className='social-icon' /></a>
                        </li>
                        <li>
                            <a className='social-link' href='https://www.facebook.com/' target='_blank'><FaFacebookF className='social-icon' /></a>
                        </li>
                    </ul>
                </div>
                <div className='footer-mail-container'>
                    <h4 className='footer-subtitle'>Recivi todas nuestras promociones!</h4>
                    <form className='footer-mail'>
                        <GrMail className='mail-icon' />
                        <InputText />
                        <BtnSend />
                    </form>
                </div>
            </div>
            <hr style={{ width: '80vw' }} />
            <span className='footer-copy'>COPYRIGHT 2022 - Todos los derechos reservados</span>
        </div>
    )
}

export default Footer;