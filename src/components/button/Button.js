// import classNames from 'classnames';
import '../button/Button.css';

const Button = ({ name, symbol, handleClick }) => {
    return (
        <>
            <button
                className={name}
                onClick={handleClick}
            >{symbol}</button>
        </>
    )
};

export default Button;