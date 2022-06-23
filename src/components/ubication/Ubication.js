import './ubication.css';

const Ubication = () => {
    return (
        <div className='map-container'>
            <h1 className='map-title'>Encontranos en el salvador 5218, Buenos aires</h1>
            <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13138.862097483532!2d-58.4322726!3d-34.586064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe8a347bb55df550c!2sCoderhouse%20Argentina!5e0!3m2!1ses!2sar!4v1655765614319!5m2!1ses!2sar" allowfullscreen="" title='mapa' loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default Ubication;