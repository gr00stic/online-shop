import styles from './Card.module.scss'

function Card(props) {
    const onClickAdd = () => {
        alert(props.title);
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img width={11} height={11} src="img/heart.svg" alt="likeOff" />
            </div>
            <img width={133} height={112} src={props.imageUrl} />
            <p>{props.title}</p>
            <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column'>
                    <span>Price</span>
                    <b>{props.price} $</b>
                </div>
                <button className='button' onClick={onClickAdd}>
                    <img width={11} height={11} src='img/plus.svg' alt='Plus' />
                </button>
            </div>
        </div>
    );
}

export default Card;