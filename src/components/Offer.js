import React from 'react';
import styles from './styles/Offer.module.css';

const offer = (props) => (
    <div className={[styles.banner, styles.style2].join(' ')}>
        <span>* BLACK FRIDAY *  The best time of the year to get a pro membership</span>
        <p className={styles.placeRight}><span>$300</span> Will end in 14D 5H 32M 18S</p>
    </div>
);

export default offer;