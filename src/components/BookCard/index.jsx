import React from "react";
import styles from './bookCard.module.css';

const BookCard = ({book}) => {
  const cardStyles = book.isSoldOut ? `${styles.cardWrapper} ${styles.notAvailable}` : styles.cardWrapper;

  return (
    <div className={cardStyles}>
      {book.isSoldOut && <div className={styles.stockText}>Out of Stock</div>}
      <img src={book.image} alt={book.title} className={styles.cardImgTop} width="100%"/>
      <h5 className={styles.cardTitle}>{book.title}</h5>
      <p className={styles.cardAuthor}>{book.author}</p>
      <div className={styles.starRating}>
        <img src="/assets/img/Star.svg" alt="star" className={styles.cardImgReview}/>
        <span className={styles.starRatingComponent}>{book.rating}</span>
      </div>
      <div className={styles.priceWrap}>
        <p className={styles.cardPrice}>${book.price}</p>
        <img src="/assets/img/Vector.svg" alt="cart" className={styles.cardImgBasket}/>
      </div>
    </div>
  );
};

export default BookCard;