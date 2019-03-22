import React from 'react';
import styles from './styles/Header.module.css';

const header = (props) => (
        <header className={[styles.banner, styles.style1].join(' ')}>        
            <img className={styles.logo} src="/assets/logo.svg" alt="Logo"/>
            <nav className={styles.placeRight}>    
                <a href="#library">Library</a>
                <a href="#blog">Blog</a>
                <a href="#calendar">Calendar</a>
                <a href="#forum">Forum</a>
                <a href="#login">Log In</a>
                <a href="#signup">Sign Up</a>
            </nav>
        </header>
);

export default header;