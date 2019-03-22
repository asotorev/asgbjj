import React from 'react';
import styles from './styles/Footer.module.css';

const footer = (props) => (
    <footer className={[styles.footer, styles.topMargin].join('')}>
        <nav className={[styles.navFooter, styles.banner].join(' ')}>
            <a href="#library">Privacy Policy</a>
            <a href="#blog">Help and Advise</a>
            <a href="#calendar">Terms and Conditions</a>
            <a href="#forum">Contact</a>
        </nav>
        <img className={styles.logo} src="assets/logo.svg" alt="Logo"/>
        <p>Follow us on social media</p>
        <div className={styles.iconContainer}>
            <img src="/assets/twitter.svg" alt="Twitter" className={styles.icons}/>
            <img src="/assets/youtube.svg" alt="Youtube" className={styles.icons}/>
            <img src="/assets/facebook.svg" alt="Facebook" className={styles.icons}/>
            <img src="/assets/instagram.svg" alt="Instagram"className={styles.icons}/>
        </div>
    </footer>
);

export default footer;