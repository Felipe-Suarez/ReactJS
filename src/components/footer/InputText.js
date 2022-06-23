import './inputText.css';

const InputText = () => {
    return (
        <div className="input-text-container">
            <input className="input-text" placeholder="Email" required type="email"></input>
            <span className="input-border"></span>
        </div>
    )
}

export default InputText;