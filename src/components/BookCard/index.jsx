import React from "react";
import styles from './bookCard.module.css'

const BookCard= ({ book }) => {
    return (
        <div className={styles.cardWrapper}>
            <img src={book.image} alt={book.title} className="cardImgTop" />
                <h5 className={styles.cardTitle}>{book.title}</h5>
                <p className={styles.cardAuthor}>{book.author}</p>
                <div className={styles.starRating}>
                    <img src="/assets/img/Star.svg" alt="star" className={styles.cardImgReview} />
                    <span className={styles.starRatingComponent}>4</span>
                </div>
                <div className={styles.priceWrap}>
                    <p className={styles.cardPrice}>${book.price}</p>
                    <img src="/assets/img/Vector.svg" alt="cart" className={styles.cardImgBasket} />
                </div>
        </div>
    );
};



export default BookCard;