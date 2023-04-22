import { useState } from 'react';
import styles from './Card.module.scss'

function Card({title, imageUrl, favorite, price, onPlus}) {
    const [isAdded, setIsAdded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    const handleClickFavorite = () => {
        setIsFavorite(!isFavorite);
    }

    const handleCLickPlus = () => {
        onPlus({title, imageUrl, price});
        setIsAdded(!isAdded);
    }

    // console.log(isAdded);

    return (
        <div className={styles.card}>
            <div>
                <img className={styles.favorite} onClick={handleClickFavorite} src={isFavorite ? 'img/like-on.svg' : 'img/like-off.svg'} alt="likeOff" />
            </div>
            <img width={133} height={112} src={imageUrl} />
            <p>{title}</p>
            <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column'>
                    <span>Price</span>
                    <b>{price} $</b>
                </div>
                <img className={styles.plus} onClick={handleCLickPlus} src={isAdded ? 'img/btn-checked.svg' : 'img/btn-unchecked.svg'} alt='Plus' />
            </div>
        </div>
    );
}

export default Card;