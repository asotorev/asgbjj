import React from 'react';
import styles from './styles/Hero.module.css';

const hero = (props) => (
    <div className={styles.heroImg}>
        <div>
            <p className={styles.learnTag}>Learn Brazilian Jiujitsu now, <br/> you set the TIME and PLACE </p>
        </div>
        <button type="button" className={styles.learnBtn}>Join now, it's free!</button>
        <video muted autoPlay loop className={styles.learnVideo} >
            <source src="/assets/video.mp4" type="video/mp4"/>
        </video>        
    </div>
);

export default hero;