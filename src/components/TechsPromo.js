import React from 'react';
import styles from './styles/TechsPromo.module.css';

const techsPromo = (props) => (
    <div className={[styles.hundredTech, styles.topMargin].join(' ')}>
        <img src="/assets/footer.png" alt="Footer" className={styles.images}/>
        <p className={styles.technique}>ARMBARS</p>
        <p className={styles.otherTechniques}> and hundreds of other techniques</p>
        <button type="button" className={styles.joinBtn}>Join now, it's free!</button>
    </div>
);

export default techsPromo;
