import './about.css';
import './mediaQuerys.css'

import img from '../../assets/imgs/local.jpg'

const About = () => {
    return (
        <div className='about'>
            <div className='about-img-container'>
                <img className='about-img' alt='local' src={img} />
            </div>
            <div className='about-info'>
                <h1 className='about-title'>Sobre nosotros</h1>
                <p className='about-text'>Quienes somos
                    Somos una empresa nacional con más de 60 años de trayectoria en el mercado de suplementos, comprometida en brindar a través de nuestros colaboradores la mas alta calidad en atención y servicio. Contamos en nuestros mostradores con un alto nivel de idoneidad y profesionalismo, stock permanente de suplementos en cada una de nuestras sucursales, teniendo como eje conductor brindar soluciones a las necesidades de nuestros clientes.<br /><br />
                    Hoy nos unimos estratégicamente a UProtein, el más importante sitio de venta online en el mercado de suplementos deportivos, para seguir ofreciéndote la mejor experiencia de compra tanto en nuestras tiendas como en el canal Online.</p>
            </div>
        </div>
    )
}

export default About;