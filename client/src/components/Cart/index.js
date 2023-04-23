function Cart({ onClose, onRemove, items = [] }) {
    return (
        <div className="cartShadow">
            <div className="cart">
                <div className="d-flex justify-between mb-30">
                    <h2>Cart</h2>
                    <img className="cu-p" onClick={onClose} src="img/btn-remove.svg" alt="Close" />
                </div>

                <div className="items">
                    {
                        items.map((item) => (
                            <div key={item.key} className="cartItem d-flex align-center mb-10">
                                <img className="mr-20" width={70} height={70} src='img/logo.png' alt="item" />
                                <div className="mr-20">
                                    <p className="mb-5">{item.name}</p>
                                    <b>{item.price}$</b>
                                </div>
                                <img onClick={ () => onRemove(item)} className="cartItemRemove" src="img/btn-remove.svg" alt="remove" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Cart;