function Header(props) {
    return (
        <header className='d-flex justify-between align-center p-40'>
            <div className='d-flex align-center'>
                <img width={100} height={100} src='img/logo.png' />
                <div>
                    <h3 className='text-uppercase'>Sho p</h3>
                    <p>Vintage electronics</p>
                </div>
            </div>
            <ul className='d-flex'>
                <li className='mr-15'>
                    <img className="cu-p" onClick={props.onClickCart} width={18} height={18} src='img/cart.svg' />
                    <span>500$</span>
                </li>
                <li>
                    <img width={18} height={18} src='img/user.svg' />
                </li>
            </ul>
        </header>
    );
}

export default Header;