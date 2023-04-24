import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header className='d-flex justify-between align-center p-40'>
            <Link to={'/'}>
                <div className='d-flex align-center'>
                    <img width={100} height={100} src='img/logo.png' />
                    <div>
                        <h3 className='text-uppercase'>Sho</h3>
                        <p>Vintage electronics</p>
                    </div>
                </div>
            </Link>
            <ul className='d-flex'>
                <li className='mr-20'>
                    <img className="cu-p" onClick={props.onClickCart} width={18} height={18} src='img/cart.svg' />
                    <span>500$</span>
                </li>
                <Link to={'/favorites'}>
                    <li>
                        <img className="cu-p mr-30 opacity-5" width={18} height={18} src='img/heart.svg' />
                    </li>
                </Link>
                <Link to={'/profile'}>
                    <li>
                        <img width={18} height={18} src='img/user.svg' />
                    </li>
                </Link>
            </ul>
        </header>
    );
}

export default Header;