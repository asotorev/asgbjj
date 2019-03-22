import React from 'react';
import styles from './styles/Hero.module.css';

const hero = (props) => (
    <div className={styles.heroImg}>
        <div>
            <p className={styles.learnTag}>Brazilian Jiujitsu online, <br/> anytime, anywhere </p>
        </div>
        <video muted autoPlay loop className={styles.learnVideo} >
            <source src="/assets/video.mp4" type="video/mp4"/>
        </video>        
        <button type="button" className={styles.learnBtn}>Join now, it's free!</button>
    </div>
);

export default hero;